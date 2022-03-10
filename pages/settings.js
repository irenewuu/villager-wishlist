import Head from 'next/head';
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';
import ColorMode from '../comps/ColorMode';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import { useTheme } from '../utils/provider';
import { useRouter } from 'next/router';
import Button from '../comps/Button';


const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  width: 100%;
  height: 100%; 
`

const Photo = styled.img`
padding: 15px;
margin-top:1px;

`

export default function Settings({
  routeToSignIn = "/signin",
}) {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  return (
    <Container>
        <Header text="Settings"></Header>
        <ColorMode
          onButtonClick1={()=>setTheme(
            theme==='dark'?'default':"dark"
          )}
          onButtonClick2={()=>setTheme(
            theme==='dark'?'default':"dark"
          )}
        ></ColorMode>
        <TextBubble name="Timmy and Tommy" text="Choose Your Appearance!"></TextBubble>
        <Photo src='/timmytommy.svg' ></Photo>
        <Button text="Logout" onClick={() => router.push(routeToSignIn)}></Button>
        <BottomNav settingColor='#474747' settingTextColor='#474747'></BottomNav>
    </Container>
  )
}