"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { commonColour } from "../scheme/common";

class EditEntrySVG extends Element {
  childElements() {
    return (

      <g transform="matrix(0.78501283,-0.78501283,0.78501283,0.78501283,-5.90466,13.24565)">
        <path style="stroke:none" d="M 6,8.7257576 2,11.225756 6,13.725758 Z" />
        <rect style="fill:none;stroke-width:1.41364" width="10.586364" height="4.0863643" x="7.70682" y="9.2068176" />
        <rect style="fill:none;stroke-width:1.41364" width="0.81444442" height="4.3144417" x="18.87048" y="9.0927782" />
      </g>

    );
  }

  static tagName = "svg";

  static defaultProperties = {
    viewBox: "0 0 25 25",
    className: "edit-entry"
  };
}

export default withStyle(EditEntrySVG)`

  fill: ${commonColour};
  stroke: ${commonColour};
  
`;
