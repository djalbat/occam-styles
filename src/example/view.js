"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LogoSVG from "../svg/logo";
import JoinSessionToolbarSVG from "./svg/toolbar/joinSession";
import CopySessionKeyToolbarSVG from "./svg/toolbar/copySessionKey";
import ExportCustomGrammarsToolbarSVG from "./svg/toolbar/exportCustomGrammars";

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
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