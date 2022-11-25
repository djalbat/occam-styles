"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class SVG extends Element {
  static tagName = "svg";
}

export default withStyle(SVG)`

  stroke: none;
  pointer-events: none;
  vertical-align: bottom;
  
`;
