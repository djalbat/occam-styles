"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MenuDiv from "./view/div/menu";
import ToolbarDiv from "./view/div/toolbar";

class View extends Element {
  childElements() {
    return ([

      <ToolbarDiv/>,
      <MenuDiv/>

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
