"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import LogoSVG from "../svg/logo";
import JuliaMonoTextArea from "./textarea/juliaMono"

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
      <JuliaMonoTextArea/>

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