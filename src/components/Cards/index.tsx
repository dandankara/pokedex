import React, { useEffect, useState } from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import * as S from "./styles";

import dots from "../../assets/img/dots.png";
import PokeBall from "../../assets/img/pokeballCard.png";
import FadeAnimation from "../FadeAnimation";

export type PokemonTypes = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  console.log(data);
  return (
    <S.ContainerCard species={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageBgCard source={dots} />

        <S.PokemonTypeContent>
          {data.types.map((pokemonType) => (
            <S.PokemonType species={pokemonType.type.name}>
              <S.PokemonTypeText key={pokemonType.type.name}>
                {pokemonType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonTypeContent>
      </S.LeftSide>
      <S.RightSide>
        <S.PokeBallDetail source={PokeBall} />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FadeAnimation>
            <S.PokemonImage
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
              }}
            />
          </FadeAnimation>
        )}
      </S.RightSide>
    </S.ContainerCard>
  );
}
