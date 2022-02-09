import React, {useState} from 'react';
import styled from 'styled-components';
import FilterButton from '../FilterButton/FilterButton';

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
  //personalities
  const [sbSisterly, setSBSisterly] = useState(false);
  const [sbPeppy, setSBPeppy] = useState(false);
  const [sbSnooty, setSBSnooty] = useState(false);
  const [sbSmug, setSBSmug] = useState(false);
  const [sbCranky, setSBCranky] = useState(false);
  const [sbLazy, setSBLazy] = useState(false);
  const [sbJock, setSBJock] = useState(false);
  const [sbNormal, setSBNormal] = useState(false);
  //hobbies
  const [sbEducation, setSBEducation] = useState(false);
  const [sbMusic, setSBMusic] = useState(false);
  const [sbFashion, setSBFashion] = useState(false);
  const [sbNature, setSBNature] = useState(false);
  const [sbFitness, setSBFitness] = useState(false);
  const [sbPlay, setSBPlay] = useState(false);
  
  const [sbMale, setSBMale] = useState(false);
  const [sbFemale, setSBFemale] = useState(false);


  const personalities = [
    {personality: "Sisterly", state: sbSisterly, setStateFunction: function() {
        setSBSisterly(!sbSisterly)
        console.log("Sisterly Personality" + !sbSisterly)
      }},
    {personality: "Peppy", state: sbPeppy, setStateFunction: function() {
        setSBPeppy(!sbPeppy)
        console.log("Peppy Personality" + !sbPeppy)
      }},
    {personality: "Snooty", state: sbSnooty, setStateFunction: function() {
        setSBSnooty(!sbSnooty)
        console.log("Snooty Personality" + !sbSnooty)
      }},
    {personality: "Smug", state: sbSmug, setStateFunction: function() {
      setSBSmug(!sbSmug)
      console.log("Smug Personality" + !sbSmug)
    }},
    {personality: "Cranky", state: sbCranky, setStateFunction: function() {
      setSBCranky(!sbCranky)
      console.log("Cranky Personality" + !sbCranky)
    }},
    {personality: "Lazy", state: sbLazy, setStateFunction: function() {
      setSBLazy(!sbLazy)
      console.log("Lazy Personality" + !sbLazy)
    }},
    {personality: "Jock", state: sbJock, setStateFunction: function() {
      setSBJock(!sbJock)
      console.log("Jock Personality" + !sbJock)
    }},
    {personality: "Normal", state: sbNormal, setStateFunction: function() {
      setSBNormal(!sbNormal)
      console.log("Normal Personality" + !sbNormal)
    }},
  ]
  const hobbies = [
    {hobby: "Education", state: sbEducation, setStateFunction: function() {
        setSBEducation(!sbEducation)
        console.log("Education Hobby" + !sbEducation)
      }},
    {hobby: "Music", state: sbMusic, setStateFunction: function() {
        setSBMusic(!sbMusic)
        console.log("Music Hobby" + !sbMusic)
      }},
    {hobby: "Fashion", state: sbFashion, setStateFunction: function() {
        setSBFashion(!sbEducation)
        console.log("Fashion Hobby" + !sbFashion)
      }},
    {hobby: "Nature", state: sbNature, setStateFunction: function() {
      setSBNature(!sbNature)
      console.log("Nature Hobby" + !sbNature)
    }},
    {hobby: "Fitness", state: sbFitness, setStateFunction: function() {
      setSBFitness(!sbFitness)
      console.log("Fitness Hobby" + !sbFitness)
    }},
    {hobby: "Play", state: sbPlay, setStateFunction: function() {
      setSBPlay(!sbPlay)
      console.log("Play Hobby" + !sbPlay)
    }},
  ]
  const genders = [
    {gender: "Male", state: sbMale, setStateFunction: function() {
        setSBMale(!sbMale)
        console.log("Male Gender" + !sbMale)
      }},
    {gender: "Female", state: sbFemale, setStateFunction: function() {
        setSBFemale(!sbFemale)
        console.log("Female Gender" + !sbFemale)
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
