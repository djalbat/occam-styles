"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../../scheme/common";

const RightTriangleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} right-triangle`}>
      <g>
        <path style="stroke-width:1" d="m 4.9708252,21.371981 v -6.802413 l 6.8146388,3.401207 z" />
      </g>
    </svg>

  );
};

export default withStyle(RightTriangleSVG)`

  fill: none;
  stroke: ${commonColour};
  
`;
