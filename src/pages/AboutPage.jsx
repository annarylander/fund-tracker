import React from "react";
import { Container } from "../components/Container.styled";
import NavButton from "../components/NavButton";
import styled from "styled-components";
import { Flex } from "../components/Flex";


export default function AboutPage() {
  return (
    <>
      <Container>
        <h1> Hello </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam autem
          quae voluptatum consectetur sit totam ex beatae, consequatur accusamus
          error magnam asperiores rem vel perspiciatis possimus, laudantium,
          incidunt dicta fugiat.
        </p>

    

        <NavButton margin>Get started</NavButton>
        <NavButton margin>Learn more</NavButton>
      </Container>
    </>
  );
}
