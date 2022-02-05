import styled from 'styled-components'
import BottomNav from '../comps/BottomNav'
import Header from '../comps/Header'
import Villagers from '../comps/Villagers'

const Cont = styled.div`
  width: 100vw; 
  height: 100vh;
  display:flex;
  align-items:center;
  flex-direction: column;
`

const VillCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  // grid-column-gap: 5%;
`;

export default function Search() {
  return (
    <Cont>
      <Header text='header prop is text'/>
      <Header text='search bar here'/>
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
