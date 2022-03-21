import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { useTheme } from '../../utils/provider';
import { profile_themes } from '../../utils/variables';


const Cont = styled.div`
  box-sizing: border-box; 
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 120px;
`
// TOP CONT
const ProfileCont = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  row-gap: 24px;
  padding: 24px;
  background: ${props=>props.bg};
`
const NameCont = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  width: 350px;
`
const Name = styled.h2`
  color:#007C74;
  text-align: center;
  width: 100%;
`
const Back = styled(ArrowIosBackOutline)`
  position: absolute;
  left: 0;
  width: 40px;
  color: #007C74;
  margin-bottom: 10px;
`
const ProfileImg = styled.div`
  width: 180px;
  height: 180px;
  background:${props=>props.innerCircleBg};
  border-radius: 50%;
`
const Img = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
  padding: 15px;
`
const CatchPhrase = styled.p`
  color:#474747;
`

// BOTTOM CONT
const ProfileInfo = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  flex: 3;
`
const Details = styled.div`
  box-sizing: border-box;
  display:flex;
  justify-content:space-between;
  width: 100%;
  max-width: 375px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #EBEBEB;
`
const Key = styled.p`
  color:${props=>props.color};
  font-size: 28px;
  margin-left: 36px;
  width: 110px;
  text-align: left;
`
const Value = styled.p`
  color:${props=>props.color};
  width: 150px;
  margin-left: 48px;
  font-weight: 300;
  font-size: 28px;
  text-align: left;
  word-wrap: wrap;
`
const WishButton = styled.button`
  border:none;
  padding: 18px 50px 15px 50px;
  border-radius: 100px;
  margin-top: 24px;
  background: #F7D359;
  color: white;
  font-size: 30px;
`

const ProfileComp = ({
  name="Apple",
  villagerImg="/apple.png",
  catchPhrase="n/a",
  gender="n/a",
  personality="n/a",
  hobby="n/a",
  birthday="n/a",
  favSong="n/a",
  bg = "",
  innerCircleBg = "",

  routeToSearch="/search",

}) => {
  const router = useRouter();
  const {theme} = useTheme();
return <Cont>
  <ProfileCont bg={bg}>
    <NameCont>
      <Back onClick={()=>router.push(routeToSearch)}/>
      <Name>{name}</Name>
    </NameCont>

    <ProfileImg innerCircleBg={innerCircleBg}>
      <Img src={villagerImg} alt={name} />
    </ProfileImg>
    <CatchPhrase>"{catchPhrase}"</CatchPhrase>
  </ProfileCont>

  <ProfileInfo>
    <Details>
      <Key color={profile_themes[theme].color}>Gender</Key> <Value color={profile_themes[theme].color}>{gender}</Value>
    </Details>

    <Details>
      <Key color={profile_themes[theme].color}>Personality</Key> <Value color={profile_themes[theme].color}>{personality}</Value>
    </Details>

    <Details>
      <Key color={profile_themes[theme].color}>Hobby</Key> <Value color={profile_themes[theme].color}>{hobby}</Value>
    </Details>

    <Details>
      <Key color={profile_themes[theme].color}>Birthday</Key> <Value color={profile_themes[theme].color}>{birthday}</Value>
    </Details>

    <Details>
      <Key color={profile_themes[theme].color}>Favorite Song</Key> <Value color={profile_themes[theme].color}>{favSong}</Value>
    </Details>

  <WishButton >Add to Wishlist</WishButton>
  </ProfileInfo>
</Cont>
}

export default ProfileComp;