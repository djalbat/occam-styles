"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class RefreshToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g stroke="none">
        <path d="m 13.229167,4.6075551 v 2.5648434 a 5.9531248,5.7406248 0 0 1 5.291665,5.7022545 5.9531248,5.7406248 0 0 1 -5.953124,5.740624 5.9531248,5.7406248 0 0 1 -5.9133336,-5.102776 H 3.9971723 a 8.5989576,8.2920132 0 0 0 8.5705357,7.654166 8.5989576,8.2920132 0 0 0 8.598959,-8.292014 8.5989576,8.2920132 0 0 0 -7.9375,-8.2670979 z" />
        <path d="M 13.229167,2.0312503 V 9.6854171 L 7.9375001,5.8583336 Z"/>
      </g>

    );
  }

  static defaultProperties = {
    className: "refresh"
  };
}
