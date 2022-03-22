import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import ax from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from 'react-dnd-html5-backend'

import { bg } from "../utils/variables";
import { innerCircle } from "../utils/variables";

import Villagers from "../comps/Villagers";
import Header from "../comps/Header";
import TextBubble from "../comps/TextBubble";
import Button from "../comps/Button";
import BottomNav from "../comps/BottomNav";
import DeleteZone from "../comps/DeleteZone";
import { VillagersDnd } from "../comps/VilagersDnd";

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
    const [villagers, setVillagers] = useState([]);

    const [cards, setCards] = useState([]);      
    
    useEffect(()=>{
      const getData = async () => {
        const res = await ax.get("/api/wishlist", {
          params: {
            token: window.localStorage.getItem('token')
          }
        })
        if(res.data !== false) {
          console.log(res.data, "wishlist res data")
          var villagerData = []
          for(var i = 0; i < res.data.length; i++) {
            villagerData.push(res.data[i].villager)
          }
          // setVillagers(villagerData)
          console.log(villagerData, "villagerData array")
          // setCards(Object.keys(villagerData))
          setCards([...villagerData])
          console.log(cards, "cards array")
        } else {
          console.log("no data in wishlist")
        }
      }
      getData()
      
      
    },[])
    const moveCard = (dragIndex, hoverIndex) => {
      console.log("move", dragIndex, hoverIndex)
      var item1 = {...cards[dragIndex]};
      var item2 = {...cards[hoverIndex]};
      
      cards[hoverIndex]=item1
        cards[dragIndex]=item2
    
        setCards([...cards])
        // setCards((prevCards) => update(prevCards, {
          //     $splice: [
        //         [dragIndex, 1],
        //         [hoverIndex, 0, prevCards[dragIndex]],
        //     ],
        // })); 
    };
    
    // console.log(userId, "user id")
    console.log(cards, "cards array")
      

    return (
      <div className="Cont">
      <DndProvider
        backend={TouchBackend}
        options={{
          enableTouchEvents: false,
          enableMouseEvents: true,
        }}
      >
      <Header text="Your Villager Wishlist" />

        {cards && cards.length >= 1 ? 
          <Content>
          {cards && cards.map((o,i) => (
              // <motion.div key={o._id} 
              // onClick={() => {r.push(`/profile/${o._id}`);}}
              // whileHover={{ scale: 1.03 }} >
              <VillagersDnd
                type="indvillager"
                key={o._id}
                name={o.name}
                src={o.image_url}
                bgcolor={o.personality ? bg[o.personality] : null}
                innercolor={o.personality ? innerCircle[o.personality] : null}
                starDisplay="none"
                moveCard={moveCard}
                index={i}
              />
              // </motion.div>
            ))}
  
          </Content>
          : <Content>
            <BubbleCont>
              <TextBubble text="You have no villagers in your wishlist." />
            </BubbleCont>
            <Button text='Find Villagers' textHover="none" onClick={()=>{r.push("/search")}} />
  
            <Photo src="/find-villagers.svg" />
          </Content>
        } 
          <BottomNav leafColor="#474747" leafTextColor="#474747"/>
          </DndProvider>
        </div>
    );
  
}
  