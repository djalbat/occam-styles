"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { foldSVGWidth } from "../styles";
import { foldFill, foldStroke } from "../scheme/prettyPrinter";

class FoldSVG extends SVG {
  static defaultProperties = {
    className: "fold"
  };
}

export default withStyle(FoldSVG)`

  fill: ${foldFill};
  width: ${foldSVGWidth};
  stroke: ${foldStroke};
  
`;
