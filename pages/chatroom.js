import React, {useState} from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import Header from '../comps/Header';
import BottomNav from '../comps/BottomNav';
import OtherUser from '../comps/ChatComp/otheruser'
import MainUser from '../comps/ChatComp/mainuser'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
const Cont = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
   height: 100%;
`;

const HeadCont = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  width: 300px;
  margin-top: 50px;
  
`
const Head = styled.h2`
  color:#007C74;
  text-align: center;
  width: 100%;
`
const Back = styled(ArrowIosBackOutline)`
  position: absolute;
  left: 0;
  width: 40px;
  color: #007C74;
  margin-bottom: 10px;
`

const ChatCont = styled.div`
display: flex;
height: 100%;
width: 70%;
align-items:center;
  flex-direction: column;
  justify-content: flex-end;


`


const ChatInput = styled.input`
margin-bottom: 50px;
width: 100%;
border-radius: 10px;
border: 2px solid #6AACA0;
padding-left: 20px;
padding-top: 5px;



`



export default function ChatPage() {
    const router = useRouter()
    return (
      <Cont>
        <HeadCont>
        <Back onClick={()=>router.push('/chat')}/>
        <Head>Global</Head>
        </HeadCont>
     
      <ChatCont>
      <OtherUser/>
      
      
        <MainUser/>

        <ChatInput placeholder='Write a message' ></ChatInput>
        </ChatCont>
       
          
        

       
       
        </Cont>
    );
  }
  