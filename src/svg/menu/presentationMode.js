"use strict";

import MenuSVG from "../../svg/menu";

export default class PresentationModeMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="19" height="2" x="3" y="5" />
        <rect width="19" height="2" x="3" y="18" />
        <rect width="2" height="11" x="3" y="7" />
        <rect width="2" height="11" x="20" y="7" />
        <circle cx="8" cy="10.5" r="1"/>
        <rect width="8" height="1" x="10.5" y="10" />
        <circle cx="8" cy="14.5" r="1"/>
        <rect width="8" height="1" x="10.5" y="14" />
      </g>

    );
  }

  static defaultProperties = {
    className: "presentation-mode",
  };
}
