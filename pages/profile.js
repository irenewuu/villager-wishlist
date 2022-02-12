import Head from 'next/head'
import Image from 'next/image'
import Popup from '../comps/popup'
import ProfileComp from '../comps/Profile'
import Button from '../comps/Button'
import styled from 'styled-components';
import BottomNav from '../comps/BottomNav'

const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
height: 100vh;
width: 100vw;


`;

export default function Profile() {
  return (
    <Cont>
        <ProfileComp></ProfileComp>
        <BottomNav></BottomNav>
        
    </Cont>
  )
}
