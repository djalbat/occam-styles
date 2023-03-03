"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

import firaCodeFontMixin from "../../mixin/font/firaCode";

class FiraCodeTextarea extends Textarea {
  static defaultProperties = {
    className: "fira-code"
  }
}

export default withStyle(FiraCodeTextarea)`

  color: white;
  width: 32rem;
  height: 32rem;
  outline: none;
  background-color: black;
  
  ${firaCodeFontMixin}
  
`;
