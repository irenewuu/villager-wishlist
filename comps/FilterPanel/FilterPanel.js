import React, {useState} from 'react';
import styled from 'styled-components';
import {usePersonality} from "../../utils/provider";

const FilterPanelCont = styled.div`
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
`;

export default function FilterPanel({
  zIndex=null,
  opacity=null
}) {
  //useContext
  const {personalityFilter, setPersonalityFilter} = usePersonality();
  console.log(personalityFilter)

  //personalities
  const [sbSisterly, setSBSisterly] = useState(false);
  const [sbPeppy, setSBPeppy] = useState(false);
  const [sbSnooty, setSBSnooty] = useState(false);
  const [sbSmug, setSBSmug] = useState(false);
  const [sbCranky, setSBCranky] = useState(false);
  const [sbLazy, setSBLazy] = useState(false);
  const [sbJock, setSBJock] = useState(false);
  const [sbNormal, setSBNormal] = useState(false);
  
  // figure out personalities first then work on these :(
  //hobbies
  const [sbEducation, setSBEducation] = useState(false);
  const [sbMusic, setSBMusic] = useState(false);
  const [sbFashion, setSBFashion] = useState(false);
  const [sbNature, setSBNature] = useState(false);
  const [sbFitness, setSBFitness] = useState(false);
  const [sbPlay, setSBPlay] = useState(false);
  
  const [hobby, setHobby] = useState('');
  
  //genders
  const [sbMale, setSBMale] = useState(false);
  const [sbFemale, setSBFemale] = useState(false);

  const [gender, setGender] = useState('');


  const personalities = [
    {personality: "Sisterly", state: sbSisterly, setStateFunction: function() {
        setSBSisterly(!sbSisterly)
        console.log("Sisterly Personality " + !sbSisterly)
        if(sbSisterly) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("sister");
        }
      }},
    {personality: "Peppy", state: sbPeppy, setStateFunction: function() {
        setSBPeppy(!sbPeppy)
        console.log("Peppy Personality " + !sbPeppy)
        if(sbPeppy) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Peppy")
        }
      }},
    {personality: "Snooty", state: sbSnooty, setStateFunction: function() {
        setSBSnooty(!sbSnooty)
        console.log("Snooty Personality " + !sbSnooty)
        if(sbSnooty) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Snooty")
        }
      }},
    {personality: "Smug", state: sbSmug, setStateFunction: function() {
        setSBSmug(!sbSmug)
        console.log("Smug Personality " + !sbSmug)
        if(sbSmug) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Smug")
        }
    }},
    {personality: "Cranky", state: sbCranky, setStateFunction: function() {
        setSBCranky(!sbCranky)
        console.log("Cranky Personality " + !sbCranky)
        if(sbCranky) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Cranky")
        }
    }},
    {personality: "Lazy", state: sbLazy, setStateFunction: function() {
        setSBLazy(!sbLazy)
        console.log("Lazy Personality " + !sbLazy)
        if(sbLazy) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Lazy")
        }
    }},
    {personality: "Jock", state: sbJock, setStateFunction: function() {
        setSBJock(!sbJock)
        console.log("Jock Personality " + !sbJock)
        if(sbJock) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Jock")
        }
    }},
    {personality: "Normal", state: sbNormal, setStateFunction: function() {
        setSBNormal(!sbNormal)
        console.log("Normal Personality " + !sbNormal)
        if(sbNormal) {
          setPersonalityFilter("")
        } else {
          setPersonalityFilter("Normal")
        }
    }},
  ]

  const hobbies = [
    {hobby: "Education", state: hobby, setStateFunction: function() {
        setHobby("Education")
        console.log("Education Hobby " + hobby)
      }},
    {hobby: "Music", state: hobby, setStateFunction: function() {
        setHobby("Music")
        console.log("Music Hobby " + hobby)
      }},
    {hobby: "Fashion", state: hobby, setStateFunction: function() {
        setHobby("Fashion")
        console.log("Fashion Hobby " + hobby)
      }},
    {hobby: "Nature", state: hobby, setStateFunction: function() {
        setHobby("Nature")
        console.log("Nature Hobby " + hobby)
    }},
    {hobby: "Fitness", state: hobby, setStateFunction: function() {
        setHobby("Fitness")
        console.log("Fitness Hobby " + hobby)
    }},
    {hobby: "Play", state: hobby, setStateFunction: function() {
        setHobby("Play")
        console.log("Play Hobby " + hobby)
    }},
  ]

  const genders = [
    {gender: "Male", state: gender, setStateFunction: function() {
        setGender("Male")
        console.log("Male Gender " + gender)
      }},
    {gender: "Female", state: gender, setStateFunction: function() {
        setGender("Female")
        console.log("Female Gender " + gender)
      }}
  ]


  return <FilterPanelCont className='FilterPanelCont'
      opacity={opacity} zIndex={zIndex}>
    <div className='FilterSection'>
      <h5>Personality</h5>

      <div>
        {personalities.map((o,i)=>
          <FilterBtn 
          style={{backgroundColor:o.state?"#007C74":"white", color:o.state?"white":"#007C74"}}
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
          style={{backgroundColor:o.state?"#007C74":"white", color:o.state?"white":"#007C74"}}
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
    <button>Clear</button>
    <button>Apply</button>
  </FilterPanelCont>;
}
