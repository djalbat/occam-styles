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
const _index = require("../../../index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MonospaceParagraph extends _easy.Element {
    childElements() {
        return "<||>";
    }
    static tagName = "p";
    static defaultProperties = {
        className: "monospace"
    };
}
const _default = (0, _easywithstyle.default)(MonospaceParagraph)`

  ${_index.juliaMonoFontMixin};

  font-size: 32px;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvcGFyYWdyYXBoL21vbm9zcGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBqdWxpYU1vbm9Gb250TWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jbGFzcyBNb25vc3BhY2VQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCI8fHw+XCI7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibW9ub3NwYWNlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1vbm9zcGFjZVBhcmFncmFwaClgXG5cbiAgJHtqdWxpYU1vbm9Gb250TWl4aW59O1xuXG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1vbm9zcGFjZVBhcmFncmFwaCIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwianVsaWFNb25vRm9udE1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7c0VBakJzQjtzQkFFRTt1QkFDVzs7Ozs7O0FBRW5DLE1BQU1BLDJCQUEyQkMsYUFBTztJQUN0Q0MsZ0JBQWdCO1FBQ2QsT0FBTztJQUNUO0lBRUEsT0FBT0MsVUFBVSxJQUFJO0lBRXJCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNOLG1CQUFtQixDQUFDOztFQUUzQyxFQUFFTyx5QkFBa0IsQ0FBQzs7OztBQUl2QixDQUFDIn0=