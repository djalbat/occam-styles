"use strict";

import { colour,
         nameColour,
         valueColour,
         mediaColour,
         specialColour,
         contentColour,
         ruleNameColour,
         delimiterColour,
         mediaTypeColour,
         contentBackgroundColour } from "../../scheme/syntax/markdownStyle";

const markdownStyleSyntaxStyle = `

  div.markdown-style.lines > div.line > div.syntax > * { color: ${colour}; }

  div.markdown-style.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.markdown-style.lines > div.line > div.syntax > .value { color: ${valueColour}; }

  div.markdown-style.lines > div.line > div.syntax > .media { color: ${mediaColour}; }

  div.markdown-style.lines > div.line > div.syntax > .special { color: ${specialColour}; }

  div.markdown-style.lines > div.line > div.syntax > .content { color: ${contentColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .rule-name { color: ${ruleNameColour}; }

  div.markdown-style.lines > div.line > div.syntax > .delimiter { color: ${delimiterColour}; }

  div.markdown-style.lines > div.line > div.syntax > .media-type { color: ${mediaTypeColour}; }

  div.markdown-style.lines > div.line > div.syntax > .content { background-color: ${contentBackgroundColour}; } 

`;

export default markdownStyleSyntaxStyle;
