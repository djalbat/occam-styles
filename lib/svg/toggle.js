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
const _styles = require("../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ToggleSVG extends _svg.default {
    static defaultProperties = {
        viewBox: "0 -5 25 25",
        className: "toggle"
    };
}
const _default = (0, _easywithstyle.default)(ToggleSVG)`

  width: auto;
  height: ${_styles.toggleSVGHeight};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvdG9nZ2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi9zdmdcIjtcblxuaW1wb3J0IHsgdG9nZ2xlU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuXG5jbGFzcyBUb2dnbGVTVkcgZXh0ZW5kcyBTVkcge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIC01IDI1IDI1XCIsICAvLy9cbiAgICBjbGFzc05hbWU6IFwidG9nZ2xlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRvZ2dsZVNWRylgXG5cbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHt0b2dnbGVTVkdIZWlnaHR9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiVG9nZ2xlU1ZHIiwiU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwidG9nZ2xlU1ZHSGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OztzRUFic0I7NERBRU47d0JBRWdCOzs7Ozs7QUFFaEMsTUFBTUEsa0JBQWtCQyxZQUFHO0lBQ3pCLE9BQU9DLG9CQUFvQjtRQUN6QkMsU0FBUztRQUNUQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ0wsVUFBVSxDQUFDOzs7VUFHMUIsRUFBRU0sdUJBQWUsQ0FBQzs7QUFFNUIsQ0FBQyJ9