import React from 'react';
import styled from 'styled-components';

const BtnCont = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Dongle;
    font-size: ${props=>props.fontSize}px;

    color: ${props=>props.txtColor};
    background-color: ${props=>props.bgColor};
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;

    border: ${props=>props.border};
    border-radius: 62px;
    padding-top: 5px;
`




const Button = ({
    text="Start Now!",
    onClick = () => {},
    width = "236",
    height = "50",
    bgColor = "#8CC8A2",
    txtColor = "white",
    fontSize = "33",
    border = "none"
}) => {

        return (
        <BtnCont 
            onClick={onClick} 
            width={width}
            height={height}
            bgColor={bgColor}
            txtColor={txtColor}
            fontSize={fontSize}
            border={border}
            >
            {text}
        </BtnCont>

    )
}

export default Button;