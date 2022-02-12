import React from "react";
import { useRouter } from 'next/router';
import Image from 'next/image'
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';
import Header from '../comps/Header'
import Button from '../comps/Button';
import BottomNav from '../comps/BottomNav'


const Background = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
width: 100vw;
height: 100vh;

`

const HeaderCont = styled.div`
    

`

const BubbleCont = styled.div`
margin-top: 80px;
margin-bottom: 60px;
`

const ButtonCont = styled.div`

`

const Photo = styled.img`
padding: 15px;
margin-top: 15px;
`



export default function emptyWishlist() {
    const router = useRouter();

    return <Background>
            <HeaderCont>
                <Header text="Your Villager Wishlist"></Header>
            </HeaderCont>
            <BubbleCont>
                <TextBubble text="You have no villagers in your wishlist."></TextBubble>
            </BubbleCont>
                <Button text='Find Villagers' onClick={()=>router.push("/search")}></Button>

            <Photo src="/find-villagers.svg"></Photo>
            <BottomNav></BottomNav>
    </Background>

};