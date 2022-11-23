"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { titleSVGHeight } from "../styles";

class TitleSVG extends SVG {
  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "title"
  };
}

export default withStyle(TitleSVG)`

  top: -1px;
  right: 0;
  width: auto;
  height: ${titleSVGHeight};
  position: absolute;
  
`;
