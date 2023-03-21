"use strict";

import Fold from "../../svg/fold";

export default class ClosedFoldSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="m 2.499995,2.499995 h 6 v 6 h -6 z" style="stroke-width:5;paint-order:markers stroke fill"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 11 11",
    className: "closed"
  };
}
