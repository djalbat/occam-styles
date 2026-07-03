"use strict";

import { colour, stuffColour, commentColour, nonsenseColour, stringLiteralColour, regularExpressionColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  div.lines > div.line > div.syntax > * { color: ${colour}; }
  
  div.lines > div.line > div.syntax > .stuff { color: ${stuffColour}; }

  div.lines > div.line > div.syntax > .comment { color: ${commentColour}; }
  
  div.lines > div.line > div.syntax > .nonsense { color: ${nonsenseColour}; } 

  div.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }
  
  div.lines > div.line > div.syntax > .regular-expression { color: ${regularExpressionColour}; }

  div.lines > div.line > div.syntax * { 
    display: inline;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
  
  div.lines > div.line > div.syntax > button {
    cursor: pointer;
    outline: none;
    pointer-events: auto;
    background-color: transparent;
  }
  
  div.lines > div.line > div.syntax > button:disabled {
    cursor: default;
  }
  
  div.lines > div.line > div.syntax > .error {
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default defaultSyntaxStyle;
