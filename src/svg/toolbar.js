"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

class ToolbarSVG extends SVG {
  static defaultProperties = {
    viewBox: "0 -5 25 25",
    className: "toolbar"
  };
}

export default withStyle(ToolbarSVG)`

  width: auto;
  height: 100%;
  
`;
