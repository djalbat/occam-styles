"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var firaCodeMixin = "\n\n  font-family: \"Fira Code\", monospace;\n  font-size: ".concat(_constants.FONT_SIZE, ";\n  line-height: ").concat(_constants.LINE_HEIGHT, "px;\n  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n  font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n\n");
var lineHeight = _constants.LINE_HEIGHT; ///

Object.assign(firaCodeMixin, {
  lineHeight: lineHeight
});
var _default = firaCodeMixin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmFDb2RlLmpzIl0sIm5hbWVzIjpbImZpcmFDb2RlTWl4aW4iLCJGT05UX1NJWkUiLCJMSU5FX0hFSUdIVCIsImxpbmVIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsYUFBYSx3RUFHSkMsb0JBSEksK0JBSUZDLHNCQUpFLGlMQUFuQjtBQVVBLElBQU1DLFVBQVUsR0FBR0Qsc0JBQW5CLEMsQ0FBZ0M7O0FBRWhDRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsYUFBZCxFQUE2QjtBQUMzQkcsRUFBQUEsVUFBVSxFQUFWQTtBQUQyQixDQUE3QjtlQUllSCxhIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZPTlRfU0laRSwgTElORV9IRUlHSFQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGZpcmFDb2RlTWl4aW4gPSBgXG5cbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAke0ZPTlRfU0laRX07XG4gIGxpbmUtaGVpZ2h0OiAke0xJTkVfSEVJR0hUfXB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyAvKiBGb3JjZSBsaWdhdHVyZXMgZm9yIFdlYmtpdCwgQmxpbmssIEdlY2tvICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTsgIC8qIEVuYWJsZSBsaWdhdHVyZXMgZm9yIElFIDEwKywgRWRnZSAqL1xuXG5gO1xuXG5jb25zdCBsaW5lSGVpZ2h0ID0gTElORV9IRUlHSFQ7IC8vL1xuXG5PYmplY3QuYXNzaWduKGZpcmFDb2RlTWl4aW4sIHtcbiAgbGluZUhlaWdodFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmFDb2RlTWl4aW47XG4iXX0=