"use strict";

import bnfSyntaxStyle from "../style/syntax/bnf";
import jsonSyntaxStyle from "../style/syntax/json";
import furtleSyntaxStyle from "../style/syntax/furtle";
import defaultSyntaxStyle from "../style/syntax/default";
import nominalSyntaxStyle from "../style/syntax/nominal";
import markdownSyntaxStyle from "../style/syntax/markdown";
import plainTextSyntaxStyle from "../style/syntax/plainText";
import vocabularySyntaxStyle from "../style/syntax/vocabulary";
import markdownStyleSyntaxStyle from "../style/syntax/markdownStyle";

const syntaxStyle = `
    
  ${defaultSyntaxStyle}
  
  ${bnfSyntaxStyle} 
  
  ${jsonSyntaxStyle}

  ${furtleSyntaxStyle}
  
  ${nominalSyntaxStyle}
  
  ${markdownSyntaxStyle}
  
  ${plainTextSyntaxStyle}
  
  ${vocabularySyntaxStyle} 
  
  ${markdownStyleSyntaxStyle}
  
`;

export default syntaxStyle;
