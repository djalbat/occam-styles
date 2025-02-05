"use strict";

import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const customGrammarPatternSyntaxStyle = `

  div.custom-grammar-pattern.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default customGrammarPatternSyntaxStyle;
