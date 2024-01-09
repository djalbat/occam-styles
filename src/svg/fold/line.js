"use strict";

import withStyle from "easy-with-style";  ///

import FoldSVG from "../../svg/fold";

class FoldLineSVG extends FoldSVG {
  childElements() {
    return (

      <g>
        <path d="M 8,0 V 16" style="stroke-width:2.5;"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 16",
    className: "line",
    preserveAspectRatio: "none"
  };
}

export default withStyle(FoldLineSVG)`

  height: 100%;
  
`;
