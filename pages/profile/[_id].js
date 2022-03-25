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
  align-items: center;
  text-align: center; 
  box-sizing: border-box;
  margin-bottom: 80px;
`;

export default function Profile() {    
  const [villager, setVillager] = useState(null);

  const router = useRouter();
  const {_id} = router.query;

  useEffect(()=>{
    if(_id) {
      const GetVillager = async()=> {
        const res = await ax.get(`../api/ind_villager`, {
          params: {
            _id:_id
          }
        });

        if(res.data) {
          setVillager(res.data)
        }
      }
      GetVillager();
    }
  }, [_id])

  if(villager === null || villager === undefined) {
    return <div></div>
  }

  return (
    <Cont>
        <ProfileComp
          name={villager.name}

          // color association
          bg = { villager.personality ? bg[villager.personality] : null}
          innerCircleBg = {villager.personality ? innerCircle[villager.personality] : null}

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