import Head from 'next/head'
import Image from 'next/image'
import Popup from '../../comps/popup'
import ProfileComp from '../../comps/Profile'
import Button from '../../comps/Button'
import styled from 'styled-components';
import BottomNav from '../../comps/BottomNav';
import { useRouter } from 'next/router';
import acnh from '../../utils/ac-villagers.json'


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
  paths
}) {
    const router = useRouter()
    const { queryId } = router.query

  return (
    <Cont>
      {/* temporary slice */}
      {acnh.slice(0, 5).map((o)=>(
        <ProfileComp
          name={o.name}
          villagerImg={o.image_url}
          catchPhrase={o.phrase}
          gender={o.gender}
          personality={o.personality}
        //   hobby={o.nh_details.hobby}
          birthday={o.birthday}
        //   favSong={o.nh_details.house_music}

        />))}
        <p>{queryId}</p>
        <BottomNav/>
        
    </Cont>
  )
}
// export async function getServerSideProps(context) {
//   // Call an external API endpoint to get posts
//   const res = await fetch(`http://localhost:3000/profile`)
//   const villagerInfo = await res.json()

// //   const paths = villagerInfo.map((o) => ({
// //     params: { id: ... },
// //   }))
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return { props: { villagerInfo, fallback: false } }
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
  