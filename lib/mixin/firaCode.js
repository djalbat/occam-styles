"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var firaCodeMixin = String("\n\n  font-family: \"Fira Code\", monospace;\n  font-size: ".concat(_constants.FONT_SIZE, ";\n  line-height: ").concat(_constants.LINE_HEIGHT, "px;\n  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n  font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n\n"));
var lineHeight = _constants.LINE_HEIGHT; ///

Object.assign(firaCodeMixin, {
  lineHeight: lineHeight
});
var _default = firaCodeMixin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmFDb2RlLmpzIl0sIm5hbWVzIjpbImZpcmFDb2RlTWl4aW4iLCJTdHJpbmciLCJGT05UX1NJWkUiLCJMSU5FX0hFSUdIVCIsImxpbmVIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxNQUFNLHNFQUdiQyxvQkFIYSwrQkFJWEMsc0JBSlcsa0xBQTVCO0FBVUEsSUFBTUMsVUFBVSxHQUFHRCxzQkFBbkIsQyxDQUFnQzs7QUFFaENFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixhQUFkLEVBQTZCO0FBQzNCSSxFQUFBQSxVQUFVLEVBQVZBO0FBRDJCLENBQTdCO2VBSWVKLGEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9OVF9TSVpFLCBMSU5FX0hFSUdIVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZmlyYUNvZGVNaXhpbiA9IFN0cmluZyhgXG5cbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBDb2RlXCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAke0ZPTlRfU0laRX07XG4gIGxpbmUtaGVpZ2h0OiAke0xJTkVfSEVJR0hUfXB4O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5OyAvKiBGb3JjZSBsaWdhdHVyZXMgZm9yIFdlYmtpdCwgQmxpbmssIEdlY2tvICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjYWx0XCIgMTsgIC8qIEVuYWJsZSBsaWdhdHVyZXMgZm9yIElFIDEwKywgRWRnZSAqL1xuXG5gKTtcblxuY29uc3QgbGluZUhlaWdodCA9IExJTkVfSEVJR0hUOyAvLy9cblxuT2JqZWN0LmFzc2lnbihmaXJhQ29kZU1peGluLCB7XG4gIGxpbmVIZWlnaHRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmaXJhQ29kZU1peGluO1xuIl19