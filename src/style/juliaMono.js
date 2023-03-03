"use strict";

import { DEFAULT_HOST } from "../defaults";

const juliaMonoStyle = (host = DEFAULT_HOST) => `

  @font-face {
    src: url("${host}/css/woff2/JuliaMono-Regular.woff2");
    font-family: "JuliaMono";
    font-weight: normal;
  }
  
  @font-face {
    src: url("${host}/css/woff2/JuliaMono-Bold.woff2");
    font-family: "JuliaMono";
    font-weight: bold;
  }

`;

export default juliaMonoStyle;
