"use strict";

import MenuSVG from "../../svg/menu";

export default class EmbeddedModeMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <path transform="rotate(135, 12.5, 12.5) translate(15, 12.5) scale(1.5)" d="m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z" />
        <path transform="rotate(315, 12.5, 12.5) translate(15, 12.5) scale(1.5)" d="m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "embedded-mode"
  };
}
