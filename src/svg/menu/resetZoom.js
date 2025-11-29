"use strict";

import MenuSVG from "../../svg/menu";

export default class ResetZoomMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="2" height="15" x="4" y="5" />
        <rect width="2" height="15" x="19" y="5" />
        <circle cx="12.5" cy="12.5" r="2"/>
      </g>

    );
  }

  static defaultProperties = {
    className: "reset-zoom"
  };
}
