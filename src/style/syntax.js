"use strict";

import jsonSyntaxStyle from "../style/syntax/json";
import furtleSyntaxStyle from "../style/syntax/furtle";
import defaultSyntaxStyle from "../style/syntax/default";
import nominalSyntaxStyle from "../style/syntax/nominal";
import markdownSyntaxStyle from "../style/syntax/markdown";
import plainTextSyntaxStyle from "../style/syntax/plainText";
import markdownStyleSyntaxStyle from "../style/syntax/markdownStyle";
import customGrammarBNFNeSyntaxStyle from "../style/syntax/customGrammarBNF";
import customGrammarVocabularyNeSyntaxStyle from "../style/syntax/customGrammarVocabulary";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${furtleSyntaxStyle}
  
  ${jsonSyntaxStyle}

  ${nominalSyntaxStyle}
  
  ${markdownSyntaxStyle}
  
  ${plainTextSyntaxStyle}
  
  ${markdownStyleSyntaxStyle}
  
  ${customGrammarBNFNeSyntaxStyle} 
  
  ${customGrammarVocabularyNeSyntaxStyle} 
  
`;

export default syntaxStyle;
