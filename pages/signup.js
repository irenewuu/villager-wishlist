import React from "react";
import styled from "styled-components";
import Header from '../comps/Header';
import AuthSignUp from "../comps/AuthSignUP"

const Background = styled.div`
    background-color: #DEF1EE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center; 
    align-items: center;
    width: 100%;
    height: 100%;
`
const Photo = styled.img`
    width: 250px;
`

export default function SignUp() {
    return <Background>
        <Photo src="/mountains.svg" />
        <Header text="Create Account" />
        <AuthSignUp />
    </Background>
    
  }