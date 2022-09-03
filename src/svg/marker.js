"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../scheme/common";

const MarkerSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} marker`}>
      <g stroke="none">
        <rect width="14" height="4" x="2" y="16" />
      </g>
    </svg>

  );
};

export default withStyle(MarkerSVG)`

  fill: ${commonColour};
  
`;
