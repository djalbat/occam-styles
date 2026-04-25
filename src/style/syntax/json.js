"use strict";

import { nullColour, numberColour, booleanColour } from "../../scheme/syntax/json";
import { errorColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const jsonSyntaxStyle = `

  div.json.lines > div.line > div.syntax > .null { color: ${nullColour}; }

  div.json.lines > div.line > div.syntax > .number { color: ${numberColour}; }

  div.json.lines > div.line > div.syntax > .boolean { color: ${booleanColour}; }

  div.json.lines > div.line > div.syntax > .nonsense { color: ${nonsenseColour}; } 

  div.json.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }

  div.json.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default jsonSyntaxStyle;
