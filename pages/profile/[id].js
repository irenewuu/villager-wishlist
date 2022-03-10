import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import ax from 'axios';
import styled from 'styled-components';

import ProfileComp from '../../comps/Profile'
import BottomNav from '../../comps/BottomNav';

import {bg} from '../../utils/variables'
import {innerCircle} from '../../utils/variables'


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  text-align: center; 
  // height: 100%;
  box-sizing: border-box;
  margin-bottom: 80px;
`;

export default function Profile() {    
  const [villager, setVillager] = useState(null);

  const router = useRouter();
  const {id} = router.query;

  useEffect(()=>{
    if(id) {
      const GetVillager = async()=> {
        const res = await ax.get(`https://villager-wishlist.herokuapp.com/profile/${id}`, {
          params: {
            _id:id
          }
        });
        console.log(res.data);

        if(res.data) {
          setVillager(res.data)
        }
      }
      GetVillager();
    }
  }, [id])

    if(villager === null ) {
      return <div></div>
      // <div>no results for this villager id: {id}</div>
    }


  return (
    <Cont>
        <ProfileComp
          name={villager.name}

          // color association
          bg = { villager.personality ? bg[villager.personality] : none}
          innerCircleBg = {villager.personality ? innerCircle[villager.personality] : none}

          // villager information
          villagerImg={villager.image_url}
          catchPhrase={villager.phrase}
          gender={villager.gender}
          personality={villager.personality}
          // if the value does not exist, show "n/a", else show the value
          hobby={villager.nh_details === null ? "n/a" : villager.nh_details.hobby}
          birthday={villager.birthday_month  == "" && villager.birthday_day == "" ? "n/a" : villager.birthday_month + " " + villager.birthday_day}
          favSong={villager.nh_details === null ? "n/a" : villager.nh_details.house_music}
        /> 
        <BottomNav/>
        
    </Cont>
  )
}