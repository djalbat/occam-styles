"use strict";

import { colour, errorUnderlingColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  .syntax * { 
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    text-rendering: inherit;
    font-feature-settings: inherit;
  }
  
  .syntax, 
  .syntax > * { 
    color: ${colour}; 
  }
  
  .syntax > * a {
    cursor: pointer;
    pointer-events: auto;
    text-decoration: none;
  }

  .syntax > * a:hover {
    text-decoration: underline;
  }

  .syntax > button {
    cursor: pointer;
    outline: none;
    display: inline;
    pointer-events: auto;
    background-color: transparent;
  }
  
  .syntax > .error {
    text-decoration-line: underline;
    text-decoration-color: ${errorUnderlingColour};
    background-repeat: repeat-x;
    background-position: bottom;
  } 

`;

export default defaultSyntaxStyle;
