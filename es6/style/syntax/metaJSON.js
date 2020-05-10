"use strict";

import { stringLiteralColour,
         dependencyColour,
         dependencyHoverColour,
         faultyDependencyColour,
         faultyDependencyHoverColour,
         disabledDependencyColour,
         disabledDependencyHoverColour,
         repositoryColour,
         repositoryHoverColour,
         faultyRepositoryColour,
         faultyRepositoryHoverColour,
         disabledRepositoryColour,
         disabledRepositoryHoverColour } from "../../scheme/syntax/metaJSON";

const metaJSONSyntaxStyle = `

  .meta-json.syntax > .string-literal { color: ${stringLiteralColour}; }

  .meta-json.syntax > .dependency { color: ${dependencyColour}; }

  .meta-json.syntax > .dependency:hover { color: ${dependencyHoverColour}; }

  .meta-json.syntax > .dependency.faulty { color: ${faultyDependencyColour}; }

  .meta-json.syntax > .dependency.faulty:hover { color: ${faultyDependencyHoverColour}; }

  .meta-json.syntax > .dependency.disabled { color: ${disabledDependencyColour}; }

  .meta-json.syntax > .dependency.disabled:hover { color: ${disabledDependencyHoverColour}; }

  .meta-json.syntax > .repository, .meta-json.syntax > .repository a { color: ${repositoryColour}; }

  .meta-json.syntax > .repository:hover, .meta-json.syntax > .repository a:hover { color: ${repositoryHoverColour}; }

  .meta-json.syntax > .repository.faulty, .meta-json.syntax > .repository.faulty a { color: ${faultyRepositoryColour}; }

  .meta-json.syntax > .repository.faulty:hover, .meta-json.syntax > .repository.faulty a:hover { color: ${faultyRepositoryHoverColour}; }

  .meta-json.syntax > .repository.disabled, .meta-json.syntax > .repository.disabled a { color: ${disabledRepositoryColour}; }

  .meta-json.syntax > .repository.disabled:hover, .meta-json.syntax > .repository.disabled a:hover { color: ${disabledRepositoryHoverColour}; }

`;

export default metaJSONSyntaxStyle;
