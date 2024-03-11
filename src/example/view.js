"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { LogoSVG } from "../index"; //

import MenuDiv from "./view/div/menu";
import ToolbarDiv from "./view/div/toolbar";

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
      <MenuDiv/>,
      <ToolbarDiv/>,

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
