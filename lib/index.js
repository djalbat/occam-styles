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
    PenSVG: function() {
        return _pen.default;
    },
    FileSVG: function() {
        return _file.default;
    },
    CloseSVG: function() {
        return _close.default;
    },
    MarkerSVG: function() {
        return _marker.default;
    },
    AddFileSVG: function() {
        return _add.default;
    },
    DirectorySVG: function() {
        return _directory.default;
    },
    AddDirectorySVG: function() {
        return _add1.default;
    },
    DownTriangleSVG: function() {
        return _down.default;
    },
    LeftTriangleSVG: function() {
        return _left.default;
    },
    RightTriangleSVG: function() {
        return _right.default;
    },
    OpenRubbishBinSVG: function() {
        return _open.default;
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
var _pen = /*#__PURE__*/ _interopRequireDefault(require("./svg/pen"));
var _file = /*#__PURE__*/ _interopRequireDefault(require("./svg/file"));
var _close = /*#__PURE__*/ _interopRequireDefault(require("./svg/close"));
var _marker = /*#__PURE__*/ _interopRequireDefault(require("./svg/marker"));
var _add = /*#__PURE__*/ _interopRequireDefault(require("./svg/file/add"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("./svg/directory"));
var _add1 = /*#__PURE__*/ _interopRequireDefault(require("./svg/directory/add"));
var _down = /*#__PURE__*/ _interopRequireDefault(require("./svg/triangle/down"));
var _left = /*#__PURE__*/ _interopRequireDefault(require("./svg/triangle/left"));
var _right = /*#__PURE__*/ _interopRequireDefault(require("./svg/triangle/right"));
var _open = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/open"));
var _closed = /*#__PURE__*/ _interopRequireDefault(require("./svg/rubbishBin/closed"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsaWVudFNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jbGllbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXR0eVByaW50ZXJTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3ZWxjb21lU2NyZWVuU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3dlbGNvbWVTY3JlZW5cIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGVuU1ZHIH0gZnJvbSBcIi4vc3ZnL3BlblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZpbGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VTVkcgfSBmcm9tIFwiLi9zdmcvY2xvc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya2VyU1ZHIH0gZnJvbSBcIi4vc3ZnL21hcmtlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZGRGaWxlU1ZHIH0gZnJvbSBcIi4vc3ZnL2ZpbGUvYWRkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdG9yeVNWRyB9IGZyb20gXCIuL3N2Zy9kaXJlY3RvcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWRkRGlyZWN0b3J5U1ZHIH0gZnJvbSBcIi4vc3ZnL2RpcmVjdG9yeS9hZGRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRG93blRyaWFuZ2xlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RyaWFuZ2xlL2Rvd25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVmdFRyaWFuZ2xlU1ZHIH0gZnJvbSBcIi4vc3ZnL3RyaWFuZ2xlL2xlZnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmlnaHRUcmlhbmdsZVNWRyB9IGZyb20gXCIuL3N2Zy90cmlhbmdsZS9yaWdodFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPcGVuUnViYmlzaEJpblNWRyB9IGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL29wZW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VkUnViYmlzaEJpblNWRyB9IGZyb20gXCIuL3N2Zy9ydWJiaXNoQmluL2Nsb3NlZFwiO1xuIl0sIm5hbWVzIjpbImNvbG91cnMiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImNsaWVudFNjaGVtZSIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIiwiTG9nb1NWRyIsIlBlblNWRyIsIkZpbGVTVkciLCJDbG9zZVNWRyIsIk1hcmtlclNWRyIsIkFkZEZpbGVTVkciLCJEaXJlY3RvcnlTVkciLCJBZGREaXJlY3RvcnlTVkciLCJEb3duVHJpYW5nbGVTVkciLCJMZWZ0VHJpYW5nbGVTVkciLCJSaWdodFRyaWFuZ2xlU1ZHIiwiT3BlblJ1YmJpc2hCaW5TVkciLCJDbG9zZWRSdWJiaXNoQmluU1ZHIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRU9BLE9BQU87ZUFBUEEsUUFBTyxRQUFBOztJQUNQQyxXQUFXO2VBQVhBLE9BQVcsUUFBQTs7SUFDWEMsYUFBYTtlQUFiQSxTQUFhLFFBQUE7O0lBQ2JDLGVBQWU7ZUFBZkEsT0FBZSxRQUFBOztJQUNmQyxpQkFBaUI7ZUFBakJBLFVBQWlCLFFBQUE7O0lBQ2pCQyxrQkFBa0I7ZUFBbEJBLFVBQWtCLFFBQUE7O0lBQ2xCQyxZQUFZO2VBQVpBLE9BQVksUUFBQTs7SUFDWkMsWUFBWTtlQUFaQSxPQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsUUFBWSxRQUFBOztJQUNaQyxtQkFBbUI7ZUFBbkJBLGNBQW1CLFFBQUE7O0lBQ25CQyxtQkFBbUI7ZUFBbkJBLGNBQW1CLFFBQUE7O0lBRW5CQyxPQUFPO2VBQVBBLEtBQU8sUUFBQTs7SUFDUEMsTUFBTTtlQUFOQSxJQUFNLFFBQUE7O0lBQ05DLE9BQU87ZUFBUEEsS0FBTyxRQUFBOztJQUNQQyxRQUFRO2VBQVJBLE1BQVEsUUFBQTs7SUFDUkMsU0FBUztlQUFUQSxPQUFTLFFBQUE7O0lBQ1RDLFVBQVU7ZUFBVkEsSUFBVSxRQUFBOztJQUNWQyxZQUFZO2VBQVpBLFVBQVksUUFBQTs7SUFDWkMsZUFBZTtlQUFmQSxLQUFlLFFBQUE7O0lBQ2ZDLGVBQWU7ZUFBZkEsS0FBZSxRQUFBOztJQUNmQyxlQUFlO2VBQWZBLEtBQWUsUUFBQTs7SUFDZkMsZ0JBQWdCO2VBQWhCQSxNQUFnQixRQUFBOztJQUNoQkMsaUJBQWlCO2VBQWpCQSxLQUFpQixRQUFBOztJQUNqQkMsbUJBQW1CO2VBQW5CQSxPQUFtQixRQUFBOzs7NERBeEJKLFdBQVc7MkRBQ1AsZ0JBQWdCOzZEQUNkLGtCQUFrQjsyREFDaEIscUJBQXFCOzhEQUNuQix1QkFBdUI7OERBQ3RCLHdCQUF3QjsyREFDOUIsaUJBQWlCOzJEQUNqQixpQkFBaUI7NERBQ2pCLGlCQUFpQjtrRUFDVix3QkFBd0I7a0VBQ3hCLHdCQUF3Qjt5REFFcEMsWUFBWTt3REFDYixXQUFXO3lEQUNWLFlBQVk7MERBQ1gsYUFBYTsyREFDWixjQUFjO3dEQUNiLGdCQUFnQjs4REFDZCxpQkFBaUI7eURBQ2QscUJBQXFCO3lEQUNyQixxQkFBcUI7eURBQ3JCLHFCQUFxQjswREFDcEIsc0JBQXNCO3lEQUNyQix1QkFBdUI7MkRBQ3JCLHlCQUF5QiJ9