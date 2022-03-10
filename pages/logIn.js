import React from "react";
import styled from "styled-components";
import Button from '../comps/Button';
import Link from 'next/link'



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
    row-gap: 20px;
`
const RowGap2 = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    row-gap: 27px;
`
const MainCont = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    row-gap: 40px;
`

const Signup = styled.p`
    color: #8D8D8D;
`

export default function LogIn() {
    
    return <Background>
        <Photo src="/villager-wishlist.svg" />

       <MainCont>
            <RowGap>
                <TextInput type="text" name="username" placeholder="Username" />
                <TextInput type="text" name="password" placeholder="Password" />
            </RowGap>
            <RowGap2>
                <Button width="275" text="Login" fontSize="26" />
                <Button display="block" width="275" text="Continue with Google" fontSize="26" />
                <Signup>Don&#39;t have an account? <Link href='signUp'>Sign up</Link></Signup>
            </RowGap2>
       </MainCont>


    </Background>
    
  }