import React from "react";
import { useTheme } from "styled-components";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { Container, Header, Form, Title, Subtitle, Footer } from "./styles";

export function SignIn() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Title>Estamos{"\n"}quase lá.</Title>
        {"\n"}
        <Subtitle>
          Faça seu login para começar{"\n"} uma experiência incrível.
        </Subtitle>
      </Header>
      <Form>
        <Input iconName="mail" />
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
  );
}
