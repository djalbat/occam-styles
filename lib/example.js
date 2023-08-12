"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("./style/juliaMono"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
renderStyle((0, _juliaMono.default)());
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5pbXBvcnQganVsaWFNb25vU3R5bGUgZnJvbSBcIi4vc3R5bGUvanVsaWFNb25vXCI7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxucmVuZGVyU3R5bGUoanVsaWFNb25vU3R5bGUoKSk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcvPlxuXG4pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlIiwid2l0aFN0eWxlIiwicmVuZGVyU3R5bGVzIiwiYm9keSIsIkJvZHkiLCJqdWxpYU1vbm9TdHlsZSIsIm1vdW50IiwiVmlldyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztvRUFFZTtvQkFFRDsyREFJSjtnRUFDVTs7Ozs7O0FBSDNCLElBQVFBLGNBQThCQyxzQkFBUyxDQUF2Q0QsYUFBYUUsZUFBaUJELHNCQUFTLENBQTFCQztBQUtyQixJQUFNQyxPQUFPLElBQUlDLFVBQUk7QUFFckJGO0FBRUFGLFlBQVlLLElBQUFBLGtCQUFjO0FBRTFCRixLQUFLRyxLQUFLLGVBRVIsb0JBQUNDLGFBQUkifQ==