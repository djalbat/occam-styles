"use strict";

import { Element } from "easy";

import Div from "../div";

import { FlipMenuSVG, EmbeddedModeMenuSVG, IncreaseFontSizeMenuSVG, DecreaseFontSizeMenuSVG, PresentationModeMenuSVG } from "../../../index"; ///

export default class MenuDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            FlipMenuSVG,
            EmbeddedModeMenuSVG,
            PresentationModeMenuSVG,
            IncreaseFontSizeMenuSVG,
            DecreaseFontSizeMenuSVG
          ],
          childElements = ToolbarSVGs.map((ToolbarSVG) =>

            <Div>
              <ToolbarSVG />
            </Div>

          );

    return childElements;
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}
