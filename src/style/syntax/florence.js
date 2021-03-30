"use strict";

import { customColour,
         specialColour,
         commentColour,
         keywordColour,
         reservedColour,
         stringLiteralColour,
         typeNameColour,
         contextNameColour,
         variableNameColour,
         metavariableNameColour,
         labelNameColour,
         labelNameHoverColour,
         faultyLabelNameColour,
         faultyLabelNameHoverColour,
         disabledLabelNameColour,
         disabledLabelNameHoverColour,
         referenceNameColour,
         referenceNameHoverColour,
         faultyReferenceNameColour,
         faultyReferenceNameHoverColour,
         disabledReferenceNameColour,
         disabledReferenceNameHoverColour } from "../../scheme/syntax/florence";

const florenceSyntaxStyle = `

  .florence.syntax > .custom { color: ${customColour}; }
  
  .florence.syntax > .special { color: ${specialColour}; }
  
  .florence.syntax > .comment { color: ${commentColour}; }
  
  .florence.syntax > .keyword { color: ${keywordColour}; }
  
  .florence.syntax > .reserved { color: ${reservedColour}; }
  
  .florence.syntax > .string-literal { color: ${stringLiteralColour}; }

  .florence.syntax > .name.type { color: ${typeNameColour}; }

  .florence.syntax > .name.context { color: ${contextNameColour}; }

  .florence.syntax > .name.variable { color: ${variableNameColour}; }

  .florence.syntax > .name.metavariable { color: ${metavariableNameColour}; }
  
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
