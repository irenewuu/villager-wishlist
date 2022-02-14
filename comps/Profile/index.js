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
`
// TOP CONT

const NameCont = styled.div`
display:flex;
align-items:center;
justify-content:center;

margin-bottom: 25px;
`
const Name = styled.h2`
color:#007C74;
margin-right: 30px;


`
const Back = styled(ArrowIosBackOutline)`
width: 40px;
color: #007C74;
position: relative;
right: 100px;
margin-bottom: 10px;

`

const ProfileCont = styled.div`
background:red;
display:flex;
flex-direction:column;
flex: 2;
background:#D4ECD3;
justify-content:center;
align-items:center;

`
const ProfileImg = styled.div`
width: 180px;
height: 180px;
background:#98C7A4;
border-radius: 50%;
`
const Img = styled.img`
width: 100px;
object-fit: contain;
padding: 15px;
`
const CatchPhrase = styled.p`
color:#474747;
margin-top: 20px;

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
display:flex;
min-width: 414px;
padding-top: 25px;
padding-bottom: 25px;
justify-content:space-between;

border-bottom: 1px solid #EBEBEB;

`

const Key = styled.p`
color:#474747;
font-size: 28px;
margin-left: 50px;

`

const Value = styled.p`
color:#474747;
font-weight: 300;
font-size: 28px;
margin-right: 80px;
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
  routeToSearch="/search",

}) => {
  const router = useRouter();
return <Cont>
<ProfileCont>
  <NameCont>
  <Back onClick={()=>router.push(routeToSearch)}/>
  <Name>Apple</Name>

  </NameCont>


  <ProfileImg><Img src="/apple.png"/></ProfileImg>
  <CatchPhrase>"Bo Beep"</CatchPhrase>
</ProfileCont>



<ProfileInfo>

<Details>
<Key>Gender</Key> <Value>Female</Value>
</Details>

<Details>
<Key>Personality</Key> <Value>Snooty</Value>
</Details>

<Details>
<Key>Hobby</Key> <Value>Fashion</Value>
</Details>

<Details>
<Key>Birthday</Key> <Value>11/26</Value>
</Details>

<Details>
<Key>Favorite Song</Key> <Value>KK.Soul</Value>
</Details>





<WishButton>Add to Wishlist</WishButton>

</ProfileInfo>

</Cont>

}

export default ProfileComp;