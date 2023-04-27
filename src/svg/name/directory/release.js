"use strict";

import DirectoryNameSVG from "../../../svg/name/directory";

export default class ReleaseDirectoryNameSVG extends DirectoryNameSVG {
  childElements() {
    return (

      <g>
        <rect width="16" height="2" x="0" y="16" />
        <rect width="2" height="3" x="14" y="13" />
        <rect width="2" height="3" x="12" y="6" />
        <rect width="2" height="3" x="18" y="6" />
        <rect width="2" height="7" x="0" y="9" />
        <rect width="10" height="2" x="0" y="7" />
        <rect width="7" height="3" x="0" y="4" />
        <path d="m 7,4 3,3 H 7 Z" />
        <path d="m 15.966048,1.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 15.966048,1.0000005 Z" />
        <rect width="7.9999995" height="1.9999995" x="12.000001" y="3.9999998" />
        <rect width="7.9999995" height="1.9999995" x="12.000001" y="9.000001" />
      </g>

    );
  }

  static defaultProperties = {
    className: "release"
  };
}
