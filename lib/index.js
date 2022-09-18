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
    ClearConsoleSVG: function() {
        return _clearConsole.default;
    },
    DirectoryNameSVG: function() {
        return _directoryName.default;
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
var _clearConsole = /*#__PURE__*/ _interopRequireDefault(require("./svg/clearConsole"));
var _directoryName = /*#__PURE__*/ _interopRequireDefault(require("./svg/directoryName"));
var _open = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/open"));
var _createDirectory = /*#__PURE__*/ _interopRequireDefault(require("./svg/createDirectory"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/closed"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xpZW50U2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NsaWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlZGl0b3JTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvZWRpdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdlbGNvbWVTY3JlZW5TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvd2VsY29tZVNjcmVlblwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ29TVkcgfSBmcm9tIFwiLi9zdmcvbG9nb1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXJrZXJTVkcgfSBmcm9tIFwiLi9zdmcvbWFya2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVwVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZU5hbWVTVkcgfSBmcm9tIFwiLi9zdmcvZmlsZU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdEVudHJ5U1ZHIH0gZnJvbSBcIi4vc3ZnL2VkaXRFbnRyeVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEb3duVGl0bGVTVkcgfSBmcm9tIFwiLi9zdmcvdGl0bGUvZG93blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVGaWxlU1ZHIH0gZnJvbSBcIi4vc3ZnL2NyZWF0ZUZpbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJDb25zb2xlU1ZHIH0gZnJvbSBcIi4vc3ZnL2NsZWFyQ29uc29sZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEaXJlY3RvcnlOYW1lU1ZHIH0gZnJvbSBcIi4vc3ZnL2RpcmVjdG9yeU5hbWVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlblJ1YmJpc2hCaW5TVkcgfSBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZURpcmVjdG9yeVNWRyB9IGZyb20gXCIuL3N2Zy9jcmVhdGVEaXJlY3RvcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblNWRyB9IGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImNsaWVudFNjaGVtZSIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIiwiTG9nb1NWRyIsIk1hcmtlclNWRyIsIlVwVGl0bGVTVkciLCJGaWxlTmFtZVNWRyIsIkVkaXRFbnRyeVNWRyIsIkRvd25UaXRsZVNWRyIsIkNyZWF0ZUZpbGVTVkciLCJDbGVhckNvbnNvbGVTVkciLCJEaXJlY3RvcnlOYW1lU1ZHIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDcmVhdGVEaXJlY3RvcnlTVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRU9BLE9BQU87ZUFBUEEsUUFBTyxRQUFBOztJQUNQQyxXQUFXO2VBQVhBLE9BQVcsUUFBQTs7SUFDWEMsYUFBYTtlQUFiQSxTQUFhLFFBQUE7O0lBQ2JDLGVBQWU7ZUFBZkEsT0FBZSxRQUFBOztJQUNmQyxpQkFBaUI7ZUFBakJBLFVBQWlCLFFBQUE7O0lBQ2pCQyxrQkFBa0I7ZUFBbEJBLFVBQWtCLFFBQUE7O0lBRWxCQyxZQUFZO2VBQVpBLE9BQVksUUFBQTs7SUFDWkMsWUFBWTtlQUFaQSxPQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsUUFBWSxRQUFBOztJQUNaQyxtQkFBbUI7ZUFBbkJBLGNBQW1CLFFBQUE7O0lBQ25CQyxtQkFBbUI7ZUFBbkJBLGNBQW1CLFFBQUE7O0lBRW5CQyxPQUFPO2VBQVBBLEtBQU8sUUFBQTs7SUFDUEMsU0FBUztlQUFUQSxPQUFTLFFBQUE7O0lBQ1RDLFVBQVU7ZUFBVkEsR0FBVSxRQUFBOztJQUNWQyxXQUFXO2VBQVhBLFNBQVcsUUFBQTs7SUFDWEMsWUFBWTtlQUFaQSxVQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsS0FBWSxRQUFBOztJQUNaQyxhQUFhO2VBQWJBLFdBQWEsUUFBQTs7SUFDYkMsZUFBZTtlQUFmQSxhQUFlLFFBQUE7O0lBQ2ZDLGdCQUFnQjtlQUFoQkEsY0FBZ0IsUUFBQTs7SUFDaEJDLGlCQUFpQjtlQUFqQkEsS0FBaUIsUUFBQTs7SUFDakJDLGtCQUFrQjtlQUFsQkEsZ0JBQWtCLFFBQUE7O0lBQ2xCQyxtQkFBbUI7ZUFBbkJBLE9BQW1CLFFBQUE7Ozs0REF4QkosV0FBVzsyREFDUCxnQkFBZ0I7NkRBQ2Qsa0JBQWtCOzJEQUNoQixxQkFBcUI7OERBQ25CLHVCQUF1Qjs4REFDdEIsd0JBQXdCOzJEQUU5QixpQkFBaUI7MkRBQ2pCLGlCQUFpQjs0REFDakIsaUJBQWlCO2tFQUNWLHdCQUF3QjtrRUFDeEIsd0JBQXdCO3lEQUVwQyxZQUFZOzJEQUNWLGNBQWM7dURBQ2IsZ0JBQWdCOzZEQUNmLGdCQUFnQjs4REFDZixpQkFBaUI7eURBQ2pCLGtCQUFrQjsrREFDakIsa0JBQWtCO2lFQUNoQixvQkFBb0I7a0VBQ25CLHFCQUFxQjt5REFDcEIsdUJBQXVCO29FQUN0Qix1QkFBdUI7MkRBQ3RCLHlCQUF5QiJ9