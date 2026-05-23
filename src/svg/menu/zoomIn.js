"use strict";

import MenuSVG from "../../svg/menu";

export default class ZoomInMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="10" height="3" x="7.5" y="11" />
        <rect width="3" height="10" x="11" y="7.5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "zoom-in"
  };
}
