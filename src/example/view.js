"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LogoSVG from "../svg/logo";
import JoinSessionToolbarSVG from "./svg/toolbar/joinSession";
import PasteSessionKeyToolbarSVG from "./svg/toolbar/pasteSessionKey";
import ExportCustomGrammarsToolbarSVG from "./svg/toolbar/exportCustomGrammars";

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
      <JoinSessionToolbarSVG/>,
      <PasteSessionKeyToolbarSVG/>,
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