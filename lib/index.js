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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5bnRheFN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub1N0eWxlIH0gZnJvbSBcIi4vc3R5bGUvanVsaWFNb25vXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub0ZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvanVsaWFNb25vXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnNvbGVTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb1NWRyB9IGZyb20gXCIuL3N2Zy9sb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtlclNWRyB9IGZyb20gXCIuL3N2Zy9tYXJrZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvbmFtZS9maWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVwVG9nZ2xlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RvZ2dsZS91cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb2xkTGluZVNWRyB9IGZyb20gXCIuL3N2Zy9mb2xkL2xpbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG93blRvZ2dsZVNWRyB9IGZyb20gXCIuL3N2Zy90b2dnbGUvZG93blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbG9zZWRGb2xkU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvY2xvc2VkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvcE9wZW5Gb2xkU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvdG9wT3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXJlY3RvcnlOYW1lU1ZHIH0gZnJvbSBcIi4vc3ZnL25hbWUvZGlyZWN0b3J5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGFuZGVkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvZXhwYW5kZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sbGFwc2VkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvY29sbGFwc2VkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvdHRvbU9wZW5Gb2xkU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvYm90dG9tT3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKb2luU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9qb2luU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTeW5jaHJvbmlzZVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9zeW5jaHJvbmlzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvbGVhdmVTZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsZWFyQ29uc29sZVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jbGVhckNvbnNvbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jcmVhdGVTZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbGVhc2VEaXJlY3RvcnlOYW1lU1ZHIH0gZnJvbSBcIi4vc3ZnL25hbWUvZGlyZWN0b3J5L3JlbGVhc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvcnViYmlzaEJpbi9vcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvcHlTZXNzaW9uS2V5VG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NvcHlTZXNzaW9uS2V5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvZXhwb3J0Q3VzdG9tR3JhbW1hcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlUHJvamVjdHNGaWxlUGF0aFRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jcmVhdGVQcm9qZWN0c0ZpbGVQYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9lZGl0U2VsZWN0ZWRQcm9qZWN0c1BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9yZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jcmVhdGVQcm9qZWN0c0RpcmVjdG9yeVBhdGhcIjtcbiJdLCJuYW1lcyI6WyJjb2xvdXJzIiwic3ludGF4U3R5bGUiLCJqdWxpYU1vbm9TdHlsZSIsImNvbW1vbkZvbnRNaXhpbiIsImp1bGlhTW9ub0ZvbnRNaXhpbiIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsImNvbnNvbGVTY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSIsIkxvZ29TVkciLCJNYXJrZXJTVkciLCJGaWxlTmFtZVNWRyIsIlVwVG9nZ2xlU1ZHIiwiRm9sZExpbmVTVkciLCJEb3duVG9nZ2xlU1ZHIiwiQ2xvc2VkRm9sZFNWRyIsIlRvcE9wZW5Gb2xkU1ZHIiwiRGlyZWN0b3J5TmFtZVNWRyIsIkV4cGFuZGVkVGl0bGVTVkciLCJDb2xsYXBzZWRUaXRsZVNWRyIsIkJvdHRvbU9wZW5Gb2xkU1ZHIiwiSm9pblNlc3Npb25Ub29sYmFyU1ZHIiwiU3luY2hyb25pc2VUb29sYmFyU1ZHIiwiTGVhdmVTZXNzaW9uVG9vbGJhclNWRyIsIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyIsIlJlbGVhc2VEaXJlY3RvcnlOYW1lU1ZHIiwiT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyIsIkVkaXRTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkciLCJSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsT0FBTztlQUFQQTs7SUFFQUMsV0FBVztlQUFYQTs7SUFDQUMsY0FBYztlQUFkQTs7SUFDQUMsZUFBZTtlQUFmQTs7SUFDQUMsa0JBQWtCO2VBQWxCQTs7SUFFQUMsWUFBWTtlQUFaQTs7SUFDQUMsWUFBWTtlQUFaQTs7SUFDQUMsYUFBYTtlQUFiQTs7SUFDQUMsbUJBQW1CO2VBQW5CQTs7SUFDQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsT0FBTztlQUFQQTs7SUFDQUMsU0FBUztlQUFUQTs7SUFDQUMsV0FBVztlQUFYQTs7SUFDQUMsV0FBVztlQUFYQTs7SUFDQUMsV0FBVztlQUFYQTs7SUFDQUMsYUFBYTtlQUFiQTs7SUFDQUMsYUFBYTtlQUFiQTs7SUFDQUMsY0FBYztlQUFkQTs7SUFDQUMsZ0JBQWdCO2VBQWhCQTs7SUFDQUMsZ0JBQWdCO2VBQWhCQTs7SUFDQUMsaUJBQWlCO2VBQWpCQTs7SUFDQUMsaUJBQWlCO2VBQWpCQTs7SUFDQUMscUJBQXFCO2VBQXJCQTs7SUFDQUMscUJBQXFCO2VBQXJCQTs7SUFDQUMsc0JBQXNCO2VBQXRCQTs7SUFDQUMsc0JBQXNCO2VBQXRCQTs7SUFDQUMsdUJBQXVCO2VBQXZCQTs7SUFDQUMsdUJBQXVCO2VBQXZCQTs7SUFDQUMsd0JBQXdCO2VBQXhCQTs7SUFDQUMsd0JBQXdCO2VBQXhCQTs7SUFDQUMsMEJBQTBCO2VBQTFCQTs7SUFDQUMsOEJBQThCO2VBQTlCQTs7SUFDQUMsZ0NBQWdDO2VBQWhDQTs7SUFDQUMsa0NBQWtDO2VBQWxDQTs7SUFDQUMsbUNBQW1DO2VBQW5DQTs7SUFDQUMscUNBQXFDO2VBQXJDQTs7OzhEQXRDZTs2REFFSTtnRUFDRzs2REFDQztpRUFDRzs2REFFTjs4REFDQTs4REFDQztvRUFDTTtvRUFDQTsyREFFWjs2REFDRTsyREFDRTt5REFDQTsyREFDQTsyREFDRTs2REFDQTs4REFDQztnRUFDRTsrREFDQTtnRUFDQztpRUFDQTtrRUFDSTtrRUFDQTttRUFDQzttRUFDQTtvRUFDQzs4REFDQTsyREFDQztxRUFDQTs4REFDRTsyRUFDSTs2RUFDRTsrRUFDRTtnRkFDQztrRkFDRSJ9