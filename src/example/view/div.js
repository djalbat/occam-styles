"use strict";

import withStyle from "easy-with-style";  ///

export default withStyle.div`

  width: 10rem;
  border: 1px dashed black;
  display: inline-block;
  border-right: none;
  
  :last-of-type {
    border-right: 1px dashed black;
  }

`;
