"use strict";

import { nameColour, typeColour } from "../../scheme/syntax/customGrammarBNF"
import { errorColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const bnfSyntaxStyle = `

  div.bnf.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.bnf.lines > div.line > div.syntax > .type { color: ${typeColour}; }

  div.bnf.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }
  
  div.bnf.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default bnfSyntaxStyle;
