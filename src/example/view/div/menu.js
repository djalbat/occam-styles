"use strict";

import { Element } from "easy";

import Div from "../div";

import { ZoomInMenuSVG,
         ZoomOutMenuSVG,
         ResetZoomMenuSVG,
         DraftModeMenuSVG,
         PreviewPaneMenuSVG,
         PrettyPrinterMenuSVG,
         EmbeddedModeMenuSVG,
         FullScreenModeMenuSVG,
         PresentationModeMenuSVG,
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
            PreviewPaneMenuSVG,
            PrettyPrinterMenuSVG,
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
