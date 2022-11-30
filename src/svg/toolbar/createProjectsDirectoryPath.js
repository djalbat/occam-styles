"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class CreateProjectsDirectoryPathToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="16" height="2" x="3" y="23" />
        <rect width="2" height="7" x="17" y="16" />
        <rect width="2" height="7" x="3" y="16" />
        <rect width="16" height="2" x="3" y="14" />
        <rect width="7" height="3" x="3" y="11" />
        <rect width="8" height="2" x="15" y="5" />
        <rect width="2" height="8" x="18" y="2" />
        <path d="m 10,11 3,3 h -3 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "create-projects-directory-path"
  };
}
