"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { typeColour,
         stuffColour,
         specialColour,
         bracketColour,
         keywordColour,
         contextColour,
         metaTypeColour,
         labelNameColour,
         referenceNameColour,
         labelNameHoverColour,
         disabledLabelNameColour,
         referenceNameHoverColour,
         disabledReferenceNameColour } from "../../scheme/syntax/nominal";

const nominalSyntaxStyle = `

  .nominal.syntax > div > .type { color: ${typeColour}; }

  .nominal.syntax > div > .stuff { color: ${stuffColour}; }

  .nominal.syntax > div > .special { color: ${specialColour}; }
  
  .nominal.syntax > div > .bracket { color: ${bracketColour}; }
  
  .nominal.syntax > div > .comment { color: ${commentColour}; }
  
  .nominal.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .nominal.syntax > div > .context { color: ${contextColour}; }

  .nominal.syntax > div > .meta-type { color: ${metaTypeColour}; }

  .nominal.syntax > div > .primary-keyword { color: ${keywordColour}; }
  
  .nominal.syntax > div > .secondary-keyword { color: ${keywordColour}; }
  
  .nominal.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .nominal.syntax > div > .label-name { color: ${labelNameColour}; }
  
  .nominal.syntax > div > .label-name:hover { color: ${labelNameHoverColour}; }

  .nominal.syntax > div > .label-name:disabled { color: ${disabledLabelNameColour}; }
  
  .nominal.syntax > div > .reference-name { color: ${referenceNameColour}; }
  
  .nominal.syntax > div > .reference-name:hover { color: ${referenceNameHoverColour}; }

  .nominal.syntax > div > .reference-name:disabled { color: ${disabledReferenceNameColour}; }
  
  .nominal.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default nominalSyntaxStyle;
