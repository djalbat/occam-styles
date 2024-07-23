"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { juliaMonoFontMixin } from "../../../index";  ///

class MonospaceParagraph extends Element {
  childElements() {
    return "<||>";
  }

  static tagName = "p";

  static defaultProperties = {
    className: "monospace"
  };
}

export default withStyle(MonospaceParagraph)`

  ${juliaMonoFontMixin};

  font-size: 32px;
  
`;
