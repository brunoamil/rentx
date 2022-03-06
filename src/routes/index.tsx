import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { AppTabRoutes } from "./app.tab.routes";
import { AppStackRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";
import { LoadingAnimation } from "../components/LoadingAnimation";

export function Routes() {
  const { user, loading } = useAuth();
  return loading ? (
    <LoadingAnimation />
  ) : (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
