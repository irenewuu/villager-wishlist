import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { io } from "socket.io-client";


const NavCont = styled.div`
  display: flex;
  align-items: center;
  margin: 60px;
  width: 100%;
  justify-content: flex-end;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChatBubble = styled.div`
display: flex;
order: 0;
align-self: center;
flex-grow: 0;
background: #6AACA0;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
border-radius: 28.3636px 0px 28.3636px 28.3636px;
color: #1a1a1a;
padding: 15px;
margin-top: 5px;
font-size: 17px;
color: white;
`;
const Name = styled.p`
  font-size: 25px;
  font-weight: 300;
  color: grey;
  display:flex;
  justify-content:flex-end;
`;


const MainUser = () => {



  return (
    
    <NavCont>

      <InfoCont>
        <Name>Me</Name>
        <ChatBubble>
        </ChatBubble>
      </InfoCont>

     
    </NavCont>
  );
};

export default MainUser;