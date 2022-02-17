import React, { useState, useEffect } from "react";
import { Container } from "../components/Container.styled";
import FundList from "../components/FundList";

export default function ContactPage() {
  return (
    <div>
      <Container>
        <h1> Alla fonder </h1>
        <FundList />
      </Container>
    </div>
  );
}
