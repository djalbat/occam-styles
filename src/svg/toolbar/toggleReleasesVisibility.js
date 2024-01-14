"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class ToggleReleasesVisibilityToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="16" height="2" x="3" y="23" />
        <rect width="2" height="7" x="17" y="16" />
        <rect width="2" height="7" x="3" y="16" />
        <rect width="16" height="2" x="3" y="14" />
        <rect width="7" height="3" x="3" y="11" />
        <path d="m 10,11 3,3 h -3 z" />
        <g transform="translate(3, 0)">
          <rect width="2" height="3" x="12" y="6" />
          <rect width="2" height="3" x="18" y="6" />
          <path d="m 15.966048,1.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 15.966048,1.0000005 Z" />
          <rect width="7.9999995" height="1.9999995" x="12.000001" y="3.9999998" />
          <rect width="7.9999995" height="1.9999995" x="12.000001" y="9.000001" />
        </g>
      </g>

    );
  }

  static defaultProperties = {
    className: "toggle-releases-visibility"
  };
}
