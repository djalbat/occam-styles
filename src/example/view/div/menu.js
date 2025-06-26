"use strict";

import { Element } from "easy";

import Div from "../div";

import { ZoomInMenuSVG,
         ZoomOutMenuSVG,
         ReverseMenuSVG,
         ResetZoomMenuSVG,
         EmbeddedModeMenuSVG,
         ShowScrollbarsMenuSVG,
         HideScrollbarsMenuSVG,
         PresentationModeMenuSVG,
         TogglePreviewPaneOnlyMenuSVG,
         TogglePreviewPaneSplitMenuSVG,
         TogglePrettyPrinterOnlyMenuSVG,
         TogglePrettyPrinterSplitMenuSVG } from "../../../index"; ///

export default class MenuDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            ZoomInMenuSVG,
            ResetZoomMenuSVG,
            ZoomOutMenuSVG,
            ReverseMenuSVG,
            EmbeddedModeMenuSVG,
            PresentationModeMenuSVG,
            ShowScrollbarsMenuSVG,
            HideScrollbarsMenuSVG,
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
