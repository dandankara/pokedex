import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

import * as S from "./styles";

type TextProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({ title, ...rest }: TextProps) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
