import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import Header from '../comps/Header';
import BottomNav from '../comps/BottomNav';
import OtherUser from '../comps/ChatComp/otheruser'
import MainUser from '../comps/ChatComp/mainuser'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import {SendPlane} from '@styled-icons/remix-fill/SendPlane';
import { io } from "socket.io-client";


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

const NavCont = styled.div`
  display: flex;
  align-items: center;
  margin: 60px;
  width: 100%;
  justify-content: center;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ChatBubble = styled.div`
display: flex;
order: 0;
width: 100%;
border-radius: 10px;
align-self: center;
flex-grow: 0;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
// color: #1a1a1a;
padding: 10px;
margin-top: 10px;
font-size: 25px;
font-family:Dongle;
flex-direction: column;
`;
const Name = styled.p`
  font-size: 25px;
  font-weight: 300;
  color: grey;
  display:flex;
  font-family:Dongle;
  // justify-content:flex-end;
`;




export default function ChatPage() {

    

    const router = useRouter()

    const [mySoc, setMySoc] = useState(null);
    const [msgs, setMsgs] = useState([]);
    const [name, setName] = useState([]);
    const [user, setUser] = useState([]);
    const [inputTxt, setInputTxt] = useState("");

    const bgcolors = ["#6AACA0", "#DEF1EE"];
    const txtcolors = ["white", "#474747"]

    useEffect(()=>{
      const socket = io("http://localhost:8888");
  
      socket.on("change", (id, txt)=>{
        setName((prev)=>[
          ...prev,
          `${id}`
        ]);
        setMsgs((prev)=>[
          ...prev,
          `
            ${id}:
            ${txt}
          `
        ]);
        setUser((prev)=>[
          ...prev,
        ])

      
      });

      setMySoc(socket);
    }, []);

    const SendToIO = async () =>{
      mySoc.emit("alert all", inputTxt)

    }

    return (
      <Cont>
        <HeadCont>
        <Back onClick={()=>router.push('/chat')}/>
        <Head>Global</Head>
        </HeadCont>
     
      <ChatCont>
            
      <NavCont>
        <InfoCont>
          {msgs.map((o,i)=>
          <ChatBubble style={{background:bgcolors[i%2], color:txtcolors[i%2]}}>
            {o}
          </ChatBubble>
            )} 
        </InfoCont>
      </NavCont> 

        <InputCont>
        <ChatInput placeholder='Write a message'  type='text' onChange={(e)=>setInputTxt(e.target.value)}></ChatInput>
        <SendCont><SendButt onClick={SendToIO}/></SendCont>
        </InputCont>

        
        </ChatCont>
       
        </Cont>
    );
  }
