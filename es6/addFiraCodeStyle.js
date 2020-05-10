"use strict";

import withStyle from "easy-with-style";  ///

import firaCodeStyle from "./style/firaCode";

const { addStyle } = withStyle;

export default function addFiraCodeStyle() {
  addStyle(`

    ${firaCodeStyle()}
    
  `);
};
