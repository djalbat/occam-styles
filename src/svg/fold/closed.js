"use strict";

import Fold from "../../svg/fold";

export default class ClosedFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <rect width="9" height="3" x="3" y="9" />
        <rect width="3" height="9" x="9" y="0" />
        <rect width="3" height="9" x="0" y="3" />
        <rect width="9" height="3" x="0" y="0" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 12 12",
    className: "closed"
  };
}
