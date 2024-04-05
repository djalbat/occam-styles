"use strict";

import { nameColour, typeColour } from "../../scheme/syntax/customGrammarBNF"
import { errorColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const customGrammarBNFSyntaxStyle = `

  .custom-grammar-bnf.syntax > div > .name { color: ${nameColour}; }

  .custom-grammar-bnf.syntax > div > .type { color: ${typeColour}; }

  .custom-grammar-bnf.syntax > div > .string-literal { color: ${stringLiteralColour}; }
  
  .custom-grammar-bnf.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default customGrammarBNFSyntaxStyle;
