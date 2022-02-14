import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';
import Button from '../comps/Button';
import {useRouter} from 'next/router';

const Background = styled.div`
background-color: #DEF1EE;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
width: 100vw;
height: 100vh;
`

const Photo = styled.img`
padding: 15px;
margin-top: 20px;
`

const ButtonCont = styled.div`
margin-top: 70px;

`

const BubbleCont = styled.div`
margin-top: 30px;
`

export default function Welcome() {
  const router = useRouter();
  return <Background>
      <Photo src="/villager-wishlist.svg"></Photo>
      <Photo src="/mountains.svg"></Photo>
      <BubbleCont>
        <TextBubble></TextBubble>
      </BubbleCont>
      <ButtonCont onClick={()=>router.push("/empty-wishlist")}>
        <Button></Button>
      </ButtonCont>
      
    

  </Background>
  
}