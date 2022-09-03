"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../../scheme/common";

class RightTriangleSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1" d="m 4.9708252,21.371981 v -6.802413 l 6.8146388,3.401207 z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "right-triangle"
  };
}

export default withStyle(RightTriangleSVG)`

  fill: none;
  stroke: ${commonColour};
  
`;
