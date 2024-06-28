"use strict";

import { numberColour } from "../../scheme/syntax/json";
import { errorColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const jsonSyntaxStyle = `

  [class$="-json"].syntax > div > .number { color: ${numberColour}; }

  [class$="-json"].syntax > div > .string-literal { color: ${stringLiteralColour}; }

  [class$="-json"].syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default jsonSyntaxStyle;
