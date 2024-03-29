"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class CreateProjectsFilePathToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="14.000001" height="1.9999999" x="5" y="23" />
        <rect width="1.9999999" height="7" x="17" y="16" />
        <rect width="1.9999999" height="12" x="5.000001" y="11" />
        <rect width="7" height="1.9999999" x="5.000001" y="9" />
        <rect width="8" height="2" x="15" y="5" />
        <rect width="2" height="8" x="18" y="2" />
        <path d="m 12.000001,9.0000001 7,6.9999999 h -7 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "create-projects-file-path"
  };
}
