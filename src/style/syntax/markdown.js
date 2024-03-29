"use strict";

import { colour } from "../../scheme/syntax/markdown";
import { errorColour, commentColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const markdownSyntaxStyle = `

  .markdown.syntax > div > * { color: ${colour}; }

  .markdown.syntax > div > .comment { color: ${commentColour}; }

  .markdown.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default markdownSyntaxStyle;
