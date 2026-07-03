"use strict";

import { nullColour, numberColour, booleanColour } from "../../scheme/syntax/json";

const jsonSyntaxStyle = `

  div.json.lines > div.line > div.syntax > .null { color: ${nullColour}; }

  div.json.lines > div.line > div.syntax > .number { color: ${numberColour}; }

  div.json.lines > div.line > div.syntax > .boolean { color: ${booleanColour}; }

`;

export default jsonSyntaxStyle;
