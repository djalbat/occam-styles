"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { typeColour,
         queryColour,
         returnColour,
         bracketColour,
         specialColour,
         keywordColour,
         operatorColour,
         primitiveColour,
         expressionColour,
         variableNameColour,
         functionNameColour } from "../../scheme/syntax/furtle";

const furtleSyntaxStyle = `

  .furtle.syntax > div > .type { color: ${typeColour}; }

  .furtle.syntax > div > .query { color: ${queryColour}; }

  .furtle.syntax > div > .return { color: ${returnColour}; }
  
  .furtle.syntax > div > .bracket { color: ${bracketColour}; }
  
  .furtle.syntax > div > .special { color: ${specialColour}; }
  
  .furtle.syntax > div > .keyword { color: ${keywordColour}; }
  
  .furtle.syntax > div > .comment { color: ${commentColour}; }
  
  .furtle.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .furtle.syntax > div > .operator { color: ${operatorColour}; }
  
  .furtle.syntax > div > .primitive { color: ${primitiveColour}; }

  .furtle.syntax > div > .expression { color: ${expressionColour}; }

  .furtle.syntax > div > .variable-name { color: ${variableNameColour}; }
  
  .furtle.syntax > div > .function-name { color: ${functionNameColour}; }
  
  .furtle.syntax > div > .string-literal { color: ${stringLiteralColour}; }
  
  .furtle.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default furtleSyntaxStyle;
