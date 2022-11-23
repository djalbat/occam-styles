"use strict";

import ToggleSVG from "../../svg/toggle";

export default class DownToggleSVG extends ToggleSVG {
  childElements() {
    return (

      <g>
        <path d="M 6.6145832,7.9374999 H 17.197916 L 11.90625,18.520833 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "down"
  };
}
