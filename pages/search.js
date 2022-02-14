import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import ax from "axios";

import { usePersonality } from "../utils/provider";
import BottomNav from "../comps/BottomNav";
import Villagers from "../comps/Villagers";
import SearchBar from "../comps/SearchBar/SearchBar";
import acnh from '../utils/ac-villagers.json'

var timer = null;

const Cont = styled.div`
  width: 100vw;
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

export default function Search() {
  const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))
  const [data, setData] = useState([]);
  const { personalityFilter, setPersonalityFilter } = usePersonality();
  const router = useRouter();

  const inputFilter = async (txt) => {
    console.log(txt);
    // var txt = txt.toLowerCase();

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
        console.log(personalityFilter);
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

      <VillagersCont>
        {/* if data is true and data.length is greater than 0, show the list of villagers */}
        {data && data.length > 0
          ? data.map((o, i) => (
              <Villagers
                onClick={() => {
                  router.push(`/profile/${o._id}`);
                }}
                key={o._id}
                src={o.image_url}
                width="148px"
                left="110px"
                innerWidth="114px"
                innerHeight="114px"
                name={o.name}
              />
            ))
          // else show villagers up to 50
          : acnhList.slice(0, 50).map((o, i) => (
              <Villagers
                onClick={() => {
                  router.push(`/profile/${o._id}`);
                }}
                key={o._id}
                src={o.image_url}
                width="148px"
                left="110px"
                innerWidth="114px"
                innerHeight="114px"
                name={o.name}
              />
            ))}
      </VillagersCont>

      <BottomNav searchColor="#474747" searchTextColor="#474747" />
    </Cont>
  );
}
