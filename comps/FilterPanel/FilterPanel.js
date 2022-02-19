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
  display="block"
}) {
  //useContext for personality, hobby, and gender
  const {personalityFilter, setPersonalityFilter} = usePersonality();
  const {hobbyFilter, setHobbyFilter} = useHobby();
  const {genderFilter, setGenderFilter} = useGender();
  // console.log("personality: " + personalityFilter + ", hobby: " + hobbyFilter + ", gender: " + genderFilter)

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

  //template making..?
    // const personalityFilterFunc = (name, state, setState) => {
    //   // useEffect(()=>{
    //     setState(!state)
    //     if(!state) {
    //       setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf(name), 1))
    //     } else {
    //       setPersonalityFilter([...personalityFilter, name])
    //       console.log(personalityFilter)
    //       // console.log(name + " personality: " + state)
    //     }
    // // }, [name])
    //   // console.log(personalityFilterFunc)
    //   console.log(name, state, setState)
    // }



    console.log("personality: " + personalityFilter + ", hobby: " + hobbyFilter + ", gender: " + genderFilter)  
    console.log(personalityFilter)

  const personalities = [
    {personality: "Sisterly", state: sbSisterly, setStateFunction: 
    // personalityFilterFunc("sister", sbSisterly, setSBSisterly)
    function() {
      setSBSisterly(!sbSisterly)
      {sbSisterly ? 
        // setPersonalityFilter(personalityFilter.splice(personalityFilter.splice("sister"),1)) 
        setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("sister"),1)) 
      : setPersonalityFilter([...personalityFilter, "sister"])}
    }},
    {personality: "Peppy", state: sbPeppy, setStateFunction: 
    // personalityFilterFunc("Peppy", sbPeppy, setSBPeppy)
    function() {
      setSBPeppy(!sbPeppy)
      {sbPeppy ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Peppy"),1)) : setPersonalityFilter([...personalityFilter, "Peppy"])}
    }},
    {personality: "Snooty", state: sbSnooty, setStateFunction: function() {
        setSBSnooty(!sbSnooty)
        {sbSnooty ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Snooty"-1),1)) : setPersonalityFilter([...personalityFilter, "Snooty"])}
      }},
    {personality: "Smug", state: sbSmug, setStateFunction: function() {
        setSBSmug(!sbSmug)
        {sbSmug ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Smug"), 1)) : setPersonalityFilter([...personalityFilter, "Smug"])}
    }},
    {personality: "Cranky", state: sbCranky, setStateFunction: function() {
        setSBCranky(!sbCranky)
        {sbCranky ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Cranky"), 1)) : setPersonalityFilter([...personalityFilter, "Cranky"])}
    }},
    {personality: "Lazy", state: sbLazy, setStateFunction: function() {
        setSBLazy(!sbLazy)
        {sbLazy ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Lazy"), 1)) : setPersonalityFilter([...personalityFilter, "Lazy"])}
    }},
    {personality: "Jock", state: sbJock, setStateFunction: function() {
        setSBJock(!sbJock)
        {sbJock ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Jock"), 0)) : setPersonalityFilter([...personalityFilter, "Jock"])}
    }},
    {personality: "Normal", state: sbNormal, setStateFunction: function() {
        setSBNormal(!sbNormal)
        {sbNormal ? setPersonalityFilter(personalityFilter.splice(personalityFilter.indexOf("Normal"), 0)) : setPersonalityFilter([...personalityFilter, "Normal"])}
    }},
  ]

  const hobbies = [
    {hobby: "Education", state: sbEducation, setStateFunction: function() {
        setSBEducation(!sbEducation)
        {sbEducation ? setHobbyFilter("") : setHobbyFilter("Education")}
        console.log("Education Hobby " + !sbEducation)
      }},
    {hobby: "Music", state: sbMusic, setStateFunction: function() {
        setSBMusic(!sbMusic)
        {sbMusic ? setHobbyFilter("") : setHobbyFilter("Music")}
        console.log("Music Hobby " + !sbMusic)
      }},
    {hobby: "Fashion", state: sbFashion, setStateFunction: function() {
        setSBFashion(!sbFashion)
        {sbFashion ? setHobbyFilter("") : setHobbyFilter("Fashion")}
        console.log("Fashion Hobby " + !sbFashion)
      }},
    {hobby: "Nature", state: sbNature, setStateFunction: function() {
        setSBNature(!sbNature)
        {sbNature ? setHobbyFilter("") : setHobbyFilter("Nature")}
        console.log("Nature Hobby " + !sbNature)
      }},
    {hobby: "Fitness", state: sbFitness, setStateFunction: function() {
        setSBFitness(!sbFitness)
        {sbFitness ? setHobbyFilter("") : setHobbyFilter("Fitness")}
        console.log("Fitness Hobby " + !sbFitness)
      }},
    {hobby: "Play", state: sbPlay, setStateFunction: function() {
        setSBPlay(!sbPlay)
        {sbPlay ? setHobbyFilter("") : setHobbyFilter("Play")}
        console.log("Play Hobby " + !sbPlay)
      }},
  ]

  const genders = [
    {gender: "Male", state: sbMale, setStateFunction: function() {
        setSBMale(!sbMale)
        {sbMale ? setGenderFilter("") : setGenderFilter("Male")}
        console.log("Male Gender " + !sbMale)
      }},
    {gender: "Female", state: sbFemale, setStateFunction: function() {
        setSBFemale(!sbFemale)
        {sbFemale ? setGenderFilter("") : setGenderFilter("Female")}
        console.log("Female Gender " + !sbFemale)
      }}
  ]


  return <FilterPanelCont className='FilterPanelCont' id="FilterPanelContainer"
      opacity={opacity} zIndex={zIndex} display={display}>
    <div className='FilterSection'>
      <h5>Personality</h5>

      <div>
        {personalities.map((o,i)=>
          <FilterBtn 
          style={{backgroundColor:o.state === true ?"#007C74":"white", color:o.state === true ?"white":"#007C74"}}
          onClick={o.setStateFunction}>
            {o.personality}
          </FilterBtn>
        )}
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
          </FilterBtn>
        )}
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
          </FilterBtn>
        )}
      </div>
    </div>
    <BtnsCont>
      <Button text="Clear" fontSize="26"
        width="120"  height="32"
        bgColor="white"  txtColor="#007C74"
        border="1.5px solid #007C74"
        onClick={()=>{
          //usecontexts
          setPersonalityFilter(""), setHobbyFilter(""), setGenderFilter("")
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
        onClick={()=>{ 
          display === "block" ? "none" : "block"
          console.log("close")
        }}
        />
    </BtnsCont>
  </FilterPanelCont>;
}
