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
    EditEntrySVG: function() {
        return _editEntry.default;
    },
    DownTitleSVG: function() {
        return _down.default;
    },
    CreateFileSVG: function() {
        return _createFile.default;
    },
    JoinSessionSVG: function() {
        return _joinSession.default;
    },
    LeaveSessionSVG: function() {
        return _leaveSession.default;
    },
    ClearConsoleSVG: function() {
        return _clearConsole.default;
    },
    DirectoryNameSVG: function() {
        return _directoryName.default;
    },
    CreateSessionSVG: function() {
        return _createSession.default;
    },
    OpenRubbishBinSVG: function() {
        return _open.default;
    },
    CreateDirectorySVG: function() {
        return _createDirectory.default;
    },
    ClosedRubbishBinSVG: function() {
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
var _editEntry = /*#__PURE__*/ _interopRequireDefault(require("./svg/editEntry"));
var _down = /*#__PURE__*/ _interopRequireDefault(require("./svg/title/down"));
var _createFile = /*#__PURE__*/ _interopRequireDefault(require("./svg/createFile"));
var _joinSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/joinSession"));
var _leaveSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/leaveSession"));
var _clearConsole = /*#__PURE__*/ _interopRequireDefault(require("./svg/clearConsole"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./svg/directoryName"));
var _createSession = /*#__PURE__*/ _interopRequireDefault(require("./svg/createSession"));
var _open = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/open"));
var _createDirectory = /*#__PURE__*/ _interopRequireDefault(require("./svg/createDirectory"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/closed"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xpZW50U2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NsaWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlZGl0b3JTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvZWRpdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdlbGNvbWVTY3JlZW5TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvd2VsY29tZVNjcmVlblwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ29TVkcgfSBmcm9tIFwiLi9zdmcvbG9nb1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXJrZXJTVkcgfSBmcm9tIFwiLi9zdmcvbWFya2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVwVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvZmlsZU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdEVudHJ5U1ZHIH0gZnJvbSBcIi4vc3ZnL2VkaXRFbnRyeVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3duVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvZG93blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVGaWxlU1ZHIH0gZnJvbSBcIi4vc3ZnL2NyZWF0ZUZpbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSm9pblNlc3Npb25TVkcgfSBmcm9tIFwiLi9zdmcvam9pblNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhdmVTZXNzaW9uU1ZHIH0gZnJvbSBcIi4vc3ZnL2xlYXZlU2Vzc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDbGVhckNvbnNvbGVTVkcgfSBmcm9tIFwiLi9zdmcvY2xlYXJDb25zb2xlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdG9yeU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvZGlyZWN0b3J5TmFtZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVTZXNzaW9uU1ZHIH0gZnJvbSBcIi4vc3ZnL2NyZWF0ZVNlc3Npb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlblJ1YmJpc2hCaW5TVkcgfSBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZURpcmVjdG9yeVNWRyB9IGZyb20gXCIuL3N2Zy9jcmVhdGVEaXJlY3RvcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblNWRyB9IGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImNsaWVudFNjaGVtZSIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIiwiTG9nb1NWRyIsIk1hcmtlclNWRyIsIlVwVGl0bGVTVkciLCJGaWxlTmFtZVNWRyIsIkVkaXRFbnRyeVNWRyIsIkRvd25UaXRsZVNWRyIsIkNyZWF0ZUZpbGVTVkciLCJKb2luU2Vzc2lvblNWRyIsIkxlYXZlU2Vzc2lvblNWRyIsIkNsZWFyQ29uc29sZVNWRyIsIkRpcmVjdG9yeU5hbWVTVkciLCJDcmVhdGVTZXNzaW9uU1ZHIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDcmVhdGVEaXJlY3RvcnlTVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRU9BLE9BQU87ZUFBUEEsUUFBTyxRQUFBOztJQUNQQyxXQUFXO2VBQVhBLE9BQVcsUUFBQTs7SUFDWEMsYUFBYTtlQUFiQSxTQUFhLFFBQUE7O0lBQ2JDLGVBQWU7ZUFBZkEsT0FBZSxRQUFBOztJQUNmQyxpQkFBaUI7ZUFBakJBLFVBQWlCLFFBQUE7O0lBQ2pCQyxrQkFBa0I7ZUFBbEJBLFVBQWtCLFFBQUE7O0lBRWxCQyxZQUFZO2VBQVpBLE9BQVksUUFBQTs7SUFDWkMsWUFBWTtlQUFaQSxPQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsUUFBWSxRQUFBOztJQUNaQyxtQkFBbUI7ZUFBbkJBLGNBQW1CLFFBQUE7O0lBQ25CQyxtQkFBbUI7ZUFBbkJBLGNBQW1CLFFBQUE7O0lBRW5CQyxPQUFPO2VBQVBBLEtBQU8sUUFBQTs7SUFDUEMsU0FBUztlQUFUQSxPQUFTLFFBQUE7O0lBQ1RDLFVBQVU7ZUFBVkEsR0FBVSxRQUFBOztJQUNWQyxXQUFXO2VBQVhBLFNBQVcsUUFBQTs7SUFDWEMsWUFBWTtlQUFaQSxVQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsS0FBWSxRQUFBOztJQUNaQyxhQUFhO2VBQWJBLFdBQWEsUUFBQTs7SUFDYkMsY0FBYztlQUFkQSxZQUFjLFFBQUE7O0lBQ2RDLGVBQWU7ZUFBZkEsYUFBZSxRQUFBOztJQUNmQyxlQUFlO2VBQWZBLGFBQWUsUUFBQTs7SUFDZkMsZ0JBQWdCO2VBQWhCQSxjQUFnQixRQUFBOztJQUNoQkMsZ0JBQWdCO2VBQWhCQSxjQUFnQixRQUFBOztJQUNoQkMsaUJBQWlCO2VBQWpCQSxLQUFpQixRQUFBOztJQUNqQkMsa0JBQWtCO2VBQWxCQSxnQkFBa0IsUUFBQTs7SUFDbEJDLG1CQUFtQjtlQUFuQkEsT0FBbUIsUUFBQTs7OzREQTNCSixXQUFXOzJEQUNQLGdCQUFnQjs2REFDZCxrQkFBa0I7MkRBQ2hCLHFCQUFxQjs4REFDbkIsdUJBQXVCOzhEQUN0Qix3QkFBd0I7MkRBRTlCLGlCQUFpQjsyREFDakIsaUJBQWlCOzREQUNqQixpQkFBaUI7a0VBQ1Ysd0JBQXdCO2tFQUN4Qix3QkFBd0I7eURBRXBDLFlBQVk7MkRBQ1YsY0FBYzt1REFDYixnQkFBZ0I7NkRBQ2YsZ0JBQWdCOzhEQUNmLGlCQUFpQjt5REFDakIsa0JBQWtCOytEQUNqQixrQkFBa0I7Z0VBQ2pCLG1CQUFtQjtpRUFDbEIsb0JBQW9CO2lFQUNwQixvQkFBb0I7a0VBQ25CLHFCQUFxQjtrRUFDckIscUJBQXFCO3lEQUNwQix1QkFBdUI7b0VBQ3RCLHVCQUF1QjsyREFDdEIseUJBQXlCIn0=