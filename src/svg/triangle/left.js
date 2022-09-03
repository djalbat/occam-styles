"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../../scheme/common";

const LeftTriangleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} left-triangle`}>
      <g>
        <path style="stroke-width:1" d="M 12.988592,21.371981 V 14.569568 L 6.1739528,17.970775 Z" />
      </g>
    </svg>

  );
};

export default withStyle(LeftTriangleSVG)`

  fill: none;
  stroke: ${commonColour};
  
`;
