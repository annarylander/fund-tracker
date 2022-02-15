import React from "react";
import { Container } from "./Container.styled";
import { Flex } from "./Flex";
import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #55b77c;
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Flex>
          <ul>
            <li>FUNDWISE </li>

            <li>example@example.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Flex>
      </Container>
    </FooterStyled>
  );
}
