"use strict";

import firaCodeMixin from "../mixin/firaCode";
import plainSyntaxStyle from "../style/syntax/plain";
import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import metaJSONeSyntaxStyle from "../style/syntax/metaJSON";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";

const syntaxStyle = (fontSize, lineHeight) => `
  
  .syntax,
  .syntax > * {
    ${firaCodeMixin(fontSize, lineHeight)}
  }

  ${defaultSyntaxStyle}
  
  ${plainSyntaxStyle}
  
  ${florenceSyntaxStyle}
  
  ${metaJSONeSyntaxStyle}

  ${customGrammarBNFNeSyntaxStyle} 
  
`;

export default syntaxStyle;
