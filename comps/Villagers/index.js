import React, {useState} from 'react';
import styled from 'styled-components';
import {Star} from '@styled-icons/bootstrap/Star'
import {StarFill} from '@styled-icons/bootstrap/StarFill'

const Cont = styled.div`
width: ${props=>props.width};
height: 220px;
background-color: ${props=>props.bgcolor};
display:flex;
justify-content:center;
border-radius: 20px;
flex-direction: column;
margin-top: 20px;
position: relative;
align-items: center;
margin-left:${props=>props.marginL};
margin-right:${props=>props.marginR};
user-select: none;

`

const InnerCont = styled.div`
  width: ${props=>props.innerWidth};
  height: ${props=>props.innerHeight};
  background-color: ${props=>props.innercolor};
  border-radius: 50%;
  display:flex;
  justify-content:center;
  margin-top: 5px;

`

const Name = styled.p`
  font-size: 40px;
  margin-top: 10px;
  color:#474747;


`

const StarFilled = styled(StarFill)`
 color:#F7D359;
 position: absolute;
 left: ${props=>props.left};
 top: 15px;
 width: 25px;
 z-index: 1000;
`
const StarOutline = styled(Star)`
 color:#F7D359;
 position: absolute;
 left: ${props=>props.left};
 background: transparent;
 top: 15px;
 width: 25px;
 z-index: 1000;
`


const Img = styled.img`
  width: 100px;
  object-fit: contain;
  padding: 15px;
`


export default function Villagers({
  // villager,
  width="350px",
  bgcolor="#FCF8E4",
  innercolor="#F8EEBB",
  name="Apple",
  src="/apple.png",
  left="300px",
  innerWidth="140px",
  innerHeight = "140px",
  marginL ="0px",
  marginR ="0px",
  onClick =()=>{}
}) {
  var colors = ['#DEF1EF', '#FFF8D4', '#D4ECD3', '#FFE6E8'];
  var innerColors = ['#A4D8D4', '#FFF2AF', '#98C7A4', '#FEBDC3'];
  const [star, setStar] = useState(false)

  return <Cont 
    width={width} 
    bgcolor={colors[Math.floor(Math.random() * colors.length)]}
    marginL={marginL}
    marginR={marginR} 
    >
    {
      !star ? <StarOutline left={left} onClick={()=>{
        setStar(true)
        console.log("filled the star")
      }} /> : <StarFilled  left={left} onClick={()=>{
        setStar(false)
        console.log("unfilled the star")
      }} />
    }
  <InnerCont 
    onClick={onClick}
    innercolor={innerColors[Math.floor(Math.random() * innerColors.length)]}
    innerWidth={innerWidth}
    innerHeight={innerHeight}> 
      <Img src={src}/>
  </InnerCont>
  <Name>{name}</Name>
      

  </Cont>;
}

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const villager = await fetch(`http://localhost:3000/api/villager/${id}`);
//   const data = await villager.json();

//   if (!data) {
//     return {
//       notFound: true
//     };
//   }

//   return {
//     props: { villager: data }
//   };
// }
