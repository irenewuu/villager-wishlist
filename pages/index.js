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
// justify-content: center;
text-align: center; 
align-items: center;
width: 100%;
height: 100%;
`

const Photo = styled.img`
padding: 15px;
margin-top: 20px;
`

const ButtonCont = styled.div`
margin: 70px 0;

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
      <ButtonCont onClick={()=>router.push("/wishlist/${uuidv4()}")}>
        <Button />
      </ButtonCont>
      
    

  </Background>
  
}