"use strict";

import { colour } from "../../scheme/syntax/markdown";
import { errorColour, commentColour, underlineColour } from "../../scheme/syntax/default";

const markdownSyntaxStyle = `

  .markdown.syntax > div > * { color: ${colour}; }

  .markdown.syntax > div > .comment { color: ${commentColour}; }

  .markdown.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

`;

export default markdownSyntaxStyle;
