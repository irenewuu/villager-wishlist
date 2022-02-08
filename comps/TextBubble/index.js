import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-family: Dongle;
    position: relative;
    margin:10px;
`

const Cont = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
`

const Name = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background: #E6B884;
    color: #FFF;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    padding: 0px 10px 0px 10px;
    border-radius: 25px;
    position:absolute;
    top:0px;
`
const Bubbles = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top: 10px;
`

const TopBubble = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 300px;
    height: 70px;
    left: 1650px;
    top: 508px;
    background: #FFFAE4;
    border-radius: 41.5px;
`
const BottomBubble = styled.div`
    width: 275px;
    height: 40px;
    background: #FFFAE4;
    border-radius: 41.5px;
`

const Text = styled.p`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-size: 30px;
    line-height: 96.3%;
    text-align: center;
    color: #86765C;
    max-width: 70%;
    z-index: 100;
    padding-top:50px;
`

const TextBubble = ({
    name="User",
    text="Welcome to Villager Wishlist!"
}) => {

        return (
    <Container>
        <Cont>
        <Name>{name}</Name>
        <Bubbles>
            <TopBubble>
                <Text>{text}</Text>
            </TopBubble>
            <BottomBubble></BottomBubble>
        </Bubbles>
        </Cont>
    </Container>

    )
}

export default TextBubble;