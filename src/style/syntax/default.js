"use strict";

import { colour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  .syntax > div * { 
    color: ${colour}; 
  }

  .syntax > div * { 
    display: inline-block;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
  
  .syntax > div > button {
    cursor: pointer;
    outline: none;
    pointer-events: auto;
    background-color: transparent;
  }
  
  .syntax > div > button:disabled {
    cursor: default;
  }

`;

export default defaultSyntaxStyle;
