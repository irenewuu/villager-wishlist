import React, {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import ax from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { decodeToken } from "react-jwt";

import { useUserToken, useUserId } from "../../utils/provider";
import {bg} from '../../utils/variables';
import {innerCircle} from '../../utils/variables';

import Villagers from "../../comps/Villagers";
import Header from '../../comps/Header'
import TextBubble from '../../comps/TextBubble';
import Button from '../../comps/Button';
import BottomNav from "../../comps/BottomNav";

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

    useEffect(()=>{
      setUserToken( window.localStorage.getItem('token'))
      console.log(userToken)
      
      if(userToken !== undefined)
      {
        const myDecodedToken = decodeToken(userToken);
        setUserId(myDecodedToken.id)
      }
  
    },[userToken])
    console.log(userId, "user id")

    useEffect(()=> {
      if(userToken) {
        const getData = async () => {
          const res = await ax.get("/api/load", {
            params: {
              token: userToken
            }
          })
          if(res.data !== false) {
            console.log(res.data, "loaded from token")
            setVillagers(res.data)
          } else {
            console.log("no data in wishlist")
          }
        }
        getData()
      }
    }, [userToken])
  

    return (
      <div className="Cont">
      <Header text="Your Villager Wishlist" />

        {villagers && Object.keys(villagers).length >= 1 ? 
          <Content>
            {villagers && Object.values(villagers).map((o) => (
              <motion.div key={o._id} 
              onClick={() => {r.push(`/profile/${o._id}`);}}
              whileHover={{ scale: 1.03 }} >
              <Villagers 
                key={o._id}
                name={o.name}
                src={o.image_url}
                bgcolor={o.personality ? bg[o.personality] : none}
                innercolor={o.personality ? innerCircle[o.personality] : none}
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
        }
          <BottomNav />
        </div>
    );
  
}
  