import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ax from "axios";
import { motion } from "framer-motion";

import { filter_themes, usePersonality, useHobby, useGender } from "../utils/provider";
import {bg, innerCircle} from '../utils/variables';

import BottomNav from "../comps/BottomNav";
import Villagers from "../comps/Villagers";
import SearchBar from "../comps/SearchBar/SearchBar";

export default function Search() {
  const router = useRouter();

  const { personalityFilter } = usePersonality();
  const { hobbyFilter } = useHobby();
  const { genderFilter } = useGender();
  
  const [data, setData] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [cur_page, setCurPage ] = useState([]);
  const [villager_num, setVillager_num] = useState();
  const [text, setText] = useState('');

  var timer = null;
  // pagination & text input function ===================================================
  const TextInput = async(txt, p)=>{
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
            token: window.localStorage.getItem('token')
          },
        });
        // console.log(res.data, "data");        
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
    // star villager if villager is in wishlist ======================================
    const getData = async () => {
      const res = await ax.get("/api/wishlist", {
        params: {
          token: window.localStorage.getItem('token')
        }
      })
      if(res.data !== false) {
        var villagerData = []
        for(var i = 0; i < res.data.length; i++) {
          villagerData.push(res.data[i].villager)
        }
        setWishList(villagerData)
      }
    }
    getData()
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
          color: cur_page === ind? "white":"#8CC8A2"}} key={ind} >
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

  // saving/deleting villager data to/from wishlist ================================================
  const HandleSave = async(o) => {
    const resp = await ax.post('/api/wishlist', {
      token: window.localStorage.getItem('token'),
      villager: o
    })
  }

  const HandleDelete = async(o) => {
    const resp = await ax.delete('/api/wishlist', {
    params: {
      token: window.localStorage.getItem('token'),
      villager: o
    }})
  }

  return (
    <div className="SearchCont">
      <SearchBar onTextChange={(e) => {TextInput(e.target.value);}} />
      {data && data.length > 0? 
        <div className="ResultsCont">
          <div className="VillagersCont"> 
            { data.length > 0 ? data.map((o, i) => (
              <motion.div whileHover={{ scale: 1.03 }} key={o._id} >
                  <Villagers
                    name={o.name}
                    onClick={() => {router.push(`/profile/${o._id}`);}}
                    fillStarClick={()=> {HandleSave(o._id)}}
                    unStarClick={()=> {HandleDelete(o._id)}}
                    src={o.image_url}
                    width="148px"
                    left="110px"
                    innerWidth="114px"
                    innerHeight="114px"
                    bgcolor={o.personality ? bg[o.personality] : none}
                    innercolor={o.personality ? innerCircle[o.personality] : none}
                    wishListed={wishList.filter(w => w._id == o._id).length > 0}
                  />
                </motion.div>
              )) 
              : <></> }
          </div>
          <div className="PagiCont"> {butt_arr} </div>
        </div>
          :  <div></div>
        }

      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </div>
  );
}
