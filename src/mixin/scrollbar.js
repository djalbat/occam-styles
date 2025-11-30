"use strict";

import { scrollbarThickness, scrollbarThumbBorderWidth, scrollbarThumbBorderRadius } from "../styles";

const scrollbarMixin = `

  ::-webkit-scrollbar {
    display: none;
  }
  
  @media (pointer: fine) {
    ::-webkit-scrollbar {
      display: block;
      width: ${scrollbarThickness};
      height: ${scrollbarThickness};
    }
  
    ::-webkit-scrollbar-thumb {
      cursor: default;
      border-style: solid;
      border-color: transparent;
      border-width: ${scrollbarThumbBorderWidth};
      border-radius: ${scrollbarThumbBorderRadius};
      background-clip: content-box;
    }
  
    ::-webkit-scrollbar-track {
      cursor: default;
    }
  }

`;

export default scrollbarMixin;
