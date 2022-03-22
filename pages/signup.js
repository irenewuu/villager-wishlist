import React from "react";
import styled from "styled-components";
import Header from '../comps/Header';
import AuthSignUp from "../comps/AuthSignUP";

const Photo = styled.img`
    width: 250px;
`

export default function SignUp() {
    return <div className="BackgroundCont">
        <Photo src="/mountains.svg" />
        <Header text="Create Account" />
        <AuthSignUp />
    </div>
    
  }