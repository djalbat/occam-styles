"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../scheme/common";

class FileNameSVG extends Element {
  childElements() {
    return (

      <g stroke="none">
        <rect width="14" height="2" x="2" y="16" />
        <rect width="2" height="7" x="14" y="9" />
        <rect width="2" height="12" x="2" y="4" />
        <rect width="7" height="2" x="2" y="2" />
        <path d="m 9,2 7,7 h -7 z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 24 18",
    className: "file-name"
  };
}

export default withStyle(FileNameSVG)`

  fill: ${commonColour};
  padding-left: 3rem;
  
`;
