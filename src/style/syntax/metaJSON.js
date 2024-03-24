"use strict";

import { repositoryColour, stringLiteralColour } from "../../scheme/syntax/metaJSON";
import { errorColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const metaJSONSyntaxStyle = `

  .meta-json.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .meta-json.syntax > div > .repository, 
  
  .meta-json.syntax > div > .repository a { color: ${repositoryColour}; }

  .meta-json.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default metaJSONSyntaxStyle;
