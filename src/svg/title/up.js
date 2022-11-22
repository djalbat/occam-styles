"use strict";

import TitleSVG from "../../svg/title";

export default class UpTitleSVG extends TitleSVG {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1.73925" d="M 14.234694,13.648389 V 6.4038409 L 6.9526058,10.026115 Z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "up"
  };
}
