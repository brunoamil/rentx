import React from "react";
import { StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";

import { Container, Header } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
    </Container>
  );
}
