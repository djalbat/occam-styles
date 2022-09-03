"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../../scheme/common";

class LeftTriangleSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1" d="M 12.988592,21.371981 V 14.569568 L 6.1739528,17.970775 Z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "left-triangle"
  };
}

export default withStyle(LeftTriangleSVG)`

  fill: none;
  stroke: ${commonColour};
  
`;
