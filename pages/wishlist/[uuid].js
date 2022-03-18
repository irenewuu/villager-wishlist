import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import ax from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend'
import { v4 as uuidv4 } from "uuid";

import {bg} from '../../utils/variables';
import {innerCircle} from '../../utils/variables';

import Villagers from "../../comps/Villagers";
import Header from '../../comps/Header'
import TextBubble from '../../comps/TextBubble';
import Button from '../../comps/Button';
import BottomNav from "../../comps/BottomNav";
import DeleteZone from"../../comps/DeleteZone";

import { DragDropContext, Droppable, Draggable  } from "react-beautiful-dnd";


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100%;
`;
const BubbleCont = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`

const Photo = styled.img`
  padding: 15px;
  margin-top: 15px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;



export default function Wishlist() {
    const r = useRouter();
    const {uuid} = r.query;

    const [villagers, setVillagers] = useState({});
    const [vil, setVil] = useState({});
    //for drag n drop
    // const [villager, updateVillager] = useState({});
    const [columns, setColumns] = useState({});
    
    useEffect(()=> {
      if(uuid) {
        const getData = async () => {
          const res = await ax.get("/api/load", {
            params: {
              uuid
            }
          })
          if(res.data !== false) {
            console.log(res.data, "loaded from uuid")
            setVillagers(res.data)
            // console.log(villagers, "villagers data")
          } else {
            console.log("res.data is false")
          }
          const villagerIds = Object.values(villagers).map((o, i)=> o._id)
          setColumns({
              'villagers': {...villagers},
              'villagercolumn': {
                id: "villagercolumn",
                title: "villager wishlist",
                villagerIds: [...villagerIds]
              }
          })
  
          // console.log(columns, "columns")
        }//
        getData()
      }
    }, [uuid])

    
    function handleOnDragEnd(result){
      const {destination, source, draggableId} = result;

      if (!destination) { return;}
      if(destination.droppableId === source.droppableId &&
        destination.index === source.index) {
          console.log("returned empty")
          return;
      }

      const column = columns[source.droppableId];
      console.log(source, "source")
      const newTaskIds = Array.from(column.villagerIds);
      console.log(newTaskIds, "new task ids")
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
//
      setColumns({
        ...column,
        villagerIds: newTaskIds
      })
      console.log(columns, "new columns?")
    }
  
    console.log(villagers, 'villagers list')
    console.log(columns, "columns")
    return (
      <Cont>
      <Header text="Your Villager Wishlist" />
      <h3>{uuid}&#39;s wishlist</h3>
  
        {/* need to push the wishlisted villagers to data array in the usestate^ */}
        {Object.keys(villagers).length >= 1 ? 
        <DragDropContext onDragEnd={result => handleOnDragEnd(result)}>

          {/* column */}
          <Droppable droppableId="villagercolumn">

          {(provided)=>(
            <Content {...provided.droppableProps} ref={provided.innerRef}>

              {Object.values(villagers).map((o, index) => (
                <Draggable key={o._id} draggableId={o._id} index={index} >
                  {(provided) =>(
                    <motion.div whileHover={{ scale: 1.03 }} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                      <Villagers 
                        // key={o._id}
                        // onClick={() => {r.push(`/profile/${o._id}`);}}
                        name={o.name}
                        src={o.image_url}
                        bgcolor={o.personality ? bg[o.personality] : null}
                        innercolor={o.personality ? innerCircle[o.personality] : null}
                        starDisplay="none"
                      />
                    </motion.div>
                )}
                </Draggable>
              ))}

              {provided.placeholder}

            </Content>
          )}
          </Droppable>

          </DragDropContext>

          : <Content>
            <BubbleCont>
              <TextBubble text="You have no villagers in your wishlist." />
            </BubbleCont>
            <Button text='Find Villagers' textHover="none" onClick={()=>{r.push("/search")}} />
  
            <Photo src="/find-villagers.svg" />
          </Content>
        }

        {/* <DeleteZone>
        </DeleteZone> */}
          <BottomNav />

          {/* </DndProvider> */}
        </Cont>
    );
  }
  