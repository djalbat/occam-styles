"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../scheme/common";

const DirectorySVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} directory`}>
      <g stroke="none">
        <rect width="20" height="2" x="0" y="23" />
        <rect width="2" height="8" x="18" y="15" />
        <rect width="2" height="8" x="0" y="15" />
        <rect width="20" height="2" x="0" y="13" />
        <rect width="7" height="3" x="0" y="10" />
        <path d="m 7,10 3,3 H 7 Z" />
      </g>
    </svg>

  );
};

export default withStyle(DirectorySVG)`

  fill: ${commonColour};
  
`;
