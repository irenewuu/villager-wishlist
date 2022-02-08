import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Square = styled.div`
background-color:#FFFAE4;
min-width:100%;
min-height:100%;
display:flex;
flex-direction:column;
border-radius:22.7px;
`
const HeaderTitle = styled.h5`
text-color:#86765C;
margin-top:10px;
margin-bottom:10px;
margin-left:15px;
min-width:100%;
`
const Description = styled.h6`
text-color:#86765C;
margin-left:15px;
min-widht:100px;
`

const Picture = styled.image`
mid-width:300px;
height:200px;
display:flex;
justify-content:flex-end;
margin-left:50px;
`
const myLoader = ({src}) => {
    return `${src}`
  }

export default function Popup({
    width="100px",
    height="100px",
    src="Kk.png",
    add="added",
    remove="removed"
}) {
  return <Square> 
      <HeaderTitle>
            Added to wishlist!
      </HeaderTitle>
      <Description>
          Your Villager has been {add="remove"} to you wishlist.
      </Description>
      <Picture>
        <Image
        loader={myLoader}
        src={src}
        alt="KK guitar"
        width={width}
        height={height}
        />
      </Picture>

  </Square>
}
