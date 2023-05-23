"use strict";

import { Element } from "easy";

import DirectoryNameSVG from "../svg/name/directory";

export default class View extends Element {
  childElements() {
    return ([

      <DirectoryNameSVG/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
