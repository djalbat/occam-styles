"use strict";

import MenuSVG from "../../svg/menu";

export default class PrettyPrinterMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect width="19" height="19" x="3" y="3" />
      </g>

    );
  }

  static defaultProperties = {
    className: "pretty-printer"
  };
}
