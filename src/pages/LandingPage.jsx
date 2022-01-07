import React from 'react'
import styled from 'styled-components';
import NavButton from '../components/NavButton';

const Image = styled.img`
  height: 100vh;

`;

export default function LandingPage() {
    return (
        <div>
        <Image
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="finance"
        />

<NavButton margin>Get started</NavButton>
        <NavButton margin>Learn more</NavButton>
        </div>
    )
}
