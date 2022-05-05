import React, { useState } from "react";
import { Container } from "../components/Container.styled";
import content from "../content";
import Card from "../components/Card";
import Header from "../components/Header";
import { Flex } from "../components/Flex";

export default function LandingPage() {
  // const [query, setQuery] = useState("");
  // const [result, setResult] = useState([]);

  // function handleOnSubmit(e) {
  //   e.preventDefault();
  //   const payload = { query };
  //   const url = "http://localhost:8000/fund/search";

  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setResult(data.results));
  // }

  return (
    <div>
      <Header />
    </div>
  );
}
