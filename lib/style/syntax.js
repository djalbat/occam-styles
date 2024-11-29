"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default1;
    }
});
var _json = /*#__PURE__*/ _interop_require_default(require("../style/syntax/json"));
var _furtle = /*#__PURE__*/ _interop_require_default(require("../style/syntax/furtle"));
var _default = /*#__PURE__*/ _interop_require_default(require("../style/syntax/default"));
var _nominal = /*#__PURE__*/ _interop_require_default(require("../style/syntax/nominal"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("../style/syntax/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("../style/syntax/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../style/syntax/markdownStyle"));
var _customGrammarBNF = /*#__PURE__*/ _interop_require_default(require("../style/syntax/customGrammarBNF"));
var _customGrammarPattern = /*#__PURE__*/ _interop_require_default(require("../style/syntax/customGrammarPattern"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var syntaxStyle = "\n    \n  ".concat(_default.default, "\n  \n  ").concat(_furtle.default, "\n  \n  ").concat(_json.default, "\n\n  ").concat(_nominal.default, "\n  \n  ").concat(_markdown.default, "\n  \n  ").concat(_plainText.default, "\n  \n  ").concat(_markdownStyle.default, "\n  \n  ").concat(_customGrammarBNF.default, " \n  \n  ").concat(_customGrammarPattern.default, " \n  \n");
var _default1 = syntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBqc29uU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9qc29uXCI7XG5pbXBvcnQgZnVydGxlU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9mdXJ0bGVcIjtcbmltcG9ydCBkZWZhdWx0U3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9kZWZhdWx0XCI7XG5pbXBvcnQgbm9taW5hbFN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvbm9taW5hbFwiO1xuaW1wb3J0IG1hcmtkb3duU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9tYXJrZG93blwiO1xuaW1wb3J0IHBsYWluVGV4dFN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvcGxhaW5UZXh0XCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IGN1c3RvbUdyYW1tYXJCTkZOZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvY3VzdG9tR3JhbW1hckJORlwiO1xuaW1wb3J0IGN1c3RvbUdyYW1tYXJQYXR0ZXJuTmVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2N1c3RvbUdyYW1tYXJQYXR0ZXJuXCI7XG5cbmNvbnN0IHN5bnRheFN0eWxlID0gYFxuICAgIFxuICAke2RlZmF1bHRTeW50YXhTdHlsZX1cbiAgXG4gICR7ZnVydGxlU3ludGF4U3R5bGV9XG4gIFxuICAke2pzb25TeW50YXhTdHlsZX1cblxuICAke25vbWluYWxTeW50YXhTdHlsZX1cbiAgXG4gICR7bWFya2Rvd25TeW50YXhTdHlsZX1cbiAgXG4gICR7cGxhaW5UZXh0U3ludGF4U3R5bGV9XG4gIFxuICAke21hcmtkb3duU3R5bGVTeW50YXhTdHlsZX1cbiAgXG4gICR7Y3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGV9IFxuICBcbiAgJHtjdXN0b21HcmFtbWFyUGF0dGVybk5lU3ludGF4U3R5bGV9IFxuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbInN5bnRheFN0eWxlIiwiZnVydGxlU3ludGF4U3R5bGUiLCJkZWZhdWx0U3ludGF4U3R5bGUiLCJqc29uU3ludGF4U3R5bGUiLCJub21pbmFsU3ludGF4U3R5bGUiLCJtYXJrZG93blN5bnRheFN0eWxlIiwicGxhaW5UZXh0U3ludGF4U3R5bGUiLCJtYXJrZG93blN0eWxlU3ludGF4U3R5bGUiLCJjdXN0b21HcmFtbWFyQk5GTmVTeW50YXhTdHlsZSIsImN1c3RvbUdyYW1tYXJQYXR0ZXJuTmVTeW50YXhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0NBOzs7ZUFBQTs7OzJEQWhDNEI7NkRBQ0U7OERBQ0M7OERBQ0E7K0RBQ0M7Z0VBQ0M7b0VBQ0k7dUVBQ0s7MkVBQ0k7Ozs7OztBQUU5QyxJQUFNQSxjQUFjLEFBQUMsYUFJakJDLE9BRkFDLGdCQUFrQixFQUFDLFlBSW5CQyxPQUZBRixlQUFpQixFQUFDLFlBSWxCRyxPQUZBRCxhQUFlLEVBQUMsVUFJaEJFLE9BRkFELGdCQUFrQixFQUFDLFlBSW5CRSxPQUZBRCxpQkFBbUIsRUFBQyxZQUlwQkUsT0FGQUQsa0JBQW9CLEVBQUMsWUFJckJFLE9BRkFELHNCQUF3QixFQUFDLFlBSXpCRSxPQUZBRCx5QkFBNkIsRUFBQyxhQUVJLE9BQWxDQyw2QkFBaUMsRUFBQztJQUl0QyxZQUFlVCJ9