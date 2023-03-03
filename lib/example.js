"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _view = /*#__PURE__*/ _interopRequireDefault(require("./example/view"));
var _firaCode = /*#__PURE__*/ _interopRequireDefault(require("./style/firaCode"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easyWithStyle.default.renderStyle, renderStyles = _easyWithStyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
renderStyle((0, _firaCode.default)());
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5pbXBvcnQgZmlyYUNvZGVTdHlsZSBmcm9tIFwiLi9zdHlsZS9maXJhQ29kZVwiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKGZpcmFDb2RlU3R5bGUoKSk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlIiwid2l0aFN0eWxlIiwicmVuZGVyU3R5bGVzIiwiYm9keSIsIkJvZHkiLCJmaXJhQ29kZVN0eWxlIiwibW91bnQiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO2tFQUVlO29CQUVEO3lEQUlKOzZEQUNTOzs7Ozs7QUFIMUIsSUFBUUEsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBS3JCLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQkY7QUFFQUYsWUFBWUssSUFBQUEsaUJBQWE7QUFFekJGLEtBQUtHLEtBQUssZUFFUixvQkFBQ0MsYUFBSSJ9