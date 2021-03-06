import React from 'react';
import styled from 'styled-components';
import {Circle} from '@styled-icons/bootstrap';
import {CheckCircle} from '@styled-icons/bootstrap';
import { useTheme } from '../../utils/provider';
import { useRouter } from 'next/router';
import { switch_themes } from '../../utils/variables';

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
    background: ${props=>props.background};
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
    color:${props=>props.color};
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

const ButtonCont = styled.div`
    margin-bottom: 15px;

`

const Item = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1.25px solid #007C74;;
  border-radius: 50px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Button = styled.input`
opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    &::after {
      display: block;
      color: #007C74;
      background: #A4D9D4;
    }
  }
  &:checked + ${Item} {
    background: #007C74;
    border: 1.25px solid #007C74;
  }
  &:checked + ${RadioButtonLabel} {
    color: #007C74;
    background: #A4D9D4;
    border: 1.25px solid #007C74;
    &::after {
        display: block;
    }
  }
  `


const ColorMode = ({
    text1="Light Mode",
    text2="Dark Mode",
    onButtonClick1=()=>{},
    onButtonClick2=()=>{},
}) => {

    const {theme} = useTheme();
    const router = useRouter();

        return (
    <Container>
        <Cont background={switch_themes[theme].background}>
            <Light>
                <LightButton>
                    <LightInnerButton></LightInnerButton>
                </LightButton>
                <ButtonCont>
                <Item>
                    <Button
                    defaultChecked={true}
                    type="radio"
                    name="radio"
                    onClick={()=>{onButtonClick1()}}
                    />
                    <RadioButtonLabel />
                </Item>
                </ButtonCont>
                <Text color={switch_themes[theme].color}>{text1}</Text>
            </Light>
            <Dark>
                <DarkButton>
                    <DarkInnerButton></DarkInnerButton>
                </DarkButton>
                <ButtonCont>
                <Item>
                    <Button
                    type="radio"
                    name="radio"
                    onClick={()=>{onButtonClick2()}}
                    />
                    <RadioButtonLabel />
                </Item>
                </ButtonCont>
                <Text color={switch_themes[theme].color}>{text2}</Text>
            </Dark>
        </Cont>
    </Container>

    )
}

export default ColorMode;