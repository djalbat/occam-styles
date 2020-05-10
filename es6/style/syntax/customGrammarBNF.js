"use strict";

import { nameColour, typeColour, stringLiteralColour } from "../../scheme/syntax/customGrammarBNF"

const customGrammarBNFSyntaxStyle = `

  .custom-grammar-bnf.syntax > .name { color: ${nameColour}; }

  .custom-grammar-bnf.syntax > .type { color: ${typeColour}; }

  .custom-grammar-bnf.syntax > .string-literal { color: ${stringLiteralColour}; }
  
`;

export default customGrammarBNFSyntaxStyle;
