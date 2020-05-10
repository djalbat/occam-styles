"use strict";

import firaCodeMixin from "../mixin/firaCode";
import plainSyntaxStyle from "../style/syntax/plain";
import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import metaJSONeSyntaxStyle from "../style/syntax/metaJSON";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";

export default function (fontSize, lineHeight) {
  const firaCodeStyle = firaCodeMixin(fontSize, lineHeight);

  return (`
    
    .syntax,
    .syntax > * {
      ${firaCodeStyle}
    }
  
    ${defaultSyntaxStyle}
    
    ${plainSyntaxStyle}
    
    ${florenceSyntaxStyle}
    
    ${metaJSONeSyntaxStyle}
  
    ${customGrammarBNFNeSyntaxStyle} 
    
  `);
};
