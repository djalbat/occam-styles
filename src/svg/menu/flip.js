"use strict";

import MenuSVG from "../../svg/menu";

export default class FlipMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="11" height="3" x="6" y="16" />
        <rect width="11" height="3" x="8" y="6" />
        <path d="M 8,3.5 4,7.5 8,11.5 Z" />
        <path d="m 17,13.5 4,4 -4,4 c 0,-0.5 0,-8 0,-8 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "flip"
  };
}
