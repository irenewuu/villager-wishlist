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

const Create = styled.p`
margin-top:20px;
`

export default function SignIn() {
    
    return <Background>
        <Photo src="/villager-wishlist.svg"></Photo>

        <User>
            <input type="text" name="Username" placeholder="Username" size="30"></input>
        </User>

        <User>
            <input type="text" name="Username" placeholder="Password" size="30"></input>
        </User>

        <Gap>
       <Button width="275" text="Login"> </Button>
       </Gap>

       <Gap>
       <Button  width="275" text="Continue with Google"> </Button>
       </Gap>

       <Create>Don&#39;t have an account? Create a new account</Create>

    </Background>
    
  }