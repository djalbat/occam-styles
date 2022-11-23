"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { markerSVGHeight, markerSVGMarginLeft } from "../styles";

class MarkerSVG extends SVG {
  childElements() {
    return (

      <g stroke="none">
        <rect width="14" height="4" x="2" y="16" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "marker"
  };
}

export default withStyle(MarkerSVG)`

  height: ${markerSVGHeight};
  margin-left: ${markerSVGMarginLeft};
  vertical-align: bottom;
  
`;
