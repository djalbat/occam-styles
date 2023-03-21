"use strict";

import Fold from "../../svg/fold";

export default class TopOpenFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <rect width="3" height="9" x="9" y="0" />
        <rect width="3" height="6" x="0" y="3" />
        <rect width="9" height="3" x="0" y="0" />
        <path d="M 0,8.9999999 5.9999998,15 12,8.9999999 H 8.9999999 L 5.9999998,12 3,8.9999999 Z" />
        <path d="m 0,7.5 6,6 6,-6 H 8.9999999 L 6,10.5 3,7.5 Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 12 15",
    className: "top-open"
  };
}
