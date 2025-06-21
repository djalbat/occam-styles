"use strict";

import MenuSVG from "../../svg/menu";

export default class TogglePreviewPaneOnlyMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="1.5" height="15.999999" x="20.5" y="4.5000005" />
        <rect width="1.5" height="15.999999" x="3" y="4.5000005" />
        <rect width="18.999998" height="1.5" x="3" y="3" />
        <rect width="18.999998" height="1.5" x="3" y="20.5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "toggle-preview-pane-only"
  };
}
