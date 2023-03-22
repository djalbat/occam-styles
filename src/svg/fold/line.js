"use strict";

import Fold from "../../svg/fold";

export default class FoldLineSVG extends Fold {
  childElements() {
    return (

      <g>
        <path d="M 5.5,0 V 9.999999" style="stroke-width:2.5;"/>
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 11 10",
    className: "line"
  };
}
