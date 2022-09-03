"use strict";

import withStyle from "easy-with-style";  ///

import { woodsmoke } from "../colours";

const FileSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} file`}>
      <g stroke="none">
        <rect width="16" height="2" x="0" y="23" />
        <rect width="2" height="10" x="14" y="13" />
        <rect width="2" height="15" x="0" y="8" />
        <rect width="9" height="2" x="0" y="6" />
        <path d="M 9,6 16,13 H 9 Z" />
      </g>
    </svg>

  );
};

export default withStyle(FileSVG)`

  fill: ${woodsmoke};
  
`;
