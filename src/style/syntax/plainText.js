"use strict";

import { colour } from "../../scheme/syntax/plainText";

const plainTextSyntaxStyle = `

  .plain-text.syntax, 
  .plain-text.syntax > * { 
    color: ${colour}; 
  }

`;

export default plainTextSyntaxStyle;
