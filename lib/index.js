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
    firaCodeStyle: function() {
        return _firaCode.default;
    },
    commonFontMixin: function() {
        return _common.default;
    },
    firaCodeFontMixin: function() {
        return _firaCode1.default;
    },
    monospaceFontMixin: function() {
        return _monospace.default;
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
var _firaCode = /*#__PURE__*/ _interopRequireDefault(require("./style/firaCode"));
var _common = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/common"));
var _firaCode1 = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/firaCode"));
var _monospace = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/monospace"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5bnRheFN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcmFDb2RlU3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25Gb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2NvbW1vblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbW9ub3NwYWNlRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9tb25vc3BhY2VcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBlZGl0b3JTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvZWRpdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29uc29sZVNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jb25zb2xlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXR0eVByaW50ZXJTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3ZWxjb21lU2NyZWVuU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3dlbGNvbWVTY3JlZW5cIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2VyU1ZHIH0gZnJvbSBcIi4vc3ZnL21hcmtlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlTmFtZVNWRyB9IGZyb20gXCIuL3N2Zy9maWxlTmFtZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVcFRvZ2dsZVNWRyB9IGZyb20gXCIuL3N2Zy90b2dnbGUvdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG93blRvZ2dsZVNWRyB9IGZyb20gXCIuL3N2Zy90b2dnbGUvZG93blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXJlY3RvcnlOYW1lU1ZHIH0gZnJvbSBcIi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhwYW5kZWRUaXRsZVNWRyB9IGZyb20gXCIuL3N2Zy90aXRsZS9leHBhbmRlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xsYXBzZWRUaXRsZVNWRyB9IGZyb20gXCIuL3N2Zy90aXRsZS9jb2xsYXBzZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSm9pblNlc3Npb25Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvam9pblNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3luY2hyb25pc2VUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvc3luY2hyb25pc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhdmVTZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2xlYXZlU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbGVhckNvbnNvbGVUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY2xlYXJDb25zb2xlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY3JlYXRlU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9ydWJiaXNoQmluL29wZW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9leHBvcnRDdXN0b21HcmFtbWFyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVByb2plY3RzRmlsZVBhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdFNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2VkaXRTZWxlY3RlZFByb2plY3RzUGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3JlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsImNvbnNvbGVTY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSIsIkxvZ29TVkciLCJNYXJrZXJTVkciLCJGaWxlTmFtZVNWRyIsIlVwVG9nZ2xlU1ZHIiwiRG93blRvZ2dsZVNWRyIsIkRpcmVjdG9yeU5hbWVTVkciLCJFeHBhbmRlZFRpdGxlU1ZHIiwiQ29sbGFwc2VkVGl0bGVTVkciLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJTeW5jaHJvbmlzZVRvb2xiYXJTVkciLCJMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIiwiQ2xlYXJDb25zb2xlVG9vbGJhclNWRyIsIkNyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHIiwiT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyIsIkVkaXRTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkciLCJSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsT0FBTztlQUFQQSxnQkFBTzs7SUFFUEMsV0FBVztlQUFYQSxlQUFXOztJQUNYQyxhQUFhO2VBQWJBLGlCQUFhOztJQUNiQyxlQUFlO2VBQWZBLGVBQWU7O0lBQ2ZDLGlCQUFpQjtlQUFqQkEsa0JBQWlCOztJQUNqQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBRWxCQyxZQUFZO2VBQVpBLGVBQVk7O0lBQ1pDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBQ1pDLGFBQWE7ZUFBYkEsZ0JBQWE7O0lBQ2JDLG1CQUFtQjtlQUFuQkEsc0JBQW1COztJQUNuQkMsbUJBQW1CO2VBQW5CQSxzQkFBbUI7O0lBRW5CQyxPQUFPO2VBQVBBLGFBQU87O0lBQ1BDLFNBQVM7ZUFBVEEsZUFBUzs7SUFDVEMsV0FBVztlQUFYQSxpQkFBVzs7SUFDWEMsV0FBVztlQUFYQSxXQUFXOztJQUNYQyxhQUFhO2VBQWJBLGFBQWE7O0lBQ2JDLGdCQUFnQjtlQUFoQkEsc0JBQWdCOztJQUNoQkMsZ0JBQWdCO2VBQWhCQSxpQkFBZ0I7O0lBQ2hCQyxpQkFBaUI7ZUFBakJBLGtCQUFpQjs7SUFDakJDLHFCQUFxQjtlQUFyQkEsb0JBQXFCOztJQUNyQkMscUJBQXFCO2VBQXJCQSxvQkFBcUI7O0lBQ3JCQyxzQkFBc0I7ZUFBdEJBLHFCQUFzQjs7SUFDdEJDLHNCQUFzQjtlQUF0QkEscUJBQXNCOztJQUN0QkMsdUJBQXVCO2VBQXZCQSxzQkFBdUI7O0lBQ3ZCQyx3QkFBd0I7ZUFBeEJBLGFBQXdCOztJQUN4QkMsMEJBQTBCO2VBQTFCQSxlQUEwQjs7SUFDMUJDLDhCQUE4QjtlQUE5QkEsNkJBQThCOztJQUM5QkMsZ0NBQWdDO2VBQWhDQSwrQkFBZ0M7O0lBQ2hDQyxrQ0FBa0M7ZUFBbENBLGlDQUFrQzs7SUFDbENDLG1DQUFtQztlQUFuQ0Esa0NBQW1DOztJQUNuQ0MscUNBQXFDO2VBQXJDQSxvQ0FBcUM7Ozs0REFqQ3RCOzJEQUVJOzZEQUNFOzJEQUNFOzhEQUNFOzhEQUNDOzJEQUVOOzREQUNBOzREQUNDO2tFQUNNO2tFQUNBO3lEQUVaOzJEQUNFOzZEQUNFO3VEQUNBO3lEQUNFO2tFQUNHOzZEQUNBOzhEQUNDO2dFQUNJO2dFQUNBO2lFQUNDO2lFQUNBO2tFQUNDO3lEQUNDOzJEQUNFO3lFQUNJOzJFQUNFOzZFQUNFOzhFQUNDO2dGQUNFIn0=