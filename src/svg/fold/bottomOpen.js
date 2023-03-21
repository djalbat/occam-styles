"use strict";

import Fold from "../../svg/fold";

export default class BottomOpenFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <rect width="3" height="9" x="9" y="6" />
        <rect width="3" height="6" x="0" y="6" />
        <rect width="9" height="3" x="0" y="12" />
        <path d="M 0,7.5000001 6,1.5 12,7.5000001 H 9 l -3,-3 -3,3 z" />
        <path d="M 0,6 6,0 12,6 H 9 L 6,3 3,6 Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 12 15",
    className: "bottom-open"
  };
}
