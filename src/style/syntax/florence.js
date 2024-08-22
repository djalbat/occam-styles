"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { typeColour,
         specialColour,
         keywordColour,
         operatorColour,
        contextColour,
         metaTypeColour,
         metavariableColour,
         metavariableHoverColour,
         disabledMetavariableColour } from "../../scheme/syntax/florence";

const florenceSyntaxStyle = `

  .florence.syntax > div > .type { color: ${typeColour}; }

  .florence.syntax > div > .special { color: ${specialColour}; }
  
  .florence.syntax > div > .comment { color: ${commentColour}; }
  
  .florence.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .florence.syntax > div > .operator { color: ${operatorColour}; }
  
  .florence.syntax > div > .context { color: ${contextColour}; }

  .florence.syntax > div > .meta-type { color: ${metaTypeColour}; }

  .florence.syntax > div > .primary-keyword { color: ${keywordColour}; }
  
  .florence.syntax > div > .secondary-keyword { color: ${keywordColour}; }
  
  .florence.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  .florence.syntax > div > .labels .metavariable { color: ${metavariableColour}; }
  
  .florence.syntax > div > .labels .metavariable:hover { color: ${metavariableHoverColour}; }

  .florence.syntax > div > .labels .metavariable:disabled { color: ${disabledMetavariableColour}; }
  
  .florence.syntax > div > .reference .metavariable { color: ${metavariableColour}; }
  
  .florence.syntax > div > .reference .metavariable:hover { color: ${metavariableHoverColour}; }

  .florence.syntax > div > .reference .metavariable:disabled { color: ${disabledMetavariableColour}; }

  .florence.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default florenceSyntaxStyle;
