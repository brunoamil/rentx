import React, { useEffect, useState } from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { StatusBar, StyleSheet, BackHandler, Alert } from "react-native";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { useNetInfo } from "@react-native-community/netinfo";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import LogoSVG from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import { Loading } from "../../components/Loading";
import { LoadingAnimation } from "../../components/LoadingAnimation";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();
  const netInfo = useNetInfo();

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  function handleCarDetails(car: CarDTO) {
    navigation.dispatch(
      CommonActions.navigate({
        name: "CarDetails",
        params: {
          car,
        },
      })
    );
  }

  function handleOpenMyCars() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "MyCars",
      })
    );
  }

  useEffect(() => {
    let isMounted = true;
    async function fetchCars() {
      try {
        const response = await api.get("cars");
        if (isMounted) {
          setCars(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchCars();
    return () => {
      isMounted = false;
    };
  }, []);

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", () => {
  //     return true;
  //   });
  // }, []);
  useEffect(() => {
    if (netInfo.isConnected) {
      Alert.alert("Voce tem conexão");
    } else {
      Alert.alert("Voce sem conexao");
    }
  }, [netInfo.isConnected]);
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
          {!loading && (
            <TotalCars>Total de {cars.length} Carros na lista</TotalCars>
          )}
        </HeaderContent>
      </Header>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            { position: "absolute", bottom: 13, right: 22 },
          ]}
        >
          <ButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.button, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={38}
              color={theme.colors.shape}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
