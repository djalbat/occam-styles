"use strict";

import { stringLiteralColour,
         dependencyColour,
         dependencyHoverColour,
         faultyDependencyColour,
         faultyDependencyHoverColour,
         disabledDependencyColour,
         disabledDependencyHoverColour,
         repositoryColour } from "../../scheme/syntax/metaJSON";

const metaJSONSyntaxStyle = `

  .meta-json.syntax > .string-literal { color: ${stringLiteralColour}; }

  .meta-json.syntax > .dependency { color: ${dependencyColour}; }

  .meta-json.syntax > .dependency:hover { color: ${dependencyHoverColour}; }

  .meta-json.syntax > .dependency.faulty { color: ${faultyDependencyColour}; }

  .meta-json.syntax > .dependency.faulty:hover { color: ${faultyDependencyHoverColour}; }

  .meta-json.syntax > .dependency.disabled { color: ${disabledDependencyColour}; }

  .meta-json.syntax > .dependency.disabled:hover { color: ${disabledDependencyHoverColour}; }

  .meta-json.syntax > .repository, .meta-json.syntax > .repository a { color: ${repositoryColour}; }

`;

export default metaJSONSyntaxStyle;
