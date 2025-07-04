"use strict";

import MenuSVG from "../../svg/menu";

export default class ResetZoomMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g transform="translate(1, 1) scale(0.9, 0.9)">
        <path d="M 7.4130386,23.478239 H 2.0000028 l 0.1521737,-0.826086 q 0.3913038,-0.217391 0.8260858,-0.369564 0.434782,-0.173913 0.869564,-0.26087 L 12.45651,8.0000002 h 1.586954 l 2.456518,14.0217188 q 0.413043,0.08696 0.804347,0.26087 0.413043,0.173912 0.695651,0.369564 l -0.173913,0.826086 h -6.695642 l 0.152173,-0.826086 q 0.456521,-0.217391 0.956521,-0.369564 0.521738,-0.173913 0.978259,-0.26087 L 12.69564,18.565203 H 7.8912988 l -2.0652145,3.456516 q 0.4565211,0.06522 0.9130422,0.23913 0.4565211,0.152174 0.8260858,0.391304 z m 1.2173896,-6.326078 h 3.8912988 l -0.608695,-4.152168 v -1.869562 h -0.04348 l -0.826086,1.91304 z" />
        <g transform="translate(1,-1) skewX(-10)">
          <path d="M 19,2 18,4 19,4 Z" />
          <rect width="2" height="8" x="19" y="2" />
          <rect width="6" height="1.5" x="17" y="8.5" />
        </g>
      </g>

    );
  }

  static defaultProperties = {
    className: "reset-zoom"
  };
}
