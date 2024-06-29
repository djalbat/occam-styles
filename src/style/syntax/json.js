"use strict";

import { nullColour, numberColour, booleanColour } from "../../scheme/syntax/json";
import { errorColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const jsonSyntaxStyle = `

  [class$="-json"].syntax > div > .null { color: ${nullColour}; }

  [class$="-json"].syntax > div > .number { color: ${numberColour}; }

  [class$="-json"].syntax > div > .boolean { color: ${booleanColour}; }

  [class$="-json"].syntax > div > .nonsense { color: ${nonsenseColour}; } 

  [class$="-json"].syntax > div > .string-literal { color: ${stringLiteralColour}; }

  [class$="-json"].syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default jsonSyntaxStyle;
