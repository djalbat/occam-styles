"use strict";

import ToolbarSVG from "../../svg/toolbar";

export default class CopySessionKeyToolbarSVG extends ToolbarSVG {
  childElements() {
    return (

      <g>
        <g transform="translate(-2, 1.5) scale(1.25,1.025)">
          <rect width="2.5" height="13" x="6" y="8" />
          <rect width="4" height="2" x="3" y="18" />
          <rect width="3" height="2" x="3" y="14" />
          <rect width="2" height="2" x="4" y="16" />
          <path d="M 7.2503228,2.9998169 A 3.7499058,3 0 0 0 3.5,6.0001506 3.7499058,3 0 0 0 7.2503228,8.9999674 3.7499058,3 0 0 0 11,6.0001506 3.7499058,3 0 0 0 7.2503228,2.9998169 Z m 0,2.0003947 A 1.2499684,0.99999994 0 0 1 8.500215,6.0001506 1.2499684,0.99999994 0 0 1 7.2503228,7.0000895 1.2499684,0.99999994 0 0 1 6.0004306,6.0001506 1.2499684,0.99999994 0 0 1 7.2503228,5.0002116 Z" />
        </g>
        <path d="m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "copy-session-key"
  };
}
