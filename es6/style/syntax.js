"use strict";

import plainSyntaxStyle from "../style/syntax/plain";
import firaCodeFontMixin from "../mixin/font/firaCode";
import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import metaJSONeSyntaxStyle from "../style/syntax/metaJSON";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";

const syntaxStyle = `
    
  .syntax,
  .syntax > * {
    ${firaCodeFontMixin}
  }

  ${defaultSyntaxStyle}
  
  ${plainSyntaxStyle}
  
  ${florenceSyntaxStyle}
  
  ${metaJSONeSyntaxStyle}

  ${customGrammarBNFNeSyntaxStyle} 
  
`;

export default syntaxStyle;
