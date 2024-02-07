"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import Div from "../div";

import { JoinSessionToolbarSVG,
         SynchroniseToolbarSVG,
         ShowReleasesToolbarSVG,
         HideReleasesToolbarSVG,
         LeaveSessionToolbarSVG,
         ClearConsoleToolbarSVG,
         CreateSessionToolbarSVG,
         CopySessionKeyToolbarSVG,
         OpenRubbishBinToolbarSVG,
         ClosedRubbishBinToolbarSVG,
         FindInActiveDocumentToolbarSVG,
         ExportCustomGrammarsToolbarSVG,
         CreateProjectsFilePathToolbarSVG,
         FindInProjectsAndReleasesToolbarSVG,
         ReloadProjectsAndReleasesToolbarSVG,
         RenameSelectedProjectsPathToolbarSVG,
         CreateProjectsDirectoryPathToolbarSVG } from "../../../index"; ///

class ToolbarDiv extends Element {
  childElements() {
    const ToolbarSVGs = [
            OpenRubbishBinToolbarSVG,
            ClosedRubbishBinToolbarSVG,
            SynchroniseToolbarSVG,
            RenameSelectedProjectsPathToolbarSVG,
            ShowReleasesToolbarSVG,
            HideReleasesToolbarSVG,
            CreateProjectsDirectoryPathToolbarSVG,
            CreateProjectsFilePathToolbarSVG,
            ReloadProjectsAndReleasesToolbarSVG,
            JoinSessionToolbarSVG,
            CreateSessionToolbarSVG,
            LeaveSessionToolbarSVG,
            CopySessionKeyToolbarSVG,
            FindInActiveDocumentToolbarSVG,
            FindInProjectsAndReleasesToolbarSVG,
            ExportCustomGrammarsToolbarSVG,
            ClearConsoleToolbarSVG
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
