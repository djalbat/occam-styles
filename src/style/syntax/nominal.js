"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { typeColour,
         specialColour,
         keywordColour,
         operatorColour,
         contextColour,
         metaTypeColour,
         labelColour,
         labelHoverColour,
         disabledLabelColour,
         referenceColour,
         referenceHoverColour,
         disabledReferenceColour } from "../../scheme/syntax/nominal";

const nominalSyntaxStyle = `

  .nominal.syntax > div > .type { color: ${typeColour}; }

  .nominal.syntax > div > .special { color: ${specialColour}; }
  
  .nominal.syntax > div > .comment { color: ${commentColour}; }
  
  .nominal.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .nominal.syntax > div > .operator { color: ${operatorColour}; }
  
  .nominal.syntax > div > .context { color: ${contextColour}; }

  .nominal.syntax > div > .meta-type { color: ${metaTypeColour}; }

  .nominal.syntax > div > .primary-keyword { color: ${keywordColour}; }
  
  .nominal.syntax > div > .secondary-keyword { color: ${keywordColour}; }
  
  .nominal.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .nominal.syntax > div > .label { color: ${labelColour}; }
  
  .nominal.syntax > div > .label:hover { color: ${labelHoverColour}; }

  .nominal.syntax > div > .label:disabled { color: ${disabledLabelColour}; }
  
  .nominal.syntax > div > .reference { color: ${referenceColour}; }
  
  .nominal.syntax > div > .reference:hover { color: ${referenceHoverColour}; }

  .nominal.syntax > div > .reference:disabled { color: ${disabledReferenceColour}; }
  
  .nominal.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default nominalSyntaxStyle;
