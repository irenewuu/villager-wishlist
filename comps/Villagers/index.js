import React from 'react';
import styled from 'styled-components';
import {Star} from '@styled-icons/bootstrap/Star'
import {StarFill} from '@styled-icons/bootstrap/StarFill'

// import { usePersonality } from '../../utils/provider';

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
const StarBut = styled.button`

`

const StarCont = styled(StarFill)`
  color:#F7D359;
  position: absolute;
  left: ${props=>props.left};
  top: 15px;
  width: 25px;
`


const Img = styled.img`
  width: 100px;
  object-fit: contain;
  padding: 15px;
`


// const {personalityFilter, setPersonalityFilter} = usePersonality();

// const StorePersonality = (checked, obj) => {
//   //store the favourites to be used on the wishlist page
//   console.log(checked, obj);
//     if(checked){
//       const b_obj = {
//         ...personalityFilter
//       };
//       b_obj[o._id] = o;
//       setPersonalityFilter(b_obj);
//     }
// }

const Villagers = ({
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

}) => {
  var colors = ['#DEF1EF', '#FFF8D4', '#D4ECD3', '#FFE6E8'];
  var innerColors = ['#A4D8D4', '#FFF2AF', '#98C7A4', '#FEBDC3']

  return <Cont 
    width={width} 
    bgcolor={colors[Math.floor(Math.random() * colors.length)]}
    marginL={marginL}
    marginR={marginR} 
    onClick={onClick}
    >
  <StarBut /* onChange={(e)=>StorePersonality(e.target.checked, o)}  */ >
    <StarCont left={left}/>
  </StarBut>

  <InnerCont 
    innercolor={innerColors[Math.floor(Math.random() * innerColors.length)]}
    innerWidth={innerWidth}
    innerHeight={innerHeight}> 
      <Img src={src}/>
  </InnerCont>
  <Name>{name}</Name>
      

  </Cont>;

}

export default Villagers;