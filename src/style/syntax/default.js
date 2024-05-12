"use strict";

import { colour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  .syntax > div * { 
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
  
  .syntax > div > * { 
    color: ${colour}; 
  }
  
  .syntax > div > * a {
    cursor: pointer;
    pointer-events: auto;
    text-decoration: none;
  }

  .syntax > div > * a:hover {
    text-decoration: underline;
  }

  .syntax > div > button {
    cursor: pointer;
    outline: none;
    display: inline;
    pointer-events: auto;
    background-color: transparent;
  }
  
`;

export default defaultSyntaxStyle;
