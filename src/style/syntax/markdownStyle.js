"use strict";

import { errorColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { colour,
         nameColour,
         valueColour,
         mediaColour,
         specialColour,
         ruleNameColour,
         verbatimColour,
         delimiterColour,
         mediaTypeColour,
         verbatimBackgroundColour } from "../../scheme/syntax/markdownStyle";

const markdownStyleSyntaxStyle = `

  div.markdown-style.lines > div.line > div.syntax > * { color: ${colour}; }

  div.markdown-style.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.markdown-style.lines > div.line > div.syntax > .value { color: ${valueColour}; }

  div.markdown-style.lines > div.line > div.syntax > .media { color: ${mediaColour}; }

  div.markdown-style.lines > div.line > div.syntax > .special { color: ${specialColour}; }

  div.markdown-style.lines > div.line > div.syntax > .nonsense { color: ${nonsenseColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .verbatim { color: ${verbatimColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .rule-name { color: ${ruleNameColour}; }

  div.markdown-style.lines > div.line > div.syntax > .delimiter { color: ${delimiterColour}; }

  div.markdown-style.lines > div.line > div.syntax > .media-type { color: ${mediaTypeColour}; }

  div.markdown-style.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }

  div.markdown-style.lines > div.line > div.syntax > .verbatim { background-color: ${verbatimBackgroundColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default markdownStyleSyntaxStyle;
