"use strict";

import withStyle from "easy-with-style";  ///

import syntaxStyle from "./style/syntax";

const { addStyle } = withStyle;

export default function addSyntaxStyle(fontSize, lineHeight) {
  addStyle(`

    ${syntaxStyle(fontSize, lineHeight)}
    
  `);
};
