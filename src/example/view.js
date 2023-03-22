"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LogoSVG from "../svg/logo";
import FoldLineSVG from "../svg/fold/line";
import ClosedFoldSVG from "../svg/fold/closed";
import TopOpenFoldSVG from "../svg/fold/topOpen";
import BottomOpenFoldSVG from "../svg/fold/bottomOpen";
import JoinSessionToolbarSVG from "./svg/toolbar/joinSession";
import CopySessionKeyToolbarSVG from "./svg/toolbar/copySessionKey";
import ExportCustomGrammarsToolbarSVG from "./svg/toolbar/exportCustomGrammars";

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
      <FoldLineSVG/>,
      <ClosedFoldSVG/>,
      <TopOpenFoldSVG/>,
      <BottomOpenFoldSVG/>,
      <JoinSessionToolbarSVG/>,
      <CopySessionKeyToolbarSVG/>,
      <ExportCustomGrammarsToolbarSVG/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  display: flex;
  flex-direction: column;
  
`;