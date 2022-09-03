"use strict";

import withStyle from "easy-with-style";  ///

import { woodsmoke } from "../colours";

const PenSVG = (properties) => {
  const { className } = properties;

  return (

    <svg width="25mm" height="25mm" viewBox="0 0 25 25" className={`${className} pen`}>
      <g stroke="none">
        <path d="M 1.5237345,18.904425 0,25 6.0953323,23.475909 14.476266,15.095182 16,13.571485 11.428403,9 9.9046684,10.523697 Z m 8.3813272,-5.33294 1.5237343,-1.523697 1.523736,1.523697 -1.523736,1.523697 z"/>
      </g>
    </svg>

  );
};

export default withStyle(PenSVG)`

  fill: ${woodsmoke};
  
`;
