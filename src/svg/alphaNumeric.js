"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

class ToolbarSVG extends SVG {
  static defaultProperties = {
    className: "alpha-numeric"
  };
}

export default withStyle(ToolbarSVG)`

  width: auto;
  height: 100%;
  
`;
