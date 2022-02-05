import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

export default function FilterPanel() {
  return <div className='FilterPanelCont'>
    <div className='FilterSection'>
      <h5>Personality</h5>
      <div>
        <FilterButton text="Sisterly" />
        <FilterButton text="Peppy" />
        <FilterButton text="Snooty" />
        <FilterButton text="Smug" />
        <FilterButton text="Cranky" />
        <FilterButton text="Lazy" />
        <FilterButton text="Jock" />
        <FilterButton text="Normal" />
      </div>
    </div>
    <div className='FilterSection'>
      <h5>Hobby</h5>
      <div>
        <FilterButton text="Education" />
        <FilterButton text="Music" />
        <FilterButton text="Fashion" />
        <FilterButton text="Nature" />
        <FilterButton text="Fitness" />
        <FilterButton text="Play" />
      </div>
    </div>
    <div className='FilterSection'>
      <h5>Gender</h5>
      <div>
        <FilterButton text="Male" />
        <FilterButton text="Female" />
      </div>
    </div>
    <button>Clear</button>
    <button>Apply</button>
  </div>;
}
