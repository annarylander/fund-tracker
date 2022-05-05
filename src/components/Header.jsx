import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a2123;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #fff;
`;

const Text = styled.p`
  color: #fff;
`;

export default function Header(props) {
  console.log(props.result);
  return (
    <HeaderContainer>
      <TextDiv>
        <Title> Sök på en fond </Title>
        <Text>Se vad den har för aktieinnehav</Text>
        <Searchbar />
      </TextDiv>
    </HeaderContainer>
  );
}
