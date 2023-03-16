"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ExportCustomGrammarsToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="2" height="1" x="14" y="7" />
        <rect width="2" height="1" x="14" y="17" />
        <path d="m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
        <rect width="12" height="2.5" x="4" y="4.5" />
        <rect width="2.4884794" height="6.5253949" x="-0.46920818" y="8.305048" transform="matrix(1,0,0.53813153,0.84286088,0,0)" />
        <rect width="2.4884794" height="6.5253949" x="-17.980728" y="14.830442" transform="matrix(-1,0,-0.53813153,0.84286088,0,0)" />
        <rect width="12" height="2.5" x="4" y="18" />
      </g>

    );
  }

  static defaultProperties = {
    className: "export-custom-grammars"
  };
}
