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
    defaultSyntaxScheme: function() {
        return _default.default;
    },
    florenceSyntaxScheme: function() {
        return _florence.default;
    },
    metaJSONSyntaxScheme: function() {
        return _metaJSON.default;
    },
    plainTextSyntaxScheme: function() {
        return _plainText.default;
    },
    customGrammarBNFSyntaxScheme: function() {
        return _customGrammarBNF.default;
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
var _default = /*#__PURE__*/ _interop_require_default(require("./scheme/syntax/default"));
var _florence = /*#__PURE__*/ _interop_require_default(require("./scheme/syntax/florence"));
var _metaJSON = /*#__PURE__*/ _interop_require_default(require("./scheme/syntax/metaJSON"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./scheme/syntax/plainText"));
var _customGrammarBNF = /*#__PURE__*/ _interop_require_default(require("./scheme/syntax/customGrammarBNF"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5bnRheFN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub1N0eWxlIH0gZnJvbSBcIi4vc3R5bGUvanVsaWFNb25vXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGp1bGlhTW9ub0ZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvanVsaWFNb25vXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnNvbGVTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdFN5bnRheFNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbG9yZW5jZVN5bnRheFNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9zeW50YXgvZmxvcmVuY2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWV0YUpTT05TeW50YXhTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvc3ludGF4L21ldGFKU09OXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBsYWluVGV4dFN5bnRheFNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9zeW50YXgvcGxhaW5UZXh0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGN1c3RvbUdyYW1tYXJCTkZTeW50YXhTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvc3ludGF4L2N1c3RvbUdyYW1tYXJCTkZcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2VyU1ZHIH0gZnJvbSBcIi4vc3ZnL21hcmtlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlTmFtZVNWRyB9IGZyb20gXCIuL3N2Zy9uYW1lL2ZpbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXBUb2dnbGVTVkcgfSBmcm9tIFwiLi9zdmcvdG9nZ2xlL3VwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvbGRMaW5lU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZvbGQvbGluZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3duVG9nZ2xlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RvZ2dsZS9kb3duXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlZEZvbGRTVkcgfSBmcm9tIFwiLi9zdmcvZm9sZC9jbG9zZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9wT3BlbkZvbGRTVkcgfSBmcm9tIFwiLi9zdmcvZm9sZC90b3BPcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdG9yeU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvbmFtZS9kaXJlY3RvcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhwYW5kZWRUaXRsZVNWRyB9IGZyb20gXCIuL3N2Zy90aXRsZS9leHBhbmRlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2xsYXBzZWRUaXRsZVNWRyB9IGZyb20gXCIuL3N2Zy90aXRsZS9jb2xsYXBzZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm90dG9tT3BlbkZvbGRTVkcgfSBmcm9tIFwiLi9zdmcvZm9sZC9ib3R0b21PcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpvaW5TZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2pvaW5TZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN5bmNocm9uaXNlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3N5bmNocm9uaXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9sZWF2ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NsZWFyQ29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVsZWFzZURpcmVjdG9yeU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvbmFtZS9kaXJlY3RvcnkvcmVsZWFzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9ydWJiaXNoQmluL29wZW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY29weVNlc3Npb25LZXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9leHBvcnRDdXN0b21HcmFtbWFyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVByb2plY3RzRmlsZVBhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdFNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2VkaXRTZWxlY3RlZFByb2plY3RzUGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3JlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImp1bGlhTW9ub1N0eWxlIiwiY29tbW9uRm9udE1peGluIiwianVsaWFNb25vRm9udE1peGluIiwiZWRpdG9yU2NoZW1lIiwiY29tbW9uU2NoZW1lIiwiY29uc29sZVNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIiwiZGVmYXVsdFN5bnRheFNjaGVtZSIsImZsb3JlbmNlU3ludGF4U2NoZW1lIiwibWV0YUpTT05TeW50YXhTY2hlbWUiLCJwbGFpblRleHRTeW50YXhTY2hlbWUiLCJjdXN0b21HcmFtbWFyQk5GU3ludGF4U2NoZW1lIiwiTG9nb1NWRyIsIk1hcmtlclNWRyIsIkZpbGVOYW1lU1ZHIiwiVXBUb2dnbGVTVkciLCJGb2xkTGluZVNWRyIsIkRvd25Ub2dnbGVTVkciLCJDbG9zZWRGb2xkU1ZHIiwiVG9wT3BlbkZvbGRTVkciLCJEaXJlY3RvcnlOYW1lU1ZHIiwiRXhwYW5kZWRUaXRsZVNWRyIsIkNvbGxhcHNlZFRpdGxlU1ZHIiwiQm90dG9tT3BlbkZvbGRTVkciLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJTeW5jaHJvbmlzZVRvb2xiYXJTVkciLCJMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIiwiQ2xlYXJDb25zb2xlVG9vbGJhclNWRyIsIkNyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHIiwiUmVsZWFzZURpcmVjdG9yeU5hbWVTVkciLCJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkciLCJDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyIsIkV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHIiwiRWRpdFNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyIsIlJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHIiwiQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRW9CQSxPQUFPO2VBQVBBOztJQUVBQyxXQUFXO2VBQVhBOztJQUNBQyxjQUFjO2VBQWRBOztJQUNBQyxlQUFlO2VBQWZBOztJQUNBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxZQUFZO2VBQVpBOztJQUNBQyxZQUFZO2VBQVpBOztJQUNBQyxhQUFhO2VBQWJBOztJQUNBQyxtQkFBbUI7ZUFBbkJBOztJQUNBQyxtQkFBbUI7ZUFBbkJBOztJQUVBQyxtQkFBbUI7ZUFBbkJBOztJQUNBQyxvQkFBb0I7ZUFBcEJBOztJQUNBQyxvQkFBb0I7ZUFBcEJBOztJQUNBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyxPQUFPO2VBQVBBOztJQUNBQyxTQUFTO2VBQVRBOztJQUNBQyxXQUFXO2VBQVhBOztJQUNBQyxXQUFXO2VBQVhBOztJQUNBQyxXQUFXO2VBQVhBOztJQUNBQyxhQUFhO2VBQWJBOztJQUNBQyxhQUFhO2VBQWJBOztJQUNBQyxjQUFjO2VBQWRBOztJQUNBQyxnQkFBZ0I7ZUFBaEJBOztJQUNBQyxnQkFBZ0I7ZUFBaEJBOztJQUNBQyxpQkFBaUI7ZUFBakJBOztJQUNBQyxpQkFBaUI7ZUFBakJBOztJQUNBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyxzQkFBc0I7ZUFBdEJBOztJQUNBQyxzQkFBc0I7ZUFBdEJBOztJQUNBQyx1QkFBdUI7ZUFBdkJBOztJQUNBQyx1QkFBdUI7ZUFBdkJBOztJQUNBQyx3QkFBd0I7ZUFBeEJBOztJQUNBQyx3QkFBd0I7ZUFBeEJBOztJQUNBQywwQkFBMEI7ZUFBMUJBOztJQUNBQyw4QkFBOEI7ZUFBOUJBOztJQUNBQyxnQ0FBZ0M7ZUFBaENBOztJQUNBQyxrQ0FBa0M7ZUFBbENBOztJQUNBQyxtQ0FBbUM7ZUFBbkNBOztJQUNBQyxxQ0FBcUM7ZUFBckNBOzs7OERBNUNlOzZEQUVJO2dFQUNHOzZEQUNDO2lFQUNHOzZEQUVOOzhEQUNBOzhEQUNDO29FQUNNO29FQUNBOzhEQUVBOytEQUNDOytEQUNBO2dFQUNDO3VFQUNPOzJEQUVyQjs2REFDRTsyREFDRTt5REFDQTsyREFDQTsyREFDRTs2REFDQTs4REFDQztnRUFDRTsrREFDQTtnRUFDQztpRUFDQTtrRUFDSTtrRUFDQTttRUFDQzttRUFDQTtvRUFDQzs4REFDQTsyREFDQztxRUFDQTs4REFDRTsyRUFDSTs2RUFDRTsrRUFDRTtnRkFDQztrRkFDRSJ9