"use strict";

import { colour, commentColour } from "../../scheme/syntax/plainText";
import { errorColour, underlineColour } from "../../scheme/syntax/default";

const plainTextSyntaxStyle = `

  .markdown.syntax > div > * { color: ${colour}; }

  .markdown.syntax > div > .comment { color: ${commentColour}; }

  .markdown.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

`;

export default plainTextSyntaxStyle;
