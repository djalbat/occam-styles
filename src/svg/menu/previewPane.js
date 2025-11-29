"use strict";

import MenuSVG from "../../svg/menu";

export default class PreviewPaneMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="1.5" height="16" x="20.5" y="4.5" />
        <rect width="1.5" height="16" x="3" y="4.5" />
        <rect width="19" height="1.5" x="3" y="3" />
        <rect width="19" height="1.5" x="3" y="20.5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "preview-pane"
  };
}
