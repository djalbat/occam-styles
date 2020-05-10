"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _firaCode = _interopRequireDefault(require("../mixin/firaCode"));

var _plain = _interopRequireDefault(require("../style/syntax/plain"));

var _default2 = _interopRequireDefault(require("../style/syntax/default"));

var _florence = _interopRequireDefault(require("../style/syntax/florence"));

var _metaJSON = _interopRequireDefault(require("../style/syntax/metaJSON"));

var _customGrammarBNF = _interopRequireDefault(require("../style/syntax/customGrammarBNF"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(fontSize, lineHeight) {
  var firaCodeStyle = (0, _firaCode["default"])(fontSize, lineHeight);
  return "\n    \n    .syntax,\n    .syntax > * {\n      ".concat(firaCodeStyle, "\n    }\n  \n    ").concat(_default2["default"], "\n    \n    ").concat(_plain["default"], "\n    \n    ").concat(_florence["default"], "\n    \n    ").concat(_metaJSON["default"], "\n  \n    ").concat(_customGrammarBNF["default"], " \n    \n  ");
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bnRheC5qcyJdLCJuYW1lcyI6WyJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmaXJhQ29kZVN0eWxlIiwiZGVmYXVsdFN5bnRheFN0eWxlIiwicGxhaW5TeW50YXhTdHlsZSIsImZsb3JlbmNlU3ludGF4U3R5bGUiLCJtZXRhSlNPTmVTeW50YXhTdHlsZSIsImN1c3RvbUdyYW1tYXJCTkZOZVN5bnRheFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRWUsa0JBQVVBLFFBQVYsRUFBb0JDLFVBQXBCLEVBQWdDO0FBQzdDLE1BQU1DLGFBQWEsR0FBRywwQkFBY0YsUUFBZCxFQUF3QkMsVUFBeEIsQ0FBdEI7QUFFQSxrRUFJTUMsYUFKTiw4QkFPSUMsb0JBUEoseUJBU0lDLGlCQVRKLHlCQVdJQyxvQkFYSix5QkFhSUMsb0JBYkosdUJBZUlDLDRCQWZKO0FBa0JEOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBmaXJhQ29kZU1peGluIGZyb20gXCIuLi9taXhpbi9maXJhQ29kZVwiO1xuaW1wb3J0IHBsYWluU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9wbGFpblwiO1xuaW1wb3J0IGRlZmF1bHRTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2RlZmF1bHRcIjtcbmltcG9ydCBmbG9yZW5jZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvZmxvcmVuY2VcIjtcbmltcG9ydCBtZXRhSlNPTmVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L21ldGFKU09OXCI7XG5pbXBvcnQgY3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9jdXN0b21HcmFtbWFyQk5GXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmb250U2l6ZSwgbGluZUhlaWdodCkge1xuICBjb25zdCBmaXJhQ29kZVN0eWxlID0gZmlyYUNvZGVNaXhpbihmb250U2l6ZSwgbGluZUhlaWdodCk7XG5cbiAgcmV0dXJuIChgXG4gICAgXG4gICAgLnN5bnRheCxcbiAgICAuc3ludGF4ID4gKiB7XG4gICAgICAke2ZpcmFDb2RlU3R5bGV9XG4gICAgfVxuICBcbiAgICAke2RlZmF1bHRTeW50YXhTdHlsZX1cbiAgICBcbiAgICAke3BsYWluU3ludGF4U3R5bGV9XG4gICAgXG4gICAgJHtmbG9yZW5jZVN5bnRheFN0eWxlfVxuICAgIFxuICAgICR7bWV0YUpTT05lU3ludGF4U3R5bGV9XG4gIFxuICAgICR7Y3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGV9IFxuICAgIFxuICBgKTtcbn07XG4iXX0=