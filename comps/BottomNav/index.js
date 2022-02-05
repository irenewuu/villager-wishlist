import React from 'react';
import styled from 'styled-components';

export default function BottomNav({

}) {
  return <div className='BottomNav'>
    <div>
      <img src='LeafLight.svg' />
      <p>Wishlist</p>
    </div>
    <div>
      <img src='MagnifyingLight.svg' />
      <p>Search</p>
    </div>
    <div>
      <img src='SettingsLight.svg' />
      <p>Setting</p>
    </div>
  </div>;
}
