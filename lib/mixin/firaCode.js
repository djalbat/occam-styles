"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var firaCodeMixin = "\n\n  font-family: \"Fira Code\", monospace;\n  font-size: ".concat(_constants.FONT_SIZE, ";\n  line-height: ").concat(_constants.LINE_HEIGHT, "px;\n  text-rendering: optimizeLegibility; /* Force ligatures for Webkit, Blink, Gecko */\n  font-feature-settings: \"calt\" 1;  /* Enable ligatures for IE 10+, Edge */\n\n");
var lineHeight = _constants.LINE_HEIGHT;
Object.assign(firaCodeMixin, {
  lineHeight: lineHeight
});
var _default = firaCodeMixin;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmFDb2RlLmpzIl0sIm5hbWVzIjpbImZpcmFDb2RlTWl4aW4iLCJGT05UX1NJWkUiLCJMSU5FX0hFSUdIVCIsImxpbmVIZWlnaHQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsYUFBYSx3RUFHSkMsb0JBSEksK0JBSUZDLHNCQUpFLGlMQUFuQjtBQVVBLElBQU1DLFVBQVUsR0FBR0Qsc0JBQW5CO0FBRUFFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxhQUFkLEVBQTZCO0FBQzNCRyxFQUFBQSxVQUFVLEVBQVZBO0FBRDJCLENBQTdCO2VBSWVILGEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9OVF9TSVpFLCBMSU5FX0hFSUdIVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgZmlyYUNvZGVNaXhpbiA9IGBcblxuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6ICR7Rk9OVF9TSVpFfTtcbiAgbGluZS1oZWlnaHQ6ICR7TElORV9IRUlHSFR9cHg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7IC8qIEZvcmNlIGxpZ2F0dXJlcyBmb3IgV2Via2l0LCBCbGluaywgR2Vja28gKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImNhbHRcIiAxOyAgLyogRW5hYmxlIGxpZ2F0dXJlcyBmb3IgSUUgMTArLCBFZGdlICovXG5cbmA7XG5cbmNvbnN0IGxpbmVIZWlnaHQgPSBMSU5FX0hFSUdIVDtcblxuT2JqZWN0LmFzc2lnbihmaXJhQ29kZU1peGluLCB7XG4gIGxpbmVIZWlnaHRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmaXJhQ29kZU1peGluO1xuIl19