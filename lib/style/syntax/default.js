"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = require("../../scheme/syntax/default");

var defaultSyntaxStyle = "\n\n  .syntax, \n  .syntax > * { color: ".concat(_default2.colour, "; }\n  \n  .syntax > * a {\n    cursor: pointer;\n    pointer-events: auto;\n    text-decoration: none;\n  }\n\n  .syntax > * a:hover {\n    text-decoration: underline;\n  }\n\n  .syntax > button {\n    cursor: pointer;\n    outline: none;\n    display: inline;\n    pointer-events: auto;\n    background-color: transparent;\n  }\n  \n  .syntax > .error {\n    background-image: url(\"/css/image/squiggle.png\");\n    background-repeat: repeat-x;\n    background-position: bottom;\n  } \n\n");
var _default = defaultSyntaxStyle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFN5bnRheFN0eWxlIiwiY29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBLElBQU1BLGtCQUFrQixxREFHQ0MsZ0JBSEQsK2VBQXhCO2VBK0JlRCxrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9kZWZhdWx0XCI7XG5cbmNvbnN0IGRlZmF1bHRTeW50YXhTdHlsZSA9IGBcblxuICAuc3ludGF4LCBcbiAgLnN5bnRheCA+ICogeyBjb2xvcjogJHtjb2xvdXJ9OyB9XG4gIFxuICAuc3ludGF4ID4gKiBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLnN5bnRheCA+ICogYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAuc3ludGF4ID4gYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5zeW50YXggPiAuZXJyb3Ige1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9jc3MvaW1hZ2Uvc3F1aWdnbGUucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRTeW50YXhTdHlsZTtcbiJdfQ==