"use strict";

import { colour, errorColour, nonsenseColour, underlineColour } from "../../scheme/syntax/default";

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
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

  .syntax > .nonsense {
    color: ${nonsenseColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

`;

export default defaultSyntaxStyle;
