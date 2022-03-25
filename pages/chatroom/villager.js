import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import Header from '../../comps/Header';
import BottomNav from '../../comps/BottomNav';
import OtherUser from '../../comps/ChatComp/otheruser'
import MainUser from '../../comps/ChatComp/mainuser'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import {SendPlane} from '@styled-icons/remix-fill/SendPlane';
import { io } from "socket.io-client";

const Back = styled(ArrowIosBackOutline)`
  position: absolute;
  left: 0;
  width: 40px;
  color: #007C74;
  margin-bottom: 10px;
`
const SendButt = styled(SendPlane)`
  width: 30px;
  color: #007C74;
`

export default function ChatPage() {
    const router = useRouter()

    const [mySoc, setMySoc] = useState(null);
    const [msgs, setMsgs] = useState([]);
    const [name, setName] = useState([]);
    const [user, setUser] = useState([]);
    const [inputTxt, setInputTxt] = useState("");

    const bgcolors = ["#6AACA0", "#DEF1EE"];
    const txtcolors = ["white", "#474747"];

    useEffect(()=>{
      const socket = io("https://villager-wishlist.herokuapp.com");
      // const socket = io("http://localhost:3000");
  
      socket.on("change", (id, txt)=>{
        setName((prev)=>[
          ...prev,
          `${id}`
        ]);
        setMsgs((prev)=>[
          ...prev,
          `${id}: ${txt}`
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
      <div className="ChatMainCont">
        <div className="HeaderCont">
          <Back onClick={()=>router.push('/chat')}/>
          <h2 className="HeaderText">Villager Chatroom</h2>
        </div>
     
        <div className="ChatCont">
          <div className="ChatBubbleCont">
            {msgs.map((o,i)=>
              <div className="ChatBubble" key={i} style={{background:bgcolors[i%2], color:txtcolors[i%2]}}>
                {o}
              </div>
            )} 
          </div> 

          <div className="ChatInputCont">
            <input className="ChatInput" placeholder='Write a message'  type='text' onChange={(e)=>setInputTxt(e.target.value)} />
            <button className="SendCont"><SendButt onClick={SendToIO}/></button>
          </div>
        </div>
      </div>
    );
}
