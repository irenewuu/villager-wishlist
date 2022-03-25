import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useDrag, useDrop } from 'react-dnd'
import { Delete } from "@styled-icons/typicons/Delete";

import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ax from "axios";


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
  margin-top: -18px;
`;

const Name = styled.p`
  font-size: 40px;
  margin-top: 10px;
  color: #474747;
`;

const DeleteButton = styled(Delete)`
  position: relative;
  display: ${props=>props.display};
  left: 145px;
  width: 35px;
  color: black;
  opacity: 0.2;
  cursor: pointer;
  z-index: 100;
`;

const Img = styled.img`
  width: 100px;
  object-fit: contain;
  padding: 15px;
`;


export const VillagersDnd = ({
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
  onClick = () => {},
  children=null,
  vilpos=null,
  type='villager',
  onUpdateVil=()=>{},
  id, text, index, moveCard,
  deleteClick = () => {},
}) => {
  const r = useRouter();
  
  //===========DND POSITION===============

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'villager',
    collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        };
    },
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      // console.log('hovering', hoverIndex, dragIndex, item);
      if (dragIndex === hoverIndex) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
        // Determine rectangle on screen
        // const hoverBoundingRect = ref.current?.getBoundingClientRect();
        // // Get vertical middle
        // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // // Determine mouse position
        // const clientOffset = monitor.getClientOffset();
        // // Get pixels to the top
        // const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // // Only perform the move when the mouse has crossed half of the items height
        // // When dragging downwards, only move when the cursor is below 50%
        // // When dragging upwards, only move when the cursor is above 50%
        // // Dragging downwards
        // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //     return;
        // }
        // // Dragging upwards
        // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //     return;
        // }
        // Time to actually perform the action
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        //item.index = hoverIndex;
    },
});

// const [{ isDragging, coords }, drag] = useDrag({
//   type: 'villager',
//   item: () => {
//       return { id, index };
//   },
//   collect: (monitor) => ({
//     isDragging: monitor.isDragging(),
//     coords: monitor.getClientOffset()
//   }),
// });
// // drag(drop(ref));


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
    type:'villager',
    item: {name: type, index},
    end:(item, monitor)=>{
      if(type === 'indvillager'){
        if(!monitor.didDrop()){
          setPos({
            left:monitor.getClientOffset().x + 30,
            top:monitor.getClientOffset().y - 220/2,
            position:'relative'
          })
        }
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
    // console.log(coords, index)
    sty.left = coords.x +0;
    sty.top = coords.y - 220/2;
    sty.position = 'absolute';
    
  }
  
  drag(drop(ref));
  return (
    <Cont ref={ref} {...sty}
      onBlur={()=>setShowInput(false)}
      width={width}
      bgcolor={bgcolor}
      marginL={marginL}
      marginR={marginR}
    >
      <DeleteButton 
        onClick={()=>{
          deleteClick();
        }}
      />
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
