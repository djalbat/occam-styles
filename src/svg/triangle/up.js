"use strict";

import withStyle from "easy-with-style";  ///

import { woodsmoke } from "../../colours";

const UpTriangleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} up-triangle`}>
      <g stroke="none">
        <path d="m 5,14 v 8 l 8,-4 z" />
      </g>
    </svg>

  );
};

export default withStyle(UpTriangleSVG)`

  fill: ${woodsmoke};
  
`;
