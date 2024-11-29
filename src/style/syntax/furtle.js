"use strict";

import { typeColour, specialColour, keywordColour, operatorColour } from "../../scheme/syntax/furtle";
import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";

const furtleSyntaxStyle = `

  .furtle.syntax > div > .type { color: ${typeColour}; }

  .furtle.syntax > div > .special { color: ${specialColour}; }
  
  .furtle.syntax > div > .keyword { color: ${keywordColour}; }
  
  .furtle.syntax > div > .comment { color: ${commentColour}; }
  
  .furtle.syntax > div > .nonsense { color: ${nonsenseColour}; } 

  .furtle.syntax > div > .operator { color: ${operatorColour}; }
  
  .furtle.syntax > div > .primitive { color: ${primitiveColour}; }

  .furtle.syntax > div > .string-literal { color: ${stringLiteralColour}; }

  
  .furtle.syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default furtleSyntaxStyle;
