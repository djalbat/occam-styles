"use strict";

import { Element } from "easy";

import ReleaseNameSVG from "../svg/name/release";
import DirectoryNameSVG from "../svg/name/directory";

export default class View extends Element {
  childElements() {
    return ([

      <ReleaseNameSVG/>,
      <DirectoryNameSVG/>,

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
