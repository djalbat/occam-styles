"use strict";

import { nameColour, typeColour, regularExpressionColour } from "../../scheme/syntax/bnf"

const bnfSyntaxStyle = `

  div.bnf.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.bnf.lines > div.line > div.syntax > .type { color: ${typeColour}; }

  div.bnf.lines > div.line > div.syntax > .regular-expression { color: ${regularExpressionColour}; }

`;

export default bnfSyntaxStyle;
