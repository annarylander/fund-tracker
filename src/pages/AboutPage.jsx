import React from "react";
import { Container } from "../components/Container.styled";
import Card from "../components/Card";
import content from "../content";
import { Flex } from "../components/Flex";

export default function AboutPage() {
  return (
    <Container>
      <Flex>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Flex>
    </Container>
  );
}
