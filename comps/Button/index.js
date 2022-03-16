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
    margin-bottom: ${props=>props.marginb};

    cursor: pointer;

    &:hover {
        border-color: ${props=>props.borderHover};
        background-color: ${props=>props.hover};
        color:  ${props=>props.textHover};
      };

      


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
    display = "none",
    marginb = "0px",
    hover = "#FEBDC3",
    borderHover = "#FEBDC3",
    textHover = "#FEBDC3"
    
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
            marginb={marginb}
            hover={hover}
            borderHover={borderHover}
            textHover={textHover}
           
            >
                <GoogleIcon display={display}/>
            {text}
        </BtnCont>

    )
}

export default Button;