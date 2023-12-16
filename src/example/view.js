"use strict";

import { Element } from "easy";

import { CreateSessionToolbarSVG } from "../index"; ///

export default class View extends Element {
  childElements() {
    const width = "10rem",
          style = {
            width
          };

    return (

      <div style={style} >
        <CreateSessionToolbarSVG/>
      </div>

    );
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}
