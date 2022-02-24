import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import GasolineSVG from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/CarDTO";
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
  data: CarDTO;
}
export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{`R$ ${data.rent.period}`}</Period>
            <Price>{data.rent.price}</Price>
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
