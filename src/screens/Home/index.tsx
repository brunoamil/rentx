import React, { useEffect, useState } from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import LogoSVG from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import { Loading } from "../../components/Loading";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupe",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "data:image/jpeg;base64,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",
  };

  function handleCarDetails() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "CarDetails",
      })
    );
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <LogoSVG width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
}
