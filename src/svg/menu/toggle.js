"use strict";

import MenuSVG from "../../svg/menu";

export default class ToggleMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="8" height="17" x="4" y="4" />
        <rect width="2" height="17" x="19" y="4" />
        <rect width="7" height="2" x="12" y="4" />
        <rect width="7" height="2" x="12" y="19" />
      </g>

    );
  }

  static defaultProperties = {
    className: "toggle"
  };
}
