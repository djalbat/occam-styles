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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsaWVudFNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jbGllbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXR0eVByaW50ZXJTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3ZWxjb21lU2NyZWVuU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3dlbGNvbWVTY3JlZW5cIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbiJdLCJuYW1lcyI6WyJjb2xvdXJzIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIiwiY29tbW9uRm9udE1peGluIiwiZmlyYUNvZGVGb250TWl4aW4iLCJtb25vc3BhY2VGb250TWl4aW4iLCJjbGllbnRTY2hlbWUiLCJlZGl0b3JTY2hlbWUiLCJjb21tb25TY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSIsIkxvZ29TVkciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFFT0EsT0FBTztlQUFQQSxRQUFPLFFBQUE7O0lBQ1BDLFdBQVc7ZUFBWEEsT0FBVyxRQUFBOztJQUNYQyxhQUFhO2VBQWJBLFNBQWEsUUFBQTs7SUFDYkMsZUFBZTtlQUFmQSxPQUFlLFFBQUE7O0lBQ2ZDLGlCQUFpQjtlQUFqQkEsVUFBaUIsUUFBQTs7SUFDakJDLGtCQUFrQjtlQUFsQkEsVUFBa0IsUUFBQTs7SUFDbEJDLFlBQVk7ZUFBWkEsT0FBWSxRQUFBOztJQUNaQyxZQUFZO2VBQVpBLE9BQVksUUFBQTs7SUFDWkMsWUFBWTtlQUFaQSxRQUFZLFFBQUE7O0lBQ1pDLG1CQUFtQjtlQUFuQkEsY0FBbUIsUUFBQTs7SUFDbkJDLG1CQUFtQjtlQUFuQkEsY0FBbUIsUUFBQTs7SUFFbkJDLE9BQU87ZUFBUEEsS0FBTyxRQUFBOzs7NERBWlEsV0FBVzsyREFDUCxnQkFBZ0I7NkRBQ2Qsa0JBQWtCOzJEQUNoQixxQkFBcUI7OERBQ25CLHVCQUF1Qjs4REFDdEIsd0JBQXdCOzJEQUM5QixpQkFBaUI7MkRBQ2pCLGlCQUFpQjs0REFDakIsaUJBQWlCO2tFQUNWLHdCQUF3QjtrRUFDeEIsd0JBQXdCO3lEQUVwQyxZQUFZIn0=