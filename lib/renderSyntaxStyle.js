"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderSyntaxStyle;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _syntax = _interopRequireDefault(require("./style/syntax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var renderStyle = _easyWithStyle["default"].renderStyle;

function renderSyntaxStyle(fontSize, lineHeight) {
  renderStyle("\n\n    ".concat((0, _syntax["default"])(fontSize, lineHeight), "\n    \n  "));
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlclN5bnRheFN0eWxlLmpzIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlIiwid2l0aFN0eWxlIiwicmVuZGVyU3ludGF4U3R5bGUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7QUFGMEM7SUFJbENBLFcsR0FBZ0JDLHlCLENBQWhCRCxXOztBQUVPLFNBQVNFLGlCQUFULENBQTJCQyxRQUEzQixFQUFxQ0MsVUFBckMsRUFBaUQ7QUFDOURKLEVBQUFBLFdBQVcsbUJBRVAsd0JBQVlHLFFBQVosRUFBc0JDLFVBQXRCLENBRk8sZ0JBQVg7QUFLRDs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgc3ludGF4U3R5bGUgZnJvbSBcIi4vc3R5bGUvc3ludGF4XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGUgfSA9IHdpdGhTdHlsZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU3ludGF4U3R5bGUoZm9udFNpemUsIGxpbmVIZWlnaHQpIHtcbiAgcmVuZGVyU3R5bGUoYFxuXG4gICAgJHtzeW50YXhTdHlsZShmb250U2l6ZSwgbGluZUhlaWdodCl9XG4gICAgXG4gIGApO1xufTtcbiJdfQ==