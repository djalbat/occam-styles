"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { nameSVGHeight, nameSVGMarginBottom } from "../styles";

class NameSVG extends SVG {
  static defaultProperties = {
    viewBox: "0 0 24 18",
    className: "name"
  };
}

export default withStyle(NameSVG)`

  width: auto;
  height: ${nameSVGHeight};
  display: inline-block;
  margin-bottom: ${nameSVGMarginBottom};
  vertical-align: bottom;
  
`;
