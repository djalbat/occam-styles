"use strict";

import MenuSVG from "../../svg/menu";

export default class HideScrollbarsMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="1.5" height="17.5" x="3" y="4.5" />
        <rect width="19" height="1.5" x="3" y="3" />
      </g>

    );
  }

  static defaultProperties = {
    className: "hide-scrollbars",
  };
}
