import React from "react";
import styled from "styled-components";
import Button from '../comps/Button';
import Header from '../comps/Header';

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
const TextInput = styled.input`
    box-sizing: border-box;
    color: #8D8D8D;
    width: 275px;
    height: 50px;
    background-color: #F9F9F9;
    border-radius: 10px;
    border: none;
    padding-left: 16px;

    ::placeholder {
        color: #8D8D8D;
    }
    :focus {
        outline: none;
    }
`;

const RowGap = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    row-gap: 24px;
`
const MainCont = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    row-gap: 56px;
`
const Signin = styled.p`
    color: #8D8D8D;
`

export default function SignUp() {
    
    return <Background>
        <Photo src="/mountains.svg" />
        <Header text="Create Account" />

    <MainCont>
        <RowGap>
            <TextInput type="text" name="username" placeholder="Username" />
            <TextInput type="text" name="email" placeholder="Email" />
            <TextInput type="text" name="password" placeholder="Password" />
        </RowGap>

        <RowGap>
            <Button width="275" text="Signup" />
            <Signin>Have an account? <a>Sign in</a></Signin>
        </RowGap>
        
    </MainCont>

    </Background>
    
  }