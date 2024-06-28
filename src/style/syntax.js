"use strict";

import jsonSyntaxStyle from "../style/syntax/json";
import defaultSyntaxStyle from "../style/syntax/default";
import florenceSyntaxStyle from "../style/syntax/florence";
import markdownSyntaxStyle from "../style/syntax/markdown";
import plainTextSyntaxStyle from "../style/syntax/plainText";
import markdownStyleSyntaxStyle from "../style/syntax/markdownStyle";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";
import customGrammarPatternNeSyntaxStyle from "../style/syntax/customGrammarPattern";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${jsonSyntaxStyle}

  ${florenceSyntaxStyle}
  
  ${markdownSyntaxStyle}
  
  ${plainTextSyntaxStyle}
  
  ${markdownStyleSyntaxStyle}
  
  ${customGrammarBNFNeSyntaxStyle} 
  
  ${customGrammarPatternNeSyntaxStyle} 
  
`;

export default syntaxStyle;
