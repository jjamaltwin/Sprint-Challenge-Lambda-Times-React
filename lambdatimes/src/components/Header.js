import React from 'react';
import { HeaderH1, HeaderDiv, HeaderSpans } from './Styles';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderSpans date>Jan 25, 2019</HeaderSpans>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderSpans temp>52°</HeaderSpans>
    </HeaderDiv>

  )
}

export default Header