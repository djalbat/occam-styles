"use strict";

import TitleSVG from "../../svg/title";

export default class CollapsedTitleSVG extends TitleSVG {
  childElements() {
    return (

      <g>
        <path d="M 19.229317 6.0001506 L 6.0001506 12.614734 L 19.229317 19.229317 L 19.229317 6.0001506 z M 17.720882 8.4666667 L 17.720882 16.762284 L 9.4247477 12.614734 L 17.720882 8.4666667 z " />
      </g>

    );
  }

  static defaultProperties = {
    className: "collapsed"
  };
}
