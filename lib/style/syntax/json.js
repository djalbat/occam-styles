"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default1;
    }
});
var _json = require("../../scheme/syntax/json");
var _default = require("../../scheme/syntax/default");
var jsonSyntaxStyle = "\n\n  .json.syntax > div > .number { color: ".concat(_json.numberColour, "; }\n\n  .json.syntax > div > .string-literal { color: ").concat(_default.stringLiteralColour, "; }\n\n  .json.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = jsonSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbnVtYmVyQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvanNvblwiO1xuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIHN0cmluZ0xpdGVyYWxDb2xvdXIsIGVycm9yVGV4dERlY29yYXRpb25Db2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9kZWZhdWx0XCI7XG5cbmNvbnN0IGpzb25TeW50YXhTdHlsZSA9IGBcblxuICAuanNvbi5zeW50YXggPiBkaXYgPiAubnVtYmVyIHsgY29sb3I6ICR7bnVtYmVyQ29sb3VyfTsgfVxuXG4gIC5qc29uLnN5bnRheCA+IGRpdiA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG5cbiAgLmpzb24uc3ludGF4ID4gZGl2ID4gLmVycm9yIHtcbiAgICBjb2xvcjogJHtlcnJvckNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7ZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGpzb25TeW50YXhTdHlsZTtcbiJdLCJuYW1lcyI6WyJqc29uU3ludGF4U3R5bGUiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwibnVtYmVyQ29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7b0JBakI2Qjt1QkFDK0M7QUFFNUUsSUFBTUEsa0JBQWtCLEFBQUMsK0NBSXlCQyxPQUZSQyxrQkFBWSxFQUFDLDJEQUsxQ0MsT0FIcUNGLDRCQUFtQixFQUFDLHVEQUt6Q0csT0FGaEJELG9CQUFXLEVBQUMsd0VBRThCLE9BQTFCQyxrQ0FBeUIsRUFBQztJQUt2RCxZQUFlSiJ9