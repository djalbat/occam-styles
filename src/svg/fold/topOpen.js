"use strict";

import Fold from "../../svg/fold";

export default class TopOpenFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 5.499999,8.5 2.5,5.5000002 c 0,0 0,-3.0000002 0,-3.0000002 h 6 v 3.0000002 z" style="stroke-width:5;paint-order:markers stroke fill"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 11 12",
    className: "top-open"
  };
}
