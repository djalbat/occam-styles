"use strict";

import withStyle from "easy-with-style";  ///

import { Textarea } from "easy";

import juliaMonoFontMixin from "../../mixin/font/juliaMono";

class JuliaMonoTextarea extends Textarea {
  static defaultProperties = {
    className: "julia-mono"
  }
}

export default withStyle(JuliaMonoTextarea)`

  color: white;
  width: 32rem;
  height: 32rem;
  outline: none;
  background-color: black;
  
  ${juliaMonoFontMixin}
  
`;
