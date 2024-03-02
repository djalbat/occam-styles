"use strict";

import { Element } from "easy";

import Div from "../div";

import { FlipMenuSVG, ToggleMenuSVG, EmbeddedModeMenuSVG, IncreaseFontSizeMenuSVG, DecreaseFontSizeMenuSVG, PresentationModeMenuSVG } from "../../../index"; ///

export default class MenuDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            FlipMenuSVG,
            ToggleMenuSVG,
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
