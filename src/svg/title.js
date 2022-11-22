"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { titleSVGHeight } from "../styles";
import { titleSVGColour } from "../scheme/common";

class TitleSVG extends Element {
  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "title"
  };
}

export default withStyle(TitleSVG)`

  fill: none;
  stroke: ${titleSVGColour};
  top: 0;
  right: 0;
  width: auto;
  height: ${titleSVGHeight};
  position: absolute;
  
`;
