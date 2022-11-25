"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { toggleSVGHeight } from "../styles";

class ToggleSVG extends SVG {
  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "toggle"
  };
}

export default withStyle(ToggleSVG)`

  width: auto;
  height: ${toggleSVGHeight};
  
`;
