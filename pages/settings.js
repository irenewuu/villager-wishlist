import Head from 'next/head';
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';
import ColorMode from '../comps/ColorMode';
import BottomNav from '../comps/BottomNav';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    
`

const Heading =styled.h1`
    font-size: 47px;
    color: #08847C;
    margin-bottom: 20px;
    margin-top: 30px;
`
const Photo = styled.img`
padding: 15px;
margin-top: 15px;
`

export default function Settings() {
  return (
    <Container>
        <Heading>Settings</Heading>
        <ColorMode></ColorMode>
        <TextBubble name="Timmy and Tommy" text="Choose Your Appearance!"></TextBubble>
        <Photo src='/timmytommy.svg' ></Photo>
        <BottomNav settingColor='#474747' settingTextColor='#474747'></BottomNav>
    </Container>
  )
}