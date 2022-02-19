import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ax from "axios";
import { motion } from "framer-motion";

import { usePersonality } from "../utils/provider";
import acnh from "../utils/ac-villagers.json";

import BottomNav from "../comps/BottomNav";
import Villagers from "../comps/Villagers";
import SearchBar from "../comps/SearchBar/SearchBar";

import {bg} from '../utils/variables'
import {innerCircle} from '../utils/variables'


var timer = null;
const numBooks = 480;

const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 80px;
`;

const VillagersCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  margin-bottom: 50px;
`;

//Hover motion
const Selection = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`;

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
  const [cur_page, setCurPage ]=useState(0);

  // pagination function ===================================================
  const PageClick = async(p)=>{
    const res = await ax.get("/api/villagers", {
      params:{
        page:p,
        num:10
      }
    });
    console.log(res.data);
    setData(res.data);
    setCurPage(p);
  }

  var butt_arr = [];
  var ind = 1;
  for(var i = 0; i<numBooks; i+=10){
    butt_arr.push(
      <button onClick={PageClick.bind(this, ind)}
        style={{
          backgroundColor:cur_page===ind?"#8CC8A2":"white",
          color:cur_page ===ind? "white":"#8CC8A2",
          border:" 2px solid #8CC8A2",
          padding: "10px 15px 10px 15px",
          background: "white",
          marginRight: "10px",
          borderRadius: "8px"}}>
        {ind}
    </button>
    );
    ind++;
  }


  if(cur_page === 1) {
    butt_arr = butt_arr.slice(cur_page-1, cur_page+4);
  } else if(cur_page === 3) {
    butt_arr = butt_arr.slice(cur_page-2, cur_page+3);
  } else if(cur_page === 46){
    butt_arr = butt_arr.slice(cur_page-3, cur_page+2);
  } else if(cur_page === 47) {
    butt_arr = butt_arr.slice(cur_page-4, cur_page+1);
  } else if(cur_page === 48) {
    butt_arr = butt_arr.slice(cur_page-5, cur_page+2);
  } else {
    butt_arr = butt_arr.slice(cur_page-4 < 0 ? 0 : cur_page -2, cur_page+3);
  }


  // search function ==========================================
  const inputFilter = async (txt) => {
    console.log(txt);
    const txtInput = txt;
    //capitalize first letter
    // const txtCapitalized = txtInput.charAt(0).toUpperCase() + txtInput.slice(1);
    // console.log(txtCapitalized);

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (timer === null) {
      timer = setTimeout(async () => {
        console.log("async call");
        const res = await ax.get("/api/villagers", {
          params: {
            txt: txt,
            personality: personalityFilter,
            // gender: gender,
          },
        });
        console.log(res.data);
        setData(res.data);
        timer = null;
      }, 1000);
    }
  };

  return (
    <Cont>
      <SearchBar onTextChange={(e) => {inputFilter(e.target.value);}} />
      <Selection
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
          transition: { ease: "easeIn", duration: 1, delay: 0 },
        }}>
        <VillagersCont>
          {/* if data is true and data.length is greater than 0, show the list of villagers */}
          {data && data.length > 0
            ? data.map((o, i) => (
                <motion.div whileHover={{ scale: 1.03 }} key={o._id}>
                  <Villagers
                    onClick={() => {router.push(`/profile/${o._id}`);}}
                    src={o.image_url}
                    width="148px"
                    left="110px"
                    innerWidth="114px"
                    innerHeight="114px"
                    name={o.name}
                    bgcolor={o.personality ? bg[o.personality] : none}
                    innercolor={o.personality ? innerCircle[o.personality] : none}

                  />
                </motion.div>
              ))
            : // : !txtInput ? <p>search smth else</p>

            data.map((o, i) => (
                <motion.div whileHover={{ scale: 1.03 }} key={o._id}>
                  <Villagers
                    onClick={() => {router.push(`/profile/${o._id}`);}}
                    src={o.image_url}
                    width="148px"
                    left="110px"
                    innerWidth="114px"
                    innerHeight="114px"
                    name={o.name}
                    bgcolor={o.personality ? bg[o.personality] : none}
                    innercolor={o.personality ? innerCircle[o.personality] : none}
                  />
                </motion.div>
              ))}
        </VillagersCont>
      </Selection>

      <PagiCont> {butt_arr} </PagiCont>

      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </Cont>
  );
}
