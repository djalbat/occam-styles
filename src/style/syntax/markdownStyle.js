"use strict";

import { colour, nameColour, specialColour, ruleNameColour, delimiterColour, stringLiteralColour } from "../../scheme/syntax/markdownStyle";

const markdownStyleSyntaxStyle = `

  .markdown-style.syntax > div > * { color: ${colour}; }

  .markdown-style.syntax > div > .name { color: ${nameColour}; }

  .markdown-style.syntax > div > .special { color: ${specialColour}; }

  .markdown-style.syntax > div > .rule-name { color: ${ruleNameColour}; }

  .markdown-style.syntax > div > .delimiter { color: ${delimiterColour}; }

  .markdown-style.syntax > div > .string-literal { color: ${stringLiteralColour}; }

`;

export default markdownStyleSyntaxStyle;
