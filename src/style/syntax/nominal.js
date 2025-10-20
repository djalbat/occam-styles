"use strict";

import { errorColour, commentColour, nonsenseColour, stringLiteralColour, errorTextDecorationColour } from "../../scheme/syntax/default";
import { nameColour,
         typeColour,
         stuffColour,
         symbolColour,
         specialColour,
         keywordColour,
         contextColour,
         metaTypeColour,
         primitiveColour,
         labelNameColour,
         referenceNameColour,
         labelNameHoverColour,
         disabledLabelNameColour,
         referenceNameHoverColour,
         disabledReferenceNameColour,
         simpleReferenceNameHoverColour } from "../../scheme/syntax/nominal";

const nominalSyntaxStyle = `

  div.nominal.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.nominal.lines > div.line > div.syntax > .type { color: ${typeColour}; }

  div.nominal.lines > div.line > div.syntax > .stuff { color: ${stuffColour}; }

  div.nominal.lines > div.line > div.syntax > .symbol { color: ${symbolColour}; }

  div.nominal.lines > div.line > div.syntax > .special { color: ${specialColour}; }
  
  div.nominal.lines > div.line > div.syntax > .comment { color: ${commentColour}; }
  
  div.nominal.lines > div.line > div.syntax > .context { color: ${contextColour}; }

  div.nominal.lines > div.line > div.syntax > .nonsense { color: ${nonsenseColour}; } 

  div.nominal.lines > div.line > div.syntax > .meta-type { color: ${metaTypeColour}; }
  
  div.nominal.lines > div.line > div.syntax > .primitive { color: ${primitiveColour}; }

  div.nominal.lines > div.line > div.syntax > .string-literal { color: ${stringLiteralColour}; }

  div.nominal.lines > div.line > div.syntax > .primary-keyword { color: ${keywordColour}; }
  
  div.nominal.lines > div.line > div.syntax > .secondary-keyword { color: ${keywordColour}; }
  
  div.nominal.lines > div.line > div.syntax > .label-name { color: ${labelNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .label-name:hover { color: ${labelNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .label-name:disabled { color: ${disabledLabelNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .reference-name { color: ${referenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .reference-name:hover { color: ${referenceNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .reference-name:disabled { color: ${disabledReferenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .simple-reference-name:hover { color: ${simpleReferenceNameHoverColour}; }
  
  div.nominal.lines > div.line > div.syntax > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${errorTextDecorationColour};
  } 

`;

export default nominalSyntaxStyle;
