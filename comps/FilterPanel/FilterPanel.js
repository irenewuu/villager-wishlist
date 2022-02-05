import React from 'react';
import styled from 'styled-components';
import FilterButton from '../FilterButton/FilterButton';

const FilterPanelCont = styled.div`
  position: absolute;
  top: 120px;
  opacity: ${props => props.opacity};
  z-index: ${props => props.zIndex};
  // transition: all 0.5s ease-in-out 0.2s;
`;

export default function FilterPanel({
  zIndex=null,
  opacity=null
}) {
  return <FilterPanelCont className='FilterPanelCont'
      opacity={opacity} zIndex={zIndex}
    >
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
  </FilterPanelCont>;
}
