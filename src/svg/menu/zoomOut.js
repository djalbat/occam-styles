"use strict";

import MenuSVG from "../../svg/menu";

export default class ZoomOutMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="10" height="3" x="7.5" y="11" />
      </g>

    );
  }

  static defaultProperties = {
    className: "zoom-out"
  };
}
