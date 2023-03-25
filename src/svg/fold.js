"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { foldFill } from "../scheme/prettyPrinter";
import { foldSVGWidth } from "../styles";

class FoldSVG extends SVG {
  static defaultProperties = {
    className: "fold"
  };
}

export default withStyle(FoldSVG)`

  left: 0;
  fill: ${foldFill};
  width: ${foldSVGWidth};
  stroke: inherit;
  position: absolute;
  
`;
