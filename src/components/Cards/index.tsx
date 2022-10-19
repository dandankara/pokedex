import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

import dots from "../../assets/img/dots.png";

type PokemonTypes = {
  type: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonTypes[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
  return (
    <S.ContainerCard species={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageBgCard source={dots} />

        <S.PokemonTypeContent>
          {data.types.map((pokemonType) => (
            <S.PokemonType species="water">
              <S.PokemonTypeText key={pokemonType.type.name}>
                {pokemonType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonTypeContent>
      </S.LeftSide>
      {/* <S.RightSide></S.RightSide> */}
    </S.ContainerCard>
  );
}
