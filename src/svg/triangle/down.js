"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../../scheme/common";

class DownTriangleSVG extends Element {
  childElements() {
    return (

      <g>
        <path style="stroke-width:1" d="M 12.37198,13.970825 H 5.5695679 l 3.4012067,6.814639 z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "down-triangle"
  };
}

export default withStyle(DownTriangleSVG)`

  fill: none;
  stroke: ${commonColour};
  
`;
