"use strict";

import { Element } from "easy";

export default class View extends Element {
  childElements() {
    return "view";
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
