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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _colours = require("../colours");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  fill: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var PenSVG = function(properties) {
    var className = properties.className;
    return /*#__PURE__*/ React.createElement("svg", {
        width: "25mm",
        height: "25mm",
        viewBox: "0 0 25 25",
        className: "".concat(className, " pen")
    }, /*#__PURE__*/ React.createElement("g", {
        stroke: "none"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M 1.5237345,18.904425 0,25 6.0953323,23.475909 14.476266,15.095182 16,13.571485 11.428403,9 9.9046684,10.523697 Z m 8.3813272,-5.33294 1.5237343,-1.523697 1.523736,1.523697 -1.523736,1.523697 z"
    })));
};
var _default = (0, _easyWithStyle.default)(PenSVG)(_templateObject(), _colours.woodsmoke);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvcGVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3b29kc21va2UgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5jb25zdCBQZW5TVkcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjI1bW1cIiBoZWlnaHQ9XCIyNW1tXCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBwZW5gfT5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHBhdGggZD1cIk0gMS41MjM3MzQ1LDE4LjkwNDQyNSAwLDI1IDYuMDk1MzMyMywyMy40NzU5MDkgMTQuNDc2MjY2LDE1LjA5NTE4MiAxNiwxMy41NzE0ODUgMTEuNDI4NDAzLDkgOS45MDQ2Njg0LDEwLjUyMzY5NyBaIG0gOC4zODEzMjcyLC01LjMzMjk0IDEuNTIzNzM0MywtMS41MjM2OTcgMS41MjM3MzYsMS41MjM2OTcgLTEuNTIzNzM2LDEuNTIzNjk3IHpcIi8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQZW5TVkcpYFxuXG4gIGZpbGw6ICR7d29vZHNtb2tlfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlBlblNWRyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJnIiwic3Ryb2tlIiwicGF0aCIsImQiLCJ3aXRoU3R5bGUiLCJ3b29kc21va2UiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFvQmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQXRCb0IsaUJBQWlCO3VCQUViLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLE1BQU0sR0FBRyxTQUFDQyxVQUFVLEVBQUs7SUFDN0IsSUFBTSxBQUFFQyxTQUFTLEdBQUtELFVBQVUsQ0FBeEJDLFNBQVMsQUFBZSxBQUFDO0lBRWpDLHFCQUVFLG9CQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBQyxNQUFNO1FBQUNDLE1BQU0sRUFBQyxNQUFNO1FBQUNDLE9BQU8sRUFBQyxXQUFXO1FBQUNKLFNBQVMsRUFBRSxBQUFDLEVBQUEsQ0FBWSxNQUFJLENBQWRBLFNBQVMsRUFBQyxNQUFJLENBQUM7cUJBQy9FLG9CQUFDSyxHQUFDO1FBQUNDLE1BQU0sRUFBQyxNQUFNO3FCQUNkLG9CQUFDQyxNQUFJO1FBQUNDLENBQUMsRUFBQyxtTUFBbU07TUFBRSxDQUMzTSxDQUNBLENBRU47QUFDSixDQUFDLEFBQUM7SUFFRixRQUlFLEdBSmFDLElBQUFBLGNBQVMsUUFBQSxFQUFDWCxNQUFNLENBQUMsb0JBRXRCWSxRQUFTLFVBQUEifQ==