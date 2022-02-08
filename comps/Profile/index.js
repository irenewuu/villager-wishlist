import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

//Avator and profile Pictures
const Head = styled.div`
background-color:#D4ECD3;
max-width:100%;
min-height:400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Picture = styled.div`
min-width:50%;
height:200px;
display:flex;
background-color:#98C7A4;
border-radius:100%;
justify-content:center;
`
const Quote = styled.h6`
margin:20px;
`

//Information
//idk about the height for this
const Information = styled.div`
max-width:100%;
min-height:550px; 
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
//Characteristics

const Try = styled.div`
display:flex;
align-content:center;
flex-direction:row;
gap:300px;
`

const Title = styled.h4`
margin-top:50px
`
const Charac = styled.p`
margin-top:50px;
`



// Images png
const myLoader = ({src}) => {
  return `${src}`
}
export default function Face({
  src="face.png",
  width="100px",
  height="100px",
  type="Gender",
  word="Female"
}) {
  return<div>
    <Head>
    <Picture>
    <Image
        loader={myLoader}
        src={src}
        alt="KK guitar"
        width={width}
        height={height}
        style={{margintop:"10px"}}
        />
    </Picture>
    <Quote>"I Slept all day listening to henry's lecture"</Quote>
  </Head>
  <Information>
    <Try>
    <Title>{type}</Title>
    <Charac>{word}</Charac>
    </Try>
    <Try>
    <Title>{type="Personality"}</Title>
    <Charac>{word="Snooty"}</Charac>
    </Try>
    <Try>
    <Title>{type="Hobby"}</Title>
    <Charac>{word="Fashion"}</Charac>
    </Try>
    <Try>
    <Title>{type="Birthday"}</Title>
    <Charac>{word="11/26"}</Charac>
    </Try>
    <Try>
    <Title>{type="Favorite Song"}</Title>
    <Charac>{word="K.K Soul"}</Charac>
    </Try>

  </Information>
  
  </div>
  
}
