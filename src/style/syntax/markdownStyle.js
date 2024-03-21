"use strict";

import { errorColour, commentColour, underlineColour, nonsenseColour } from "../../scheme/syntax/default";
import { colour, nameColour, specialColour, ruleNameColour, delimiterColour, stringLiteralColour } from "../../scheme/syntax/markdownStyle";

const markdownStyleSyntaxStyle = `

  .markdown-style.syntax > div > * { color: ${colour}; }

  .markdown-style.syntax > div > .name { color: ${nameColour}; }

  .markdown-style.syntax > div > .comment { color: ${commentColour}; }

  .markdown-style.syntax > div > .special { color: ${specialColour}; }

  .markdown-style.syntax > div > .rule-name { color: ${ruleNameColour}; }

  .markdown-style.syntax > div > .delimiter { color: ${delimiterColour}; }

  .markdown-style.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .markdown-style.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

  .markdown-style.syntax > div > .nonsense {
    color: ${nonsenseColour};
  } 

`;

export default markdownStyleSyntaxStyle;
