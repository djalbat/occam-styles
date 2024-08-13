"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { typeColour,
         specialColour,
         keywordColour,
         operatorColour,
         metaTypeColour,
         labelColour,
         contextColour,
         referenceColour,
         labelHoverColour,
         disabledLabelColour,
         referenceHoverColour,
         disabledReferenceColour } from "../../scheme/syntax/florence";

const florenceSyntaxStyle = `

  .florence.syntax > div > .type { color: ${typeColour}; }

  .florence.syntax > div > .special { color: ${specialColour}; }
  
  .florence.syntax > div > .comment { color: ${commentColour}; }
  
  .florence.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .florence.syntax > div > .operator { color: ${operatorColour}; }
  
  .florence.syntax > div > .meta-type { color: ${metaTypeColour}; }

  .florence.syntax > div > .primary-keyword { color: ${keywordColour}; }
  
  .florence.syntax > div > .secondary-keyword { color: ${keywordColour}; }
  
  .florence.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .florence.syntax > div > .context { color: ${contextColour}; }

  .florence.syntax > div > label { color: ${labelColour}; }
  
  .florence.syntax > div > label:hover { color: ${labelHoverColour}; }

  .florence.syntax > div > label:disabled { color: ${disabledLabelColour}; }
  
  .florence.syntax > div > .reference { color: ${referenceColour}; }
  
  .florence.syntax > div > .reference:hover { color: ${referenceHoverColour}; }

  .florence.syntax > div > .reference:disabled { color: ${disabledReferenceColour}; }
  
  .florence.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default florenceSyntaxStyle;
