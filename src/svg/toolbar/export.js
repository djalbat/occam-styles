"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ExportToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g stroke="none">
        <path d="m 2.5,4 v 17 h 13.333334 v -4.857142 h -2.666668 v 2.428571 H 5.1666666 V 6.4285714 H 13.166666 V 8.857143 h 2.666668 V 4 Z" />
        <path d="m 10.5,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "export"
  };
}
