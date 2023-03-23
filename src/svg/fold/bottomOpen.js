"use strict";

import Fold from "../../svg/fold";

export default class BottomOpenFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 7.9999971,2.8436987 2.04215,8.6171677 c 0,0 0,5.7734703 0,5.7734703 H 13.957849 V 8.6171677 Z" style="stroke-width:4;paint-order:markers stroke fill" />
        <path d="m 4,11 h 8" style="stroke-width:3;paint-order:markers stroke fill" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 16",
    className: "bottom-open"
  };
}
