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
        return _addFile.default;
    },
    DirectorySVG: function() {
        return _directory.default;
    },
    EditEntrySVG: function() {
        return _editEntry.default;
    },
    AddDirectorySVG: function() {
        return _addDirectory.default;
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
var _file = /*#__PURE__*/ _interopRequireDefault(require("./svg/file"));
var _close = /*#__PURE__*/ _interopRequireDefault(require("./svg/close"));
var _marker = /*#__PURE__*/ _interopRequireDefault(require("./svg/marker"));
var _addFile = /*#__PURE__*/ _interopRequireDefault(require("./svg/addFile"));
var _directory = /*#__PURE__*/ _interopRequireDefault(require("./svg/directory"));
var _editEntry = /*#__PURE__*/ _interopRequireDefault(require("./svg/editEntry"));
var _addDirectory = /*#__PURE__*/ _interopRequireDefault(require("./svg/addDirectory"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvdXJzIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzeW50YXhTdHlsZSB9IGZyb20gXCIuL3N0eWxlL3N5bnRheFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaXJhQ29kZVN0eWxlIH0gZnJvbSBcIi4vc3R5bGUvZmlyYUNvZGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tbW9uRm9udE1peGluIH0gZnJvbSBcIi4vbWl4aW4vZm9udC9jb21tb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlyYUNvZGVGb250TWl4aW4gfSBmcm9tIFwiLi9taXhpbi9mb250L2ZpcmFDb2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vbm9zcGFjZUZvbnRNaXhpbiB9IGZyb20gXCIuL21peGluL2ZvbnQvbW9ub3NwYWNlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsaWVudFNjaGVtZSB9IGZyb20gXCIuL3NjaGVtZS9jbGllbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWRpdG9yU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL2VkaXRvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21tb25TY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvY29tbW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXR0eVByaW50ZXJTY2hlbWUgfSBmcm9tIFwiLi9zY2hlbWUvcHJldHR5UHJpbnRlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3ZWxjb21lU2NyZWVuU2NoZW1lIH0gZnJvbSBcIi4vc2NoZW1lL3dlbGNvbWVTY3JlZW5cIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvU1ZHIH0gZnJvbSBcIi4vc3ZnL2xvZ29cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmlsZVNWRyB9IGZyb20gXCIuL3N2Zy9maWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlU1ZHIH0gZnJvbSBcIi4vc3ZnL2Nsb3NlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hcmtlclNWRyB9IGZyb20gXCIuL3N2Zy9tYXJrZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWRkRmlsZVNWRyB9IGZyb20gXCIuL3N2Zy9hZGRGaWxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERpcmVjdG9yeVNWRyB9IGZyb20gXCIuL3N2Zy9kaXJlY3RvcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdEVudHJ5U1ZHIH0gZnJvbSBcIi4vc3ZnL2VkaXRFbnRyeVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBZGREaXJlY3RvcnlTVkcgfSBmcm9tIFwiLi9zdmcvYWRkRGlyZWN0b3J5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERvd25UcmlhbmdsZVNWRyB9IGZyb20gXCIuL3N2Zy90cmlhbmdsZS9kb3duXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExlZnRUcmlhbmdsZVNWRyB9IGZyb20gXCIuL3N2Zy90cmlhbmdsZS9sZWZ0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJpZ2h0VHJpYW5nbGVTVkcgfSBmcm9tIFwiLi9zdmcvdHJpYW5nbGUvcmlnaHRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3BlblJ1YmJpc2hCaW5TVkcgfSBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9vcGVuXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENsb3NlZFJ1YmJpc2hCaW5TVkcgfSBmcm9tIFwiLi9zdmcvcnViYmlzaEJpbi9jbG9zZWRcIjtcbiJdLCJuYW1lcyI6WyJjb2xvdXJzIiwic3ludGF4U3R5bGUiLCJmaXJhQ29kZVN0eWxlIiwiY29tbW9uRm9udE1peGluIiwiZmlyYUNvZGVGb250TWl4aW4iLCJtb25vc3BhY2VGb250TWl4aW4iLCJjbGllbnRTY2hlbWUiLCJlZGl0b3JTY2hlbWUiLCJjb21tb25TY2hlbWUiLCJwcmV0dHlQcmludGVyU2NoZW1lIiwid2VsY29tZVNjcmVlblNjaGVtZSIsIkxvZ29TVkciLCJGaWxlU1ZHIiwiQ2xvc2VTVkciLCJNYXJrZXJTVkciLCJBZGRGaWxlU1ZHIiwiRGlyZWN0b3J5U1ZHIiwiRWRpdEVudHJ5U1ZHIiwiQWRkRGlyZWN0b3J5U1ZHIiwiRG93blRyaWFuZ2xlU1ZHIiwiTGVmdFRyaWFuZ2xlU1ZHIiwiUmlnaHRUcmlhbmdsZVNWRyIsIk9wZW5SdWJiaXNoQmluU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblNWRyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVPQSxPQUFPO2VBQVBBLFFBQU8sUUFBQTs7SUFDUEMsV0FBVztlQUFYQSxPQUFXLFFBQUE7O0lBQ1hDLGFBQWE7ZUFBYkEsU0FBYSxRQUFBOztJQUNiQyxlQUFlO2VBQWZBLE9BQWUsUUFBQTs7SUFDZkMsaUJBQWlCO2VBQWpCQSxVQUFpQixRQUFBOztJQUNqQkMsa0JBQWtCO2VBQWxCQSxVQUFrQixRQUFBOztJQUNsQkMsWUFBWTtlQUFaQSxPQUFZLFFBQUE7O0lBQ1pDLFlBQVk7ZUFBWkEsT0FBWSxRQUFBOztJQUNaQyxZQUFZO2VBQVpBLFFBQVksUUFBQTs7SUFDWkMsbUJBQW1CO2VBQW5CQSxjQUFtQixRQUFBOztJQUNuQkMsbUJBQW1CO2VBQW5CQSxjQUFtQixRQUFBOztJQUVuQkMsT0FBTztlQUFQQSxLQUFPLFFBQUE7O0lBQ1BDLE9BQU87ZUFBUEEsS0FBTyxRQUFBOztJQUNQQyxRQUFRO2VBQVJBLE1BQVEsUUFBQTs7SUFDUkMsU0FBUztlQUFUQSxPQUFTLFFBQUE7O0lBQ1RDLFVBQVU7ZUFBVkEsUUFBVSxRQUFBOztJQUNWQyxZQUFZO2VBQVpBLFVBQVksUUFBQTs7SUFDWkMsWUFBWTtlQUFaQSxVQUFZLFFBQUE7O0lBQ1pDLGVBQWU7ZUFBZkEsYUFBZSxRQUFBOztJQUNmQyxlQUFlO2VBQWZBLEtBQWUsUUFBQTs7SUFDZkMsZUFBZTtlQUFmQSxLQUFlLFFBQUE7O0lBQ2ZDLGdCQUFnQjtlQUFoQkEsTUFBZ0IsUUFBQTs7SUFDaEJDLGlCQUFpQjtlQUFqQkEsS0FBaUIsUUFBQTs7SUFDakJDLG1CQUFtQjtlQUFuQkEsT0FBbUIsUUFBQTs7OzREQXhCSixXQUFXOzJEQUNQLGdCQUFnQjs2REFDZCxrQkFBa0I7MkRBQ2hCLHFCQUFxQjs4REFDbkIsdUJBQXVCOzhEQUN0Qix3QkFBd0I7MkRBQzlCLGlCQUFpQjsyREFDakIsaUJBQWlCOzREQUNqQixpQkFBaUI7a0VBQ1Ysd0JBQXdCO2tFQUN4Qix3QkFBd0I7eURBRXBDLFlBQVk7eURBQ1osWUFBWTswREFDWCxhQUFhOzJEQUNaLGNBQWM7NERBQ2IsZUFBZTs4REFDYixpQkFBaUI7OERBQ2pCLGlCQUFpQjtpRUFDZCxvQkFBb0I7eURBQ3BCLHFCQUFxQjt5REFDckIscUJBQXFCOzBEQUNwQixzQkFBc0I7eURBQ3JCLHVCQUF1QjsyREFDckIseUJBQXlCIn0=