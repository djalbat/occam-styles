"use strict";

import AlphaNumericSVG from "../../svg/alphaNumeric";

export default class SerifBoldAlphaNumericSVG extends AlphaNumericSVG {
  childElements() {
    return (

      <g>
        <path d="M230 0L230-43C180-43 162-48 162-80C162-97 170-121 176-138L205-211L435-211L458-151C469-123 478-90 478-75C478-45 444-43 419-43L419 0L740 0L740-43C694-43 668-74 641-138L425-662L320-662L103-140C70-62 53-43 2-43L2 0ZM324-512L328-512L417-263L223-263Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "2 -662 738 662",
    className: "serif-bold"
  };
}
