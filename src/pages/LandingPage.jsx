import React from "react";
import { Container } from "../components/Container.styled";
import content from "../content";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Flex } from "../components/Flex";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Container>
        <Flex>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        </Flex>
      </Container>
     
    </div>
  );
}
