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
  align-items:center;
  flex-direction: column;
  width: 100%;
  padding-bottom: 80px;
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
        <TextBubble 
          display='none' 
          name="Timmy and Tommy" 
          text="Bye for now!"
          paddingt='20px'></TextBubble>
        <Photo src='/timmytommy.svg' ></Photo>
        <Button 
          text="Log Out" 
          width='278'
          onClick={() => router.push(routeToSignIn)} 
          marginb="30px" 
          bgColor='white'
          border='2px solid #8CC8A2'
          txtColor='#8CC8A2'/>
        <BottomNav settingColor='#474747' settingTextColor='#474747'></BottomNav>
    </Container>
  )
}