import React from 'react';
import styled from 'styled-components';


// styled-component
// const HeaderCont = styled.div`

// `;
// const HeaderText = styled.p`
//   font-size: 48px;
//   color: #08847C
// `;


// export default function Header({
//   text="this is a header"

// }
// ) {
//   return <HeaderCont>
//         <HeaderText>{text}</HeaderText>
//       </HeaderCont>
// }

// sass
export default function Header({
  text="this is a header"
}) {
  return <div className='SassHeader'>
    <h2>{text}</h2>
  </div>;
}
