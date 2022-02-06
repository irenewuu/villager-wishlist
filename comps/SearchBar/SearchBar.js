import React, {useState} from 'react';
import styled from 'styled-components';
import FilterPanel from '../FilterPanel/FilterPanel';
import FilterIcon from "./../../public/FilterIcon.svg";
import SearchIcon from "./../../public/SearchIcon.svg";


const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.25);
  backdrop-filter: blur(4px);
  transition: all 0.5s ease-in-out;
`;

export default function SearchBar() {
  
  const [filterState, setFilterState] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [zIndex, setzIndex] = useState(false);

  const HandleClick = () => {
        setFilterState(!filterState)
        setOpacity(!opacity)
        setzIndex(!zIndex)
  }

  return <div className='SearchFilterCont'>
    <div className='SearchbarCont'>
      <input type="text" className='Searchbar' placeholder='search'/>
      <img src={SearchIcon.src} alt="filter icon" />
      <img src={FilterIcon.src} alt="filter icon" onClick={()=>{
        HandleClick()
        console.log(filterState);
      }}/>
    </div>
    <FilterPanel 
    opacity = {opacity ? 1 : 0}
    zIndex = {zIndex ? 5 : -10}/>
    <BackgroundBlur 
    opacity = {opacity ? 1 : 0}
    zIndex = {zIndex ? 3 : -10}/>

  </div>
}