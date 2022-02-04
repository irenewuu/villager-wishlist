import React from 'react';
import FilterIcon from "./../../public/FilterIcon.svg";
import SearchIcon from "./../../public/SearchIcon.svg";

export default function SearchBar() {
  return <div className='SearchbarCont'>
      <img src={SearchIcon.src} alt="filter icon" />
      <img src={FilterIcon.src} alt="filter icon" />
      <input type="text" className='Searchbar' placeholder='search'/>
  </div>
}
