"use strict";

import withStyle from "easy-with-style";  ///

import NameSVG from "../../svg/name";

import { fileNameSVGPaddingLeft } from "../../styles";

class FileNameSVG extends NameSVG {
  childElements() {
    return (

      <g>
        <rect width="14" height="2" x="2" y="16" />
        <rect width="2" height="7" x="14" y="9" />
        <rect width="2" height="12" x="2" y="4" />
        <rect width="7" height="2" x="2" y="2" />
        <path d="m 9,2 7,7 h -7 z" />
      </g>

    );
  }

  static defaultProperties = {
    className: "file"
  };
}

export default withStyle(FileNameSVG)`

  padding-left: ${fileNameSVGPaddingLeft};
  
`;
