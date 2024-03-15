"use strict";

import { colour, backgroundColour } from "../../scheme/syntax/default";

const defaultSyntaxStyle = `

  @keyframes background-color-animation {
    0%   { background-color: ${backgroundColour}; }
    100% { background-color: transparent; }
  }
  
  .syntax > div.animated { 
    animation: background-color-animation 1s 1;
  }
  
  .syntax > div { 
    width: 100%;
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
  
`;

export default defaultSyntaxStyle;
