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
padding: 15px;
margin-top: 20px;
`

const User = styled.div`
display:flex,
justify-content:center;
margin-top:20px;
`
const Gap = styled.div`
margin-top:30px;
`

export default function SignUp() {
    
    return <Background>
         <Header text="Create Account"></Header>

        <User>
            <input type="text" name="Username" placeholder="Username" size="30"></input>
        </User>

        <User>
            <input type="text" name="Username" placeholder="Email" size="30"></input>
        </User>

        <User>
            <input type="text" name="Username" placeholder="Password" size="30"></input>
        </User>

        <Gap>
       <Button width="275" text="Signup"> </Button>
       </Gap>

    </Background>
    
  }