import { View, Text } from "react-native";
import React from "react";

import * as S from "./styles";

interface TextProps {
  title: string;
}

export default function Button({ title }: TextProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
