'use strict';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nb1NWRyB9IGZyb20gXCIuL3N2Zy9sb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN5bnRheFN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpcmFDb2RlU3R5bGUgfSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25Gb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2NvbW1vblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbW9ub3NwYWNlRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9tb25vc3BhY2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xpZW50U2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2NsaWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlZGl0b3JTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvZWRpdG9yXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbW1vblNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldHR5UHJpbnRlclNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdlbGNvbWVTY3JlZW5TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvd2VsY29tZVNjcmVlblwiO1xuIl0sIm5hbWVzIjpbIkxvZ29TVkciLCJkZWZhdWx0Iiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIiwiY29tbW9uRm9udE1peGluIiwiZmlyYUNvZGVGb250TWl4aW4iLCJtb25vc3BhY2VGb250TWl4aW4iLCJjbGllbnRTY2hlbWUiLCJlZGl0b3JTY2hlbWUiLCJjb21tb25TY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OzsrQkFFUUEsQ0FBTzs7O3FCQUFsQkMsT0FBTzs7OytCQUNJQyxDQUFXOzs7dUJBQXRCRCxPQUFPOzs7K0JBQ0lFLENBQWE7Ozt5QkFBeEJGLE9BQU87OzsrQkFDSUcsQ0FBZTs7O3VCQUExQkgsT0FBTzs7OytCQUNJSSxDQUFpQjs7OzBCQUE1QkosT0FBTzs7OytCQUNJSyxDQUFrQjs7OzBCQUE3QkwsT0FBTzs7OytCQUNJTSxDQUFZOzs7dUJBQXZCTixPQUFPOzs7K0JBQ0lPLENBQVk7Ozt1QkFBdkJQLE9BQU87OzsrQkFDSVEsQ0FBWTs7O3dCQUF2QlIsT0FBTzs7OytCQUNJUyxDQUFtQjs7OzhCQUE5QlQsT0FBTzs7OytCQUNJVSxDQUFtQjs7OzhCQUE5QlYsT0FBTyJ9