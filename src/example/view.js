"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { LogoSVG } from "../index";  ///

class View extends Element {
  childElements() {
    return (

      <LogoSVG/>

    );
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