"use strict";

import withStyle from "easy-with-style";  ///

import syntaxStyle from "./style/syntax";

const { renderStyle } = withStyle;

export default function renderSyntaxStyle(fontSize, lineHeight) {
  renderStyle(`

    ${syntaxStyle(fontSize, lineHeight)}
    
  `);
};
