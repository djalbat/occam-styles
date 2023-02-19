"use strict";

import withStyle from "easy-with-style";  ///

import SVG from "../svg";

import { nameSVGHeight, nameSVGMarginBottom, fileNameSVGPaddingLeft } from "../styles";

class FileNameSVG extends SVG {
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
    viewBox: "0 0 24 18",
    className: "file-name"
  };
}

export default withStyle(FileNameSVG)`

  height: ${nameSVGHeight};
  padding-left: ${fileNameSVGPaddingLeft};
  margin-bottom: ${nameSVGMarginBottom};
  
`;
