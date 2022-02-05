import React from 'react';
import styled from 'styled-components';
import {Star} from '@styled-icons/bootstrap/Star'
import {StarFill} from '@styled-icons/bootstrap/StarFill'

const Cont = styled.div`
width: ${props=>props.width};
height: 220px;
background-color: ${props=>props.bgcolor};
display:flex;
justify-content:center;
align-items:center;
border-radius: 20px;
flex-direction: column;
margin-top: 20px;


`

const InnerCont = styled.div`
width: 140px;
height: 140px;
background-color: ${props=>props.innercolor};
border-radius: 50%;
display:flex;
justify-content:center;

`

const Name = styled.p`
font-size: 40px;
margin-top: 10px;
color:#474747;
margin-bottom: 15px;

`

const StarCont = styled(StarFill)`
 color:#F7D359;
 position: relative;
 left: 140px;
 top: 15px;
 width: 25px;
`


const Img = styled.img`
width: 100px;
object-fit: contain;
padding: 15px;
`


const Villagers = ({
    width="350px",
    bgcolor="#FCF8E4",
    innercolor="#F8EEBB",
    name="Apple",
    src="/apple.png"
}) => {
  return <Cont 
        width={width} 
        bgcolor={bgcolor} 
        >
      <StarCont/>
      <InnerCont innercolor={innercolor}> 
          <Img src={src}/>
     </InnerCont>
      <Name>{name}</Name>
      

  </Cont>;

}

export default Villagers;