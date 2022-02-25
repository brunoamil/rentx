import React from "react";
import LottieView from "lottie-react-native";

import loadingCar from "../../assets/car.json";

import { Container } from "./styles";

export function LoadingAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
