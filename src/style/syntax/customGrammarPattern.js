"use strict";

import { errorColour, underlineColour } from "../../scheme/syntax/default";

const customGrammarPatternSyntaxStyle = `

  .custom-grammar-pattern.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

`;

export default customGrammarPatternSyntaxStyle;
