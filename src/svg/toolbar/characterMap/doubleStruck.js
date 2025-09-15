"use strict";

import CharacterMapToolbarSVG from "../characterMap";

export default class DoubleStruckCharacterMapToolbarSVG extends CharacterMapToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M640 0L410-657L243-657L4 0L51 0L125-209L392-209L468 0ZM580-42L497-42L296-615L379-615ZM376-251L142-251L260-580L262-580Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "4 -657 636 657",
    className: "double-struck"
  };
}

