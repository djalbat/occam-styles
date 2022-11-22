"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../scheme/common";

class ToolbarSVG extends Element {
  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "toolbar"
  };
}

export default withStyle(ToolbarSVG)`

  fill: ${commonColour};
  width: auto;
  height: 100%;
  stroke: ${commonColour};
  
`;
