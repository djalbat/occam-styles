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
var _common = require("../scheme/common");
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
var MarkerSVG = function(properties) {
    var className = properties.className;
    return /*#__PURE__*/ React.createElement("svg", {
        width: "25mm",
        height: "25mm",
        viewBox: "0 0 25 25",
        className: "".concat(className, " marker")
    }, /*#__PURE__*/ React.createElement("g", {
        stroke: "none"
    }, /*#__PURE__*/ React.createElement("rect", {
        width: "14",
        height: "4",
        x: "2",
        y: "16"
    })));
};
var _default = (0, _easyWithStyle.default)(MarkerSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvbWFya2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb21tb25Db2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5jb25zdCBNYXJrZXJTVkcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjI1bW1cIiBoZWlnaHQ9XCIyNW1tXCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBtYXJrZXJgfT5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjRcIiB4PVwiMlwiIHk9XCIxNlwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYXJrZXJTVkcpYFxuXG4gIGZpbGw6ICR7Y29tbW9uQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1hcmtlclNWRyIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJnIiwic3Ryb2tlIiwicmVjdCIsIngiLCJ5Iiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBb0JiLFNBSUU7OztlQUpGLFFBSUU7OztrRUF0Qm9CLGlCQUFpQjtzQkFFVixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQU1BLFNBQVMsR0FBRyxTQUFDQyxVQUFVLEVBQUs7SUFDaEMsSUFBTSxBQUFFQyxTQUFTLEdBQUtELFVBQVUsQ0FBeEJDLFNBQVMsQUFBZSxBQUFDO0lBRWpDLHFCQUVFLG9CQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBQyxNQUFNO1FBQUNDLE1BQU0sRUFBQyxNQUFNO1FBQUNDLE9BQU8sRUFBQyxXQUFXO1FBQUNKLFNBQVMsRUFBRSxBQUFDLEVBQUEsQ0FBWSxNQUFPLENBQWpCQSxTQUFTLEVBQUMsU0FBTyxDQUFDO3FCQUNsRixvQkFBQ0ssR0FBQztRQUFDQyxNQUFNLEVBQUMsTUFBTTtxQkFDZCxvQkFBQ0MsTUFBSTtRQUFDTCxLQUFLLEVBQUMsSUFBSTtRQUFDQyxNQUFNLEVBQUMsR0FBRztRQUFDSyxDQUFDLEVBQUMsR0FBRztRQUFDQyxDQUFDLEVBQUMsSUFBSTtNQUFHLENBQ3pDLENBQ0EsQ0FFTjtBQUNKLENBQUMsQUFBQztJQUVGLFFBSUUsR0FKYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUNaLFNBQVMsQ0FBQyxvQkFFekJhLE9BQVksYUFBQSJ9