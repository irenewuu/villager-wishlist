import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useFilters, usePersonality, useHobby, useGender, useTheme} from "../../utils/provider";
import { filter_themes } from '../../utils/variables';

import Button from "../Button";

const FilterPanelCont = styled.div`
  display: ${props => props.display};
  position: absolute;
  top: 120px;
  opacity: ${props => props.opacity};
  z-index: ${props => props.zIndex};
  // transition: all 0.5s ease-in-out 0.2s;
  background-color: ${props=>props.background};
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

const Header = styled.h5`
color:${props=>props.color};
`

export default function FilterPanel({
  zIndex=null,
  opacity=null,
  onApplyClick=()=>{}
}) {
  //useContext for personality, hobby, and gender
  const {filterSettings, setFilterSettings} = useFilters();
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
    {state ? setPersonalityFilter(personalityFilter.filter(i=>i !== name)) 
      : setPersonalityFilter([...personalityFilter, name]) }
      filtersFunc()
  }

  const hobbyFilterFunc = (name, state, setState) => {
      setState(!state)
      {state ? setHobbyFilter(hobbyFilter.filter(i=>i !== name)) 
        : setHobbyFilter([...hobbyFilter, name]) }
      filtersFunc()
  }

  const genderFilterFunc = (name, state, setState) => {
      setState(!state)
      {state ? setGenderFilter(genderFilter.filter(i=>i !== name)) 
        : setGenderFilter([...genderFilter, name]) }
      filtersFunc()
  }
const filtersFunc = () => {
   setFilterSettings((prev) => ({
    // ...prev,
    ...personalityFilter,
    ...hobbyFilter,
    ...genderFilter,
   }))
}

  console.log("personality: " + personalityFilter + ", hobby: " + hobbyFilter + ", gender: " + genderFilter)  
  // console.log(personalityFilter)

  // filtering arrays ==========================================================================================================================
  const personalities = [
    {personality: "Sisterly", state: sbSisterly, setStateFunction: ()=> personalityFilterFunc("Big sister", sbSisterly, setSBSisterly)},
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

  // Filters Clear Handler ===================================================
  const HandleClear = () => {
    {personalityFilter.length >= 1 ? personalityFilter.length = 0 : ''}
    {hobbyFilter.length >= 1 ? hobbyFilter.length = 0 : ''}
    {genderFilter.length >= 1 ? genderFilter.length = 0 : ''}
    console.log("personality: " + personalityFilter + ", hobby: " + hobbyFilter + ", gender: " + genderFilter)  
    
    //personalities
    setSBSisterly(false), setSBPeppy(false), setSBSnooty(false), setSBSmug(false),
    setSBCranky(false), setSBLazy(false), setSBJock(false), setSBNormal(false)
    //hobbies
    setSBEducation(false), setSBMusic(false), setSBFashion(false)
    setSBNature(false), setSBFitness(false), setSBPlay(false)
    //genders
    setSBMale(false), setSBFemale(false)
  }

  const {theme} = useTheme();

  return <FilterPanelCont background={filter_themes[theme].background} className='FilterPanelCont' id="FilterPanelContainer" opacity={opacity} zIndex={zIndex}>
    <div className='FilterSection'>
      <Header color={filter_themes[theme].color}>Personality</Header>

      <div>
        {personalities.map((o,i)=>
          <FilterBtn 
          key={i}
          style={{backgroundColor:o.state === true ?"#007C74":"rgba(0, 0, 0, 0)", color:o.state === true ?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.personality}
          </FilterBtn> )}
      </div>

    </div>
    <div className='FilterSection'>
      <Header color={filter_themes[theme].color}>Hobby</Header>
      <div>
        {hobbies.map((o,i)=>
          <FilterBtn
          key={i}
          style={{backgroundColor:o.state === true ?"#007C74":"rgba(0, 0, 0, 0)", color:o.state === true ?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.hobby}
          </FilterBtn> )}
      </div>
    </div>
    <div className='FilterSection'>
      <Header color={filter_themes[theme].color}>Gender</Header>
      <div>
        {genders.map((o,i)=>
          <FilterBtn
          key={i}
          style={{backgroundColor:o.state?"#007C74":"rgba(0, 0, 0, 0)", color:o.state?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.gender}
          </FilterBtn> )}
      </div>
    </div>
    <BtnsCont>
      <Button text="Clear" fontSize="26"
        width="120"  height="32"
        bgColor="rgba(0, 0, 0, 0)"  txtColor="#007C74"
        border="1.5px solid #007C74"
        onClick={()=>HandleClear()}
        background={filter_themes[theme].background}
        />
      <Button text="Apply" fontSize="26"
        width="120"  height="32"
        bgColor="#007C74"
        onClick={onApplyClick}
        />
    </BtnsCont>
  </FilterPanelCont>;
}
