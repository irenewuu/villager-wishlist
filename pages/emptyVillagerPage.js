import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';


const Background = styled.body`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center; 
align-items: center;
`

const Photo = styled.img`
padding: 15px;
margin-top: 15px;
`

export default function emptyVillagerPage() {
    return <Background>
        {/* insert header comp
        insert bubble comp
        insert button comp 
        insert bot nav comp */}

        <Photo src="/find-villagers.svg"></Photo>
        
      
    </Background>
    
  }