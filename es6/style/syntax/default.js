"use strict";

import { defaultSyntaxScheme } from "occam-colours";

const { colour } = defaultSyntaxScheme;

const defaultSyntaxStyle = `

  .syntax, 
  .syntax > * { color: ${colour}; }
  
  .syntax > a {
    pointer-events: auto;
    text-decoration: none;
  }

  .syntax > button {
    cursor: pointer;
    outline: none;
    display: inline;
    pointer-events: auto;
    background-color: transparent;
  }
  
  .syntax > .error {
    background-image: url("./image/squiggle.png");
    background-repeat: repeat-x;
    background-position: bottom;
  } 

`;

export default defaultSyntaxStyle;
