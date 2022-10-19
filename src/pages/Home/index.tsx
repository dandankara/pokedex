import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Card } from "../../components/Cards";
import api from "../../service/api";
import * as S from "./styles";

interface PokemonTypeProps {
  type: string;
}

interface PokemonProps {
  name: string;
  url: string;
  id: number;
  types: PokemonTypeProps[];
}

interface RequestProps {
  id?: number;
  types?: PokemonTypeProps[];
}

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  useEffect(() => {
    async function allGetPokemons() {
      const response = await api.get("pokemon");
      const { results } = response.data;

      const pokemonPayload = await Promise.all(
        results.map(async (pokemon: PokemonProps) => {
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
        renderItem={({ item: pokemon }) => <Card data={pokemon} />}
      />
    </S.Container>
  );
}
