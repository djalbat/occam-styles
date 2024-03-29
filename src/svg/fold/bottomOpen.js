"use strict";

import withStyle from "easy-with-style";  ///

import FoldSVG from "../../svg/fold";

class BottomOpenFoldSVG extends FoldSVG {
  childElements() {
    return (

      <g>
        <path d="M 7.9999971,2.8436987 2.04215,8.6171677 c 0,0 0,5.7734703 0,5.7734703 H 13.957849 V 8.6171677 Z" style="stroke-width:4;paint-order:markers stroke fill;stroke-linejoin: round;" />
        <path d="m 4,11 h 8" style="stroke-width:3" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 16",
    className: "bottom-open"
  };
}

export default withStyle(BottomOpenFoldSVG)`

  top: unset;
  bottom: 0;
   
`;
