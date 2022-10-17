import React from "react";
import * as S from "./styles";

import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "./Pokemon.json";
import Button from "../../components/Button";

export default function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <AnimatedLottieView
          autoPlay={true}
          source={pokemonAnimation}
          loop={true}
          duration={5000}
        />
      </S.Content>
      <S.Footer>
        <S.Title>Bem vindo</S.Title>
        <S.SubTitle>Encontre todos os pokémons</S.SubTitle>
        <Button title="Acessar" />
      </S.Footer>
    </S.Container>
  );
}
