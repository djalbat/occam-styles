"use strict";

import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { colour, headingColour, directiveColour } from "../../scheme/syntax/markdown";

const markdownSyntaxStyle = `

  .markdown.syntax > div > * { color: ${colour}; }

  .markdown.syntax > div > .heading { color: ${headingColour}; }

  .markdown.syntax > div > .directive { color: ${directiveColour}; }

  .markdown.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default markdownSyntaxStyle;
