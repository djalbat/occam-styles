"use strict";

import { repositoryColour, stringLiteralColour } from "../../scheme/syntax/metaJSON";

const metaJSONSyntaxStyle = `

  .meta-json.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .meta-json.syntax > div > .repository, 
  
  .meta-json.syntax > div > .repository a { color: ${repositoryColour}; }

`;

export default metaJSONSyntaxStyle;
