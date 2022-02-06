import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';

const Background = styled.body`
background-color: #DEF1EE;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
`

const Photo = styled.img`
padding: 15px;
margin-top: 15px;
`

export default function Welcome() {
  return <Background>
      <Photo src="/villager-wishlist.svg"></Photo>
      <Photo src="/mountains.svg"></Photo>
      <TextBubble></TextBubble>
    {/* insert button component  */}
    

  </Background>
  
}