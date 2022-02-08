import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align: center;
    font-family: Dongle;
    background-color: #8CC8A2;
    border-radius: 62px;
    width: 236px;
    height: 50px;
`
const Text = styled.p`
    font-family: Dongle;
    font-size: 28px;
    color: white;

`




const Button = ({
    text="Start Now!"
}) => {

        return (
        <Cont>
            <Text>{text}</Text>
        </Cont>

    )
}

export default Button;