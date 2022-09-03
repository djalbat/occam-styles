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
         OpenRubbishBin,
         DownTriangleSVG,
         LeftTriangleSVG,
         AddDirectorySVG,
         RightTriangleSVG,
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
      <DownTriangleSVG/>,
      <LeftTriangleSVG/>,
      <RightTriangleSVG/>,
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