import React, {useState, useEffect} from "react";
import { Container } from "../components/Container.styled";
import Searchbar from "../components/Searchbar";

export default function ContactPage() {
  return (
    <div>
      <Container> 
          <h1> Sök fond
              </h1>
              <Searchbar />
          </Container>
    </div>
  );
}
