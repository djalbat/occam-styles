"use strict";

import { Element } from "easy";

import Div from "../div";

import { ZoomInMenuSVG,
         ZoomOutMenuSVG,
         ResetZoomMenuSVG,
         DraftModeMenuSVG,
         EmbeddedModeMenuSVG,
         FullScreenModeMenuSVG,
         PreviewPaneOnlyMenuSVG,
         PresentationModeMenuSVG,
         PrettyPrinterOnlyMenuSVG,
         PreviewPanePrettyPrinterMenuSVG,
         PrettyPrinterPreviewPaneMenuSVG } from "../../../index"; ///


export default class MenuDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            ZoomInMenuSVG,
            ZoomOutMenuSVG,
            ResetZoomMenuSVG,
            EmbeddedModeMenuSVG,
            FullScreenModeMenuSVG,
            DraftModeMenuSVG,
            PresentationModeMenuSVG,
            PreviewPaneOnlyMenuSVG,
            PrettyPrinterOnlyMenuSVG,
            PreviewPanePrettyPrinterMenuSVG,
            PrettyPrinterPreviewPaneMenuSVG
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
