import React from "react";
import { Button, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Container, Title } from "./styles";

export function Splash() {
  const animation = useSharedValue(0);
  const animatedStyled = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animation.value,
        },
      ],
    };
  });

  function handlePositionAnimation() {
    animation.value = Math.random() * 500;
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyled]} />
      <Button title="Mover" onPress={handlePositionAnimation} />
    </Container>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
