"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class JoinSessionToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="3" height="2" x="3" y="17" />
        <rect width="2" height="4" x="13" y="11" />
        <rect width="2" height="6" x="3" y="11" />
        <rect width="12" height="2" x="3" y="9" />
        <rect width="4" height="2" x="3" y="7" />
        <rect width="12" height="2" x="6" y="23" />
        <rect width="2" height="6" x="16" y="17" />
        <rect width="2" height="6" x="6" y="17" />
        <rect width="12" height="2" x="6" y="15" />
        <rect width="4" height="2" x="6" y="13" />
        <rect width="6" height="2" x="17" y="5" />
        <path d="M 17,3 V 9 L 14,6 Z" />
        <path d="M 7,7 9,9 H 7 Z" />
        <path d="m 10,13 2,2 h -2 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "join-session"
  };
}
