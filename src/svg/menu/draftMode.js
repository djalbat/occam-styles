"use strict";

import MenuSVG from "../../svg/menu";

export default class DraftModeMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <path transform="rotate(0, 12.5, 12.5) translate(16, 12.5)" d="m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z" />
        <path transform="rotate(90, 12.5, 12.5) translate(16, 12.5)"d="m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z" />
        <path transform="rotate(180, 12.5, 12.5) translate(16, 12.5)"d="m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z" />
        <path transform="rotate(270, 12.5, 12.5) translate(16, 12.5)"d="m 0,0 l 4,-4 v 2 h 2 v 4 h -2 v 2 l -4,-4 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "draft-mode",
  };
}
