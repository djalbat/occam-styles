"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ClosedRubbishBinToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M 9,9 13,13" />
        <rect width="13" height="2" x="6" y="23" />
        <rect width="2" height="13" x="4" y="10" />
        <rect width="2" height="13" x="19" y="10" />
        <path d="M 4,23 6,25 v -2 z" />
        <path d="m 19,23 v 2 l 2,-2 z" />
        <rect width="21" height="2" x="2" y="8" />
        <rect width="9" height="2" x="8" y="4" />
        <path d="M 6,4 7,8 c 0,0 2,0 2,0 L 8,4 Z" />
        <path d="M 19,4 18,8 H 16 L 17,4 Z" />
        <rect width="1" height="11" x="8" y="11" />
        <rect width="1" height="11" x="16" y="11" />
        <rect width="1" height="11" x="12" y="11" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "closed-rubbish-bin"
  };
}
