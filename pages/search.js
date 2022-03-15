import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ax from "axios";
import { motion } from "framer-motion";

import { usePersonality, useHobby, useGender } from "../utils/provider";

import BottomNav from "../comps/BottomNav";
import Villagers from "../comps/Villagers";
import SearchBar from "../comps/SearchBar/SearchBar";

import {bg} from '../utils/variables'
import {innerCircle} from '../utils/variables'


var timer = null;
const numvillagers = 480;

const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
`;

const ResultsCont = styled.div`
  display: flex;
  flex-direction: column;
`;

// const VillagersCont = styled(motion.div)`
const VillagersCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  margin-bottom: 50px;
`;

//Hover motion
// const Selection = styled(motion.div)`
//   display: flex;
//   justify-content: space-evenly;
//   flex: 1;
//   flex-wrap: wrap;
//   flex-direction: row;
// `;

//Pagination
const PagiCont = styled.div`
display:flex;
justify-content: space-evenly;
max-width: 600px;
margin-bottom: 50px;

`
const PagiButt = styled.button`
  border: 2px solid #8CC8A2;
  padding: 10px 15px 10px 15px;
  background: white;
  color:#8CC8A2;
  border-radius: 8px;
  margin-right:10px;
`

export default function Search() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { personalityFilter } = usePersonality();
  const { hobbyFilter } = useHobby();
  const { genderFilter } = useGender();
  const [cur_page, setCurPage ]=useState([]);
  const [villager_num, setVillager_num] = useState();
  const [text, setText] = useState('');
  

  var timer = null;
  // pagination & text input function ===================================================
  const TextInput = async(txt, p)=>{
    console.log(txt);
    
    var obj = {};
    if(txt) { obj.txt = txt; }
    
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    if (timer === null) {
      timer = setTimeout(async () => {
        
        const res = await ax.get("api/villagers", {
          params: {
            txt: txt,
            page:p,
            num:10,
            ...obj,
              personality: personalityFilter.length >= 1 ? JSON.stringify(personalityFilter) : '',
              hobby: hobbyFilter.length >= 1 ? JSON.stringify(hobbyFilter) : '',
              gender: genderFilter.length >= 1 ? JSON.stringify(genderFilter) : '',
            },
          });
          console.log(res.data, "data");

          setData(res.data.lists);
          setText(txt);
          setCurPage(p);
          setVillager_num(res.data.numvillagers)
  
          timer = null;
      }, 1000);
    }
  };

  return (
    <Cont>
      <SearchBar onTextChange={(e) => {inputFilter(e.target.value);}} />
      {/* if data is true and data.length is greater than 0, show the list of villagers */}
      {data && data.length > 0 ? 
        <ResultsCont>
          <VillagersCont> 
            {data.map((o, i) => (
              <motion.div whileHover={{ scale: 1.03 }} key={o._id} >
                  <Villagers key={o._id}
                    name={o.name}
                    onClick={() => {router.push(`/profile/${o._id}`);}}
                    src={o.image_url}
                    width="148px"
                    left="110px"
                    innerWidth="114px"
                    innerHeight="114px"
                    bgcolor={o.personality ? bg[o.personality] : none}
                    innercolor={o.personality ? innerCircle[o.personality] : none}
                  />
                </motion.div>
              ))}
          </VillagersCont>
          <PagiCont> {butt_arr} </PagiCont>

        </ResultsCont>
        // else show this
           :  <p>Type to search something!</p>
          } 

      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </Cont>
  );
}