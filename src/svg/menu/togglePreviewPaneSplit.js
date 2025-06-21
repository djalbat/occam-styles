"use strict";

import MenuSVG from "../../svg/menu";

export default class TogglePreviewPaneSplitMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <g transform="translate(8,0)">
          <path d="M 4.4999837 4.4999837 L 4.4999837 20.500041 L 12.500012 20.500041 L 12.500012 4.4999837 L 4.4999837 4.4999837 z M 6.7070841 6.1717163 L 9.5353353 8.9999674 L 8.8284017 9.706901 L 6.7070841 11.828219 L 6.0001506 11.121285 L 8.1214681 8.9999674 L 6.0001506 6.8786499 L 6.7070841 6.1717163 z " />
        </g>
        <rect width="1.5" height="15.999999" x="11" y="4.5000005" />
        <rect width="1.5" height="15.999999" x="20.5" y="4.5000005" />
        <rect width="1.5" height="15.999999" x="3" y="4.5000005" />
        <rect width="18.999998" height="1.5" x="3" y="3" />
        <rect width="18.999998" height="1.5" x="3" y="20.5" />
      </g>

    );
  }

  static defaultProperties = {
    className: "toggle-preview-pane-split"
  };
}
