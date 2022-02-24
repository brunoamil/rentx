import React from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";

import speedSVG from "../../assets/speed.svg";
import accelerationSVG from "../../assets/acceleration.svg";
import forceSVG from "../../assets/force.svg";
import gasolineSVG from "../../assets/gasoline.svg";
import exchangeSVG from "../../assets/exchange.svg";
import peopleSVG from "../../assets/people.svg";

import {
  Container,
  Header,
  CardImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Scheduling",
      })
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CardImages>
        <ImageSlider
          imagesUrl={[
            "http://www.minimundi.com.br/cdn/imagens/produtos/det/68647.jpg",
          ]}
        />
      </CardImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380km/h" icon={speedSVG} />
          <Acessory name="3.2s" icon={accelerationSVG} />
          <Acessory name="800 HP" icon={forceSVG} />
          <Acessory name="Gasolina" icon={gasolineSVG} />
          <Acessory name="Auto" icon={exchangeSVG} />
          <Acessory name="2 pessoas" icon={peopleSVG} />
        </Acessories>
        <About>
          Este é automovel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belissimo carro
          para quem gosta de acelerar. Este é automovel desportivo. Surgiu do
          lendário touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belissimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
