"use strict";

import withStyle from "easy-with-style";  ///

import firaCodeStyle from "./style/firaCode";

const { renderStyle } = withStyle;

export default function renderFiraCodeStyle() {
  renderStyle(`

    ${firaCodeStyle()}
    
  `);
};
