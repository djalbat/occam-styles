"use strict";

import MenuSVG from "../../svg/menu";

export default class FullScreenModeMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="14" height="2" x="8" y="14" />
        <rect width="14" height="2" x="8" y="3" />
        <rect width="2" height="9" x="8" y="5" />
        <rect width="2" height="9" x="20" y="5" />
        <rect width="2" height="10" x="3" y="12" />
        <rect width="8" height="2" x="5" y="20" />
        <rect width="2" height="5" x="13" y="17" />
        <rect width="2" height="2" x="5" y="12" />
      </g>

    );
  }

  static defaultProperties = {
    className: "full-screen-mode"
  };
}
