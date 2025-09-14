"use strict";

import AlphaNumericToolbarSVG from "../../../svg/toolbar/alphaNumeric";

export default class SansSerifBoldAlphaNumericToolbarSVG extends AlphaNumericToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M-5 0L138 0L183-162L393-162L437 0L585 0L373-657L207-657ZM213-271L231-337C250-406 277-517 285-550L289-550C307-480 326-403 346-337L364-271Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "-5 -657 590 657",
    className: "sans-serif-bold"
  };
}
