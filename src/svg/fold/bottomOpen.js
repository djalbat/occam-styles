"use strict";

import Fold from "../../svg/fold";

export default class BottomOpenFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 5.499999,3.5355338 2.5,6.5355336 c 0,0 0,3.0000002 0,3.0000002 h 6 V 6.5355336 Z" style="stroke-width:5;paint-order:markers stroke fill"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 11 12",
    className: "bottom-open"
  };
}
