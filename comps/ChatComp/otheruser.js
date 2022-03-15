import React from "react";
import styled from "styled-components";


const Cont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  background: #DEF1EE;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16), 0px -1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 0px 24px 24px 24px;
  color: #474747;
  padding: 15px;
  margin-top: 5px;
  font-size: 17px;
`;
const Name = styled.p`
  font-size: 25px;
  font-weight: 300;
  color: grey;
`;


const OtherUser = () => {

  return (
    <Cont>

      <InfoCont>
        <Name>Leah</Name>
        <ChatBubble><p>hellooooooo</p></ChatBubble>
      </InfoCont>

     
    </Cont>
  );
};

export default OtherUser;