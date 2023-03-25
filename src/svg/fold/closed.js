"use strict";

import FoldSVG from "../../svg/fold";

export default class ClosedFoldSVG extends FoldSVG {
  childElements() {
    return (

      <g>
        <path d="M 2.04651,2.04651 H 13.953488 V 13.953487 H 2.04651 Z" style="stroke-width:4;paint-order:markers stroke fill;stroke-linejoin:round;" />
        <path d="M 7.9999998,3.9999999 V 12" style="stroke-width:3" />
        <path d="M 3.9999999,7.9999998 H 12" style="stroke-width:3" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 16",
    className: "closed"
  };
}
