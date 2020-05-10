"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamColours = require("occam-colours");

var colour = _occamColours.defaultSyntaxScheme.colour;
var defaultSyntaxStyle = "\n\n  .syntax, \n  .syntax > * { color: ".concat(colour, "; }\n  \n  .syntax > a {\n    pointer-events: auto;\n    text-decoration: none;\n  }\n\n  .syntax > button {\n    cursor: pointer;\n    outline: none;\n    display: inline;\n    pointer-events: auto;\n    background-color: transparent;\n  }\n  \n  .syntax > .error {\n    background-image: url(\"./image/squiggle.png\");\n    background-repeat: repeat-x;\n    background-position: bottom;\n  } \n\n");
var _default = defaultSyntaxStyle;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuanMiXSwibmFtZXMiOlsiY29sb3VyIiwiZGVmYXVsdFN5bnRheFNjaGVtZSIsImRlZmF1bHRTeW50YXhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7SUFFUUEsTSxHQUFXQyxpQyxDQUFYRCxNO0FBRVIsSUFBTUUsa0JBQWtCLHFEQUdDRixNQUhELG1aQUF4QjtlQTBCZUUsa0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVmYXVsdFN5bnRheFNjaGVtZSB9IGZyb20gXCJvY2NhbS1jb2xvdXJzXCI7XG5cbmNvbnN0IHsgY29sb3VyIH0gPSBkZWZhdWx0U3ludGF4U2NoZW1lO1xuXG5jb25zdCBkZWZhdWx0U3ludGF4U3R5bGUgPSBgXG5cbiAgLnN5bnRheCwgXG4gIC5zeW50YXggPiAqIHsgY29sb3I6ICR7Y29sb3VyfTsgfVxuICBcbiAgLnN5bnRheCA+IGEge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5zeW50YXggPiBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLnN5bnRheCA+IC5lcnJvciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9pbWFnZS9zcXVpZ2dsZS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgfSBcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFN5bnRheFN0eWxlO1xuIl19