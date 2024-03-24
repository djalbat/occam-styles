"use strict";

import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { nameColour, typeColour, stringLiteralColour } from "../../scheme/syntax/customGrammarBNF"

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
