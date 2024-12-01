"use strict";

import syntaxStyle from "../style/syntax";

const prettyPrinterStyle = `

  .pretty-printer *::selection {
    user-select: none;
  }
    
  ${syntaxStyle}
  
`;

export default prettyPrinterStyle;
