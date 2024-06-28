"use strict";

import { numberColour } from "../../scheme/syntax/json";
import { errorColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const jsonSyntaxStyle = `

  .json.syntax > div > .number { color: ${numberColour}; }

  .json.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .json.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default jsonSyntaxStyle;
