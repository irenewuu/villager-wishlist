import React, {useState} from 'react';
import FilterPanel from '../FilterPanel/FilterPanel';
import FilterIcon from "./../../public/FilterIcon.svg";
import SearchIcon from "./../../public/SearchIcon.svg";

export default function SearchBar() {
  
  const [filterState, setFilterState] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [zIndex, setzIndex] = useState(false);

  const HandleClick = () => {
        setFilterState(!filterState)
        setOpacity(!opacity)
        setzIndex(!zIndex)
  }

  return <div>
    <div className='SearchbarCont'>
      <img src={SearchIcon.src} alt="filter icon" />
      <img src={FilterIcon.src} alt="filter icon" onClick={()=>{
        HandleClick()
        console.log(filterState);
      }}/>
      <input type="text" className='Searchbar' placeholder='search'/>
    </div>
    <FilterPanel 
    opacity = {opacity ? 1 : 0}
    right = {filterState ? 0 : -300}
    zIndex = {zIndex ? 5 : -10}/>

  </div>
}
