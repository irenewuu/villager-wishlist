import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import ax from 'axios';
import styled from 'styled-components';

import ProfileComp from '../../comps/Profile'
import BottomNav from '../../comps/BottomNav';


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
        const res = await ax.get("/api/villagers", {
          params: {
            id:id
          }
        });
        console.log(res.data);

        if(res.data[0]) {
          setVillager(res.data[0])
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
          bg = { villager.personality == "Jock" || villager.personality == "Normal" ? "#DEF1EF"     // blue
          : villager.personality == "Peppy" || villager.personality == "Lazy" ? "#FFF8D4"           // yellow
          : villager.personality == "Snooty" || villager.personality == "Smug" ? "#D4ECD3"          // green
          : villager.personality == "Big sister" || villager.personality == "Cranky" ? "#FFE6E8"    // pink
          : none}
          innerCircleBg = {villager.personality == "Jock" || villager.personality == "Normal" ? "#A4D8D4"  // blue
          : villager.personality == "Peppy" || villager.personality == "Lazy" ? "#FFF2AF"                 // yellow
          : villager.personality == "Snooty" || villager.personality == "Smug" ? "#98C7A4"                // green
          : villager.personality == "Big sister" || villager.personality == "Cranky" ? "#FEBDC3"          // pink
          : none}

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