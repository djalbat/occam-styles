"use strict";

import MenuSVG from "../../svg/menu";

export default class InvertColoursMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <path d="M 12.5 4 A 8.5 8.5 0 1 1 12.5 21 A 8.5 8.5 0 1 1 12.5 4 M 12.5 6.5 A 6 6 0 1 0 12.5 18.5 A 6 6 0 1 0 12.5 6.5 Z" />
        <path d="M 12.5 6.5 A 6 6 0 0 1 12.5 18.5 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "invert-colours",
  };
}
