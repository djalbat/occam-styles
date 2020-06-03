"use strict";

import plainSyntaxStyle from "../style/syntax/plain";
import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import metaJSONeSyntaxStyle from "../style/syntax/metaJSON";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";

const syntaxStyle = `
    
  .syntax,
  .syntax > * {
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    text-rendering: inherit;
    font-feature-settings: inherit;
  }

  ${defaultSyntaxStyle}
  
  ${plainSyntaxStyle}
  
  ${florenceSyntaxStyle}
  
  ${metaJSONeSyntaxStyle}

  ${customGrammarBNFNeSyntaxStyle} 
  
`;

export default syntaxStyle;
