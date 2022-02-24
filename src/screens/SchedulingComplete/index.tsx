import React from "react";
import { useWindowDimensions } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { ConfirmButton } from "../../components/ConfirmButton";

import LogoSVG from "../../assets/logo_background_gray.svg";
import DoneSVG from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Home",
      })
    );
  }

  return (
    <Container>
      <LogoSVG width={width} />
      <Content>
        <DoneSVG width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX {"\n"}
          pegar seu carro.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
