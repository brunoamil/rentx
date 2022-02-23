import React from "react";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";
import ArrowSVG from "../../assets/arrow.svg";

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}data de inicio e{"\n"}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
          <ArrowSVG />
          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content></Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
