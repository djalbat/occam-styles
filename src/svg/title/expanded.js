"use strict";

import TitleSVG from "../../svg/title";

export default class ExpandedTitleSVG extends TitleSVG {
  childElements() {
    return (

      <g>
        <path d="M 6.0001506,6.0001506 12.614734,19.229317 19.229317,6.0001506 Z m 2.4665161,1.508435 h 8.2956173 l -4.14755,8.2961344 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "expanded"
  };
}
