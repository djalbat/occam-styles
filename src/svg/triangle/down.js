"use strict";

import withStyle from "easy-with-style";  ///

import { woodsmoke } from "../../colours";

const DownTriangleSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} down-triangle`}>
      <g stroke="none">
        <path d="M 13,14 H 5 l 4,8 z"/>
      </g>
    </svg>

  );
};

export default withStyle(DownTriangleSVG)`

  fill: ${woodsmoke};
  
`;
