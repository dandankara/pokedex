import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Card, PokemonTypes, Pokemon } from "../../components/Cards";
import FadeAnimation from "../../components/FadeAnimation";
import api from "../../service/api";
import * as S from "./styles";

interface RequestProps {
  id?: number;
  types?: PokemonTypes[];
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <FadeAnimation>
            <Card data={pokemon} />
          </FadeAnimation>
        )}
      />
    </S.Container>
  );
}
