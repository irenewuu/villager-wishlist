import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import acnh from '../../utils/ac-villagers.json';

import ProfileComp from '../../comps/Profile'
import BottomNav from '../../comps/BottomNav';


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; 
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
`;

export default function Profile() {

    const router = useRouter()
    // get id of villager from the query
    var villager = acnh[router.query.id]
    
  return (
    <Cont>
        <ProfileComp
          name={villager.name}
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