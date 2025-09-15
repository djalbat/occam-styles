"use strict";

import CharacterMapToolbarSVG from "../characterMap";

export default class SansSerifItalicCharacterMapToolbarSVG extends CharacterMapToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M-58 0L31 0L138-204L374-204L393 0L476 0L399-657L307-657ZM170-265L229-377C267-448 300-515 336-590L341-590C346-515 353-446 358-377L368-265Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "-58 -657 534 657",
    className: "sans-serif-italic"
  };
}
