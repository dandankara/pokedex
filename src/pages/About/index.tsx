import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import api from "../../service/api";
import { useTheme } from "styled-components";

type RouteParams = {
  pokemonId: number;
};

type Stats = {
  base_stat: 62;
  stat: {
    name: string;
  };
};

type Abilities = {
  ability: {
    name: string;
  };
};

type TypeName =
  | "grass"
  | "fire"
  | "water"
  | "poison"
  | "normal"
  | "bug"
  | "flying"
  | "eletric"
  | "ground";

type TypePokemon = {
  type: {
    name: TypeName;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  stats: Stats[];
  abilities: Abilities[];
  color: string;
  types: TypePokemon[];
};

export default function About() {
  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`);
        // some more infos in each pokemom
        const { stats, abilities, id, name, types } = response.data;
        const actualType = types[0].type.name as TypeName;
        const color = colors.backgroundCard[actualType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color:
        });
      } catch (err) {
        console.log(err);
      }
    }
    getPokemonDetails();
  }, []);

  return (
    <>
    {/* MAKE HEADER */}
      <Text>{pokemonId}</Text>
    </>
  );
}
