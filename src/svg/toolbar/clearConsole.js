"use strict";

import ToolbarSVG from "../../svg/toolbar";

import { clearConsoleFill } from "../../scheme/common"

export default class ClearConsoleToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g fill={`${clearConsoleFill}`} transform="translate(0, 0.25)">
        <path d="m 19.217262,5.7822765 a 9.4998945,9.4998942 0 0 0 -13.4349871,4.636e-4 9.4998945,9.4998942 0 0 0 5e-7,13.4345199 9.4998945,9.4998942 0 0 0 13.4349866,4.64e-4 9.4998945,9.4998942 0 0 0 0,-13.4354475 z m -0.977529,2.7696608 a 6.9665893,6.9665892 0 0 1 -0.813681,8.8745777 6.9665893,6.9665892 0 0 1 -8.8727273,0.81183 z M 16.446674,6.7616556 6.7616542,16.446675 A 6.9665893,6.9665892 0 0 1 7.5734829,7.5739474 6.9665893,6.9665892 0 0 1 16.446674,6.7616556 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "clear-console"
  };
}
