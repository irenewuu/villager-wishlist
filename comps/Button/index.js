import React from 'react';
import styled from 'styled-components';

const BtnCont = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Dongle;
    background-color: #8CC8A2;
    border-radius: 62px;
    border: none;
    width: 236px;
    height: 50px;

    font-size: 33px;
    color: white;
    padding-top: 5px;
`




const Button = ({
    text="Start Now!",
    onClick = () => {}
}) => {

        return (
        <BtnCont onClick={onClick}>
            {text}
        </BtnCont>

    )
}

export default Button;