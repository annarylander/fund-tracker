import React from "react";
import { Container } from "../components/Container.styled";
import NavButton from "../components/NavButton";

export default function AboutPage() {
  return (
    <>
      <Container>

        <h1> Sök på en fond </h1>
        <p>
          På FUNDWISE kan du söka på en svensk fond och se vilket aktivinnehav
          den har samt..
        </p>
        <NavButton margin>Jag vill veta mer</NavButton>
      </Container>
    </>
  );
}
