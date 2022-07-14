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
    LogoSVG: function() {
        return _logo.default;
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
    }
});
var _colours = /*#__PURE__*/ _interopRequireDefault(require("./colours"));
var _logo = /*#__PURE__*/ _interopRequireDefault(require("./svg/logo"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3ludGF4U3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9zeW50YXhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVTdHlsZSB9IGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcmFDb2RlRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9maXJhQ29kZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb25vc3BhY2VGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L21vbm9zcGFjZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGllbnRTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY2xpZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVkaXRvclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9lZGl0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NvbW1vblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG4iXSwibmFtZXMiOlsiY29sb3VycyIsIkxvZ29TVkciLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImNsaWVudFNjaGVtZSIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRU9BLE9BQU87ZUFBUEEsUUFBTyxRQUFBOztJQUNQQyxPQUFPO2VBQVBBLEtBQU8sUUFBQTs7SUFDUEMsV0FBVztlQUFYQSxPQUFXLFFBQUE7O0lBQ1hDLGFBQWE7ZUFBYkEsU0FBYSxRQUFBOztJQUNiQyxlQUFlO2VBQWZBLE9BQWUsUUFBQTs7SUFDZkMsaUJBQWlCO2VBQWpCQSxVQUFpQixRQUFBOztJQUNqQkMsa0JBQWtCO2VBQWxCQSxVQUFrQixRQUFBOztJQUNsQkMsWUFBWTtlQUFaQSxPQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsT0FBWSxRQUFBOztJQUNaQyxZQUFZO2VBQVpBLFFBQVksUUFBQTs7SUFDWkMsbUJBQW1CO2VBQW5CQSxjQUFtQixRQUFBOztJQUNuQkMsbUJBQW1CO2VBQW5CQSxjQUFtQixRQUFBOzs7NERBWEosV0FBVzt5REFDWCxZQUFZOzJEQUNSLGdCQUFnQjs2REFDZCxrQkFBa0I7MkRBQ2hCLHFCQUFxQjs4REFDbkIsdUJBQXVCOzhEQUN0Qix3QkFBd0I7MkRBQzlCLGlCQUFpQjsyREFDakIsaUJBQWlCOzREQUNqQixpQkFBaUI7a0VBQ1Ysd0JBQXdCO2tFQUN4Qix3QkFBd0IifQ==