import React from 'react';
import styled from 'styled-components';
import {Leaf} from "@styled-icons/remix-line/Leaf";
import {SearchOutline} from '@styled-icons/evaicons-outline/SearchOutline';
import {Settings2Outline} from '@styled-icons/evaicons-outline/Settings2Outline'

const NavCont = styled.div`
  background-color: #98C7A4;
  width: 327px;
  height: 52px;
  border-radius: 25px;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom:20px;
  box-shadow: -4px -4px 30px #FFFFFF;
`;
const IconCont = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;

const LeafIcon = styled(Leaf)`
  color: ${props=>props.leafColor};
  width: 20px;
  height: 20px;
  
  :hover{
    color: #474747;
  }
`;
const SearchIcon = styled(SearchOutline)`
  color: ${props=>props.searchColor};
  width: 20px;
  height: 20px;
`;
const SettingIcon = styled(Settings2Outline)`
  color: ${props=>props.settingColor};
  width: 20px;
  height: 20px;
`;

const LeafText = styled.p`
  color: ${props=>props.leafTextColor};
  font-weight: 400;
  // padding-top: 2px;
`;
const SearchText = styled.p`
  color: ${props=>props.searchTextColor};
  font-weight: 400;
  // padding-top: 2px;
`;
const SettingText = styled.p`
  color: ${props=>props.settingTextColor};
  font-weight: 400;
  // padding-top: 2px;
`;

export default function BottomNav({
  leafColor ="white",
  searchColor ="white",
  settingColor ="white",
  leafTextColor = "white",
  searchTextColor = "white",
  settingTextColor = "white"
}) {
  return <NavCont className='BottomNav'>
    <IconCont>
      <LeafIcon
        color={leafColor}/>
      <LeafText
        leafTextColor={leafTextColor}
        >Wishlist</LeafText>
    </IconCont>
    <IconCont>
      <SearchIcon 
        color={searchColor} />
      <SearchText
        searchTextColor={searchTextColor}
        >Search</SearchText>
    </IconCont>
    <IconCont>
      <SettingIcon 
        color={settingColor} />
      <SettingText
      settingTextColor ={settingTextColor}
      >Setting</SettingText>
    </IconCont>
  </NavCont>;
}
