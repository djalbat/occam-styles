"use strict";

import Fold from "../../svg/fold";

export default class TopOpenFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 7.9999975,13.589089 2.0421505,7.8156199 c 0,0 0,-5.7734694 0,-5.7734694 H 13.957849 v 5.7734694 z" style="stroke-width:4;paint-order:markers stroke fill;stroke-linejoin:round;" />
        <path d="M 3.9999999,4.9999999 H 12" style="stroke-width:3" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 16",
    className: "top-open"
  };
}
