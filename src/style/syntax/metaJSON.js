"use strict";

import { repositoryColour, stringLiteralColour } from "../../scheme/syntax/metaJSON";

const metaJSONSyntaxStyle = `

  .meta-json.syntax > .string-literal { color: ${stringLiteralColour}; }

  .meta-json.syntax > .repository, .meta-json.syntax > .repository a { color: ${repositoryColour}; }

`;

export default metaJSONSyntaxStyle;
