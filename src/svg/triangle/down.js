"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../../scheme/common";

const DownTriangleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} down-triangle`}>
      <g>
        <path style="stroke-width:1" d="M 12.37198,13.970825 H 5.5695679 l 3.4012067,6.814639 z" />
      </g>
    </svg>

  );
};

export default withStyle(DownTriangleSVG)`

  fill: none;
  stroke: ${commonColour};
  
`;
