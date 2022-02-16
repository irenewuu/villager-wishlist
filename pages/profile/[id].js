import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import ax from 'axios'
import styled from 'styled-components';
import acnh from '../../utils/ac-villagers.json'

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

export default function Profile({
}) {

    // const router = useRouter()
    // // get id of villager from the query
    // var villager = acnh[router.query.id]

    
  const [data, setData] = useState([]);
    const acnhList = async () => {
      console.log("async call");
      const res = await ax.get("/api/villagers", {
        params: {
          // personality: personalityFilter,
          id: _id
        },
      });
      console.log(personalityFilter);
      console.log(res.data);
      setData(res.data);
    };
    acnhList()
    
  return (
    <Cont>
        { data.map((o,i)=>{
        <ProfileComp
          name={o.name}
          villagerImg={o.image_url}
          catchPhrase={o.phrase}
          gender={o.gender}
          personality={o.personality}
          // if the value does not exist, show "n/a", else show the value
          // hobby={o.nh_details === null ? "n/a" : o.nh_details.hobby}
          birthday={o.birthday_month  == "" && o.birthday_day == "" ? "n/a" : o.birthday_month + " " + o.birthday_day}
          // favSong={o.nh_details === null ? "n/a" : o.nh_details.house_music}
        /> 
      })}
        <BottomNav/>
        
    </Cont>
  )
}

// export async function getStaticProps(req, res) {
  
//     // res = await ax.get("/api/villagers", villager(id))
//     const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))
//     // console.log(villagers)
//     // res.status(200).json(acnhList)
  
//     return { 
//       props: {
//         acnhList
//       }
//     }
//   }


// export async function getStaticPaths() {
  
//       // const paths = acnh.map((o) => ({
//       //   params: { id: id },
//       // }))

//       const acnhList = acnh.map((o, _id) => Object.assign(o,  {_id} ))

//       const paths = acnhList.map((o) => ({
//         params: { id: o._id.toString() },
//       }))
//       console.log(paths)
//       return { paths, fallback: false }
// }