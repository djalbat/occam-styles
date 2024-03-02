"use strict";

import { Element } from "easy";

import Div from "../div";

import { FlipMenuSVG,
         EmbeddedModeMenuSVG,
         IncreaseFontSizeMenuSVG,
         DecreaseFontSizeMenuSVG,
         PresentationModeMenuSVG,
         TogglePreviewPaneOnlyMenuSVG,
         TogglePreviewPaneSplitMenuSVG,
         TogglePrettyPrinterOnlyMenuSVG,
         TogglePrettyPrinterSplitMenuSVG } from "../../../index"; ///


export default class MenuDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            FlipMenuSVG,
            EmbeddedModeMenuSVG,
            PresentationModeMenuSVG,
            IncreaseFontSizeMenuSVG,
            DecreaseFontSizeMenuSVG,
            TogglePreviewPaneOnlyMenuSVG,
            TogglePreviewPaneSplitMenuSVG,
            TogglePrettyPrinterOnlyMenuSVG,
            TogglePrettyPrinterSplitMenuSVG
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
