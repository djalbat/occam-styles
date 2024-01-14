"use strict";

import { Element } from "easy";

import { ToggleReleasesVisibilityToolbarSVG, CreateProjectsDirectoryPathToolbarSVG } from "../index"; ///

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
        <ToggleReleasesVisibilityToolbarSVG />
      </div>,
      <div style={style} >
        <CreateProjectsDirectoryPathToolbarSVG />
      </div>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
