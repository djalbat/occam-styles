"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import FoldLineSVG from "../svg/fold/line";
import ClosedFoldSVG from "./svg/fold/closed";
import TopOpenFoldSVG from "./svg/fold/topOpen";
import BottomOpenFoldSVG from "./svg/fold/bottonOpen";

import { gutterBackgroundColour } from "../scheme/prettyPrinter";

class View extends Element {
  childElements() {
    return ([

      <FoldLineSVG/>,
      <ClosedFoldSVG/>,
      <TopOpenFoldSVG/>,
      <BottomOpenFoldSVG/>,

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  position: relative;
  background-color: ${gutterBackgroundColour};
  
`;