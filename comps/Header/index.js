import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../utils/provider';
import {header_themes} from '../../utils/variables';

const Heading =styled.h1`
    font-size: 47px;
    color:${props=>props.color};
    margin-bottom: 20px;
    margin-top: 30px;
`

const Header = ({
  text="Header",
}) => {

  const {theme} = useTheme();

      return (
      <Heading color={header_themes[theme].color} >
          {text}
      </Heading>

  )
}

export default Header;
