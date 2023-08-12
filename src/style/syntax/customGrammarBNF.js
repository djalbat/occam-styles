"use strict";

import { nameColour, typeColour, precedenceColour, stringLiteralColour } from "../../scheme/syntax/customGrammarBNF"

const customGrammarBNFSyntaxStyle = `

  .custom-grammar-bnf.syntax > div > .name { color: ${nameColour}; }

  .custom-grammar-bnf.syntax > div > .type { color: ${typeColour}; }

  .custom-grammar-bnf.syntax > div > .precedence { color: ${precedenceColour}; }

  .custom-grammar-bnf.syntax > div > .string-literal { color: ${stringLiteralColour}; }
  
`;

export default customGrammarBNFSyntaxStyle;
