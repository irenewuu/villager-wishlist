import React, {useState} from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import Header from '../comps/Header';
import BottomNav from '../comps/BottomNav';
import OtherUser from '../comps/ChatComp/otheruser'
import MainUser from '../comps/ChatComp/mainuser'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import {SendPlane} from '@styled-icons/remix-fill/SendPlane';



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
  width: 70%;
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
background: none;
border:none;
width: 100%;
&:focus{
  outline:none;
}
`
const SendCont = styled.button`
background: none;
border:none;
color:#6AACA0;
border-radius: 5px;
width: 60px;
height: 50px;

`
const SendButt = styled(SendPlane)`
  width: 30px;
  color: #007C74;
  
`
const InputCont = styled.div`
margin-bottom: 50px;
width: 100%;
border-radius: 10px;
border: 2px solid #007C74;
padding-left: 20px;
display:flex;

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

        <InputCont>
        <ChatInput placeholder='Write a message' ></ChatInput>
        <SendCont><SendButt/></SendCont>
        </InputCont>

        
        </ChatCont>
       
          
        

       
       
        </Cont>
    );
  }
  