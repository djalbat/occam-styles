"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { typeColour,
         queryColour,
         symbolColour,
         returnColour,
         bracketColour,
         specialColour,
         keywordColour,
         operatorColour,
         primitiveColour,
         expressionColour,
         labelNameColour,
         referenceNameColour,
         labelNameHoverColour,
         disabledLabelNameColour,
         referenceNameHoverColour,
         disabledReferenceNameColour } from "../../scheme/syntax/furtle";

const furtleSyntaxStyle = `

  div.furtle.lines > div.line > div.syntax > .type { color: ${typeColour}; }

  div.furtle.lines > div.line > div.syntax > .query { color: ${queryColour}; }

  div.furtle.lines > div.line > div.syntax > .symbol { color: ${symbolColour}; }

  div.furtle.lines > div.line > div.syntax > .return { color: ${returnColour}; }
  
  div.furtle.lines > div.line > div.syntax > .bracket { color: ${bracketColour}; }
  
  div.furtle.lines > div.line > div.syntax > .special { color: ${specialColour}; }
  
  div.furtle.lines > div.line > div.syntax > .keyword { color: ${keywordColour}; }
  
  div.furtle.lines > div.line > div.syntax > .comment { color: ${commentColour}; }
  
  div.furtle.lines > div.line > div.syntax > .nonsense { color: ${nonsenseColour}; } 

  div.furtle.lines > div.line > div.syntax > .operator { color: ${operatorColour}; }
  
  div.furtle.lines > div.line > div.syntax > .primitive { color: ${primitiveColour}; }

  div.furtle.lines > div.line > div.syntax > .expression { color: ${expressionColour}; }

  div.furtle.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }
  
  div.furtle.lines > div.line > div.syntax > .label-name { color: ${labelNameColour}; }
  
  div.furtle.lines > div.line > div.syntax > .label-name:hover { color: ${labelNameHoverColour}; }

  div.furtle.lines > div.line > div.syntax > .label-name:disabled { color: ${disabledLabelNameColour}; }
  
  div.furtle.lines > div.line > div.syntax > .reference-name { color: ${referenceNameColour}; }
  
  div.furtle.lines > div.line > div.syntax > .reference-name:hover { color: ${referenceNameHoverColour}; }

  div.furtle.lines > div.line > div.syntax > .reference-name:disabled { color: ${disabledReferenceNameColour}; }

  div.furtle.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default furtleSyntaxStyle;
