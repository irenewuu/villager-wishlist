import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import ax from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { decodeToken } from "react-jwt";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useUserToken, useUserId } from "../utils/provider";
import {bg} from '../utils/variables';
import {innerCircle} from '../utils/variables';

import Villagers from "../comps/Villagers";
import VillagersDnd from "../comps/VilagersDnd";
import Header from '../comps/Header'
import TextBubble from '../comps/TextBubble';
import Button from '../comps/Button';
import BottomNav from "../comps/BottomNav";

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

    const {userToken, setUserToken} = useUserToken();
    const {userId, setUserId} = useUserId();
    const [villagers, setVillagers] = useState({});

    const [cards, setCards] = useState([]);
    // useEffect(() => {
    //   if (uuid) {
    //     const getData = async () => {
    //       const res = await ax.get("/api/load", {
    //         params: {
    //           uuid,
    //         },
    //       });
    //       if (res.data !== false) {
    //         console.log(res.data, "loaded from uuid");
    //         setVillagers(res.data.lists);
    //         setCards(Object.values(res.data.lists));
    //       } else {
    //         console.log("res.data is false");
    //       }
    //     };
    //     getData();
    //   }
    // }, [uuid]);
    
    
    useEffect(()=>{
      setUserToken( window.localStorage.getItem('token'))
      
      if(userToken !== undefined)
      {
        const myDecodedToken = decodeToken(userToken);
        setUserId(myDecodedToken.id)

        if(userId) {
          const getData = async () => {
            const res = await ax.get("/api/wishlist", {
              params: {
                user: userId
              }
            })
            if(res.data !== false) {
              console.log(res.data, "wishlist res data")
              var villagerData = []
              for(var i = 0; i < res.data.length; i++) {
                cards.push(res.data[i].villager)
                console.log(cards, 'carrrds')
              }

              // setVillagers(villagerData)
              // setCards(villagerData.values());
            } else {
              console.log("no data in wishlist")
            }
          }
          getData()
        }
      } else {
        console.log("no token")
      }
      
      
    },[userToken, userId])
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
    
    console.log(userId, "user id")
      

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

        {/* {cards && cards.length >= 1 ?  */}
          <Content>
          {cards && cards.map((o,i) => (
              <motion.div key={o._id} 
              onClick={() => {r.push(`/profile/${o._id}`);}}
              whileHover={{ scale: 1.03 }} >
              <VillagersDnd
                key={o._id}
                name={o.name}
                src={o.image_url}
                bgcolor={o.personality ? bg[o.personality] : null}
                innercolor={o.personality ? innerCircle[o.personality] : null}
                starDisplay="none"
              />
              </motion.div>
            ))}
  
          </Content>
          : <Content>
            <BubbleCont>
              <TextBubble text="You have no villagers in your wishlist." />
            </BubbleCont>
            <Button text='Find Villagers' textHover="none" onClick={()=>{r.push("/search")}} />
  
            <Photo src="/find-villagers.svg" />
          </Content>
        {/* } */}
          <BottomNav />
          </DndProvider>
        </div>
    );
  
}
  