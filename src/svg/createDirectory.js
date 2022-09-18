"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../scheme/common";

class CreateDirectorySVG extends Element {
  childElements() {
    return (

      <g stroke="none">
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

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "create-directory"
  };
}

export default withStyle(CreateDirectorySVG)`

  fill: ${commonColour};
  
`;
