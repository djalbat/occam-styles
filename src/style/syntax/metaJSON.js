"use strict";

import { errorColour, underlineColour } from "../../scheme/syntax/default";
import { repositoryColour, stringLiteralColour } from "../../scheme/syntax/metaJSON";

const metaJSONSyntaxStyle = `

  .meta-json.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .meta-json.syntax > div > .repository, 
  
  .meta-json.syntax > div > .repository a { color: ${repositoryColour}; }

  .meta-json.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

`;

export default metaJSONSyntaxStyle;
