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
var _common = require("../../scheme/common");
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
        "\n\n  fill: none;\n  stroke: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RightTriangleSVG = function(properties) {
    var className = properties.className;
    return /*#__PURE__*/ React.createElement("svg", {
        width: "25mm",
        height: "25mm",
        viewBox: "0 0 25 25",
        className: "".concat(className, " right-triangle")
    }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
        style: "stroke-width:1",
        d: "m 4.9708252,21.371981 v -6.802413 l 6.8146388,3.401207 z"
    })));
};
var _default = (0, _easyWithStyle.default)(RightTriangleSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdHJpYW5nbGUvcmlnaHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbW1vbkNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvY29tbW9uXCI7XG5cbmNvbnN0IFJpZ2h0VHJpYW5nbGVTVkcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjI1bW1cIiBoZWlnaHQ9XCIyNW1tXCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByaWdodC10cmlhbmdsZWB9PlxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIHN0eWxlPVwic3Ryb2tlLXdpZHRoOjFcIiBkPVwibSA0Ljk3MDgyNTIsMjEuMzcxOTgxIHYgLTYuODAyNDEzIGwgNi44MTQ2Mzg4LDMuNDAxMjA3IHpcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmlnaHRUcmlhbmdsZVNWRylgXG5cbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAke2NvbW1vbkNvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJSaWdodFRyaWFuZ2xlU1ZHIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImciLCJwYXRoIiwic3R5bGUiLCJkIiwid2l0aFN0eWxlIiwiY29tbW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBb0JiLFNBS0U7OztlQUxGLFFBS0U7OztrRUF2Qm9CLGlCQUFpQjtzQkFFVixxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU1BLGdCQUFnQixHQUFHLFNBQUNDLFVBQVUsRUFBSztJQUN2QyxJQUFNLEFBQUVDLFNBQVMsR0FBS0QsVUFBVSxDQUF4QkMsU0FBUyxBQUFlLEFBQUM7SUFFakMscUJBRUUsb0JBQUNDLEtBQUc7UUFBQ0MsS0FBSyxFQUFDLE1BQU07UUFBQ0MsTUFBTSxFQUFDLE1BQU07UUFBQ0MsT0FBTyxFQUFDLFdBQVc7UUFBQ0osU0FBUyxFQUFFLEFBQUMsRUFBQSxDQUFZLE1BQWUsQ0FBekJBLFNBQVMsRUFBQyxpQkFBZSxDQUFDO3FCQUMxRixvQkFBQ0ssR0FBQyxzQkFDQSxvQkFBQ0MsTUFBSTtRQUFDQyxLQUFLLEVBQUMsZ0JBQWdCO1FBQUNDLENBQUMsRUFBQywwREFBMEQ7TUFBRyxDQUMxRixDQUNBLENBRU47QUFDSixDQUFDLEFBQUM7SUFFRixRQUtFLEdBTGFDLElBQUFBLGNBQVMsUUFBQSxFQUFDWCxnQkFBZ0IsQ0FBQyxvQkFHOUJZLE9BQVksYUFBQSJ9