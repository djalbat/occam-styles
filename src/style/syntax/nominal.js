"use strict";

import { nameColour,
         typeColour,
         symbolColour,
         specialColour,
         keywordColour,
         contextColour,
         backtickColour,
         metaTypeColour,
         primitiveColour,
         labelNameColour,
         referenceNameColour,
         labelNameHoverColour,
         disabledLabelNameColour,
         referenceNameHoverColour,
         disabledReferenceNameColour,
         procedureReferenceNameColour,
         procedureReferenceNameHoverColour,
         disabledProcedureReferenceNameColour } from "../../scheme/syntax/nominal";

const nominalSyntaxStyle = `

  div.nominal.lines > div.line > div.syntax > .name { color: ${nameColour}; }

  div.nominal.lines > div.line > div.syntax > .type { color: ${typeColour}; }

  div.nominal.lines > div.line > div.syntax > .symbol { color: ${symbolColour}; }

  div.nominal.lines > div.line > div.syntax > .special { color: ${specialColour}; }
  
  div.nominal.lines > div.line > div.syntax > .context { color: ${contextColour}; }

  div.nominal.lines > div.line > div.syntax > .backtick { color: ${backtickColour}; }

  div.nominal.lines > div.line > div.syntax > .meta-type { color: ${metaTypeColour}; }
  
  div.nominal.lines > div.line > div.syntax > .primitive { color: ${primitiveColour}; }

  div.nominal.lines > div.line > div.syntax > .primary-keyword { color: ${keywordColour}; }
  
  div.nominal.lines > div.line > div.syntax > .secondary-keyword { color: ${keywordColour}; }
  
  div.nominal.lines > div.line > div.syntax > .label-name { color: ${labelNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .label-name:hover { color: ${labelNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .label-name:disabled { color: ${disabledLabelNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .reference-name { color: ${referenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .reference-name:hover { color: ${referenceNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .reference-name:disabled { color: ${disabledReferenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .procedure-reference-name { color: ${procedureReferenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .procedure-reference-name:hover { color: ${procedureReferenceNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .procedure-reference-name:disabled { color: ${disabledProcedureReferenceNameColour}; }
  
`;

export default nominalSyntaxStyle;
