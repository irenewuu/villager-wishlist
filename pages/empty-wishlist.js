import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';
import Header from '../comps/Header'
import Button from '../comps/Button';
import BottomNav from '../comps/BottomNav'
import {useRouter} from 'next/router';


const Background = styled.body`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
`

const HeaderCont = styled.div`
margin-top: 30px;

`

const BubbleCont = styled.div`
margin-top: 50px;
`

const ButtonCont = styled.div`
margin-top: 30px;
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
            <ButtonCont onClick={()=>router.push("/search")}>
                <Button text='Find Villagers'></Button>
            </ButtonCont>
            <Photo src="/find-villagers.svg"></Photo>
            <BottomNav></BottomNav>


    </Background>

}