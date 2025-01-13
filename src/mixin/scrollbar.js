"use strict";

import { scrollbarThickness, scrollbarThumbBorderWidth, scrollbarThumbBorderRadius } from "../styles";

const scrollbarMixin = `

  ::-webkit-scrollbar {
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
    background: transparent;
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

`;

export default scrollbarMixin;
