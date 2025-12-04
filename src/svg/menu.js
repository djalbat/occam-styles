"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

class MenuSVG extends SVG {
  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "font-size"
  };
}

export default withStyle(MenuSVG)`

  width: 100%;
  height: 100%;
  
`;
