"use strict";

import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const customGrammarPatternSyntaxStyle = `

  .custom-grammar-pattern.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default customGrammarPatternSyntaxStyle;
