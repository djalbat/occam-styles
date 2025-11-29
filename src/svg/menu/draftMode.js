"use strict";

import MenuSVG from "../../svg/menu";

export default class DraftModeMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="11" height="2" x="7" y="3" />
        <rect width="11" height="2" x="7" y="20" />
        <rect width="2" height="19" x="5" y="3" />
        <rect width="2" height="19" x="18" y="3" />
        <rect width="7" height="1" x="9" y="8" />
        <rect width="7" height="1" x="9" y="12" />
        <rect width="7" height="1" x="9" y="16" />
      </g>

    );
  }

  static defaultProperties = {
    className: "draft-mode",
  };
}
