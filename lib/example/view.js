"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _logo = /*#__PURE__*/ _interop_require_default(require("./view/logo"));
const _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
const _toolbar = /*#__PURE__*/ _interop_require_default(require("./view/div/toolbar"));
const _monospace = /*#__PURE__*/ _interop_require_default(require("./view/paragraph/monospace"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_logo.default, null),
            /*#__PURE__*/ React.createElement(_menu.default, null),
            /*#__PURE__*/ React.createElement(_toolbar.default, null),
            /*#__PURE__*/ React.createElement(_monospace.default, null)
        ];
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 2rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgTG9nb1NWRyBmcm9tIFwiLi92aWV3L2xvZ29cIjtcbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBUb29sYmFyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3Rvb2xiYXJcIjtcbmltcG9ydCBNb25vc3BhY2VQYXJhZ3JhcGggZnJvbSBcIi4vdmlldy9wYXJhZ3JhcGgvbW9ub3NwYWNlXCI7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPExvZ29TVkcvPixcbiAgICAgIDxNZW51RGl2Lz4sXG4gICAgICA8VG9vbGJhckRpdi8+LFxuICAgICAgPE1vbm9zcGFjZVBhcmFncmFwaC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsIkxvZ29TVkciLCJNZW51RGl2IiwiVG9vbGJhckRpdiIsIk1vbm9zcGFjZVBhcmFncmFwaCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O3NFQTVCc0I7c0JBRUU7NkRBRUo7NkRBQ0E7Z0VBQ0c7a0VBQ1E7Ozs7OztBQUUvQixNQUFNQSxhQUFhQyxhQUFPO0lBQ3hCQyxnQkFBZ0I7UUFDZCxPQUFROzBCQUVOLG9CQUFDQyxhQUFPOzBCQUNSLG9CQUFDQyxhQUFPOzBCQUNSLG9CQUFDQyxnQkFBVTswQkFDWCxvQkFBQ0Msa0JBQWtCO1NBRXBCO0lBQ0g7SUFFQSxPQUFPQyxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ1YsS0FBSyxDQUFDOzs7O0FBSS9CLENBQUMifQ==