import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useNetInfo } from "@react-native-community/netinfo";

import GasolineSVG from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/CarDTO";
import { Car as ModelCar } from "../../database/model/Car";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage,
} from "./styles";

// interface CarData {
//   brand: string;
//   name: string;
//   rent: {
//     period: string;
//     price: number;
//   };
//   thumbnail: string;
// }

interface Props extends RectButtonProps {
  data: ModelCar;
}
export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  const netInfo = useNetInfo();
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{`${data.period}`}</Period>
            <Price>{`R$ ${
              netInfo.isConnected === true ? data.price : "..."
            }`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CardImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
