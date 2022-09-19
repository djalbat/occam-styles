"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../scheme/common";
import { nameSVGHeight } from "../styles";

class DirectoryNameSVG extends Element {
  childElements() {
    return (

      <g stroke="none">
        <rect width="16" height="2" x="0" y="16" />
        <rect width="2" height="7" x="14" y="9" />
        <rect width="2" height="7" x="0" y="9" />
        <rect width="16" height="2" x="0" y="7" />
        <rect width="7" height="3" x="0" y="4" />
        <path d="m 7,4 3,3 H 7 Z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 24 18",
    className: "directory-name"
  };
}

export default withStyle(DirectoryNameSVG)`

  fill: ${commonColour};
  height: ${nameSVGHeight};
  vertical-align: bottom;
  
`;
