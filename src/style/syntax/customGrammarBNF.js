"use strict";

import { nameColour, typeColour } from "../../scheme/syntax/customGrammarBNF"
import { errorColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const customGrammarBNFSyntaxStyle = `

  div.custom-grammar-bnf.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.custom-grammar-bnf.lines > div.line > div.syntax > .type { color: ${typeColour}; }

  div.custom-grammar-bnf.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }
  
  div.custom-grammar-bnf.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default customGrammarBNFSyntaxStyle;
