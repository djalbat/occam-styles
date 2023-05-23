"use strict";

import { colour, errorColour, nonsenseColour, underlineColour, backgroundColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  @keyframes background-color-animation {
    0%   { background-color: ${backgroundColour}; }
    100% { background-color: transparent; }
  }
  
  .syntax > div { 
    width: 100%;
  }

  .syntax > div.animated { 
    animation: background-color-animation 1s 1;
  }
  
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
  
  .syntax > div > .error {
    color: ${errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${underlineColour};
  } 

  .syntax > div > .nonsense {
    color: ${nonsenseColour};
  } 

`;

export default defaultSyntaxStyle;
