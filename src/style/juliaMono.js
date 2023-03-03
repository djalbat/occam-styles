"use strict";

import { DEFAULT_HOST } from "../defaults";

const juliaMonoStyle = (host = DEFAULT_HOST) => `

  @font-face {
    src: url("${host}/css/woff2/JuliaMono-Regular.woff2");
    font-family: "JuliaMono";
    font-weight: normal;
  }
  
`;

export default juliaMonoStyle;
