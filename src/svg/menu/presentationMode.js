"use strict";

import MenuSVG from "../../svg/menu";

export default class PresentationModeMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <path transform="rotate(0, 12.5, 12.5) translate(17, 12.5)" d="m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z" />
        <path transform="rotate(90, 12.5, 12.5) translate(17, 12.5)" d="m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z" />
        <path transform="rotate(180, 12.5, 12.5) translate(17, 12.5)" d="m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z" />
        <path transform="rotate(270, 12.5, 12.5) translate(17, 12.5)" d="m 0,0 v -2 h 2 v -2 l 4,4 -4,4 v -2 h -2 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "presentation-mode",
  };
}
