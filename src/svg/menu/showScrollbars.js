"use strict";

import MenuSVG from "../../svg/menu";

export default class ShowScrollbarsMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="5" height="18" x="10" y="3.5" fill="none" stroke="currentColor" stroke-width="1" />
        <rect width="2" height="7" x="11.5" y="5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "show-scrollbars",
  };
}