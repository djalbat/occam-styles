"use strict";

import { Element } from "easy";

import { ShowReleasesToolbarSVG, HideReleasesToolbarSVG } from "../index"; ///

export default class View extends Element {
  childElements() {
    const width = "10rem",
          display = "inline-block",
          style = {
            width,
            display
          };

    return ([

      <div style={style} >
        <ShowReleasesToolbarSVG />
      </div>,
      <div style={style} >
        <HideReleasesToolbarSVG />
      </div>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
