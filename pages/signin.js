import React from "react";
import styled from "styled-components";
import Button from '../comps/Button';
import Google from '@styled-icons/boxicons-logos/Google';

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
    margin-bottom: 48px;
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

const Signup = styled.p`
    color: #8D8D8D;
`


export default function SignIn() {
    
    return <Background>
        <Photo src="/villager-wishlist.svg" />

       <MainCont>
            <RowGap>
                <TextInput type="text" name="username" placeholder="Username" />
                <TextInput type="text" name="password" placeholder="Password" />
            </RowGap>
            <RowGap>
                <Button width="275" text="Login" fontSize="26" />
                <Button width="275" text="Continue with Google" fontSize="26" />
                <Signup>Don&#39;t have an account? <a>Sign up</a></Signup>
            </RowGap>
       </MainCont>


    </Background>
    
  }