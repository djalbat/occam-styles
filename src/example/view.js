"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { LogoSVG,
         PenSVG,
         FileSVG,
         CloseSVG,
         MarkerSVG,
         AddFileSVG,
         DirectorySVG,
         UpTriangleSVG,
         OpenRubbishBin,
         DownTriangleSVG,
         AddDirectorySVG,
         ClosedRubbishBin } from "../index";  ///

class View extends Element {
  childElements() {
    return ([

      <LogoSVG/>,
      <CloseSVG/>,
      <PenSVG/>,
      <FileSVG/>,
      <DirectorySVG/>,
      <MarkerSVG/>,
      <UpTriangleSVG/>,
      <DownTriangleSVG/>,
      <AddFileSVG/>,
      <AddDirectorySVG/>,
      <ClosedRubbishBin/>,
      <OpenRubbishBin/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  display: flex;
  flex-direction: column;
  
`;