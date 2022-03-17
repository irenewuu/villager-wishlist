import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import ax from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'

import {bg} from '../../utils/variables';
import {innerCircle} from '../../utils/variables';

import Villagers from "../../comps/Villagers";
import Header from '../../comps/Header'
import TextBubble from '../../comps/TextBubble';
import Button from '../../comps/Button';
import BottomNav from "../../comps/BottomNav";
import DeleteZone from"../../comps/DeleteZone";

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

    const [villagers, setVillagers] = useState({});
    const [vil, setVil] = useState({});

    useEffect(()=> {
      if(uuid) {
        const getData = async () => {
          const res = await ax.get("/api/load", {
            params: {
              uuid
            }
          })
          if(res.data !== false) {
            console.log(res.data, "loaded from uuid")
            setVillagers(res.data.lists)
          } else {
            console.log("res.data is false")
          }
        }
        getData()
      }
    }, [uuid])
  
    return (
      <Cont>
        <DndProvider backend={TouchBackend} options ={{
        enableTouchEvents:false,
        enableMouseEvents:true
    }}>
      <Header text="Your Villager Wishlist" />
      <h3>{uuid}&#39;s wishlist</h3>
      
        {/* need to push the wishlisted villagers to data array in the usestate^ */}
        {villagers && Object.keys(villagers).length >= 1 ? 
          <Content>
            {villagers && Object.values(villagers).map((o) => (
              // <motion.div whileHover={{ scale: 1.03 }} key={o._id} >
              <Villagers 
              type="indvillager"
                key={o._id}
                // onClick={() => {r.push(`/profile/${o._id}`);}}
                name={o.name}
                src={o.image_url}
                bgcolor={o.personality ? bg[o.personality] : none}
                innercolor={o.personality ? innerCircle[o.personality] : none}
                starDisplay="none"
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

        <DeleteZone>
        </DeleteZone>
          <BottomNav />

          </DndProvider>
        </Cont>
    );
  }
  