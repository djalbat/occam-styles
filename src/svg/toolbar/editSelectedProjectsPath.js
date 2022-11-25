"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class EditSelectedProjectsPathToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g transform="matrix(0.60361176,-0.60361176,0.60361176,0.60361176,-4.2838085,14.880864)">
        <path d="M 6.6145833,7.9375 V 15.875 H 21.166667 V 7.9375 Z m 2.6458334,2.645833 h 9.2604163 v 2.645834 H 9.2604167 Z" />
        <path d="m 22.489583,7.9374999 h 2.645833 V 15.875 h -2.645833 z" />
        <path d="M 6.6145832,7.9374999 2.6458333,11.90625 6.6145832,15.875 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "edit-selected-projects-path"
  };
}
