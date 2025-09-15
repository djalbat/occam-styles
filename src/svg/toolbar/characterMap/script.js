"use strict";

import CharacterMapToolbarSVG from "../characterMap";

export default class ScriptCharacterMapToolbarSVG extends CharacterMapToolbarSVG {
  childElements() {
    return (

      <g>
        <path d="M57 8C175 8 257-122 316-226L525-226C517-191 499-105 499-60C499-6 525 12 564 12C620 12 683-26 731-76L713-99C685-77 653-52 628-52C602-52 593-79 593-114C593-148 602-192 609-226L687-613C691-631 711-643 734-651L734-673C588-658 491-624 400-496C291-342 176-34 86-34C37-34 83-125 20-125C-16-125-32-97-32-66C-32-26-3 8 57 8ZM337-266C411-413 433-456 455-490C490-547 534-599 600-614L603-609L533-266Z" />
      </g>

    );
  }

  static defaultProperties = {
    viewBox: "-32 -673 766 685",
    className: "script"
  };
}
