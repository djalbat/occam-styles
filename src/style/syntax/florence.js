"use strict";

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
         faultyLabelNameColour,
         disabledLabelNameColour,
         referenceNameHoverColour,
         faultyReferenceNameColour,
         faultyLabelNameHoverColour,
         disabledReferenceNameColour,
         disabledLabelNameHoverColour,
         faultyReferenceNameHoverColour,
         disabledReferenceNameHoverColour } from "../../scheme/syntax/florence";

const florenceSyntaxStyle = `

  .florence.syntax > .type { color: ${typeColour}; }

  .florence.syntax > .special { color: ${specialColour}; }
  
  .florence.syntax > .comment { color: ${commentColour}; }
  
  .florence.syntax > .keyword { color: ${keywordColour}; }
  
  .florence.syntax > .operator { color: ${operatorColour}; }
  
  .florence.syntax > .meta-type { color: ${metaTypeColour}; }

  .florence.syntax > .string-literal { color: ${stringLiteralColour}; }

  .florence.syntax > .name.context { color: ${contextNameColour}; }

  .florence.syntax > .name.label { color: ${labelNameColour}; }
  
  .florence.syntax > .name.label:hover { color: ${labelNameHoverColour}; }

  .florence.syntax > .name.label.faulty { color: ${faultyLabelNameColour}; }
  
  .florence.syntax > .name.label.faulty:hover { color: ${faultyLabelNameHoverColour}; }

  .florence.syntax > .name.label.disabled { color: ${disabledLabelNameColour}; }
  
  .florence.syntax > .name.label.disabled:hover { color: ${disabledLabelNameHoverColour}; }

  .florence.syntax > .name.reference { color: ${referenceNameColour}; }
  
  .florence.syntax > .name.reference:hover { color: ${referenceNameHoverColour}; }

  .florence.syntax > .name.reference.faulty { color: ${faultyReferenceNameColour}; }
  
  .florence.syntax > .name.reference.faulty:hover { color: ${faultyReferenceNameHoverColour}; }

  .florence.syntax > .name.reference.disabled { color: ${disabledReferenceNameColour}; }
  
  .florence.syntax > .name.reference.disabled:hover { color: ${disabledReferenceNameHoverColour}; }

`;

export default florenceSyntaxStyle;
