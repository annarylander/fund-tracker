import React from 'react'
import styled from "styled-components";
import BgImg from "../assets/stock.jpeg";

const Section = styled.section`
background-image: url(${BgImg});
width: 100%;
height: 785px;
display: block;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
background-attachment: fixed;
`

const Content = styled.div`
width: 100%;
height: 100px;
`

const Left = styled.div`
padding-left: 220px;
padding-top: 93px;
`

const Title = styled.h1`
font-size: 50px;


`
const Desc = styled.p`
width: 472;
font-size: 20px;
color: black;
margin-top: 58px;
`



export default function Header2() {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Sök på dina fonder 
                    </Title>

                     <Desc> Se deras aktiveinneav och ta rygg på de bästa!            
                    </Desc>
                   
                </Left>
            </Content>
        </Section>
    )
}
