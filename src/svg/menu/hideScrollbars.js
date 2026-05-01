"use strict";

import MenuSVG from "../../svg/menu";

import { hideScrollbarsFill } from "../../scheme/common";

export default class HideScrollbarsMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="5" height="18" x="10" y="3.5" fill="none" stroke="currentColor" stroke-width="1" />
        <rect width="2" height="7" x="11.5" y="5" />
        <line x1="5" y1="19" x2="19" y2="5" stroke={`${hideScrollbarsFill}`} stroke-width="2" />
      </g>

    );
  }

  static defaultProperties = {
    className: "hide-scrollbars",
  };
}
