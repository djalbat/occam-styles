"use strict";

import { colour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  div.lines > div.line > div.syntax * { 
    color: ${colour}; 
    display: inline;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
  
  div.lines > div.line > div.syntax > button {
    cursor: pointer;
    outline: none;
    pointer-events: auto;
    background-color: transparent;
  }
  
  div.lines > div.line > div.syntax > button:disabled {
    cursor: default;
  }

`;

export default defaultSyntaxStyle;
