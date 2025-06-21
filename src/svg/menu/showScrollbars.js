"use strict";

import MenuSVG from "../../svg/menu";

export default class ShowScrollbarsMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="1.5" height="17.5" x="3" y="4.5" />
        <rect width="19" height="1.5" x="3" y="3" />
        <rect width="1.5" height="7" x="20.5" y="9" rx="0.75" ry="0.75" />
        <rect width="7" height="1.5" x="10" y="20.5" rx="0.75" ry="0.75" />
      </g>

    );
  }

  static defaultProperties = {
    className: "show-scrollbars",
  };
}
