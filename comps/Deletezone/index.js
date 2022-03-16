import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'
import {Delete} from '@styled-icons/typicons/Delete'

const DropCont = styled(Delete)`
width: 120px;
height: 120px;
color: ${({bg})=>bg || '#E7736C'};
position: relative;
`

const Deletezone = ({
    //props
    children=null,
    onDropItem=()=>{}
  }) => {
      const [{ canDrop, isOver }, drop] = useDrop(() => ({
      // The type (or types) to accept - strings or symbols
      accept: ['villager'],
      drop:(item, monitor)=>{
        onDropItem(item);
  
      },
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }))
  
      return <DropCont
              ref={drop}
        bg={canDrop && isOver ? '#999' : '#E7736C'}
          >
        {children}
          </DropCont>
  }
  
  export default Deletezone