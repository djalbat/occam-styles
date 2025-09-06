"use strict";

import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const customGrammarVocabularySyntaxStyle = `

  div.custom-grammar-vocabulary.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default customGrammarVocabularySyntaxStyle;
