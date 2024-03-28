"use strict";

import { errorColour, commentColour, nonsenseColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { colour, nameColour, valueColour, specialColour, ruleNameColour, delimiterColour, stringLiteralColour } from "../../scheme/syntax/markdownStyle";

const markdownStyleSyntaxStyle = `

  .markdown-style.syntax > div > * { color: ${colour}; }

  .markdown-style.syntax > div > .name { color: ${nameColour}; }

  .markdown-style.syntax > div > .value { color: ${valueColour}; }

  .markdown-style.syntax > div > .special { color: ${specialColour}; }

  .markdown-style.syntax > div > .comment { color: ${commentColour}; }

  .markdown-style.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .markdown-style.syntax > div > .rule-name { color: ${ruleNameColour}; }

  .markdown-style.syntax > div > .delimiter { color: ${delimiterColour}; }

  .markdown-style.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .markdown-style.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default markdownStyleSyntaxStyle;
