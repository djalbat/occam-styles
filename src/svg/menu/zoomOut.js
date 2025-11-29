"use strict";

import MenuSVG from "../../svg/menu";

export default class ZoomOutMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="2" height="15" x="4" y="5" />
        <rect width="2" height="15" x="19" y="5" />
        <rect width="8" height="2" x="8.5" y="11.5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "zoom-out"
  };
}
