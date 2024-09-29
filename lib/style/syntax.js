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
var syntaxStyle = "\n    \n  ".concat(_default.default, "\n  \n  ").concat(_json.default, "\n\n  ").concat(_nominal.default, "\n  \n  ").concat(_markdown.default, "\n  \n  ").concat(_plainText.default, "\n  \n  ").concat(_markdownStyle.default, "\n  \n  ").concat(_customGrammarBNF.default, " \n  \n  ").concat(_customGrammarPattern.default, " \n  \n");
var _default1 = syntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBqc29uU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9qc29uXCI7XG5pbXBvcnQgZGVmYXVsdFN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvZGVmYXVsdFwiO1xuaW1wb3J0IG5vbWluYWxTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L25vbWluYWxcIjtcbmltcG9ydCBtYXJrZG93blN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvbWFya2Rvd25cIjtcbmltcG9ydCBwbGFpblRleHRTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L3BsYWluVGV4dFwiO1xuaW1wb3J0IG1hcmtkb3duU3R5bGVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L21hcmtkb3duU3R5bGVcIjtcbmltcG9ydCBjdXN0b21HcmFtbWFyQk5GTmVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2N1c3RvbUdyYW1tYXJCTkZcIjtcbmltcG9ydCBjdXN0b21HcmFtbWFyUGF0dGVybk5lU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9jdXN0b21HcmFtbWFyUGF0dGVyblwiO1xuXG5jb25zdCBzeW50YXhTdHlsZSA9IGBcbiAgICBcbiAgJHtkZWZhdWx0U3ludGF4U3R5bGV9XG4gIFxuICAke2pzb25TeW50YXhTdHlsZX1cblxuICAke25vbWluYWxTeW50YXhTdHlsZX1cbiAgXG4gICR7bWFya2Rvd25TeW50YXhTdHlsZX1cbiAgXG4gICR7cGxhaW5UZXh0U3ludGF4U3R5bGV9XG4gIFxuICAke21hcmtkb3duU3R5bGVTeW50YXhTdHlsZX1cbiAgXG4gICR7Y3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGV9IFxuICBcbiAgJHtjdXN0b21HcmFtbWFyUGF0dGVybk5lU3ludGF4U3R5bGV9IFxuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbInN5bnRheFN0eWxlIiwianNvblN5bnRheFN0eWxlIiwiZGVmYXVsdFN5bnRheFN0eWxlIiwibm9taW5hbFN5bnRheFN0eWxlIiwibWFya2Rvd25TeW50YXhTdHlsZSIsInBsYWluVGV4dFN5bnRheFN0eWxlIiwibWFya2Rvd25TdHlsZVN5bnRheFN0eWxlIiwiY3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGUiLCJjdXN0b21HcmFtbWFyUGF0dGVybk5lU3ludGF4U3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OzsyREE3QjRCOzhEQUNHOzhEQUNBOytEQUNDO2dFQUNDO29FQUNJO3VFQUNLOzJFQUNJOzs7Ozs7QUFFOUMsSUFBTUEsY0FBYyxBQUFDLGFBSWpCQyxPQUZBQyxnQkFBa0IsRUFBQyxZQUluQkMsT0FGQUYsYUFBZSxFQUFDLFVBSWhCRyxPQUZBRCxnQkFBa0IsRUFBQyxZQUluQkUsT0FGQUQsaUJBQW1CLEVBQUMsWUFJcEJFLE9BRkFELGtCQUFvQixFQUFDLFlBSXJCRSxPQUZBRCxzQkFBd0IsRUFBQyxZQUl6QkUsT0FGQUQseUJBQTZCLEVBQUMsYUFFSSxPQUFsQ0MsNkJBQWlDLEVBQUM7SUFJdEMsWUFBZVIifQ==