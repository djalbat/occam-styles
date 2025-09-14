"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Div from "../div";

import { JoinSessionToolbarSVG,
         ShowReleasesToolbarSVG,
         HideReleasesToolbarSVG,
         LeaveSessionToolbarSVG,
         ClearConsoleToolbarSVG,
         CreateSessionToolbarSVG,
         OpenRubbishBinToolbarSVG,
         CopySessionKeyToolbarSVG,
         ClosedRubbishBinToolbarSVG,
         SynchroniseDocumentToolbarSVG,
         FindInActiveDocumentToolbarSVG,
         ExportCustomGrammarsToolbarSVG,
         CreateProjectsFilePathToolbarSVG,
         FindInProjectsAndReleasesToolbarSVG,
         ReloadProjectsAndReleasesToolbarSVG,
         RenameSelectedProjectsPathToolbarSVG,
         CreateProjectsDirectoryPathToolbarSVG,
         CancelAlphaNumericToolbarSVG,
         ScriptAlphaNumericToolbarSVG,
         FrakturAlphaNumericToolbarSVG,
         SansSerifAlphaNumericToolbarSVG,
         MonospaceAlphaNumericToolbarSVG,
         SerifBoldAlphaNumericToolbarSVG,
         SerifItalicAlphaNumericToolbarSVG,
         DoubleStruckAlphaNumericToolbarSVG,
         SansSerifBoldAlphaNumericToolbarSVG,
         SerifBoldItalicAlphaNumericToolbarSVG,
         SansSerifItalicAlphaNumericToolbarSVG,
         SansSerifBoldItalicAlphaNumericToolbarSVG } from "../../../index"; ///

class ToolbarDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            JoinSessionToolbarSVG,
            ShowReleasesToolbarSVG,
            HideReleasesToolbarSVG,
            LeaveSessionToolbarSVG,
            ClearConsoleToolbarSVG,
            CreateSessionToolbarSVG,
            OpenRubbishBinToolbarSVG,
            CopySessionKeyToolbarSVG,
            ClosedRubbishBinToolbarSVG,
            SynchroniseDocumentToolbarSVG,
            FindInActiveDocumentToolbarSVG,
            ExportCustomGrammarsToolbarSVG,
            CreateProjectsFilePathToolbarSVG,
            FindInProjectsAndReleasesToolbarSVG,
            ReloadProjectsAndReleasesToolbarSVG,
            RenameSelectedProjectsPathToolbarSVG,
            CreateProjectsDirectoryPathToolbarSVG,
            CancelAlphaNumericToolbarSVG,
            ScriptAlphaNumericToolbarSVG,
            FrakturAlphaNumericToolbarSVG,
            SansSerifAlphaNumericToolbarSVG,
            MonospaceAlphaNumericToolbarSVG,
            SerifBoldAlphaNumericToolbarSVG,
            SerifItalicAlphaNumericToolbarSVG,
            DoubleStruckAlphaNumericToolbarSVG,
            SansSerifBoldAlphaNumericToolbarSVG,
            SerifBoldItalicAlphaNumericToolbarSVG,
            SansSerifItalicAlphaNumericToolbarSVG,
            SansSerifBoldItalicAlphaNumericToolbarSVG
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
    className: "toolbar"
  };
}

export default withStyle(ToolbarDiv)`

  margin-bottom: 2rem;
  
`;
