"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../../scheme/common";

class AddDirectorySVG extends Element {
  childElements() {
    return (

      <g stroke="none">
        <rect width="20" height="2" x="0" y="23" />
        <rect width="2" height="8" x="18" y="15" />
        <rect width="2" height="8" x="0" y="15" />
        <rect width="20" height="2" x="0" y="13" />
        <rect width="7" height="3" x="0" y="10" />
        <path d="m 7,10 3,3 H 7 Z" />
        <rect width="2" height="8" x="14.5" y="2.5" />
        <rect width="8" height="2" x="11.5" y="5.5" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "add-directory"
  };
}

export default withStyle(AddDirectorySVG)`

  stroke: ${commonColour};
  
`;
