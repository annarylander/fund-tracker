import React from "react";
import styled from "styled-components";
import BgImg from "../assets/stock.jpeg";
import NavButton from "./NavButton";

const Section = styled.section`
  background-image: url(${BgImg});
  height: 100vh;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
`;

const Left = styled.div`
  padding-left: 220px;
  padding-top: 93px;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  width: 472;
  font-size: 20px;
  color: black;
  margin-top: 28px;
`;

export default function Header2() {
  return (
    <Section>
      <Content>
        <Left>
          <Title>Sök på dina fonder</Title>

          <Desc> Se deras aktiveinneav och ta rygg på de bästa!</Desc>

          <NavButton>Klick</NavButton>
        </Left>
      </Content>
    </Section>
  );
}
