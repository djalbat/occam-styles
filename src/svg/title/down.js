"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { titleSVGHeight } from "../../styles";
import { titleSVGColour } from "../../scheme/common";

class DownTitleSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1.73925" d="M 13.648388,5.8696247 H 6.4038408 l 3.6222742,7.2820883 z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "down-title"
  };
}

export default withStyle(DownTitleSVG)`

  fill: none;
  stroke: ${titleSVGColour};
  top: 0;
  right: 0;
  width: auto;
  height: ${titleSVGHeight};
  position: absolute;
  
`;
