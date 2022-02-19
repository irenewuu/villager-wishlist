import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {usePersonality, useHobby, useGender} from "../../utils/provider";

import Button from "../Button";

const FilterPanelCont = styled.div`
  display: ${props => props.display};
  position: absolute;
  top: 120px;
  opacity: ${props => props.opacity};
  z-index: ${props => props.zIndex};
  // transition: all 0.5s ease-in-out 0.2s;
`;

const FilterBtn = styled.button`
  width: 80px;
  margin: 8px 8px;
  padding: 8px 0px 4px;
  border-radius: 20px;
  border: 1px solid #007C74;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  user-select: none;
  cursor: pointer;
`;
const BtnsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 8px 0;
`; 

export default function FilterPanel({
  zIndex=null,
  opacity=null,
  onApplyClick=()=>{}
}) {
  //useContext for personality, hobby, and gender
  const {personalityFilter, setPersonalityFilter} = usePersonality();
  const {hobbyFilter, setHobbyFilter} = useHobby();
  const {genderFilter, setGenderFilter} = useGender();

  //personality states
  const [sbSisterly, setSBSisterly] = useState(false);
  const [sbPeppy, setSBPeppy] = useState(false);
  const [sbSnooty, setSBSnooty] = useState(false);
  const [sbSmug, setSBSmug] = useState(false);
  const [sbCranky, setSBCranky] = useState(false);
  const [sbLazy, setSBLazy] = useState(false);
  const [sbJock, setSBJock] = useState(false);
  const [sbNormal, setSBNormal] = useState(false);
  
  //hobby states
  const [sbEducation, setSBEducation] = useState(false);
  const [sbMusic, setSBMusic] = useState(false);
  const [sbFashion, setSBFashion] = useState(false);
  const [sbNature, setSBNature] = useState(false);
  const [sbFitness, setSBFitness] = useState(false);
  const [sbPlay, setSBPlay] = useState(false);
  
  //gender states
  const [sbMale, setSBMale] = useState(false);
  const [sbFemale, setSBFemale] = useState(false);

  //reusable functions ========================================================================================================================
  const personalityFilterFunc = (name, state, setState) => {
    setState(!state)
    {state ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf(name), 1)) 
      : setPersonalityFilter([...personalityFilter, name]) }
  }

  const hobbyFilterFunc = (name, state, setState) => {
      setState(!state)
      {state ? setHobbyFilter(hobbyFilter.splice(hobbyFilter.indexOf(name), 1)) 
        : setHobbyFilter([...hobbyFilter, name]) }
  }

  const genderFilterFunc = (name, state, setState) => {
      setState(!state)
      {state ? setGenderFilter(genderFilter.splice(genderFilter.indexOf(name), 1)) 
        : setGenderFilter([...genderFilter, name]) }
  }

  console.log("personality: " + personalityFilter + ", hobby: " + hobbyFilter + ", gender: " + genderFilter)  
    // console.log(personalityFilter)

  // filtering arrays ==========================================================================================================================
  const personalities = [
    {personality: "Sisterly", state: sbSisterly, setStateFunction: ()=> personalityFilterFunc("sister", sbSisterly, setSBSisterly)},
    {personality: "Peppy", state: sbPeppy, setStateFunction: ()=> personalityFilterFunc("Peppy", sbPeppy, setSBPeppy)},
    {personality: "Snooty", state: sbSnooty, setStateFunction: ()=> personalityFilterFunc("Snooty", sbSnooty, setSBSnooty)},
    {personality: "Smug", state: sbSmug, setStateFunction: ()=> personalityFilterFunc("Smug", sbSmug, setSBSmug)},
    {personality: "Cranky", state: sbCranky, setStateFunction: ()=> personalityFilterFunc("Cranky", sbCranky, setSBCranky)},
    {personality: "Lazy", state: sbLazy, setStateFunction: ()=> personalityFilterFunc("Lazy", sbLazy, setSBLazy)},
    {personality: "Jock", state: sbJock, setStateFunction: ()=> personalityFilterFunc("Jock", sbJock, setSBJock)},
    {personality: "Normal", state: sbNormal, setStateFunction: ()=> personalityFilterFunc("Normal", sbNormal, setSBNormal)},
  ]

  const hobbies = [
    {hobby: "Education", state: sbEducation, setStateFunction: ()=> hobbyFilterFunc("Education", sbEducation, setSBEducation)},
    {hobby: "Music", state: sbMusic, setStateFunction: ()=> hobbyFilterFunc("Music", sbMusic, setSBMusic)},
    {hobby: "Fashion", state: sbFashion, setStateFunction: ()=> hobbyFilterFunc("Fashion", sbFashion, setSBFashion)},
    {hobby: "Nature", state: sbNature, setStateFunction: ()=> hobbyFilterFunc("Nature", sbNature, setSBNature)},
    {hobby: "Fitness", state: sbFitness, setStateFunction: ()=> hobbyFilterFunc("Fitness", sbFitness, setSBFitness)},
    {hobby: "Play", state: sbPlay, setStateFunction: ()=> hobbyFilterFunc("Play", sbPlay, setSBPlay)},
  ]

  const genders = [
    {gender: "Male", state: sbMale, setStateFunction: ()=> genderFilterFunc("Male", sbMale, setSBMale)},
    {gender: "Female", state: sbFemale, setStateFunction: ()=> genderFilterFunc("Female", sbFemale, setSBFemale)},
  ]


  return <FilterPanelCont className='FilterPanelCont' id="FilterPanelContainer" opacity={opacity} zIndex={zIndex}>
    <div className='FilterSection'>
      <h5>Personality</h5>

      <div>
        {personalities.map((o,i)=>
          <FilterBtn 
          style={{backgroundColor:o.state === true ?"#007C74":"white", color:o.state === true ?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.personality}
          </FilterBtn> )}
      </div>

    </div>
    <div className='FilterSection'>
      <h5>Hobby</h5>
      <div>
        {hobbies.map((o,i)=>
          <FilterBtn
          style={{backgroundColor:o.state === true ?"#007C74":"white", color:o.state === true ?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.hobby}
          </FilterBtn> )}
      </div>
    </div>
    <div className='FilterSection'>
      <h5>Gender</h5>
      <div>
        {genders.map((o,i)=>
          <FilterBtn
          style={{backgroundColor:o.state?"#007C74":"white", color:o.state?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.gender}
          </FilterBtn> )}
      </div>
    </div>
    <BtnsCont>
      <Button text="Clear" fontSize="26"
        width="120"  height="32"
        bgColor="white"  txtColor="#007C74"
        border="1.5px solid #007C74"
        onClick={()=>{
          //usecontexts
          personalityFilter.length = 0
          hobbyFilter.length = 0
          genderFilter.length = 0

          //personalities
          setSBSisterly(false), setSBPeppy(false), setSBSnooty(false), setSBSmug(false),
          setSBCranky(false), setSBLazy(false), setSBJock(false), setSBNormal(false)
          //hobbies
          setSBEducation(false), setSBMusic(false), setSBFashion(false)
          setSBNature(false), setSBFitness(false), setSBPlay(false)
          //genders
          setSBMale(false), setSBFemale(false)
        }}
        />
      <Button text="Apply" fontSize="26"
        width="120"  height="32"
        bgColor="#007C74"
        onClick={onApplyClick}
        />
    </BtnsCont>
  </FilterPanelCont>;
}
