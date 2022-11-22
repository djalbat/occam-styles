"use strict";

import TitleSVG from "../../svg/title";

export default class DownTitleSVG extends TitleSVG {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1.73925" d="M 13.648388,5.8696247 H 6.4038408 l 3.6222742,7.2820883 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "down"
  };
}
