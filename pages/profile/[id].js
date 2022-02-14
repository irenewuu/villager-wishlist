import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Popup from '../../comps/popup'
import ProfileComp from '../../comps/Profile'
import Button from '../../comps/Button'
import styled from 'styled-components';
import BottomNav from '../../comps/BottomNav';
import { useRouter } from 'next/router';
import acnh from '../../utils/ac-villagers.json';
import ax from 'axios'


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
    const router = useRouter()
    // console.log(router.query.id)
    const {villagerId} = router.query
    console.log(villagerId)
    var villager = acnh[router.query.id]


    
  return (
    <Cont>
        <ProfileComp
          name={villager.name}
          villagerImg={villager.image_url}
          catchPhrase={villager.phrase}
          gender={villager.gender}
          personality={villager.personality}
          
          hobby={villager.nh_details === null ? "n/a" : villager.nh_details.hobby}
          birthday={villager.birthday_month  == "" && villager.birthday_day == "" ? "n/a" : villager.birthday_month + " " + villager.birthday_day}
          favSong={villager.house_music === null ? "n/a" : villager.house_music}
        /> 
        <BottomNav/>
        
    </Cont>
  )
}
// export async function getServerSideProps(context) {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`http://localhost:3000/profile/${context.params.id}`)
//   const villagerInfo = await res.json()

//   return { 
//     props: { 
//       villagerInfo, 
//       fallback: false 
//     } 
//     }
// }

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`profile`)
//   const villagerInfo = await res.json()

//   const paths = villagerInfo.map((o) => ({
//     params: { id: o.id },
//   }))
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return { props: { paths, fallback: false } }
// }

// export async function getStaticProps({ data }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`profile/${data.id}`)
//     const villagerInfo = await res.json()
  
//     // Pass post data to the page via props
//     return { props: { villagerInfo } }
//   }
  