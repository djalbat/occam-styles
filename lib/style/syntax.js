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

var syntaxStyle = "\n    \n  .syntax,\n  .syntax > * {\n    ".concat(_firaCode["default"], "\n  }\n\n  ").concat(_default2["default"], "\n  \n  ").concat(_plain["default"], "\n  \n  ").concat(_florence["default"], "\n  \n  ").concat(_metaJSON["default"], "\n\n  ").concat(_customGrammarBNF["default"], " \n  \n");
var _default = syntaxStyle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJzeW50YXhTdHlsZSIsImZpcmFDb2RlTWl4aW4iLCJkZWZhdWx0U3ludGF4U3R5bGUiLCJwbGFpblN5bnRheFN0eWxlIiwiZmxvcmVuY2VTeW50YXhTdHlsZSIsIm1ldGFKU09OZVN5bnRheFN0eWxlIiwiY3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxXQUFXLHNEQUlYQyxvQkFKVyx3QkFPYkMsb0JBUGEscUJBU2JDLGlCQVRhLHFCQVdiQyxvQkFYYSxxQkFhYkMsb0JBYmEsbUJBZWJDLDRCQWZhLFlBQWpCO2VBbUJlTixXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBmaXJhQ29kZU1peGluIGZyb20gXCIuLi9taXhpbi9maXJhQ29kZVwiO1xuaW1wb3J0IHBsYWluU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9wbGFpblwiO1xuaW1wb3J0IGRlZmF1bHRTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2RlZmF1bHRcIjtcbmltcG9ydCBmbG9yZW5jZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvZmxvcmVuY2VcIjtcbmltcG9ydCBtZXRhSlNPTmVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L21ldGFKU09OXCI7XG5pbXBvcnQgY3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9jdXN0b21HcmFtbWFyQk5GXCI7XG5cbmNvbnN0IHN5bnRheFN0eWxlID0gYFxuICAgIFxuICAuc3ludGF4LFxuICAuc3ludGF4ID4gKiB7XG4gICAgJHtmaXJhQ29kZU1peGlufVxuICB9XG5cbiAgJHtkZWZhdWx0U3ludGF4U3R5bGV9XG4gIFxuICAke3BsYWluU3ludGF4U3R5bGV9XG4gIFxuICAke2Zsb3JlbmNlU3ludGF4U3R5bGV9XG4gIFxuICAke21ldGFKU09OZVN5bnRheFN0eWxlfVxuXG4gICR7Y3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGV9IFxuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHN5bnRheFN0eWxlO1xuIl19