import React from "react";
import * as S from "./styles";

import { useNavigation } from "@react-navigation/native";

import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "./Pokemon.json";
import Button from "../../components/Button";

export default function Welcome() {
  const { navigate } = useNavigation();
  function handleNavigation() {
    navigate("Home");
  }

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
        <Button title="Acessar" onPress={handleNavigation} />
      </S.Footer>
    </S.Container>
  );
}
