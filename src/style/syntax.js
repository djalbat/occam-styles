"use strict";

import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import metaJSONeSyntaxStyle from "../style/syntax/metaJSON";
import plainTextSyntaxStyle from "../style/syntax/plainText";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${florenceSyntaxStyle}
  
  ${metaJSONeSyntaxStyle}

  ${plainTextSyntaxStyle}
  
  ${customGrammarBNFNeSyntaxStyle} 
  
`;

export default syntaxStyle;
