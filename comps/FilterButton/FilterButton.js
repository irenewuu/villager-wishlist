import React from 'react';
import { useState } from 'react';

export default function FilterButton({
    text="Default"
}) {
    const [selected, setSelected] = useState(false)

  return <button type="button" 
  className='FilterButton' 
  style={{backgroundColor:selected?"#007C74":"white", color:selected?"white":"#007C74"}}
  onClick={()=>setSelected(!selected)}>
      {text}
  </button>;
}
