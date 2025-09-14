"use strict";

import AlphaNumericToolbarSVG from "../../../svg/toolbar/alphaNumeric";

import { cancelCharacterMapFill } from "../../../scheme/common";

export default class CancelAlphaNumericToolbarSVG extends AlphaNumericToolbarSVG {
  childElements() {
    return (

      <g fill={`${cancelCharacterMapFill}`} transform="translate(12.5, 10) rotate(45)">
        <rect width="19" height="4" x="-7.5" y="0" />
        <rect width="4" height="19" x="0" y="-7.5" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "cancel"
  };
}
