"use strict";

import AlphaNumericToolbarSVG from "../../../svg/toolbar/alphaNumeric";

export default class SerifBoldItalicAlphaNumericToolbarSVG extends AlphaNumericToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M668 0L674-43C628-43 602-74 592-138L512-662L419-662L79-140C28-62 5-43-45-43L-54 0L170 0L178-43C136-43 121-47 121-69C121-90 138-118 150-138L197-211L421-211L430-151C432-138 432-118 432-104C432-45 390-43 364-43L354 0ZM416-263L227-263L386-512L390-512Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "-54 -662 728 662",
    className: "serif-Bold-italic"
  };
}
