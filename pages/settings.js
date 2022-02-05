import Head from 'next/head';
import styled from 'styled-components';
import TextBubble from '../comps/TextBubble';

const Container = styled.div`
    display: flex;
    flex-direction:center;
    justify-content: center;
    align-items: center;
`

export default function Settings() {
  return (
    <Container>
        <TextBubble></TextBubble>
    </Container>
  )
}