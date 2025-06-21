"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LogoSVG from "./view/logo";
import MenuDiv from "./view/div/menu";
import ToolbarDiv from "./view/div/toolbar";
import MonospaceParagraph from "./view/paragraph/monospace";

class View extends Element {
  childElements() {
    return ([

      // <LogoSVG/>,
      <MenuDiv/>,
      // <ToolbarDiv/>,
      // <MonospaceParagraph/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 2rem;
  
`;
