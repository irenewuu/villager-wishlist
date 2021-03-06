import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import styled from 'styled-components';

import { useTheme } from '../utils/provider';

import TextBubble from '../comps/TextBubble';
import ColorMode from '../comps/ColorMode';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import Button from '../comps/Button';

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHAc6ZocmhVTPrXfGsoziKsoaRBJk0g-Y",
  authDomain: "animal-crossing-10520.firebaseapp.com",
  projectId: "animal-crossing-10520",
  storageBucket: "animal-crossing-10520.appspot.com",
  messagingSenderId: "463468343690",
  appId: "1:463468343690:web:c323acea2b92253fee1873",
  measurementId: "G-77B805BS4J",
};
const app = initializeApp(firebaseConfig);

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

export default function Settings() {
  const {theme, setTheme} = useTheme();
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/')
      }
    });
  }, []);

  const SignOutFire = async () => {
    localStorage.removeItem('token')
    router.push('/')
  };

  return (
    <Container>
        <Header text="Settings"></Header>
        <ColorMode
          onButtonClick1={()=>setTheme(
            theme==='default'?'default':"default"
          )}
          onButtonClick2={()=>setTheme(
            theme==='dark'?'dark':"dark"
          )}
        ></ColorMode>
        <TextBubble 
          display='none' 
          name="Timmy and Tommy" 
          text="Bye for now!"
          paddingt='20px' />
        <Photo src='/timmytommy.svg' />
        <Button 
          text="Log Out" 
          width='278'
          onClick={SignOutFire} 
          marginb="30px" 
          bgColor='transparent'
          border='2px solid #8CC8A2'
          txtColor='#8CC8A2'
          borderHover='#FEBDC3'
          hover="none"
          textHover='#FEBDC3'
          />
        <BottomNav settingColor='#474747' settingTextColor='#474747' />
    </Container>
  )
}