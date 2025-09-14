"use strict";

import AlphaNumericToolbarSVG from "../../../svg/toolbar/alphaNumeric";

export default class SansSerifAlphaNumericToolbarSVG extends AlphaNumericToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M4 0L91 0L155-199L400-199L463 0L554 0L327-657L231-657ZM177-266L209-366C233-439 254-511 275-587L279-587C301-511 322-439 347-366L379-266Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "4 -657 550 657",
    className: "sans-serif"
  };
}
