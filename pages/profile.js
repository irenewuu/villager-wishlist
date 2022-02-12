import Head from 'next/head'
import Image from 'next/image'
import Popup from '../comps/popup'
import ProfileComp from '../comps/Profile'
import Button from '../comps/Button'
import styled from 'styled-components';
import BottomNav from '../comps/BottomNav';
import acnh from '../utils/ac-villagers.json'


const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
height: 100vh;
width: 100vw;


`;

export default function Profile({
  villagerInfo
}) {

  return (
    <Cont>
      {villagerInfo.map((o)=>(
        <ProfileComp
          name={o.name}
          villagerImg={o.image_url}
          catchPhrase={o.phrase}
          gender={o.gender}
          personality={o.personality}
          hobby={o.nh_details.hobby}
          birthday={o.birthday}
          favSong={o.nh_details.house_music}

        />))}
        <BottomNav/>
        
    </Cont>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(acnh)
  const villagerInfo = await res.json()

  const paths = villagerInfo.map((o) => ({
    params: { id: o.id },
  }))
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return { paths, fallback: false }
}