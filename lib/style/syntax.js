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
const _json = /*#__PURE__*/ _interop_require_default(require("../style/syntax/json"));
const _furtle = /*#__PURE__*/ _interop_require_default(require("../style/syntax/furtle"));
const _default = /*#__PURE__*/ _interop_require_default(require("../style/syntax/default"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../style/syntax/nominal"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("../style/syntax/markdown"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../style/syntax/plainText"));
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../style/syntax/markdownStyle"));
const _customGrammarBNF = /*#__PURE__*/ _interop_require_default(require("../style/syntax/customGrammarBNF"));
const _customGrammarVocabulary = /*#__PURE__*/ _interop_require_default(require("../style/syntax/customGrammarVocabulary"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const syntaxStyle = `
    
  ${_default.default}
  
  ${_furtle.default}
  
  ${_json.default}

  ${_nominal.default}
  
  ${_markdown.default}
  
  ${_plainText.default}
  
  ${_markdownStyle.default}
  
  ${_customGrammarBNF.default} 
  
  ${_customGrammarVocabulary.default} 
  
`;
const _default1 = syntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBqc29uU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9qc29uXCI7XG5pbXBvcnQgZnVydGxlU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9mdXJ0bGVcIjtcbmltcG9ydCBkZWZhdWx0U3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9kZWZhdWx0XCI7XG5pbXBvcnQgbm9taW5hbFN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvbm9taW5hbFwiO1xuaW1wb3J0IG1hcmtkb3duU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9tYXJrZG93blwiO1xuaW1wb3J0IHBsYWluVGV4dFN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvcGxhaW5UZXh0XCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvbWFya2Rvd25TdHlsZVwiO1xuaW1wb3J0IGN1c3RvbUdyYW1tYXJCTkZOZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvY3VzdG9tR3JhbW1hckJORlwiO1xuaW1wb3J0IGN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5TmVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2N1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5XCI7XG5cbmNvbnN0IHN5bnRheFN0eWxlID0gYFxuICAgIFxuICAke2RlZmF1bHRTeW50YXhTdHlsZX1cbiAgXG4gICR7ZnVydGxlU3ludGF4U3R5bGV9XG4gIFxuICAke2pzb25TeW50YXhTdHlsZX1cblxuICAke25vbWluYWxTeW50YXhTdHlsZX1cbiAgXG4gICR7bWFya2Rvd25TeW50YXhTdHlsZX1cbiAgXG4gICR7cGxhaW5UZXh0U3ludGF4U3R5bGV9XG4gIFxuICAke21hcmtkb3duU3R5bGVTeW50YXhTdHlsZX1cbiAgXG4gICR7Y3VzdG9tR3JhbW1hckJORk5lU3ludGF4U3R5bGV9IFxuICBcbiAgJHtjdXN0b21HcmFtbWFyVm9jYWJ1bGFyeU5lU3ludGF4U3R5bGV9IFxuICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbInN5bnRheFN0eWxlIiwiZGVmYXVsdFN5bnRheFN0eWxlIiwiZnVydGxlU3ludGF4U3R5bGUiLCJqc29uU3ludGF4U3R5bGUiLCJub21pbmFsU3ludGF4U3R5bGUiLCJtYXJrZG93blN5bnRheFN0eWxlIiwicGxhaW5UZXh0U3ludGF4U3R5bGUiLCJtYXJrZG93blN0eWxlU3ludGF4U3R5bGUiLCJjdXN0b21HcmFtbWFyQk5GTmVTeW50YXhTdHlsZSIsImN1c3RvbUdyYW1tYXJWb2NhYnVsYXJ5TmVTeW50YXhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0NBOzs7ZUFBQTs7OzZEQWhDNEI7K0RBQ0U7Z0VBQ0M7Z0VBQ0E7aUVBQ0M7a0VBQ0M7c0VBQ0k7eUVBQ0s7Z0ZBQ087Ozs7OztBQUVqRCxNQUFNQSxjQUFjLENBQUM7O0VBRW5CLEVBQUVDLGdCQUFrQixDQUFDOztFQUVyQixFQUFFQyxlQUFpQixDQUFDOztFQUVwQixFQUFFQyxhQUFlLENBQUM7O0VBRWxCLEVBQUVDLGdCQUFrQixDQUFDOztFQUVyQixFQUFFQyxpQkFBbUIsQ0FBQzs7RUFFdEIsRUFBRUMsa0JBQW9CLENBQUM7O0VBRXZCLEVBQUVDLHNCQUF3QixDQUFDOztFQUUzQixFQUFFQyx5QkFBNkIsQ0FBQzs7RUFFaEMsRUFBRUMsZ0NBQW9DLENBQUM7O0FBRXpDLENBQUM7TUFFRCxZQUFlVCJ9