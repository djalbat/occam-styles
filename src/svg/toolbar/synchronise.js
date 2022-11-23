"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class SynchroniseToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M 5.2916666,10.583333 H 19.84375 V 7.9374999 H 10.583333 V 5.2916666 Z" />
        <path d="m 5.2916666,14.552083 c 0,0 14.5520834,0 14.5520834,0 0,0 -5.291667,5.291667 -5.291667,5.291667 0,0 0,-2.645834 0,-2.645834 H 5.2916666 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "synchronise"
  };
}
