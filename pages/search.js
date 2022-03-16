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
            token:localStorage.getItem('token')
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
  }


  // default
  useEffect(()=>{
    TextInput('', 1);
  }, [])

  // pagination function ============================================================
  var butt_arr = [];
  var ind = 1;
  for(var i = 0; i < villager_num; i += 10){
    butt_arr.push(
      <button onClick={TextInput.bind(this, text, ind)}
        className="PagiButton"
        style={{
          backgroundColor: cur_page === ind?"#8CC8A2":"white",
          color: cur_page === ind? "white":"#8CC8A2"}}>
        {ind}
    </button>
    );
    ind++;
  }

  // active page button arragement ==================================================
  var numpages = Math.ceil(villager_num/10);
  if(cur_page == 1) {
    var lastpage = cur_page+4;
  } else if(cur_page == 2){
    var lastpage = cur_page+3;
  } else {
    var lastpage = cur_page+2;
  }
  if(lastpage > numpages){
    lastpage = numpages;
  }

  // slicing array of villagers to pages of 10
  butt_arr = butt_arr.slice(cur_page-3 < 0 ? 0 : cur_page-3, lastpage);
  // console.log(numpages, "numpages")
  // console.log(butt_arr, "butt_arr")

  return (
    <div className="SearchCont">
      <SearchBar onTextChange={(e) => {TextInput(e.target.value);}} />
      {/* if data is true and data.length is greater than 0, show the list of villagers */}
      {data && data.length > 0 && data !== "not author" ? 
        <div className="ResultsCont">

          <div className="VillagersCont"> 
            {/* {data.slice(0, 10).map((o,i) => ( */}
            { data.length > 0 && data !== "not author" ? data.map((o, i) => (

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
              )) 

              : <></> }
          </div>
          <div className="PagiCont"> {butt_arr} </div>

        </div>
          :  <div>
            <p>Please login to continue!</p>
          </div>
        }

      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </div>
  );
}
