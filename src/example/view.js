"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import {
  JoinSessionToolbarSVG,
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
  CreateProjectsDirectoryPathToolbarSVG } from "../index"; ///

import Div from "./view/div";

class View extends Element {
  childElements() {
    const ToolbarSVGs = [
            OpenRubbishBinToolbarSVG,
            SynchroniseToolbarSVG,
            RenameSelectedProjectsPathToolbarSVG,
            ShowReleasesToolbarSVG,
            HideReleasesToolbarSVG,
            CreateProjectsDirectoryPathToolbarSVG,
            CreateProjectsFilePathToolbarSVG,
            ReloadProjectsAndReleasesToolbarSVG,
            ClosedRubbishBinToolbarSVG,
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
    className: "view"
  };
}

export default withStyle(View)`

  padding: 2rem;
  
`;
