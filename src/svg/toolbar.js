"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { commonColour } from "../scheme/common";

class ToolbarSVG extends SVG {
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
