import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const LandingHeader = styled.div`
  // background-image: url("https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  height: 100vh;
  width: 100%;
  // opacity: 0.4;
`;

const HeaderContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
font-size: 50px;
`

const HeaderImg = styled.img`
height: 100vh;
width: 700px;

@media (max-width: 700px) {
  display: none;
}`

export default function Header() {
  return (
    
      <HeaderContainer>

        <div>
          <Title> Se vad din fond har för aktieinnehav </Title>
            <p>
              Här kommer ett stycke med mer information om varför du ska använda den
              här sidan
            </p>
              <NavButton margin>Jag är på! </NavButton>
        </div>

        <div>
          <HeaderImg src="https://images.unsplash.com/photo-1613442368724-5bea257f8cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"/>        </div>
      </HeaderContainer>
    
  );
}
