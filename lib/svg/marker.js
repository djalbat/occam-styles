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
class MarkerSVG extends _svg.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
            width: "14",
            height: "4",
            x: "2",
            y: "16"
        }));
    }
    static defaultProperties = {
        viewBox: "0 0 25 25",
        className: "marker"
    };
}
const _default = (0, _easywithstyle.default)(MarkerSVG)`

  width: auto;
  height: ${_styles.markerSVGHeight};
  margin-left: ${_styles.markerSVGMarginLeft};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU1ZHIGZyb20gXCIuLi9zdmdcIjtcblxuaW1wb3J0IHsgbWFya2VyU1ZHSGVpZ2h0LCBtYXJrZXJTVkdNYXJnaW5MZWZ0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNYXJrZXJTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiNFwiIHg9XCIyXCIgeT1cIjE2XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwibWFya2VyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1hcmtlclNWRylgXG5cbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogJHttYXJrZXJTVkdIZWlnaHR9O1xuICBtYXJnaW4tbGVmdDogJHttYXJrZXJTVkdNYXJnaW5MZWZ0fTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtlclNWRyIsIlNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJkZWZhdWx0UHJvcGVydGllcyIsInZpZXdCb3giLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtYXJrZXJTVkdIZWlnaHQiLCJtYXJrZXJTVkdNYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5QkE7OztlQUFBOzs7c0VBdkJzQjs0REFFTjt3QkFFcUM7Ozs7OztBQUVyRCxNQUFNQSxrQkFBa0JDLFlBQUc7SUFDekJDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7WUFBS0MsT0FBTTtZQUFLQyxRQUFPO1lBQUlDLEdBQUU7WUFBSUMsR0FBRTs7SUFJMUM7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekJDLFNBQVM7UUFDVEMsV0FBVztJQUNiLEVBQUU7QUFDSjtNQUVBLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNaLFVBQVUsQ0FBQzs7O1VBRzFCLEVBQUVhLHVCQUFlLENBQUM7ZUFDYixFQUFFQywyQkFBbUIsQ0FBQzs7QUFFckMsQ0FBQyJ9