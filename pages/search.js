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

var timer = null;

const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const VillagersCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  margin-bottom: 100px;
`;

//Hover motion
const Selection = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function Search() {
  const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }));
  const [data, setData] = useState([]);
  const { personalityFilter } = usePersonality();
  const router = useRouter();

  const inputFilter = async (txt) => {
    console.log(txt);
    const txtInput = txt;
    //capitalize first letter
    const txtCapitalized = txtInput.charAt(0).toUpperCase() + txtInput.slice(1);
    console.log(txtCapitalized);

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (timer === null) {
      timer = setTimeout(async () => {
        console.log("async call");
        const res = await ax.get("/api/villagers", {
          params: {
            txt: txtCapitalized,
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
      <SearchBar
        onTextChange={(e) => {
          inputFilter(e.target.value);
        }}
      />
      <Selection
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
          transition: { ease: "easeIn", duration: 1, delay: 0 },
        }}
      >
        <VillagersCont>
          {/* if data is true and data.length is greater than 0, show the list of villagers */}
          {data && data.length > 0
            ? data.map((o, i) => (
                <motion.div whileHover={{ scale: 1.03 }} key={o._id}>
                  <Villagers
                    onClick={() => {
                      router.push(`/profile/${o._id}`);
                    }}
                    src={o.image_url}
                    width="148px"
                    left="110px"
                    innerWidth="114px"
                    innerHeight="114px"
                    name={o.name}
                  />
                </motion.div>
                // else show villagers up to 50
              ))
            : // : !txtInput ? <p>search smth else</p>

              acnhList.slice(0, 50).map((o, i) => (
                <motion.div whileHover={{ scale: 1.03 }} key={o._id}>
                  <Villagers
                    onClick={() => {
                      router.push(`/profile/${o._id}`);
                    }}
                    src={o.image_url}
                    width="148px"
                    left="110px"
                    innerWidth="114px"
                    innerHeight="114px"
                    name={o.name}
                  />
                </motion.div>
              ))}
        </VillagersCont>
      </Selection>

      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </Cont>
  );
}
