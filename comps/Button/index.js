import React from 'react';
import styled from 'styled-components';
import { Google } from '@styled-icons/boxicons-logos/Google'


const GoogleIcon = styled(Google)`
    color:${(props) =>  props.googleColor};
    width:20px;
    height:20px;
    display:${props=>props.display};
    margin-bottom: 5px;
    margin-right: 5px;
`;

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

    cursor: pointer;
`




const Button = ({
    text="Start Now!",
    onClick = () => {},
    width = "236",
    height = "50",
    bgColor = "#8CC8A2",
    txtColor = "white",
    fontSize = "33",
    border = "none",
    display = "none"
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
                <GoogleIcon display={display}/>
            {text}
        </BtnCont>

    )
}

export default Button;