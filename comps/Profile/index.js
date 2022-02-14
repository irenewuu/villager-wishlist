import React, {useState} from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
import {useRouter} from 'next/router';


const Cont = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
`
// TOP CONT

const ProfileCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding: 24px;
  box-sizing: border-box;
  background: #D4ECD3;
  row-gap: 24px;
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
  background:#98C7A4;
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
  background:white;
  flex: 3;
`

const Details = styled.div`
  box-sizing: border-box;
  display:flex;
  width: 100%;
  max-width: 375px;
  padding-top: 25px;
  padding-bottom: 25px;
  justify-content:space-between;

  border-bottom: 1px solid #EBEBEB;
`

const Key = styled.p`
  color:#474747;
  font-size: 28px;
  margin-left: 36px;
  width: 110px;
  text-align: left;

`
const Value = styled.p`
  color:#474747;
  font-weight: 300;
  font-size: 28px;
  width: 150px;
  margin-left: 48px;
  text-align: left;
  word-wrap: wrap;
`

const WishButton = styled.button`
  border:none;
  padding: 18px 50px 15px 50px;
  border-radius: 100px;
  margin-top: 20px;
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

  routeToSearch="/search",

}) => {
  const router = useRouter();
return <Cont>
<ProfileCont>
  <NameCont>
  <Back onClick={()=>router.push(routeToSearch)}/>
  <Name>{name}</Name>

  </NameCont>

  <ProfileImg>
    <Img src={villagerImg} alt={name} />
  </ProfileImg>
  <CatchPhrase>"{catchPhrase}"</CatchPhrase>
</ProfileCont>

<ProfileInfo>
  <Details>
    <Key>Gender</Key> <Value>{gender}</Value>
  </Details>

  <Details>
    <Key>Personality</Key> <Value>{personality}</Value>
  </Details>

  <Details>
    <Key>Hobby</Key> <Value>{hobby}</Value>
  </Details>

  <Details>
    <Key>Birthday</Key> <Value>{birthday}</Value>
  </Details>

  <Details>
    <Key>Favorite Song</Key> <Value>{favSong}</Value>
  </Details>





<WishButton>Add to Wishlist</WishButton>

</ProfileInfo>

</Cont>

}

export default ProfileComp;