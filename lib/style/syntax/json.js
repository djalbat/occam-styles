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
var jsonSyntaxStyle = '\n\n  [class$="-json"].syntax > div > .null { color: '.concat(_json.nullColour, '; }\n\n  [class$="-json"].syntax > div > .number { color: ').concat(_json.numberColour, '; }\n\n  [class$="-json"].syntax > div > .boolean { color: ').concat(_json.booleanColour, '; }\n\n  [class$="-json"].syntax > div > .nonsense { color: ').concat(_default.nonsenseColour, '; } \n\n  [class$="-json"].syntax > div > .string-literal { color: ').concat(_default.stringLiteralColour, '; }\n\n  [class$="-json"].syntax > div > .error {\n    color: ').concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = jsonSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbnVsbENvbG91ciwgbnVtYmVyQ29sb3VyLCBib29sZWFuQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvanNvblwiO1xuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIG5vbnNlbnNlQ29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBqc29uU3ludGF4U3R5bGUgPSBgXG5cbiAgW2NsYXNzJD1cIi1qc29uXCJdLnN5bnRheCA+IGRpdiA+IC5udWxsIHsgY29sb3I6ICR7bnVsbENvbG91cn07IH1cblxuICBbY2xhc3MkPVwiLWpzb25cIl0uc3ludGF4ID4gZGl2ID4gLm51bWJlciB7IGNvbG9yOiAke251bWJlckNvbG91cn07IH1cblxuICBbY2xhc3MkPVwiLWpzb25cIl0uc3ludGF4ID4gZGl2ID4gLmJvb2xlYW4geyBjb2xvcjogJHtib29sZWFuQ29sb3VyfTsgfVxuXG4gIFtjbGFzcyQ9XCItanNvblwiXS5zeW50YXggPiBkaXYgPiAubm9uc2Vuc2UgeyBjb2xvcjogJHtub25zZW5zZUNvbG91cn07IH0gXG5cbiAgW2NsYXNzJD1cIi1qc29uXCJdLnN5bnRheCA+IGRpdiA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG5cbiAgW2NsYXNzJD1cIi1qc29uXCJdLnN5bnRheCA+IGRpdiA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2Vycm9yVGV4dERlY29yYXRpb25Db2xvdXJ9O1xuICB9IFxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBqc29uU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsianNvblN5bnRheFN0eWxlIiwibnVtYmVyQ29sb3VyIiwibnVsbENvbG91ciIsImJvb2xlYW5Db2xvdXIiLCJub25zZW5zZUNvbG91ciIsInN0cmluZ0xpdGVyYWxDb2xvdXIiLCJlcnJvckNvbG91ciIsImVycm9yVGV4dERlY29yYXRpb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQUE7OztvQkF2QndEO3VCQUNvQztBQUU1RixJQUFNQSxrQkFBa0IsQUFBQyx3REFJNEJDLE9BRkZDLGdCQUFVLEVBQUMsOERBSVJDLE9BRkRGLGtCQUFZLEVBQUMsK0RBSVhHLE9BRkRELG1CQUFhLEVBQUMsZ0VBSVBFLE9BRk5ELHVCQUFjLEVBQUMsdUVBS3pERSxPQUhnREQsNEJBQW1CLEVBQUMsa0VBS3BERSxPQUZoQkQsb0JBQVcsRUFBQyx3RUFFOEIsT0FBMUJDLGtDQUF5QixFQUFDO0lBS3ZELFlBQWVQIn0=