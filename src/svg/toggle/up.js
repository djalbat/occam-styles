"use strict";

import ToggleSVG from "../../svg/toggle";

export default class UpToggleSVG extends ToggleSVG {
  childElements() {
    return (

      <g>
        <path d="M 6.6145831,18.520833 V 7.9375001 L 17.197916,13.229166 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "up"
  };
}
