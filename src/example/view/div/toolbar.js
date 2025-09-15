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
         CancelCharacterMapToolbarSVG,
         ScriptCharacterMapToolbarSVG,
         FrakturCharacterMapToolbarSVG,
         SansSerifCharacterMapToolbarSVG,
         MonospaceCharacterMapToolbarSVG,
         SerifBoldCharacterMapToolbarSVG,
         SerifItalicCharacterMapToolbarSVG,
         DoubleStruckCharacterMapToolbarSVG,
         SansSerifBoldCharacterMapToolbarSVG,
         SerifBoldItalicCharacterMapToolbarSVG,
         SansSerifItalicCharacterMapToolbarSVG,
         SansSerifBoldItalicCharacterMapToolbarSVG } from "../../../index"; ///

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
            CancelCharacterMapToolbarSVG,
            ScriptCharacterMapToolbarSVG,
            FrakturCharacterMapToolbarSVG,
            SansSerifCharacterMapToolbarSVG,
            MonospaceCharacterMapToolbarSVG,
            SerifBoldCharacterMapToolbarSVG,
            SerifItalicCharacterMapToolbarSVG,
            DoubleStruckCharacterMapToolbarSVG,
            SansSerifBoldCharacterMapToolbarSVG,
            SerifBoldItalicCharacterMapToolbarSVG,
            SansSerifItalicCharacterMapToolbarSVG,
            SansSerifBoldItalicCharacterMapToolbarSVG
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
