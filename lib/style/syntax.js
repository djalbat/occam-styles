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
const _bnf = /*#__PURE__*/ _interop_require_default(require("../style/syntax/bnf"));
const _json = /*#__PURE__*/ _interop_require_default(require("../style/syntax/json"));
const _furtle = /*#__PURE__*/ _interop_require_default(require("../style/syntax/furtle"));
const _default = /*#__PURE__*/ _interop_require_default(require("../style/syntax/default"));
const _nominal = /*#__PURE__*/ _interop_require_default(require("../style/syntax/nominal"));
const _markdown = /*#__PURE__*/ _interop_require_default(require("../style/syntax/markdown"));
const _plainText = /*#__PURE__*/ _interop_require_default(require("../style/syntax/plainText"));
const _vocabulary = /*#__PURE__*/ _interop_require_default(require("../style/syntax/vocabulary"));
const _markdownStyle = /*#__PURE__*/ _interop_require_default(require("../style/syntax/markdownStyle"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const syntaxStyle = `
    
  ${_default.default}
  
  ${_bnf.default} 
  
  ${_json.default}

  ${_furtle.default}
  
  ${_nominal.default}
  
  ${_markdown.default}
  
  ${_plainText.default}
  
  ${_vocabulary.default} 
  
  ${_markdownStyle.default}
  
`;
const _default1 = syntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9zeW50YXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBibmZTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2JuZlwiO1xuaW1wb3J0IGpzb25TeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2pzb25cIjtcbmltcG9ydCBmdXJ0bGVTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2Z1cnRsZVwiO1xuaW1wb3J0IGRlZmF1bHRTeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L2RlZmF1bHRcIjtcbmltcG9ydCBub21pbmFsU3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9ub21pbmFsXCI7XG5pbXBvcnQgbWFya2Rvd25TeW50YXhTdHlsZSBmcm9tIFwiLi4vc3R5bGUvc3ludGF4L21hcmtkb3duXCI7XG5pbXBvcnQgcGxhaW5UZXh0U3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC9wbGFpblRleHRcIjtcbmltcG9ydCB2b2NhYnVsYXJ5U3ludGF4U3R5bGUgZnJvbSBcIi4uL3N0eWxlL3N5bnRheC92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgbWFya2Rvd25TdHlsZVN5bnRheFN0eWxlIGZyb20gXCIuLi9zdHlsZS9zeW50YXgvbWFya2Rvd25TdHlsZVwiO1xuXG5jb25zdCBzeW50YXhTdHlsZSA9IGBcbiAgICBcbiAgJHtkZWZhdWx0U3ludGF4U3R5bGV9XG4gIFxuICAke2JuZlN5bnRheFN0eWxlfSBcbiAgXG4gICR7anNvblN5bnRheFN0eWxlfVxuXG4gICR7ZnVydGxlU3ludGF4U3R5bGV9XG4gIFxuICAke25vbWluYWxTeW50YXhTdHlsZX1cbiAgXG4gICR7bWFya2Rvd25TeW50YXhTdHlsZX1cbiAgXG4gICR7cGxhaW5UZXh0U3ludGF4U3R5bGV9XG4gIFxuICAke3ZvY2FidWxhcnlTeW50YXhTdHlsZX0gXG4gIFxuICAke21hcmtkb3duU3R5bGVTeW50YXhTdHlsZX1cbiAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBzeW50YXhTdHlsZTtcbiJdLCJuYW1lcyI6WyJzeW50YXhTdHlsZSIsImRlZmF1bHRTeW50YXhTdHlsZSIsImJuZlN5bnRheFN0eWxlIiwianNvblN5bnRheFN0eWxlIiwiZnVydGxlU3ludGF4U3R5bGUiLCJub21pbmFsU3ludGF4U3R5bGUiLCJtYXJrZG93blN5bnRheFN0eWxlIiwicGxhaW5UZXh0U3ludGF4U3R5bGUiLCJ2b2NhYnVsYXJ5U3ludGF4U3R5bGUiLCJtYXJrZG93blN0eWxlU3ludGF4U3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtDQTs7O2VBQUE7Ozs0REFoQzJCOzZEQUNDOytEQUNFO2dFQUNDO2dFQUNBO2lFQUNDO2tFQUNDO21FQUNDO3NFQUNHOzs7Ozs7QUFFckMsTUFBTUEsY0FBYyxDQUFDOztFQUVuQixFQUFFQyxnQkFBa0IsQ0FBQzs7RUFFckIsRUFBRUMsWUFBYyxDQUFDOztFQUVqQixFQUFFQyxhQUFlLENBQUM7O0VBRWxCLEVBQUVDLGVBQWlCLENBQUM7O0VBRXBCLEVBQUVDLGdCQUFrQixDQUFDOztFQUVyQixFQUFFQyxpQkFBbUIsQ0FBQzs7RUFFdEIsRUFBRUMsa0JBQW9CLENBQUM7O0VBRXZCLEVBQUVDLG1CQUFxQixDQUFDOztFQUV4QixFQUFFQyxzQkFBd0IsQ0FBQzs7QUFFN0IsQ0FBQztNQUVELFlBQWVUIn0=