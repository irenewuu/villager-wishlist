import styled from 'styled-components'
import BottomNav from '../comps/BottomNav'
import Header from '../comps/Header'

const Cont = styled.div`
  width: 100vw; 
  height: 100vh;
  display:flex;
  align-items:center;
  flex-direction: column;
`

export default function Search() {
  return (
    <Cont>
      <Header text='prop is text'/>
      <BottomNav searchColor='#474747' searchTextColor='#474747'/>
    </Cont>
  )
}
