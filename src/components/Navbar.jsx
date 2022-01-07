import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #1F332E;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
      height: 80px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
const ExtendedContainer = styled.div``;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
  margin 10px;

  &:hover {
    opacity: 0, 7;
    transform: scale(0.98);
    color: #C0D8D2;
  }

  @media (max-width: 700px) {
    display: none;
}

`;

const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Helvetica, sans-serif;
  text-decoration: none;
  margin 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const logo = styled.img`
  margin: 10px;
  max-width: 180;
  height: auto;
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: ponter;
  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <div>
      <NavbarContainer extendNavbar={extendNavbar}>
        <InnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/">Hem</NavbarLink>
              <NavbarLink to="/about">Om</NavbarLink>
              <NavbarLink to="/funds">Fonder</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLink to="/"> ＄ </NavbarLink>{" "}
          </RightContainer>
        </InnerContainer>
        {extendNavbar && (
          <ExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
          </ExtendedContainer>
        )}
      </NavbarContainer>
    </div>
  );
}
