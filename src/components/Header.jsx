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
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;

// const HeaderImg = styled.img`
//   height: 100vh;
//   width: 700px;

//   @media (max-width: 700px) {
//     display: none;
//   }
// `;

export default function Header() {
  return (
    <HeaderContainer>
      <TextDiv>
        <Title> Sök på en fond </Title>
        <p>Se vad den har för aktieinnehav</p>
        <Searchbar />
      </TextDiv>

      {/* <div>
        <HeaderImg src="https://images.unsplash.com/photo-1613442368724-5bea257f8cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" />{" "}
      </div> */}
    </HeaderContainer>
  );
}
