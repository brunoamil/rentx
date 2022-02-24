import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";

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
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDate, setMarkedDate] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "SchedulingDetails",
      })
    );
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDate(interval);
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
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

      <Content>
        <Calendar markedDates={markedDate} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
