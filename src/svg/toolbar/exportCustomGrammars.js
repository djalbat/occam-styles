"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ExportCustomGrammarsToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="2" height="1" x="14" y="7" />
        <rect width="2" height="1" x="14" y="17" />
        <rect width="12" height="2.5" x="4" y="4.5" />
        <rect width="3" height="5.5" x="0" y="0" transform="translate(4, 7) skewX(28.5)" />
        <rect width="3" height="5.5" x="0" y="0" transform="translate(7, 12.5) skewX(-28.5)" />
        <rect width="12" height="2.5" x="4" y="18" />
        <path d="m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "export-custom-grammars"
  };
}
