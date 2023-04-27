"use strict";

import NameSVG from "../../svg/name";

export default class ReleaseNameSVG extends NameSVG {
  childElements() {
    return (

      <g>
        <rect width="16" height="2" x="0" y="16" />
        <rect width="2" height="3" x="14" y="13" style="stroke-width:0.654654" />
        <rect width="2" height="7" x="0" y="9" />
        <rect width="10" height="2" x="0" y="7" style="stroke-width:0.790569" />
        <rect width="7" height="3" x="0" y="4" />
        <path d="m 7,4 3,3 H 7 Z" />
        <path d="m 14.966048,2.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 14.966048,2.0000005 Z" />
        <rect width="7.999999" height="6.9999995" x="11.000001" y="5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "release"
  };
}
