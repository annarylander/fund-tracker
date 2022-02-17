import React from "react";
import { Container } from "../components/Container.styled";
import Card from "../components/Card";
import content from "../content";

export default function AboutPage() {
  return (
    <Container>
      {content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
  );
}
