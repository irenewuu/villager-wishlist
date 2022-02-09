import React, {useState} from 'react';
import styled from 'styled-components';
import ax from 'axios';

import { useSearchFilter } from '../utils/provider';
import BottomNav from '../comps/BottomNav'
import Header from '../comps/Header'
import Villagers from '../comps/Villagers'
import SearchBar from '../comps/SearchBar/SearchBar'

var timer = null;

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
  grid-column-gap: 8px;
  margin-bottom: 100px;
`;

export default function Search() {
  const [data, setData] = useState([]);
  const {searchFilter, setSearchFilter} = useSearchFilter();
  const inputFilter = async (txt) => {
    console.log(txt)
    // var txt = txt.toLowerCase();

    if(timer) {
      clearTimeout(timer);
      timer=null;
    }

    if(timer === null) {
      timer = setTimeout(async()=>{
        console.log("async call");
        const res = await ax.get('/api/villagers', {
          params: {
            txt:txt,
            
          }
        })

        console.log(res.data);
        setData(res.data);
        timer = null;
      }, 1000);
    }

  }

  return (
    <Cont>
      <Header text='header prop is text'/>
      <SearchBar onTextChange={(e)=>{inputFilter(e.target.value)}} />

      <VillCont>
      {data && data.length > 0 ? (
      data.map((o,i)=>
        <Villagers 
          key={o.id}
          src={o.image_url}
          width='148px'
          left='110px'
          innerWidth="114px"
          innerHeight="114px"
          name={o.name} />)) : (
            // place a text bubble here? + on page load put all villagers first
            <h6>Villagers not found!</h6>
          )}
        {/* <Villagers 
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
          /> */}
      </VillCont>
      <BottomNav searchColor='#474747' searchTextColor='#474747'/>
    </Cont>
  )
}
