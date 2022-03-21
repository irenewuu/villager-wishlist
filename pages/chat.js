import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../comps/Header";
import BottomNav from "../comps/BottomNav";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ButtonCont = styled.div`
display:flex;
margin-top: 10%;
flex-direction column;
position:relative;
justify-content:center;
align-items:center;
cursor: pointer;
`;
const LastButtonCont = styled.div`
display:flex;
margin-top: 10%;
margin-bottom: 30%;
flex-direction column;
position:relative;
justify-content:center;
align-items:center;
cursor: pointer;
`;

const ChatButton = styled.img`
  min-width: 300px;
  max-width: 350px;
  max-height: 150px;
  border-radius: 20px;
  border: none;
  object-fit: cover;
  display: flex;
`;

const ButtonText = styled.h2`
  z-index: 5;
  position: absolute;
  display: flex;
  color: white;
  font-weight: 500;
`;

export default function ChatPage() {
  const router = useRouter();
  return (
    <Cont>
      <Header text="Chatrooms" />
      <Wrap>
        <ButtonCont>
          <ChatButton
            src="/global.png"
            onClick={() => router.push("/chatroom")}
          ></ChatButton>
          <ButtonText>Global</ButtonText>
        </ButtonCont>

        <ButtonCont>
          <ChatButton src="/villager.png" />
          <ButtonText>Villager</ButtonText>
        </ButtonCont>

        <LastButtonCont>
          <ChatButton src="/trading.png" />
          <ButtonText>Trading</ButtonText>
        </LastButtonCont>
      </Wrap>

      <BottomNav chatColor="#474747" chatTextColor="#474747" />
    </Cont>
  );
}
