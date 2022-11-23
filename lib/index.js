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
    DirectoryNameSVG: function() {
        return _directoryName.default;
    },
    ExpandedTitleSVG: function() {
        return _expanded.default;
    },
    RefreshToolbarSVG: function() {
        return _refresh.default;
    },
    CollapsedTitleSVG: function() {
        return _collapsed.default;
    },
    EditEntryToolbarSVG: function() {
        return _editEntry.default;
    },
    CreateFileToolbarSVG: function() {
        return _createFile.default;
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
    CreateDirectoryToolbarSVG: function() {
        return _createDirectory.default;
    },
    ClosedRubbishBinToolbarSVG: function() {
        return _closed.default;
    },
    ExportCustomGrammarsToolbarSVG: function() {
        return _exportCustomGrammars.default;
    }
});
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
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./svg/directoryName"));
var _expanded = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/expanded"));
var _refresh = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/refresh"));
var _collapsed = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/collapsed"));
var _editEntry = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/editEntry"));
var _createFile = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/createFile"));
var _joinSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/joinSession"));
var _synchronise = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/synchronise"));
var _leaveSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/leaveSession"));
var _clearConsole = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/clearConsole"));
var _createSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/createSession"));
var _open = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/rubbishBin/open"));
var _createDirectory = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/createDirectory"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/rubbishBin/closed"));
var _exportCustomGrammars = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/exportCustomGrammars"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnNvbGVTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb1NWRyB9IGZyb20gXCIuL3N2Zy9sb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtlclNWRyB9IGZyb20gXCIuL3N2Zy9tYXJrZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvZmlsZU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0b3J5TmFtZVNWRyB9IGZyb20gXCIuL3N2Zy9kaXJlY3RvcnlOYW1lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cGFuZGVkVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvZXhwYW5kZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVmcmVzaFRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9yZWZyZXNoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbGxhcHNlZFRpdGxlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RpdGxlL2NvbGxhcHNlZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0RW50cnlUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvZWRpdEVudHJ5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZUZpbGVUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY3JlYXRlRmlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBKb2luU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9qb2luU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTeW5jaHJvbmlzZVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9zeW5jaHJvbmlzZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvbGVhdmVTZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsZWFyQ29uc29sZVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jbGVhckNvbnNvbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jcmVhdGVTZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9wZW5SdWJiaXNoQmluVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3J1YmJpc2hCaW4vb3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVEaXJlY3RvcnlUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvY3JlYXRlRGlyZWN0b3J5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvcnViYmlzaEJpbi9jbG9zZWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvZXhwb3J0Q3VzdG9tR3JhbW1hcnNcIjtcbiJdLCJuYW1lcyI6WyJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsImNvbnNvbGVTY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSIsIkxvZ29TVkciLCJNYXJrZXJTVkciLCJGaWxlTmFtZVNWRyIsIkRpcmVjdG9yeU5hbWVTVkciLCJFeHBhbmRlZFRpdGxlU1ZHIiwiUmVmcmVzaFRvb2xiYXJTVkciLCJDb2xsYXBzZWRUaXRsZVNWRyIsIkVkaXRFbnRyeVRvb2xiYXJTVkciLCJDcmVhdGVGaWxlVG9vbGJhclNWRyIsIkpvaW5TZXNzaW9uVG9vbGJhclNWRyIsIlN5bmNocm9uaXNlVG9vbGJhclNWRyIsIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJDbGVhckNvbnNvbGVUb29sYmFyU1ZHIiwiQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkciLCJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJDcmVhdGVEaXJlY3RvcnlUb29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUVvQkEsV0FBVztlQUFYQSxlQUFXOztJQUNYQyxhQUFhO2VBQWJBLGlCQUFhOztJQUNiQyxlQUFlO2VBQWZBLGVBQWU7O0lBQ2ZDLGlCQUFpQjtlQUFqQkEsa0JBQWlCOztJQUNqQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBRWxCQyxZQUFZO2VBQVpBLGVBQVk7O0lBQ1pDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBQ1pDLGFBQWE7ZUFBYkEsZ0JBQWE7O0lBQ2JDLG1CQUFtQjtlQUFuQkEsc0JBQW1COztJQUNuQkMsbUJBQW1CO2VBQW5CQSxzQkFBbUI7O0lBRW5CQyxPQUFPO2VBQVBBLGFBQU87O0lBQ1BDLFNBQVM7ZUFBVEEsZUFBUzs7SUFDVEMsV0FBVztlQUFYQSxpQkFBVzs7SUFDWEMsZ0JBQWdCO2VBQWhCQSxzQkFBZ0I7O0lBQ2hCQyxnQkFBZ0I7ZUFBaEJBLGlCQUFnQjs7SUFDaEJDLGlCQUFpQjtlQUFqQkEsZ0JBQWlCOztJQUNqQkMsaUJBQWlCO2VBQWpCQSxrQkFBaUI7O0lBQ2pCQyxtQkFBbUI7ZUFBbkJBLGtCQUFtQjs7SUFDbkJDLG9CQUFvQjtlQUFwQkEsbUJBQW9COztJQUNwQkMscUJBQXFCO2VBQXJCQSxvQkFBcUI7O0lBQ3JCQyxxQkFBcUI7ZUFBckJBLG9CQUFxQjs7SUFDckJDLHNCQUFzQjtlQUF0QkEscUJBQXNCOztJQUN0QkMsc0JBQXNCO2VBQXRCQSxxQkFBc0I7O0lBQ3RCQyx1QkFBdUI7ZUFBdkJBLHNCQUF1Qjs7SUFDdkJDLHdCQUF3QjtlQUF4QkEsYUFBd0I7O0lBQ3hCQyx5QkFBeUI7ZUFBekJBLHdCQUF5Qjs7SUFDekJDLDBCQUEwQjtlQUExQkEsZUFBMEI7O0lBQzFCQyw4QkFBOEI7ZUFBOUJBLDZCQUE4Qjs7OzJEQTdCWDs2REFDRTsyREFDRTs4REFDRTs4REFDQzsyREFFTjs0REFDQTs0REFDQztrRUFDTTtrRUFDQTt5REFFWjsyREFDRTs2REFDRTtrRUFDSzs2REFDQTs0REFDQzs4REFDQTs4REFDRTsrREFDQztnRUFDQztnRUFDQTtpRUFDQztpRUFDQTtrRUFDQzt5REFDQztvRUFDQzsyREFDQzt5RUFDSSJ9