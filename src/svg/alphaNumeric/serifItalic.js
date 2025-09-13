"use strict";

import AlphaNumericSVG from "../../svg/alphaNumeric";

export default class SerifItalicAlphaNumericSVG extends AlphaNumericSVG {
  childElements() {
    return (

      <g>
        <path d="M642 0L648-30C588-30 574-53 561-119L482-661L440-661L94-160C19-46 0-30-55-30L-62 0L147 0L154-30C110-30 96-36 96-57C96-76 107-94 121-113L191-219L449-219L459-129C460-117 461-103 461-87C461-37 430-30 381-30L375 0ZM445-259L215-259L409-548L412-548Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "-62 -661 710 661",
    className: "serif-italic"
  };
}
