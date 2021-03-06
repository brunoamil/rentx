import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CarDTO } from "../../dtos/CarDTO";
import { RectButton } from "react-native-gesture-handler";

import { Car } from "../../database/model/Car";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  padding: 32px 24px;
`;
export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<Car>) => FlatList<Car>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

// export const MyCarsButton = styled(RectButton)`
//   width: 60px;
//   height: 60px;
//   background-color: ${({ theme }) => theme.colors.main};
//   justify-content: center;
//   align-items: center;
//   border-radius: 30px;
//   position: absolute;
//   bottom: 13px;
//   right: 22px;
// `;
