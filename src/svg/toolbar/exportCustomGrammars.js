"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ExportCustomGrammarsToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g stroke="none">
        <path d="m 4,4 v 17 h 13.333334 v -4.857142 h -2.666668 v 2.428571 H 6.6666666 V 6.4285714 H 14.666666 V 8.857143 h 2.666668 V 4 Z" />
        <path d="m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "export-custom-grammars"
  };
}
