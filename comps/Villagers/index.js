import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDrag, useDrop } from 'react-dnd'
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

import { useWishlist } from "../../utils/provider";
import { v4 as uuidv4 } from 'uuid';
import ax from "axios";
// import { useEffect } from 'react/cjs/react.production.min';


const Cont = styled.div`
  background-color: ${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 220px;

  margin-top: 20px;
  margin-left: ${(props) => props.marginL};
  margin-right: ${(props) => props.marginR};
  border-radius: 20px;
  user-select: none;
  cursor: pointer;

  ${({position, left, top})=>(position === 'fixed' || position === 'absolute') && `
  left:${left}px;
  top:${top}px;
  position:${position};
  `}
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
  children=null,
  vilpos=null,
  type='villager',
  onUpdateVil=()=>{},
  item, index, moveItem, status
}) {
  const [star, setStar] = useState(false);
  const [villager, setVillager] = useState({});
  const {wishlist, setWishlist} = useState();;
  const r = useRouter();
  const {uuid} = r.query;
  const ref = useRef(null);

  
  //===========DND POSITION===============
  const [pos, setPos] = useState(vilpos || {
    top:0,
    left:0,
    position:'relative'
  });

  useEffect(()=>{
    if(type === 'indvillager'){
      onUpdateVil({pos})
    }
  }, [pos])

  const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    // type,
    type: 'item',
    item: {name: type},
    end:(item, monitor)=>{
      if(type === 'indvillager'){
        setPos({
          left:monitor.getClientOffset().x - 350/2,
          top:monitor.getClientOffset().y - 220/2,
          position:'relative'

        })
      }
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      coords: monitor.getClientOffset()
    })
  }))

  const sty={
    left: type==='indvillager' ? pos.left : null,
    top: type==='indvillager' ? pos.top : null,
    position: type==='indvillager' ? pos.position : null
  }
  if(coords && isDragging){
    console.log(coords)
    sty.left = coords.x - 350/2;
    sty.top = coords.y - 220/2;
    sty.position = 'absolute';
    
  }

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // accept: ['notes', 'stickers'],
    // accept,
    accept: 'item',
    // drop:(item, monitor)=>{
    //   onDropItem(item);
    // },
    // // Props to collect
    // collect: (monitor) => ({
    //   isOver: monitor.isOver(),
    //   canDrop: monitor.canDrop()
    // })
    hover(item, monitor) {
      if(!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if(dragIndex === hoverIndex) {
        return
      }

      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY){
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  }))

  drag(drop(ref));

//===========DND POSITION ENDS===============

  const AddingVillager = () => {
    const villager_id = uuidv4()
    setVillager((prev)=>({
      ...prev,
      [villager_id]: {villagerid:villager_id}
    }))
    HandleSave()
  }


  const HandleSave = async() => {
    console.log(villager, 'villager list')
    const resp = await ax.post('/api/save', {
      uuid,
      villager
    })
  }


  return (
    <Cont ref={drag}  {...sty}
      onBlur={()=>setShowInput(false)}
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
