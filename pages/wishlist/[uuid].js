import Head from 'next/head'
import Image from 'next/image'
import Villagers from '../../comps/Villagers'
import styled from 'styled-components'
import BottomNav from '../../comps/BottomNav'

import { useRouter } from "next/router";

const Cont = styled.div`
width: 100vw; 
height: 100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`
const Heading =styled.h1`
font-size: 47px;
color: #08847C;
margin-bottom: 20px;
`




export default function Wishlist() {
    const r = useRouter();
    const {uuid} = r.query;
  return (
    <Cont>

      <Heading>Your Villager Checklist</Heading>
      {/* just testing  */}
      <h3>{uuid} - just testing! </h3>
      
        <Villagers/>
        <Villagers
        bgcolor="#D4ECD3"
        innercolor="#88C9A1"
        
        />
        <Villagers
        bgcolor="#DEF1EF"
        innercolor="#A4D8D4"
        />

  <BottomNav></BottomNav>
    

        
    </Cont>


  )
}