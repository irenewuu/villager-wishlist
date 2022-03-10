import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ax from "axios";
import { motion } from "framer-motion";

import { usePersonality, useHobby, useGender } from "../utils/provider";
import acnh from "../utils/ac-villagers.json";

import BottomNav from "../comps/BottomNav";
import Villagers from "../comps/Villagers";
import SearchBar from "../comps/SearchBar/SearchBar";

import {bg} from '../utils/variables'
import {innerCircle} from '../utils/variables'



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

var timer = null;
// const numvillagers = 397;
export default function Search() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { personalityFilter } = usePersonality();
  const { hobbyFilter } = useHobby();
  const { genderFilter } = useGender();
  const [cur_page, setCurPage ]=useState([]);
  const [villager_num, setVillager_num] = useState();
  const [text, setText] = useState('');

  // pagination function ===================================================
  const TextInput = async(txt, p)=>{
    console.log(txt);
    var obj = {};
    if(txt) {
      obj.txt = txt;
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    
    if (timer === null) {
      timer = setTimeout(async () => {
        console.log("async call");

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
        // console.log(res.data.lists, "data.lists")
        
        setData(res.data.lists);
        setText(txt);
        setCurPage(p);
        setVillager_num(res.data.numvillagers)

        timer = null;
      }, 1000);
    }
    
  }

  useEffect(()=>{
    TextInput('', 1);
  }, [])

  var butt_arr = [];
  var ind = 1;
  for(var i = 0; i<villager_num; i+=10){
    butt_arr.push(
      <button onClick={TextInput.bind(this, text, ind)}
        style={{
          backgroundColor: cur_page === ind?"#8CC8A2":"white",
          color: cur_page === ind? "white":"#8CC8A2",
          border: "2px solid #8CC8A2",
          padding: "10px 15px 10px 15px",
          marginRight: "10px",
          borderRadius: "8px",
          cursor: "pointer"}}>
        {ind}
    </button>
    );
    ind++;
  }

  var numpages = Math.ceil(villager_num/10);
  var lastpage = cur_page+2;
  // var lastpage = numpages;
  console.log(numpages, "numpages")
  if(lastpage > numpages){
    lastpage = numpages
  }
  
  console.log(butt_arr, "butt_arr") 
  // butt_arr = butt_arr.slice(cur_page-3 < 0 ? 0 : cur_page-3, lastpage);
  butt_arr = butt_arr.slice(cur_page-3 < 0 ? 0 : cur_page-3, lastpage);
  // butt_arr = butt_arr.slice(cur_page-3, lastpage);
  console.log(butt_arr, "butt_arr")
  // if(!cur_page) {
  //   setCurPage(cur_page + 1)
  // } else if(cur_page === 1) {
  //   butt_arr = butt_arr.slice(cur_page-1, cur_page+4);
  // } else if(cur_page === 2) {
  //   butt_arr = butt_arr.slice(cur_page-2, cur_page+3);
  // } else if(cur_page === 3) {
  //   butt_arr = butt_arr.slice(cur_page-3, cur_page+2);
  // } else if(cur_page === 4) {
  //   butt_arr = butt_arr.slice(cur_page-3, cur_page+2);
  // } else if(cur_page === 38){
  //   butt_arr = butt_arr.slice(cur_page-3, cur_page+2);
  // } else if(cur_page === 39) {
  //   butt_arr = butt_arr.slice(cur_page-4, cur_page+1);
  // } else if(cur_page === 40) {
  //   butt_arr = butt_arr.slice(cur_page-5, cur_page+2);
  // } else {
  //   butt_arr = butt_arr.slice(cur_page-4 < 0 ? 0 : cur_page -3, cur_page+2);
  // }

  return (
    <Cont>
      <SearchBar onTextChange={(e) => {TextInput(e.target.value);}} />
      {/* if data is true and data.length is greater than 0, show the list of villagers */}
      {data && data.length > 0 ? 
        <ResultsCont>

          <VillagersCont> 
            {data.slice(0, 10).map((o,i) => (
            // data.map((o, i) => (
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

        </ResultsCont>
          :  <p>Type to search something!</p>
        }

        <PagiCont> {butt_arr} </PagiCont>
      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </Cont>
  );
}


// misc =================================================================================
// data.map((o, i) => (
//     <motion.div whileHover={{ scale: 1.03 }} key={o._id}>
//       <Villagers
//         onClick={() => {router.push(`/profile/${o._id}`);}}
//         src={o.image_url}
//         width="148px"
//         left="110px"
//         innerWidth="114px"
//         innerHeight="114px"
//         name={o.name}
//         bgcolor={o.personality ? bg[o.personality] : none}
//         innercolor={o.personality ? innerCircle[o.personality] : none}
//       />
//     </motion.div>
//   ))