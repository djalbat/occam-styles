"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { clearConsoleColour } from "../scheme/common";

class ClearConsoleSVG extends Element {
  childElements() {
    return (

      <g stroke="none">
        <path d="m 12.803219,12.19644 a 7.5,7.5 0 0 0 -10.6066856,3.66e-4 7.5,7.5 0 0 0 4e-7,10.606319 7.5,7.5 0 0 0 10.6066852,3.66e-4 7.5,7.5 0 0 0 0,-10.607051 z m -0.771741,2.186599 a 5.5,5.5 0 0 1 -0.642387,7.006324 5.5,5.5 0 0 1 -7.0048623,0.640925 z m -1.415589,-1.413396 -7.6461529,7.646153 a 5.5,5.5 0 0 1 0.6409245,-7.004863 5.5,5.5 0 0 1 7.0052284,-0.64129 z" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "clear-console"
  };
}

export default withStyle(ClearConsoleSVG)`

  stroke: ${clearConsoleColour};
  
`;
