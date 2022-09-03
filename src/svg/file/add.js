"use strict";

import withStyle from "easy-with-style";  ///

import { commonColour } from "../../scheme/common";

const AddFileSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} add-file`}>
      <g stroke="none">
        <rect width="16" height="2" x="0" y="23" />
        <rect width="2" height="10" x="14" y="13" />
        <rect width="2" height="15" x="0" y="8" />
        <rect width="9" height="2" x="0" y="6" />
        <path d="M 9,6 16,13 H 9 Z" />
        <rect width="2" height="8" x="14.5" y="2.5" />
        <rect width="8" height="2" x="11.5" y="5.5" />
      </g>
    </svg>

  );
};

export default withStyle(AddFileSVG)`

  fill: ${commonColour};
  
`;
