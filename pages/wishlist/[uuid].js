import { useRouter } from "next/router";
import styled from 'styled-components';

import Villagers from '../../comps/Villagers';
import BottomNav from '../../comps/BottomNav';
import Header from '../../comps/Header';


const Cont = styled.div`
  width: 100%; 
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;



export default function Wishlist() {
    const r = useRouter();
    const {uuid} = r.query;
  return (
    <Cont>
      <Header text="Your Villager Wishlist"/>
      
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