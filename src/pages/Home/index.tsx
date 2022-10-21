import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { Card, PokemonTypes, Pokemon } from "../../components/Cards";
import api from "../../service/api";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

import PokeballBackground from "../../assets/img/pokeball.png";

interface RequestProps {
  id?: number;
  types?: PokemonTypes[];
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function handleNavigation(pokemonId: number) {
    const { navigate } = useNavigation();

    navigate("About", {
      pokemonId,
    });
  }

  useEffect(() => {
    async function allGetPokemons() {
      const response = await api.get("pokemon");
      const { results } = response.data;

      const pokemonPayload = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfoPokemom(pokemon.url);
          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(pokemonPayload);
    }
    allGetPokemons();
  }, []);

  async function getMoreInfoPokemom(url: string): Promise<RequestProps> {
    const responseMoreInfo = await api.get(url);
    const { id, types } = responseMoreInfo.data;

    return { id, types };
  }
  return (
    <S.Container>
      <StatusBar barStyle="dark-content" />
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={PokeballBackground}></S.Header>
            <S.TitleHeader>Pokédex</S.TitleHeader>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card
            data={pokemon}
            onPress={() => {
              handleNavigation(pokemon.id);
            }}
          />
        )}
      />
    </S.Container>
  );
}
