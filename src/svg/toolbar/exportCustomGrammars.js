"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ExportCustomGrammarsToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="2" height="1" x="14" y="7" />
        <rect width="2" height="1" x="14" y="17" />
        <path d="m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
        <rect width="12" height="2" x="4" y="5" />
        <rect width="2" height="6.1818233" x="0.40808085" y="7.867775" transform="matrix(1,0,0.45653557,0.88970516,0,0)" />
        <rect width="2" height="6.1818233" x="-15.236363" y="14.049598" transform="matrix(-1,0,-0.45653557,0.88970516,0,0)" />
        <rect width="12" height="2" x="4" y="18" />
      </g>

    );
  }

  static defaultProperties = {
    className: "export-custom-grammars"
  };
}
