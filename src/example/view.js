"use strict";

import { Element } from "easy";

import { ToggleReleasesVisibilityToolbarSVG } from "../index"; ///

export default class View extends Element {
  childElements() {
    const width = "10rem",
          style = {
            width
          };

    return (

      <div style={style} >
        <ToggleReleasesVisibilityToolbarSVG />
      </div>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
