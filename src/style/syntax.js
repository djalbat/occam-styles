"use strict";

import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import markdownSyntaxStyle from "../style/syntax/markdown";
import metaJSONeSyntaxStyle from "../style/syntax/metaJSON";
import plainTextSyntaxStyle from "../style/syntax/plainText";
import markdownStyleSyntaxStyle from "../style/syntax/markdownStyle";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";
import customGrammarPatternNeSyntaxStyle from "../style/syntax/customGrammarPattern";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${florenceSyntaxStyle}
  
  ${markdownSyntaxStyle}
  
  ${metaJSONeSyntaxStyle}

  ${plainTextSyntaxStyle}
  
  ${markdownStyleSyntaxStyle}
  
  ${customGrammarBNFNeSyntaxStyle} 
  
  ${customGrammarPatternNeSyntaxStyle} 
  
`;

export default syntaxStyle;
