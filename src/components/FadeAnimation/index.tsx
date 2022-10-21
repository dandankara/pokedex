import { ViewProps, useWindowDimensions } from "react-native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import React, { useEffect } from "react";
import * as S from "./styles";

type FadeAnimationProps = {
  children: React.ReactNode;
} & ViewProps;

export default function FadeAnimation({
  children,
  ...rest
}: FadeAnimationProps) {
  const { width: displayWidth } = useWindowDimensions();

  const cardOpacity = useSharedValue(0);
  const cardOffSet = useSharedValue(0.25 * displayWidth);

  const animatedStyle = useAnimatedStyle(() => {
    // executa uma função sincrona na tela do
    "worklet";
    return {
      opacity: cardOpacity.value,
      transform: [
        {
          translateX: cardOffSet.value,
        },
      ],
    };
  });

  useEffect(() => {
    cardOpacity.value = withTiming(1, { duration: 1200 });
    cardOffSet.value = withTiming(0, { duration: 1200 });
  }, []);

  return (
    <S.AnimationContainer {...rest} style={animatedStyle}>
      {children}
    </S.AnimationContainer>
  );
}
