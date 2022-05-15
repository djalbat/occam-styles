"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "colours", {
    enumerable: true,
    get: function() {
        return _colours.default;
    }
});
Object.defineProperty(exports, "LogoSVG", {
    enumerable: true,
    get: function() {
        return _logo.default;
    }
});
Object.defineProperty(exports, "syntaxStyle", {
    enumerable: true,
    get: function() {
        return _syntax.default;
    }
});
Object.defineProperty(exports, "firaCodeStyle", {
    enumerable: true,
    get: function() {
        return _firaCode.default;
    }
});
Object.defineProperty(exports, "commonFontMixin", {
    enumerable: true,
    get: function() {
        return _common.default;
    }
});
Object.defineProperty(exports, "firaCodeFontMixin", {
    enumerable: true,
    get: function() {
        return _firaCode1.default;
    }
});
Object.defineProperty(exports, "monospaceFontMixin", {
    enumerable: true,
    get: function() {
        return _monospace.default;
    }
});
Object.defineProperty(exports, "clientScheme", {
    enumerable: true,
    get: function() {
        return _client.default;
    }
});
Object.defineProperty(exports, "editorScheme", {
    enumerable: true,
    get: function() {
        return _editor.default;
    }
});
Object.defineProperty(exports, "commonScheme", {
    enumerable: true,
    get: function() {
        return _common1.default;
    }
});
Object.defineProperty(exports, "prettyPrinterScheme", {
    enumerable: true,
    get: function() {
        return _prettyPrinter.default;
    }
});
Object.defineProperty(exports, "welcomeScreenScheme", {
    enumerable: true,
    get: function() {
        return _welcomeScreen.default;
    }
});
var _colours = _interopRequireDefault(require("./colours"));
var _logo = _interopRequireDefault(require("./svg/logo"));
var _syntax = _interopRequireDefault(require("./style/syntax"));
var _firaCode = _interopRequireDefault(require("./style/firaCode"));
var _common = _interopRequireDefault(require("./mixin/font/common"));
var _firaCode1 = _interopRequireDefault(require("./mixin/font/firaCode"));
var _monospace = _interopRequireDefault(require("./mixin/font/monospace"));
var _client = _interopRequireDefault(require("./scheme/client"));
var _editor = _interopRequireDefault(require("./scheme/editor"));
var _common1 = _interopRequireDefault(require("./scheme/common"));
var _prettyPrinter = _interopRequireDefault(require("./scheme/prettyPrinter"));
var _welcomeScreen = _interopRequireDefault(require("./scheme/welcomeScreen"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3ludGF4U3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9zeW50YXhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVTdHlsZSB9IGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcmFDb2RlRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9maXJhQ29kZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb25vc3BhY2VGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L21vbm9zcGFjZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGllbnRTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY2xpZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVkaXRvclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9lZGl0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NvbW1vblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG4iXSwibmFtZXMiOlsiY29sb3VycyIsImRlZmF1bHQiLCJMb2dvU1ZHIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIiwiY29tbW9uRm9udE1peGluIiwiZmlyYUNvZGVGb250TWl4aW4iLCJtb25vc3BhY2VGb250TWl4aW4iLCJjbGllbnRTY2hlbWUiLCJlZGl0b3JTY2hlbWUiLCJjb21tb25TY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQUVPQSxTQUFPOzs7d0JBQWxCQyxPQUFPOzs7K0JBQ0lDLFNBQU87OztxQkFBbEJELE9BQU87OzsrQkFDSUUsYUFBVzs7O3VCQUF0QkYsT0FBTzs7OytCQUNJRyxlQUFhOzs7eUJBQXhCSCxPQUFPOzs7K0JBQ0lJLGlCQUFlOzs7dUJBQTFCSixPQUFPOzs7K0JBQ0lLLG1CQUFpQjs7OzBCQUE1QkwsT0FBTzs7OytCQUNJTSxvQkFBa0I7OzswQkFBN0JOLE9BQU87OzsrQkFDSU8sY0FBWTs7O3VCQUF2QlAsT0FBTzs7OytCQUNJUSxjQUFZOzs7dUJBQXZCUixPQUFPOzs7K0JBQ0lTLGNBQVk7Ozt3QkFBdkJULE9BQU87OzsrQkFDSVUscUJBQW1COzs7OEJBQTlCVixPQUFPOzs7K0JBQ0lXLHFCQUFtQjs7OzhCQUE5QlgsT0FBTzs7OzhDQVhtQixXQUFXOzJDQUNYLFlBQVk7NkNBQ1IsZ0JBQWdCOytDQUNkLGtCQUFrQjs2Q0FDaEIscUJBQXFCO2dEQUNuQix1QkFBdUI7Z0RBQ3RCLHdCQUF3Qjs2Q0FDOUIsaUJBQWlCOzZDQUNqQixpQkFBaUI7OENBQ2pCLGlCQUFpQjtvREFDVix3QkFBd0I7b0RBQ3hCLHdCQUF3QiJ9