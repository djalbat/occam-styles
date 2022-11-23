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
    clientScheme: function() {
        return _client.default;
    },
    editorScheme: function() {
        return _editor.default;
    },
    commonScheme: function() {
        return _common1.default;
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
    UpTitleSVG: function() {
        return _up.default;
    },
    FileNameSVG: function() {
        return _fileName.default;
    },
    DownTitleSVG: function() {
        return _down.default;
    },
    DirectoryNameSVG: function() {
        return _directoryName.default;
    },
    ExportToolbarSVG: function() {
        return _export1.default;
    },
    RefreshToolbarSVG: function() {
        return _refresh.default;
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
    }
});
var _colours = /*#__PURE__*/ _interopRequireDefault(require("./colours"));
var _syntax = /*#__PURE__*/ _interopRequireDefault(require("./style/syntax"));
var _firaCode = /*#__PURE__*/ _interopRequireDefault(require("./style/firaCode"));
var _common = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/common"));
var _firaCode1 = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/firaCode"));
var _monospace = /*#__PURE__*/ _interopRequireDefault(require("./mixin/font/monospace"));
var _client = /*#__PURE__*/ _interopRequireDefault(require("./scheme/client"));
var _editor = /*#__PURE__*/ _interopRequireDefault(require("./scheme/editor"));
var _common1 = /*#__PURE__*/ _interopRequireDefault(require("./scheme/common"));
var _prettyPrinter = /*#__PURE__*/ _interopRequireDefault(require("./scheme/prettyPrinter"));
var _welcomeScreen = /*#__PURE__*/ _interopRequireDefault(require("./scheme/welcomeScreen"));
var _logo = /*#__PURE__*/ _interopRequireDefault(require("./svg/logo"));
var _marker = /*#__PURE__*/ _interopRequireDefault(require("./svg/marker"));
var _up = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/up"));
var _fileName = /*#__PURE__*/ _interopRequireDefault(require("./svg/fileName"));
var _down = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/down"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./svg/directoryName"));
var _export1 = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/export"));
var _refresh = /*#__PURE__*/ _interopRequireDefault(require("./svg/toolbar/refresh"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xpZW50U2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NsaWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlZGl0b3JTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvZWRpdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdlbGNvbWVTY3JlZW5TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvd2VsY29tZVNjcmVlblwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ29TVkcgfSBmcm9tIFwiLi9zdmcvbG9nb1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXJrZXJTVkcgfSBmcm9tIFwiLi9zdmcvbWFya2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVwVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvZmlsZU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG93blRpdGxlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RpdGxlL2Rvd25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGlyZWN0b3J5TmFtZVNWRyB9IGZyb20gXCIuL3N2Zy9kaXJlY3RvcnlOYW1lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV4cG9ydFRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9leHBvcnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVmcmVzaFRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9yZWZyZXNoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRFbnRyeVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9lZGl0RW50cnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlRmlsZVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jcmVhdGVGaWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEpvaW5TZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2pvaW5TZXNzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN5bmNocm9uaXNlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL3N5bmNocm9uaXNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9sZWF2ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NsZWFyQ29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyB9IGZyb20gXCIuL3N2Zy90b29sYmFyL2NyZWF0ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIH0gZnJvbSBcIi4vc3ZnL3Rvb2xiYXIvcnViYmlzaEJpbi9vcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZURpcmVjdG9yeVRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9jcmVhdGVEaXJlY3RvcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcgfSBmcm9tIFwiLi9zdmcvdG9vbGJhci9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImNsaWVudFNjaGVtZSIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIiwiTG9nb1NWRyIsIk1hcmtlclNWRyIsIlVwVGl0bGVTVkciLCJGaWxlTmFtZVNWRyIsIkRvd25UaXRsZVNWRyIsIkRpcmVjdG9yeU5hbWVTVkciLCJFeHBvcnRUb29sYmFyU1ZHIiwiUmVmcmVzaFRvb2xiYXJTVkciLCJFZGl0RW50cnlUb29sYmFyU1ZHIiwiQ3JlYXRlRmlsZVRvb2xiYXJTVkciLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJTeW5jaHJvbmlzZVRvb2xiYXJTVkciLCJMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIiwiQ2xlYXJDb25zb2xlVG9vbGJhclNWRyIsIkNyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHIiwiT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiQ3JlYXRlRGlyZWN0b3J5VG9vbGJhclNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFb0JBLE9BQU87ZUFBUEEsZ0JBQU87O0lBQ1BDLFdBQVc7ZUFBWEEsZUFBVzs7SUFDWEMsYUFBYTtlQUFiQSxpQkFBYTs7SUFDYkMsZUFBZTtlQUFmQSxlQUFlOztJQUNmQyxpQkFBaUI7ZUFBakJBLGtCQUFpQjs7SUFDakJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUVsQkMsWUFBWTtlQUFaQSxlQUFZOztJQUNaQyxZQUFZO2VBQVpBLGVBQVk7O0lBQ1pDLFlBQVk7ZUFBWkEsZ0JBQVk7O0lBQ1pDLG1CQUFtQjtlQUFuQkEsc0JBQW1COztJQUNuQkMsbUJBQW1CO2VBQW5CQSxzQkFBbUI7O0lBRW5CQyxPQUFPO2VBQVBBLGFBQU87O0lBQ1BDLFNBQVM7ZUFBVEEsZUFBUzs7SUFDVEMsVUFBVTtlQUFWQSxXQUFVOztJQUNWQyxXQUFXO2VBQVhBLGlCQUFXOztJQUNYQyxZQUFZO2VBQVpBLGFBQVk7O0lBQ1pDLGdCQUFnQjtlQUFoQkEsc0JBQWdCOztJQUNoQkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBQ2hCQyxpQkFBaUI7ZUFBakJBLGdCQUFpQjs7SUFDakJDLG1CQUFtQjtlQUFuQkEsa0JBQW1COztJQUNuQkMsb0JBQW9CO2VBQXBCQSxtQkFBb0I7O0lBQ3BCQyxxQkFBcUI7ZUFBckJBLG9CQUFxQjs7SUFDckJDLHFCQUFxQjtlQUFyQkEsb0JBQXFCOztJQUNyQkMsc0JBQXNCO2VBQXRCQSxxQkFBc0I7O0lBQ3RCQyxzQkFBc0I7ZUFBdEJBLHFCQUFzQjs7SUFDdEJDLHVCQUF1QjtlQUF2QkEsc0JBQXVCOztJQUN2QkMsd0JBQXdCO2VBQXhCQSxhQUF3Qjs7SUFDeEJDLHlCQUF5QjtlQUF6QkEsd0JBQXlCOztJQUN6QkMsMEJBQTBCO2VBQTFCQSxlQUEwQjs7OzREQTlCWDsyREFDSTs2REFDRTsyREFDRTs4REFDRTs4REFDQzsyREFFTjsyREFDQTs0REFDQTtrRUFDTztrRUFDQTt5REFFWjsyREFDRTt1REFDQzs2REFDQzt5REFDQztrRUFDSTs0REFDQTs0REFDQzs4REFDRTsrREFDQztnRUFDQztnRUFDQTtpRUFDQztpRUFDQTtrRUFDQzt5REFDQztvRUFDQzsyREFDQyJ9