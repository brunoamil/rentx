import React from "react";
import { useWindowDimensions } from "react-native";
import {
  useNavigation,
  CommonActions,
  useRoute,
} from "@react-navigation/native";

import { ConfirmButton } from "../../components/ConfirmButton";

import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleConfirm() {
    navigation.dispatch(
      CommonActions.navigate({
        name: nextScreenRoute,
      })
    );
  }

  return (
    <Container>
      <LogoSVG width={width} />
      <Content>
        <DoneSVG width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
