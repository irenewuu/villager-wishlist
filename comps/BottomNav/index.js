import React, { useState } from "react";
import styled from "styled-components";
import { Leaf } from "@styled-icons/remix-line/Leaf";
import { SearchOutline } from "@styled-icons/evaicons-outline/SearchOutline";
import { Settings2Outline } from "@styled-icons/evaicons-outline/Settings2Outline";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../../utils/provider";
import { nav_themes } from "../../utils/variables";

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
  margin-bottom: 3px;
`;
const SearchIcon = styled(SearchOutline)`
  color: ${(props) => props.searchColor};
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
`;
const SettingIcon = styled(Settings2Outline)`
  color: ${(props) => props.settingColor};
  width: 20px;
  height: 20px;
  margin-bottom: 3px;
`;

const LeafText = styled.p`
  color: ${(props) => props.leafTextColor};
  font-weight: 400;
`;
const SearchText = styled.p`
  color: ${(props) => props.searchTextColor};
  font-weight: 400;
`;
const SettingText = styled.p`
  color: ${(props) => props.settingTextColor};
  font-weight: 400;
`;

export default function BottomNav({
  leafColor = "white",
  searchColor = "white",
  settingColor = "white",
  leafTextColor = "white",
  searchTextColor = "white",
  settingTextColor = "white",
  // routeToWishlist="/wishlist",
  routeToWishlist = `/wishlist/${uuidv4()}`,
  routeToSearch = "/search",
  routeToSetting = "/settings",
}) {
  
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <NavCont className="BottomNav" color={nav_themes[theme].color}>
      <IconCont onClick={() => router.push(routeToWishlist)}>
        <LeafIcon className="icon" color={leafColor} />
        <LeafText leafTextColor={leafTextColor}>Wishlist</LeafText>
      </IconCont>

      <IconCont onClick={() => router.push(routeToSearch)}>
        <SearchIcon className="icon" color={searchColor} />
        <SearchText searchTextColor={searchTextColor}>Search</SearchText>
      </IconCont>

      <IconCont onClick={() => router.push(routeToSetting)}>
        <SettingIcon className="icon" color={settingColor} />
        <SettingText settingTextColor={settingTextColor}>Setting</SettingText>
      </IconCont>
    </NavCont>
  );
}
