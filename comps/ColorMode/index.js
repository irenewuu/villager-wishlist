import React from 'react';
import styled from 'styled-components';
import {Circle} from '@styled-icons/bootstrap/circle';
import {CheckCircle} from '@styled-icons/bootstrap/checkcircle';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    font-family: Dongle;
`

const Cont = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    background: rgba(222, 241, 239, 0.75);
    border-radius: 20px;
    width: 325px;
    height: 280px;
    margin-bottom: 35px;
`
const Light = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:20px;
`
const Dark = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin:20px;
`
const Text = styled.div`
    font-size: 25px;
    line-height: 96.3%;
    text-align: center;
`
const CircleIcon = styled(Circle)`
    color: #007C74;
    width: 20px;
    margin-bottom: 20px;
`
const CheckedIcon = styled(CheckCircle)`
    color: #007C74;
    background: #A4D9D4;
    border-radius: 50%;
    width: 20px;
    margin-bottom: 20px;
`
const LightButton = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 80px;
    height: 116px;
    background: #FFFFFF;
    border-radius: 10px;
    margin-bottom: 25px;
`
const DarkButton = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 80px;
    height: 116px;
    background: #22282C;
    border-radius: 10px;
    margin-bottom: 25px;
`
const LightInnerButton = styled.div`
    width: 54px;
    height: 29px;
    background: #D4ECD3;
    border-radius: 5px;
`
const DarkInnerButton = styled.div`
    width: 54px;
    height: 29px;
    background: #8ECFC9;
    border-radius: 5px;
`

const ColorMode = ({
    text1="Light Mode",
    text2="Dark Mode",
}) => {

        return (
    <Container>
        <Cont>
            <Light>
                <LightButton>
                    <LightInnerButton></LightInnerButton>
                </LightButton>
                <CheckedIcon></CheckedIcon>
                <Text>{text1}</Text>
            </Light>
            <Dark>
                <DarkButton>
                    <DarkInnerButton></DarkInnerButton>
                </DarkButton>
                <CircleIcon></CircleIcon>
                <Text>{text2}</Text>
            </Dark>
        </Cont>
    </Container>

    )
}

export default ColorMode;