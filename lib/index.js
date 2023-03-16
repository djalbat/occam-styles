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
        return _fileName.default;
    },
    UpToggleSVG: function() {
        return _up.default;
    },
    DownToggleSVG: function() {
        return _down.default;
    },
    DirectoryNameSVG: function() {
        return _directoryName.default;
    },
    ExpandedTitleSVG: function() {
        return _expanded.default;
    },
    CollapsedTitleSVG: function() {
        return _collapsed.default;
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
    OpenRubbishBinToolbarSVG: function() {
        return _open.default;
    },
    PasteSessionKeyToolbarSVG: function() {
        return _pasteSessionKey.default;
    },
    ClosedRubbishBinToolbarSVG: function() {
        return _closed.default;
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
var _colours = /*#__PURE__*/ _interopRequireDefault(require("./colours"));
var _syntax = /*#__PURE__*/ _interopRequireDefault(require("./style/syntax"));
var _juliaMono = /*#__PURE__*/ _interopRequireDefault(require("./style/juliaMono"));
var _common = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/common"));
var _juliaMono1 = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/juliaMono"));
var _editor = /*#__PURE__*/ _interopRequireDefault(require("./scheme/editor"));
var _common1 = /*#__PURE__*/ _interopRequireDefault(require("./scheme/common"));
var _console = /*#__PURE__*/ _interopRequireDefault(require("./scheme/console"));
var _prettyPrinter = /*#__PURE__*/ _interopRequireDefault(require("./scheme/prettyPrinter"));
var _welcomeScreen = /*#__PURE__*/ _interopRequireDefault(require("./scheme/welcomeScreen"));
var _logo = /*#__PURE__*/ _interopRequireDefault(require("./svg/logo"));
var _marker = /*#__PURE__*/ _interopRequireDefault(require("./svg/marker"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./svg/fileName"));
var _up = /*#__PURE__*/ _interopRequireDefault(require("./svg/toggle/up"));
var _down = /*#__PURE__*/ _interopRequireDefault(require("./svg/toggle/down"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./svg/directoryName"));
var _expanded = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/expanded"));
var _collapsed = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/collapsed"));
var _joinSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/joinSession"));
var _synchronise = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/synchronise"));
var _leaveSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/leaveSession"));
var _clearConsole = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/clearConsole"));
var _createSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/createSession"));
var _open = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/rubbishBin/open"));
var _pasteSessionKey = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/pasteSessionKey"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/rubbishBin/closed"));
var _exportCustomGrammars = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/exportCustomGrammars"));
var _createProjectsFilePath = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/createProjectsFilePath"));
var _editSelectedProjectsPath = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/editSelectedProjectsPath"));
var _reloadProjectsAndReleases = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/reloadProjectsAndReleases"));
var _createProjectsDirectoryPath = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/createProjectsDirectoryPath"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5bnRheFN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub1N0eWxlIH0gZnJvbSBcIi4vc3R5bGUvanVsaWFNb25vXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub0ZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvanVsaWFNb25vXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnNvbGVTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb1NWRyB9IGZyb20gXCIuL3N2Zy9sb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtlclNWRyB9IGZyb20gXCIuL3N2Zy9tYXJrZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvZmlsZU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXBUb2dnbGVTVkcgfSBmcm9tIFwiLi9zdmcvdG9nZ2xlL3VwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERvd25Ub2dnbGVTVkcgfSBmcm9tIFwiLi9zdmcvdG9nZ2xlL2Rvd25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0b3J5TmFtZVNWRyB9IGZyb20gXCIuL3N2Zy9kaXJlY3RvcnlOYW1lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGFuZGVkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvZXhwYW5kZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sbGFwc2VkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvY29sbGFwc2VkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpvaW5TZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2pvaW5TZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN5bmNocm9uaXNlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3N5bmNocm9uaXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9sZWF2ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NsZWFyQ29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvcnViYmlzaEJpbi9vcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhc3RlU2Vzc2lvbktleVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9wYXN0ZVNlc3Npb25LZXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9leHBvcnRDdXN0b21HcmFtbWFyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVByb2plY3RzRmlsZVBhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdFNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2VkaXRTZWxlY3RlZFByb2plY3RzUGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3JlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImp1bGlhTW9ub1N0eWxlIiwiY29tbW9uRm9udE1peGluIiwianVsaWFNb25vRm9udE1peGluIiwiZWRpdG9yU2NoZW1lIiwiY29tbW9uU2NoZW1lIiwiY29uc29sZVNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIiwiTG9nb1NWRyIsIk1hcmtlclNWRyIsIkZpbGVOYW1lU1ZHIiwiVXBUb2dnbGVTVkciLCJEb3duVG9nZ2xlU1ZHIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkV4cGFuZGVkVGl0bGVTVkciLCJDb2xsYXBzZWRUaXRsZVNWRyIsIkpvaW5TZXNzaW9uVG9vbGJhclNWRyIsIlN5bmNocm9uaXNlVG9vbGJhclNWRyIsIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJDbGVhckNvbnNvbGVUb29sYmFyU1ZHIiwiQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkciLCJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJQYXN0ZVNlc3Npb25LZXlUb29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyIsIkVkaXRTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkciLCJSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsT0FBTztlQUFQQSxnQkFBTzs7SUFFUEMsV0FBVztlQUFYQSxlQUFXOztJQUNYQyxjQUFjO2VBQWRBLGtCQUFjOztJQUNkQyxlQUFlO2VBQWZBLGVBQWU7O0lBQ2ZDLGtCQUFrQjtlQUFsQkEsbUJBQWtCOztJQUVsQkMsWUFBWTtlQUFaQSxlQUFZOztJQUNaQyxZQUFZO2VBQVpBLGdCQUFZOztJQUNaQyxhQUFhO2VBQWJBLGdCQUFhOztJQUNiQyxtQkFBbUI7ZUFBbkJBLHNCQUFtQjs7SUFDbkJDLG1CQUFtQjtlQUFuQkEsc0JBQW1COztJQUVuQkMsT0FBTztlQUFQQSxhQUFPOztJQUNQQyxTQUFTO2VBQVRBLGVBQVM7O0lBQ1RDLFdBQVc7ZUFBWEEsaUJBQVc7O0lBQ1hDLFdBQVc7ZUFBWEEsV0FBVzs7SUFDWEMsYUFBYTtlQUFiQSxhQUFhOztJQUNiQyxnQkFBZ0I7ZUFBaEJBLHNCQUFnQjs7SUFDaEJDLGdCQUFnQjtlQUFoQkEsaUJBQWdCOztJQUNoQkMsaUJBQWlCO2VBQWpCQSxrQkFBaUI7O0lBQ2pCQyxxQkFBcUI7ZUFBckJBLG9CQUFxQjs7SUFDckJDLHFCQUFxQjtlQUFyQkEsb0JBQXFCOztJQUNyQkMsc0JBQXNCO2VBQXRCQSxxQkFBc0I7O0lBQ3RCQyxzQkFBc0I7ZUFBdEJBLHFCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsc0JBQXVCOztJQUN2QkMsd0JBQXdCO2VBQXhCQSxhQUF3Qjs7SUFDeEJDLHlCQUF5QjtlQUF6QkEsd0JBQXlCOztJQUN6QkMsMEJBQTBCO2VBQTFCQSxlQUEwQjs7SUFDMUJDLDhCQUE4QjtlQUE5QkEsNkJBQThCOztJQUM5QkMsZ0NBQWdDO2VBQWhDQSwrQkFBZ0M7O0lBQ2hDQyxrQ0FBa0M7ZUFBbENBLGlDQUFrQzs7SUFDbENDLG1DQUFtQztlQUFuQ0Esa0NBQW1DOztJQUNuQ0MscUNBQXFDO2VBQXJDQSxvQ0FBcUM7Ozs0REFqQ3RCOzJEQUVJOzhEQUNHOzJEQUNDOytEQUNHOzJEQUVOOzREQUNBOzREQUNDO2tFQUNNO2tFQUNBO3lEQUVaOzJEQUNFOzZEQUNFO3VEQUNBO3lEQUNFO2tFQUNHOzZEQUNBOzhEQUNDO2dFQUNJO2dFQUNBO2lFQUNDO2lFQUNBO2tFQUNDO3lEQUNDO29FQUNDOzJEQUNDO3lFQUNJOzJFQUNFOzZFQUNFOzhFQUNDO2dGQUNFIn0=