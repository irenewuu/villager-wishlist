import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "../../utils/provider";
import { nav_themes } from "../../utils/variables";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ax from "axios";

import { Leaf } from "@styled-icons/remix-line/Leaf";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";
import { Settings2Outline } from "@styled-icons/evaicons-outline/Settings2Outline";
import { ChatDots } from "@styled-icons/bootstrap/ChatDots";


const NavCont = styled.div`
  background-color: #98c7a4;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 20px;
  width: 350px;
  height: 58px;

  border-radius: 50px;
  box-shadow: -4px -4px 30px ${(props) => props.color};
  z-index: 5;
`;

const IconCont = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    p {
      color: #474747;
    }
    .icon {
      color: #474747;
    }
  }
`;

const LeafIcon = styled(Leaf)`
  color: ${(props) => props.leafColor};
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;
const SearchIcon = styled(SearchOutline)`
  color: ${(props) => props.searchColor};
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;
const ChatIcon = styled(ChatDots)`
  color: ${(props) => props.chatColor};
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

const SettingIcon = styled(Settings2Outline)`
  color: ${(props) => props.settingColor};
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;


const LeafText = styled.p`
  color: ${(props) => props.leafTextColor};
  font-weight: 300;
 
`;
const SearchText = styled.p`
  color: ${(props) => props.searchTextColor};
  font-weight: 300;
`;
const ChatText = styled.p`
  color: ${(props) => props.chatTextColor};
  font-weight: 300;
`;

const SettingText = styled.p`
  color: ${(props) => props.settingTextColor};
  font-weight: 300;
`;

export default function BottomNav({
  leafColor = "white",
  searchColor = "white",
  settingColor = "white",
  chatColor = "white",

  leafTextColor = "white",
  searchTextColor = "white",
  settingTextColor = "white",
  chatTextColor = "white",

  routeToSearch = "/search",
  routeToSetting = "/settings",
  routeToChat = "/chat"
}) {
  
  const { theme } = useTheme();
  const router = useRouter();

  const Wishlist = async() =>{
    if(router.pathname !== `/wishlist/[uuid]`) {
      router.push(`/wishlist`)
    }
  }

  return (
    <NavCont className="BottomNav" color={nav_themes[theme].color}>
      <IconCont onClick={() => {Wishlist()}}>
        <LeafIcon className="icon" color={leafColor} />
        <LeafText leafTextColor={leafTextColor}>Wishlist</LeafText>
      </IconCont>

      <IconCont onClick={() => router.push(routeToSearch)}>
        <SearchIcon className="icon" color={searchColor} />
        <SearchText searchTextColor={searchTextColor}>Search</SearchText>
      </IconCont>

      <IconCont onClick={() => router.push(routeToChat)}>
        <ChatIcon className="icon" color={chatColor} />
        <SearchText searchTextColor={chatTextColor}>Chat</SearchText>
      </IconCont>

      <IconCont onClick={() => router.push(routeToSetting)}>
        <SettingIcon className="icon" color={settingColor} />
        <SettingText settingTextColor={settingTextColor}>Setting</SettingText>
      </IconCont>
    </NavCont>
  );
}
