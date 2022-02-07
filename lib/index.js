"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3ludGF4U3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9zeW50YXhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVTdHlsZSB9IGZyb20gXCIuL3N0eWxlL2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vbkZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcmFDb2RlRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9maXJhQ29kZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb25vc3BhY2VGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L21vbm9zcGFjZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGllbnRTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY2xpZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVkaXRvclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9lZGl0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NvbW1vblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV0dHlQcmludGVyU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3ByZXR0eVByaW50ZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2VsY29tZVNjcmVlblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS93ZWxjb21lU2NyZWVuXCI7XG4iXSwibmFtZXMiOlsiTG9nb1NWRyIsImRlZmF1bHQiLCJzeW50YXhTdHlsZSIsImZpcmFDb2RlU3R5bGUiLCJjb21tb25Gb250TWl4aW4iLCJmaXJhQ29kZUZvbnRNaXhpbiIsIm1vbm9zcGFjZUZvbnRNaXhpbiIsImNsaWVudFNjaGVtZSIsImVkaXRvclNjaGVtZSIsImNvbW1vblNjaGVtZSIsInByZXR0eVByaW50ZXJTY2hlbWUiLCJ3ZWxjb21lU2NyZWVuU2NoZW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OytCQUVRQSxDQUFPOzs7cUJBQWxCQyxPQUFPOzs7K0JBQ0lDLENBQVc7Ozt1QkFBdEJELE9BQU87OzsrQkFDSUUsQ0FBYTs7O3lCQUF4QkYsT0FBTzs7OytCQUNJRyxDQUFlOzs7dUJBQTFCSCxPQUFPOzs7K0JBQ0lJLENBQWlCOzs7MEJBQTVCSixPQUFPOzs7K0JBQ0lLLENBQWtCOzs7MEJBQTdCTCxPQUFPOzs7K0JBQ0lNLENBQVk7Ozt1QkFBdkJOLE9BQU87OzsrQkFDSU8sQ0FBWTs7O3VCQUF2QlAsT0FBTzs7OytCQUNJUSxDQUFZOzs7d0JBQXZCUixPQUFPOzs7K0JBQ0lTLENBQW1COzs7OEJBQTlCVCxPQUFPOzs7K0JBQ0lVLENBQW1COzs7OEJBQTlCVixPQUFPIn0=