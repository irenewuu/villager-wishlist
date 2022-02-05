import React, {useState} from 'react';
import styled from 'styled-components'
import BottomNav from '../comps/BottomNav'
import Header from '../comps/Header'
import Villagers from '../comps/Villagers'
import SearchBar from '../comps/SearchBar/SearchBar'

const Cont = styled.div`
  width: 100vw; 
  // height: 100vh;
  display:flex;
  align-items:center;
  flex-direction: column;
`

const VillCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-column-gap: 5%;
`;
const BackgroundBlur = styled.div`
  position: absolute;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.25);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease-in-out;
`;

export default function Search() {
  const [opacity, setOpacity] = useState(false);
  const [zIndex, setzIndex] = useState(false);

  const HandleClick2 = () => {
        setOpacity(!opacity)
        setzIndex(!zIndex)
  }
  return (
    <Cont>
      <Header text='header prop is text'/>
      <SearchBar />
      {/* <BackgroundBlur 
        opacity = {opacity ? 1 : 0}
        zIndex = {zIndex ? 5 : -10}/> */}
      <VillCont>
        <Villagers 
        width='148px'
        left='110px'
        innerWidth="114px"
        innerHeight="114px"
        marginR='5px'
        />
        <Villagers
          width='148px'
          left='110px'
          bgcolor="#D4ECD3"
          innercolor="#88C9A1"
          innerWidth="114px"
          innerHeight="114px"
          marginL='5px'
          />
        <Villagers
          width='148px'
          left='110px'
          bgcolor="#DEF1EF"
          innercolor="#A4D8D4"
          innerWidth="114px"
          innerHeight="114px"
          marginR='5px'
          />
        <Villagers
          width='148px'
          left='110px'
          bgcolor="#FFE6E8"
          innercolor="#FEBDC3"
          innerWidth="114px"
          innerHeight="114px"
          marginL='5px'
          />
        <Villagers 
        width='148px'
        left='110px'
        innerWidth="114px"
        innerHeight="114px"
        marginR='5px'
        />
        <Villagers
          width='148px'
          left='110px'
          bgcolor="#D4ECD3"
          innercolor="#88C9A1"
          innerWidth="114px"
          innerHeight="114px"
          marginL='5px'
          />
            <Villagers
          width='148px'
          left='110px'
          bgcolor="#DEF1EF"
          innercolor="#A4D8D4"
          innerWidth="114px"
          innerHeight="114px"
          marginR='5px'
          />
        <Villagers
          width='148px'
          left='110px'
          bgcolor="#FFE6E8"
          innercolor="#FEBDC3"
          innerWidth="114px"
          innerHeight="114px"
          marginL='5px'
          />
      </VillCont>
      <BottomNav searchColor='#474747' searchTextColor='#474747'/>
    </Cont>
  )
}
