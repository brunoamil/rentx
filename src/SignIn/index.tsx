import React, { useState } from "react";
import { useTheme } from "styled-components";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputPassword } from "../components/InputPassword";

import { Container, Header, Form, Title, Subtitle, Footer } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            {"\n"}
            <Subtitle>
              Faça seu login para começar{"\n"} uma experiência incrível.
            </Subtitle>
          </Header>
          <Form>
            <Input
              iconName="mail"
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          <Footer>
            <Button
              title="Login"
              onPress={() => {}}
              enabled={false}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              light
              onPress={() => {}}
              enabled={false}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
