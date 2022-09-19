"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../scheme/common";

class CreateSessionSVG extends Element {
  childElements() {
    return (

      <g stroke="none">
        <rect width="3" height="2" x="3" y="17" />
        <rect width="2" height="4" x="13" y="11" />
        <rect width="2" height="6" x="3" y="11" />
        <rect width="12" height="2" x="3" y="9" />
        <rect width="4" height="2" x="3" y="7" />
        <rect width="12" height="2" x="6" y="23" />
        <rect width="2" height="6" x="16" y="17" />
        <rect width="2" height="6" x="6" y="17" />
        <rect width="12" height="2" x="6" y="15" />
        <rect width="4" height="2" x="6" y="13" />
        <rect width="8" height="2" x="15" y="5" />
        <rect width="2" height="8" x="18" y="2" />
        <path d="M 7,7 9,9 H 7 Z"/>
        <path d="m 10,13 2,2 h -2 z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "create-session"
  };
}

export default withStyle(CreateSessionSVG)`

  fill: ${commonColour};
  
`;
