"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../../scheme/common";

const ClosedRubbishBinSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} closed-rubbish-bin`}>
      <g stroke="none">
        <rect width="13" height="2" x="4" y="23" />
        <rect width="2" height="13" x="2" y="10" />
        <rect width="2" height="13" x="17" y="10" />
        <path d="M 2,23 4,25 v -2 z"/>
        <path d="m 17,23 v 2 l 2,-2 z" />
        <rect width="21" height="2" x="0" y="8" />
        <rect width="9" height="2" x="6" y="4" />
        <path d="M 4,4 5,8 c 0,0 2,0 2,0 L 6,4 Z" />
        <path d="M 17,4 16,8 H 14 L 15,4 Z" />
        <rect width="1" height="11" x="6" y="11" />
        <rect width="1" height="11" x="13.999999" y="11" />
        <rect width="1" height="11" x="10" y="11" />
      </g>
    </svg>

  );
};

export default withStyle(ClosedRubbishBinSVG)`

  fill: ${commonColour};
  
`;
