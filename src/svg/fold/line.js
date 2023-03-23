"use strict";

import Fold from "../../svg/fold";

export default class FoldLineSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 8,0 V 100009" style="stroke-width:2.5;"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 16 100000",
    className: "line"
  };
}
