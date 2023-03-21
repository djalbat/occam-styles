"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { foldSVGWidth } from "../styles";

class FoldSVG extends SVG {
  static defaultProperties = {
    className: "fold"
  };
}

export default withStyle(FoldSVG)`

  width: ${foldSVGWidth};
  height: auto;
  
`;
