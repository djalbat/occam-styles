"use strict";

import CharacterMapToolbarSVG from "../characterMap";

export default class SansSerifBoldItalicCharacterMapToolbarSVG extends CharacterMapToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M-66 0L77 0L160-171L365-171L375 0L512 0L442-657L288-657ZM208-269L252-359C284-425 311-487 342-556L346-556C347-519 351-435 355-359L360-269Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "-66 -657 578 657",
    className: "sans-serif-bold-italic"
  };
}
