"use strict";

import { errorColour, underlineColour, nonsenseColour } from "../../scheme/syntax/default";
import { typeColour,
         specialColour,
         commentColour,
         keywordColour,
         operatorColour,
         metaTypeColour,
         labelNameColour,
         contextNameColour,
         referenceNameColour,
         stringLiteralColour,
         labelNameHoverColour,
         disabledLabelNameColour,
         referenceNameHoverColour,
         disabledReferenceNameColour,
         disabledLabelNameHoverColour,
         disabledReferenceNameHoverColour } from "../../scheme/syntax/florence";

const florenceSyntaxStyle = `

  .florence.syntax > div > .type { color: ${typeColour}; }

  .florence.syntax > div > .special { color: ${specialColour}; }
  
  .florence.syntax > div > .comment { color: ${commentColour}; }
  
  .florence.syntax > div > .operator { color: ${operatorColour}; }
  
  .florence.syntax > div > .meta-type { color: ${metaTypeColour}; }

  .florence.syntax > div > .primary-keyword { color: ${keywordColour}; }
  
  .florence.syntax > div > .secondary-keyword { color: ${keywordColour}; }
  
  .florence.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .florence.syntax > div > .name.context { color: ${contextNameColour}; }

  .florence.syntax > div > .name.label { color: ${labelNameColour}; }
  
  .florence.syntax > div > .name.label:hover { color: ${labelNameHoverColour}; }

  .florence.syntax > div > .name.label.disabled { color: ${disabledLabelNameColour}; }
  
  .florence.syntax > div > .name.label.disabled:hover { color: ${disabledLabelNameHoverColour}; }

  .florence.syntax > div > .name.reference { color: ${referenceNameColour}; }
  
  .florence.syntax > div > .name.reference:hover { color: ${referenceNameHoverColour}; }

  .florence.syntax > div > .name.reference.disabled { color: ${disabledReferenceNameColour}; }
  
  .florence.syntax > div > .name.reference.disabled:hover { color: ${disabledReferenceNameHoverColour}; }

  .florence.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

  .florence.syntax > div > .nonsense {
    color: ${nonsenseColour};
  } 

`;

export default florenceSyntaxStyle;
