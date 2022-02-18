import React, {useState} from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";

import Villagers from "../../comps/Villagers";
import Header from '../../comps/Header'
import TextBubble from '../../comps/TextBubble';
import Button from '../../comps/Button';
import BottomNav from "../../comps/BottomNav";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100%;
`;
const BubbleCont = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`

const Photo = styled.img`
  padding: 15px;
  margin-top: 15px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;



export default function Wishlist() {
    const r = useRouter();
    const {uuid} = r.query;

    const [data, setData] = useState([]);
  
    return (
      <Cont>
      <Header text="Your Villager Wishlist" />
  
        {/* need to push the wishlisted villagers to data array in the usestate^ */}
        {data && data.length < 0 ? 
          <Content>
            <Villagers />
            {/* <Villagers bgcolor="#D4ECD3" innercolor="#88C9A1" />
            <Villagers bgcolor="#DEF1EF" innercolor="#A4D8D4" /> */}
  
          </Content>
          : <Content>
            <BubbleCont>
              <TextBubble text="You have no villagers in your wishlist." />
            </BubbleCont>
            <Button text='Find Villagers' onClick={()=>{r.push("/search")}} />
  
            <Photo src="/find-villagers.svg" />
          </Content>
        }
          <BottomNav />
        </Cont>
    );
  }
  