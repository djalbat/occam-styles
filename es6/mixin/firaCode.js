"use strict";

export default function firaCodeMixin(fontSize, lineHeight) {
  return (`

    font-family: "Fira Code", monospace;
    font-size: ${fontSize};
    line-height: ${lineHeight}px;
    text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */
    font-feature-settings: "calt" 1;  /* Enable ligatures for IE 10+, Edge */
  
  `);
} ;
