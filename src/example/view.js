"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LogoSVG from "../svg/logo";
import FiraCodeTextArea from "./textarea/firaCode"

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
      <FiraCodeTextArea/>

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