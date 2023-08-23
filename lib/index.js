"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    colours: function() {
        return _colours.default;
    },
    syntaxStyle: function() {
        return _syntax.default;
    },
    juliaMonoStyle: function() {
        return _juliaMono.default;
    },
    commonFontMixin: function() {
        return _common.default;
    },
    juliaMonoFontMixin: function() {
        return _juliaMono1.default;
    },
    editorScheme: function() {
        return _editor.default;
    },
    commonScheme: function() {
        return _common1.default;
    },
    consoleScheme: function() {
        return _console.default;
    },
    prettyPrinterScheme: function() {
        return _prettyPrinter.default;
    },
    welcomeScreenScheme: function() {
        return _welcomeScreen.default;
    },
    LogoSVG: function() {
        return _logo.default;
    },
    MarkerSVG: function() {
        return _marker.default;
    },
    FileNameSVG: function() {
        return _file.default;
    },
    UpToggleSVG: function() {
        return _up.default;
    },
    FoldLineSVG: function() {
        return _line.default;
    },
    DownToggleSVG: function() {
        return _down.default;
    },
    ClosedFoldSVG: function() {
        return _closed.default;
    },
    TopOpenFoldSVG: function() {
        return _topOpen.default;
    },
    DirectoryNameSVG: function() {
        return _directory.default;
    },
    ExpandedTitleSVG: function() {
        return _expanded.default;
    },
    CollapsedTitleSVG: function() {
        return _collapsed.default;
    },
    BottomOpenFoldSVG: function() {
        return _bottomOpen.default;
    },
    FindInFileToolbarSVG: function() {
        return _findInFile.default;
    },
    FindInFilesToolbarSVG: function() {
        return _findInFiles.default;
    },
    JoinSessionToolbarSVG: function() {
        return _joinSession.default;
    },
    SynchroniseToolbarSVG: function() {
        return _synchronise.default;
    },
    LeaveSessionToolbarSVG: function() {
        return _leaveSession.default;
    },
    ClearConsoleToolbarSVG: function() {
        return _clearConsole.default;
    },
    CreateSessionToolbarSVG: function() {
        return _createSession.default;
    },
    ReleaseDirectoryNameSVG: function() {
        return _release.default;
    },
    OpenRubbishBinToolbarSVG: function() {
        return _open.default;
    },
    CopySessionKeyToolbarSVG: function() {
        return _copySessionKey.default;
    },
    ClosedRubbishBinToolbarSVG: function() {
        return _closed1.default;
    },
    ExportCustomGrammarsToolbarSVG: function() {
        return _exportCustomGrammars.default;
    },
    CreateProjectsFilePathToolbarSVG: function() {
        return _createProjectsFilePath.default;
    },
    EditSelectedProjectsPathToolbarSVG: function() {
        return _editSelectedProjectsPath.default;
    },
    ReloadProjectsAndReleasesToolbarSVG: function() {
        return _reloadProjectsAndReleases.default;
    },
    CreateProjectsDirectoryPathToolbarSVG: function() {
        return _createProjectsDirectoryPath.default;
    }
});
var _colours = /*#__PURE__*/ _interop_require_default(require("./colours"));
var _syntax = /*#__PURE__*/ _interop_require_default(require("./style/syntax"));
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("./style/juliaMono"));
var _common = /*#__PURE__*/ _interop_require_default(require("./mixin/font/common"));
var _juliaMono1 = /*#__PURE__*/ _interop_require_default(require("./mixin/font/juliaMono"));
var _editor = /*#__PURE__*/ _interop_require_default(require("./scheme/editor"));
var _common1 = /*#__PURE__*/ _interop_require_default(require("./scheme/common"));
var _console = /*#__PURE__*/ _interop_require_default(require("./scheme/console"));
var _prettyPrinter = /*#__PURE__*/ _interop_require_default(require("./scheme/prettyPrinter"));
var _welcomeScreen = /*#__PURE__*/ _interop_require_default(require("./scheme/welcomeScreen"));
var _logo = /*#__PURE__*/ _interop_require_default(require("./svg/logo"));
var _marker = /*#__PURE__*/ _interop_require_default(require("./svg/marker"));
var _file = /*#__PURE__*/ _interop_require_default(require("./svg/name/file"));
var _up = /*#__PURE__*/ _interop_require_default(require("./svg/toggle/up"));
var _line = /*#__PURE__*/ _interop_require_default(require("./svg/fold/line"));
var _down = /*#__PURE__*/ _interop_require_default(require("./svg/toggle/down"));
var _closed = /*#__PURE__*/ _interop_require_default(require("./svg/fold/closed"));
var _topOpen = /*#__PURE__*/ _interop_require_default(require("./svg/fold/topOpen"));
var _directory = /*#__PURE__*/ _interop_require_default(require("./svg/name/directory"));
var _expanded = /*#__PURE__*/ _interop_require_default(require("./svg/title/expanded"));
var _collapsed = /*#__PURE__*/ _interop_require_default(require("./svg/title/collapsed"));
var _bottomOpen = /*#__PURE__*/ _interop_require_default(require("./svg/fold/bottomOpen"));
var _findInFile = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/findInFile"));
var _findInFiles = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/findInFiles"));
var _joinSession = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/joinSession"));
var _synchronise = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/synchronise"));
var _leaveSession = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/leaveSession"));
var _clearConsole = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/clearConsole"));
var _createSession = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/createSession"));
var _release = /*#__PURE__*/ _interop_require_default(require("./svg/name/directory/release"));
var _open = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/rubbishBin/open"));
var _copySessionKey = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/copySessionKey"));
var _closed1 = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/rubbishBin/closed"));
var _exportCustomGrammars = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/exportCustomGrammars"));
var _createProjectsFilePath = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/createProjectsFilePath"));
var _editSelectedProjectsPath = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/editSelectedProjectsPath"));
var _reloadProjectsAndReleases = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/reloadProjectsAndReleases"));
var _createProjectsDirectoryPath = /*#__PURE__*/ _interop_require_default(require("./svg/toolbar/createProjectsDirectoryPath"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5bnRheFN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub1N0eWxlIH0gZnJvbSBcIi4vc3R5bGUvanVsaWFNb25vXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub0ZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvanVsaWFNb25vXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnNvbGVTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb1NWRyB9IGZyb20gXCIuL3N2Zy9sb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtlclNWRyB9IGZyb20gXCIuL3N2Zy9tYXJrZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvbmFtZS9maWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVwVG9nZ2xlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RvZ2dsZS91cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb2xkTGluZVNWRyB9IGZyb20gXCIuL3N2Zy9mb2xkL2xpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG93blRvZ2dsZVNWRyB9IGZyb20gXCIuL3N2Zy90b2dnbGUvZG93blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbG9zZWRGb2xkU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvY2xvc2VkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvcE9wZW5Gb2xkU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvdG9wT3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXJlY3RvcnlOYW1lU1ZHIH0gZnJvbSBcIi4vc3ZnL25hbWUvZGlyZWN0b3J5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGFuZGVkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvZXhwYW5kZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sbGFwc2VkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvY29sbGFwc2VkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvdHRvbU9wZW5Gb2xkU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvYm90dG9tT3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaW5kSW5GaWxlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2ZpbmRJbkZpbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmluZEluRmlsZXNUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvZmluZEluRmlsZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSm9pblNlc3Npb25Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvam9pblNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3luY2hyb25pc2VUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvc3luY2hyb25pc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhdmVTZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2xlYXZlU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbGVhckNvbnNvbGVUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY2xlYXJDb25zb2xlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY3JlYXRlU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWxlYXNlRGlyZWN0b3J5TmFtZVNWRyB9IGZyb20gXCIuL3N2Zy9uYW1lL2RpcmVjdG9yeS9yZWxlYXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9wZW5SdWJiaXNoQmluVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3J1YmJpc2hCaW4vb3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jb3B5U2Vzc2lvbktleVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3J1YmJpc2hCaW4vY2xvc2VkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2V4cG9ydEN1c3RvbUdyYW1tYXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY3JlYXRlUHJvamVjdHNGaWxlUGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0U2VsZWN0ZWRQcm9qZWN0c1BhdGhUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvZWRpdFNlbGVjdGVkUHJvamVjdHNQYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvcmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVQcm9qZWN0c0RpcmVjdG9yeVBhdGhUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoXCI7XG4iXSwibmFtZXMiOlsiY29sb3VycyIsInN5bnRheFN0eWxlIiwianVsaWFNb25vU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJqdWxpYU1vbm9Gb250TWl4aW4iLCJlZGl0b3JTY2hlbWUiLCJjb21tb25TY2hlbWUiLCJjb25zb2xlU2NoZW1lIiwicHJldHR5UHJpbnRlclNjaGVtZSIsIndlbGNvbWVTY3JlZW5TY2hlbWUiLCJMb2dvU1ZHIiwiTWFya2VyU1ZHIiwiRmlsZU5hbWVTVkciLCJVcFRvZ2dsZVNWRyIsIkZvbGRMaW5lU1ZHIiwiRG93blRvZ2dsZVNWRyIsIkNsb3NlZEZvbGRTVkciLCJUb3BPcGVuRm9sZFNWRyIsIkRpcmVjdG9yeU5hbWVTVkciLCJFeHBhbmRlZFRpdGxlU1ZHIiwiQ29sbGFwc2VkVGl0bGVTVkciLCJCb3R0b21PcGVuRm9sZFNWRyIsIkZpbmRJbkZpbGVUb29sYmFyU1ZHIiwiRmluZEluRmlsZXNUb29sYmFyU1ZHIiwiSm9pblNlc3Npb25Ub29sYmFyU1ZHIiwiU3luY2hyb25pc2VUb29sYmFyU1ZHIiwiTGVhdmVTZXNzaW9uVG9vbGJhclNWRyIsIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyIsIlJlbGVhc2VEaXJlY3RvcnlOYW1lU1ZHIiwiT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyIsIkVkaXRTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkciLCJSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsT0FBTztlQUFQQSxnQkFBTzs7SUFFUEMsV0FBVztlQUFYQSxlQUFXOztJQUNYQyxjQUFjO2VBQWRBLGtCQUFjOztJQUNkQyxlQUFlO2VBQWZBLGVBQWU7O0lBQ2ZDLGtCQUFrQjtlQUFsQkEsbUJBQWtCOztJQUVsQkMsWUFBWTtlQUFaQSxlQUFZOztJQUNaQyxZQUFZO2VBQVpBLGdCQUFZOztJQUNaQyxhQUFhO2VBQWJBLGdCQUFhOztJQUNiQyxtQkFBbUI7ZUFBbkJBLHNCQUFtQjs7SUFDbkJDLG1CQUFtQjtlQUFuQkEsc0JBQW1COztJQUVuQkMsT0FBTztlQUFQQSxhQUFPOztJQUNQQyxTQUFTO2VBQVRBLGVBQVM7O0lBQ1RDLFdBQVc7ZUFBWEEsYUFBVzs7SUFDWEMsV0FBVztlQUFYQSxXQUFXOztJQUNYQyxXQUFXO2VBQVhBLGFBQVc7O0lBQ1hDLGFBQWE7ZUFBYkEsYUFBYTs7SUFDYkMsYUFBYTtlQUFiQSxlQUFhOztJQUNiQyxjQUFjO2VBQWRBLGdCQUFjOztJQUNkQyxnQkFBZ0I7ZUFBaEJBLGtCQUFnQjs7SUFDaEJDLGdCQUFnQjtlQUFoQkEsaUJBQWdCOztJQUNoQkMsaUJBQWlCO2VBQWpCQSxrQkFBaUI7O0lBQ2pCQyxpQkFBaUI7ZUFBakJBLG1CQUFpQjs7SUFDakJDLG9CQUFvQjtlQUFwQkEsbUJBQW9COztJQUNwQkMscUJBQXFCO2VBQXJCQSxvQkFBcUI7O0lBQ3JCQyxxQkFBcUI7ZUFBckJBLG9CQUFxQjs7SUFDckJDLHFCQUFxQjtlQUFyQkEsb0JBQXFCOztJQUNyQkMsc0JBQXNCO2VBQXRCQSxxQkFBc0I7O0lBQ3RCQyxzQkFBc0I7ZUFBdEJBLHFCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsc0JBQXVCOztJQUN2QkMsdUJBQXVCO2VBQXZCQSxnQkFBdUI7O0lBQ3ZCQyx3QkFBd0I7ZUFBeEJBLGFBQXdCOztJQUN4QkMsd0JBQXdCO2VBQXhCQSx1QkFBd0I7O0lBQ3hCQywwQkFBMEI7ZUFBMUJBLGdCQUEwQjs7SUFDMUJDLDhCQUE4QjtlQUE5QkEsNkJBQThCOztJQUM5QkMsZ0NBQWdDO2VBQWhDQSwrQkFBZ0M7O0lBQ2hDQyxrQ0FBa0M7ZUFBbENBLGlDQUFrQzs7SUFDbENDLG1DQUFtQztlQUFuQ0Esa0NBQW1DOztJQUNuQ0MscUNBQXFDO2VBQXJDQSxvQ0FBcUM7Ozs4REF4Q3RCOzZEQUVJO2dFQUNHOzZEQUNDO2lFQUNHOzZEQUVOOzhEQUNBOzhEQUNDO29FQUNNO29FQUNBOzJEQUVaOzZEQUNFOzJEQUNFO3lEQUNBOzJEQUNBOzJEQUNFOzZEQUNBOzhEQUNDO2dFQUNFOytEQUNBO2dFQUNDO2lFQUNBO2lFQUNHO2tFQUNDO2tFQUNBO2tFQUNBO21FQUNDO21FQUNBO29FQUNDOzhEQUNBOzJEQUNDO3FFQUNBOzhEQUNFOzJFQUNJOzZFQUNFOytFQUNFO2dGQUNDO2tGQUNFIn0=