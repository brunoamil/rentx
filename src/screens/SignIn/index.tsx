import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import * as Yup from "yup";
import {
  useNavigation,
  CommonActions,
  useRoute,
} from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { Container, Header, Form, Title, Subtitle, Footer } from "./styles";
import { useAuth } from "../../hooks/auth";

// import { database } from "../../database";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().required("A senha é obrigatória"),
      });

      await schema.validate({ email, password });
      Alert.alert("TUDO CERTO");
      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert("Erro na autenticacao", "verifique o erro");
      }
    }
  }

  function handleNewAccount() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "SignUpFirstStep",
      })
    );
  }

  // useEffect(() => {
  //   async function loadData() {
  //     const userCollection = database.get("users");
  //     const users = await userCollection.query().fetch();
  //     console.log("users", users);
  //   }
  //   loadData();
  // }, []);

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
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              light
              onPress={handleNewAccount}
              enabled={true}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
