"use strict";

import withStyle from "easy-with-style";  ///

import Fold from "../../svg/fold";

class FoldLineSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 8,0 V 100009" style="stroke-width:2.5;"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 100000",
    className: "line"
  };
}

export default withStyle(FoldLineSVG)`

  top: 0;
  
`;
