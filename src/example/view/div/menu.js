"use strict";

import { Element } from "easy";

import Div from "../div";

import { ZoomInMenuSVG,
         ZoomOutMenuSVG,
         ReverseMenuSVG,
         EmbeddedModeMenuSVG,
         PresentationModeMenuSVG,
         TogglePreviewPaneOnlyMenuSVG,
         TogglePreviewPaneSplitMenuSVG,
         TogglePrettyPrinterOnlyMenuSVG,
         TogglePrettyPrinterSplitMenuSVG,
         ShowPreviewPaneScrollbarsMenuSVG,
         HidePreviewPaneScrollbarsMenuSVG } from "../../../index"; ///

export default class MenuDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            ZoomInMenuSVG,
            ZoomOutMenuSVG,
            ReverseMenuSVG,
            EmbeddedModeMenuSVG,
            PresentationModeMenuSVG,
            TogglePreviewPaneOnlyMenuSVG,
            TogglePreviewPaneSplitMenuSVG,
            TogglePrettyPrinterOnlyMenuSVG,
            TogglePrettyPrinterSplitMenuSVG,
            ShowPreviewPaneScrollbarsMenuSVG,
            HidePreviewPaneScrollbarsMenuSVG
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
