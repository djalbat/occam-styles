"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { titleSVGHeight } from "../../styles";
import { titleSVGColour } from "../../scheme/common";

class UpTitleSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1.73925" d="M 14.234694,13.648389 V 6.4038409 L 6.9526058,10.026115 Z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "up-toggle"
  };
}

export default withStyle(UpTitleSVG)`

  fill: none;
  stroke: ${titleSVGColour};
  top: 0;
  right: 0;
  width: auto;
  height: ${titleSVGHeight};
  position: absolute;
  
`;
