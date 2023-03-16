"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class PasteSessionKeyToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <rect width="2" height="12" x="6" y="8" />
        <rect width="3" height="2" x="4" y="17" />
        <rect width="3" height="2" x="4" y="14" />
        <rect width="2" height="1" x="5" y="16" />
        <path d="m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
        <path d="M 7.0000895 2.9998169 A 3 3 0 0 0 3.9997559 6.0001506 A 3 3 0 0 0 7.0000895 8.9999674 A 3 3 0 0 0 9.9999064 6.0001506 A 3 3 0 0 0 7.0000895 2.9998169 z M 7.0000895 5.0002116 A 0.99999994 0.99999994 0 0 1 8.0000285 6.0001506 A 0.99999994 0.99999994 0 0 1 7.0000895 7.0000895 A 0.99999994 0.99999994 0 0 1 6.0001506 6.0001506 A 0.99999994 0.99999994 0 0 1 7.0000895 5.0002116 z " />
      </g>

    );
  }

  static defaultProperties = {
    className: "paste-session-key"
  };
}
