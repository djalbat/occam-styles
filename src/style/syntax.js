"use strict";

import jsonSyntaxStyle from "../style/syntax/json";
import furtleSyntaxStyle from "../style/syntax/furtle";
import defaultSyntaxStyle from "../style/syntax/default";
import nominalSyntaxStyle from "../style/syntax/nominal";
import markdownSyntaxStyle from "../style/syntax/markdown";
import plainTextSyntaxStyle from "../style/syntax/plainText";
import markdownStyleSyntaxStyle from "../style/syntax/markdownStyle";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";
import customGrammarPatternNeSyntaxStyle from "../style/syntax/customGrammarPattern";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${furtleSyntaxStyle}
  
  ${jsonSyntaxStyle}

  ${nominalSyntaxStyle}
  
  ${markdownSyntaxStyle}
  
  ${plainTextSyntaxStyle}
  
  ${markdownStyleSyntaxStyle}
  
  ${customGrammarBNFNeSyntaxStyle} 
  
  ${customGrammarPatternNeSyntaxStyle} 
  
`;

export default syntaxStyle;
