"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firaCode = _interopRequireDefault(require("../mixin/firaCode"));

var _plain = _interopRequireDefault(require("../style/syntax/plain"));

var _default2 = _interopRequireDefault(require("../style/syntax/default"));

var _florence = _interopRequireDefault(require("../style/syntax/florence"));

var _metaJSON = _interopRequireDefault(require("../style/syntax/metaJSON"));

var _customGrammarBNF = _interopRequireDefault(require("../style/syntax/customGrammarBNF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var syntaxStyle = function syntaxStyle(fontSize, lineHeight) {
  return "\n  \n  .syntax,\n  .syntax > * {\n    ".concat((0, _firaCode["default"])(fontSize, lineHeight), "\n  }\n\n  ").concat(_default2["default"], "\n  \n  ").concat(_plain["default"], "\n  \n  ").concat(_florence["default"], "\n  \n  ").concat(_metaJSON["default"], "\n\n  ").concat(_customGrammarBNF["default"], " \n  \n");
};

var _default = syntaxStyle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJzeW50YXhTdHlsZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImRlZmF1bHRTeW50YXhTdHlsZSIsInBsYWluU3ludGF4U3R5bGUiLCJmbG9yZW5jZVN5bnRheFN0eWxlIiwibWV0YUpTT05lU3ludGF4U3R5bGUiLCJjdXN0b21HcmFtbWFyQk5GTmVTeW50YXhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsVUFBWDtBQUFBLDBEQUlkLDBCQUFjRCxRQUFkLEVBQXdCQyxVQUF4QixDQUpjLHdCQU9oQkMsb0JBUGdCLHFCQVNoQkMsaUJBVGdCLHFCQVdoQkMsb0JBWGdCLHFCQWFoQkMsb0JBYmdCLG1CQWVoQkMsNEJBZmdCO0FBQUEsQ0FBcEI7O2VBbUJlUCxXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBmaXJhQ29kZU1peGluIGZyb20gXCIuLi9taXhpbi9maXJhQ29kZVwiO1xuaW1wb3J0IHBsYWluU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9wbGFpblwiO1xuaW1wb3J0IGRlZmF1bHRTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2RlZmF1bHRcIjtcbmltcG9ydCBmbG9yZW5jZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvZmxvcmVuY2VcIjtcbmltcG9ydCBtZXRhSlNPTmVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L21ldGFKU09OXCI7XG5pbXBvcnQgY3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9jdXN0b21HcmFtbWFyQk5GXCI7XG5cbmNvbnN0IHN5bnRheFN0eWxlID0gKGZvbnRTaXplLCBsaW5lSGVpZ2h0KSA9PiBgXG4gIFxuICAuc3ludGF4LFxuICAuc3ludGF4ID4gKiB7XG4gICAgJHtmaXJhQ29kZU1peGluKGZvbnRTaXplLCBsaW5lSGVpZ2h0KX1cbiAgfVxuXG4gICR7ZGVmYXVsdFN5bnRheFN0eWxlfVxuICBcbiAgJHtwbGFpblN5bnRheFN0eWxlfVxuICBcbiAgJHtmbG9yZW5jZVN5bnRheFN0eWxlfVxuICBcbiAgJHttZXRhSlNPTmVTeW50YXhTdHlsZX1cblxuICAke2N1c3RvbUdyYW1tYXJCTkZOZVN5bnRheFN0eWxlfSBcbiAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBzeW50YXhTdHlsZTtcbiJdfQ==