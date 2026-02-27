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
const _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
const _prettyPrinter = require("../scheme/prettyPrinter");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FoldSVG extends _svg.default {
    static defaultProperties = {
        className: "fold"
    };
}
const _default = (0, _easywithstyle.default)(FoldSVG)`

  top: 0;
  left: 0;
  fill: ${_prettyPrinter.foldFill};
  width: 100%;
  stroke: inherit;
  position: absolute;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZm9sZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmltcG9ydCB7IGZvbGRGaWxsIH0gZnJvbSBcIi4uL3NjaGVtZS9wcmV0dHlQcmludGVyXCI7XG5cbmNsYXNzIEZvbGRTVkcgZXh0ZW5kcyBTVkcge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZvbGRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRm9sZFNWRylgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmaWxsOiAke2ZvbGRGaWxsfTtcbiAgd2lkdGg6IDEwMCU7XG4gIHN0cm9rZTogaW5oZXJpdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRm9sZFNWRyIsIlNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZm9sZEZpbGwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O3NFQVpzQjs0REFFTjsrQkFFUzs7Ozs7O0FBRXpCLE1BQU1BLGdCQUFnQkMsWUFBRztJQUN2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDSixRQUFRLENBQUM7Ozs7UUFJMUIsRUFBRUssdUJBQVEsQ0FBQzs7Ozs7QUFLbkIsQ0FBQyJ9