"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class RefreshToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g stroke="none">
        <path d="m 13.129426,5.3154487 v 2.3051479 a 5.0357433,5.159375 0 0 1 4.476215,5.1248894 5.0357433,5.159375 0 0 1 -5.035743,5.159375 5.0357433,5.159375 0 0 1 -5.002084,-4.58611 H 5.320089 a 7.2738511,7.4524302 0 0 0 7.249809,6.879166 7.2738511,7.4524302 0 0 0 7.273852,-7.452431 7.2738511,7.4524302 0 0 0 -6.714324,-7.4300373 z" />
        <path d="M 13.129426,3 V 9.879167 L 8.653209,6.4395834 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "refresh"
  };
}
