import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

import { useWishlist } from "../../utils/provider";
import { v4 as uuidv4 } from 'uuid';
import ax from "axios";

const Cont = styled.div`
  background-color: ${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: ${(props) => props.width};
  height: 220px;

  margin-top: 20px;
  margin-left: ${(props) => props.marginL};
  margin-right: ${(props) => props.marginR};
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
`;

const InnerCont = styled.div`
  width: ${(props) => props.innerWidth};
  height: ${(props) => props.innerHeight};
  background-color: ${(props) => props.innercolor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const Name = styled.p`
  font-size: 40px;
  margin-top: 10px;
  color: #474747;
`;

const StarFilled = styled(StarFill)`
  color: #f7d359;
  position: absolute;
  display: ${props=>props.display};
  left: ${(props) => props.left};
  top: 15px;
  width: 25px;
  z-index: 3;
`;

const StarOutline = styled(Star)`
  color: #f7d359;
  position: absolute;
  display: ${props=>props.display};
  left: ${(props) => props.left};
  background: transparent;
  top: 15px;
  width: 25px;
  z-index: 3;
`;

const Img = styled.img`
  width: 100px;
  object-fit: contain;
  padding: 15px;
`;


export default function Villagers({
  // villager,
  width = "350px",
  bgcolor = "",
  innercolor = "",
  name = "Apple",
  src = "/apple.png",
  left = "300px",
  innerWidth = "140px",
  innerHeight = "140px",
  marginL = "0px",
  marginR = "0px",
  starDisplay = "block",
  onClick = () => {},
}) {
  const [star, setStar] = useState(false);
  const [villager, setVillager] = useState({});
  const {wishlist, setWishlist} = useState();;
  const r = useRouter();
  const {token} = r.query;

  const AddingVillager = () => {
    const villager_id = uuidv4()
    setVillager((prev)=>({
      ...prev,
      [villager_id]: {villagerid:villager_id}
    }))
    HandleSave()
    console.log(villager, "whats this villager data")
  }


  const HandleSave = async() => {
    const resp = await ax.post('/api/save', {
      token,
      villager
    })
    console.log(villager, 'villager list')
    console.log(resp, "what abt this")
  }


  return (
    <Cont
      width={width}
      bgcolor={bgcolor}
      marginL={marginL}
      marginR={marginR}
    >

      {!star ? (
        <StarOutline
          left={left}
          display={starDisplay}
          onClick={() => {
            setStar(true);
            console.log("filled the star");
            AddingVillager()
          }}
        />
      ) : (
        <StarFilled
          left={left}
          display={starDisplay}
          onClick={() => {
            setStar(false);
            console.log("unfilled the star");
          }}
        />
      )}
      <InnerCont
        onClick={onClick}
        innercolor={innercolor}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
      >
        <Img src={src} />
      </InnerCont>
      <Name>{name}</Name>
    </Cont>
  );
}
