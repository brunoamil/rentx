import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { StatusBar } from "react-native";

import { Home } from "./src/screens/Home";
import theme from "./src/styles/theme";
import { CarDetails } from "./src/screens/CarDetails";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Scheduling } from "./src/screens/Scheduling";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Scheduling />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
