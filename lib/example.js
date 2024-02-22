"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
var _juliaMono = /*#__PURE__*/ _interop_require_default(require("./style/juliaMono"));
var _computerModern = /*#__PURE__*/ _interop_require_default(require("./style/computerModern"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyle = _easywithstyle.default.renderStyle, renderStyles = _easywithstyle.default.renderStyles;
var body = new _easy.Body();
renderStyles();
renderStyle((0, _computerModern.default)());
renderStyle((0, _juliaMono.default)());
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCJqdXh0YXBvc2VcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5pbXBvcnQganVsaWFNb25vU3R5bGUgZnJvbSBcIi4vc3R5bGUvanVsaWFNb25vXCI7XG5pbXBvcnQgY29tcHV0ZXJNb2Rlcm5TdHlsZSBmcm9tIFwiLi9zdHlsZS9jb21wdXRlck1vZGVyblwiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbnJlbmRlclN0eWxlKGNvbXB1dGVyTW9kZXJuU3R5bGUoKSk7XG5cbnJlbmRlclN0eWxlKGp1bGlhTW9ub1N0eWxlKCkpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZSIsIndpdGhTdHlsZSIsInJlbmRlclN0eWxlcyIsImJvZHkiLCJCb2R5IiwiY29tcHV0ZXJNb2Rlcm5TdHlsZSIsImp1bGlhTW9ub1N0eWxlIiwibW91bnQiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEOzJEQUlKO2dFQUNVO3FFQUNLOzs7Ozs7QUFKaEMsSUFBUUEsY0FBOEJDLHNCQUFTLENBQXZDRCxhQUFhRSxlQUFpQkQsc0JBQVMsQ0FBMUJDO0FBTXJCLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQkY7QUFFQUYsWUFBWUssSUFBQUEsdUJBQW1CO0FBRS9CTCxZQUFZTSxJQUFBQSxrQkFBYztBQUUxQkgsS0FBS0ksS0FBSyxlQUVSLG9CQUFDQyxhQUFJIn0=