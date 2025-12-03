"use strict";

import { Element } from "easy";

import Div from "../div";

import { ZoomInMenuSVG,
         ZoomOutMenuSVG,
         ResetZoomMenuSVG,
         DraftModeMenuSVG,
         PreviewPaneMenuSVG,
         EmbeddedModeMenuSVG,
         InvertColoursMenuSVG,
         PrettyPrinterMenuSVG,
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
            InvertColoursMenuSVG,
            DraftModeMenuSVG,
            PresentationModeMenuSVG,
            PrettyPrinterMenuSVG,
            PrettyPrinterPreviewPaneMenuSVG,
            PreviewPaneMenuSVG,
            PreviewPanePrettyPrinterMenuSVG,
            EmbeddedModeMenuSVG,
            FullScreenModeMenuSVG
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
