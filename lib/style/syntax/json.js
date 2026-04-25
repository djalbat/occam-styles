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
const _json = require("../../scheme/syntax/json");
const _default = require("../../scheme/syntax/default");
const jsonSyntaxStyle = `

  div.json.lines > div.line > div.syntax > .null { color: ${_json.nullColour}; }

  div.json.lines > div.line > div.syntax > .number { color: ${_json.numberColour}; }

  div.json.lines > div.line > div.syntax > .boolean { color: ${_json.booleanColour}; }

  div.json.lines > div.line > div.syntax > .nonsense { color: ${_default.nonsenseColour}; } 

  div.json.lines > div.line > div.syntax > .string-literal { color: ${_default.stringLiteralColour}; }

  div.json.lines > div.line > div.syntax > .error {
    color: ${_default.errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${_default.errorTextDecorationColour};
  } 

`;
const _default1 = jsonSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbnVsbENvbG91ciwgbnVtYmVyQ29sb3VyLCBib29sZWFuQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvanNvblwiO1xuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIG5vbnNlbnNlQ29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBqc29uU3ludGF4U3R5bGUgPSBgXG5cbiAgZGl2Lmpzb24ubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubnVsbCB7IGNvbG9yOiAke251bGxDb2xvdXJ9OyB9XG5cbiAgZGl2Lmpzb24ubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubnVtYmVyIHsgY29sb3I6ICR7bnVtYmVyQ29sb3VyfTsgfVxuXG4gIGRpdi5qc29uLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmJvb2xlYW4geyBjb2xvcjogJHtib29sZWFuQ29sb3VyfTsgfVxuXG4gIGRpdi5qc29uLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLm5vbnNlbnNlIHsgY29sb3I6ICR7bm9uc2Vuc2VDb2xvdXJ9OyB9IFxuXG4gIGRpdi5qc29uLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnN0cmluZy1saXRlcmFsIHsgY29sb3I6ICR7c3RyaW5nTGl0ZXJhbENvbG91cn07IH1cblxuICBkaXYuanNvbi5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2Vycm9yVGV4dERlY29yYXRpb25Db2xvdXJ9O1xuICB9IFxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBqc29uU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsianNvblN5bnRheFN0eWxlIiwibnVsbENvbG91ciIsIm51bWJlckNvbG91ciIsImJvb2xlYW5Db2xvdXIiLCJub25zZW5zZUNvbG91ciIsInN0cmluZ0xpdGVyYWxDb2xvdXIiLCJlcnJvckNvbG91ciIsImVycm9yVGV4dERlY29yYXRpb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQUE7OztzQkF2QndEO3lCQUNvQztBQUU1RixNQUFNQSxrQkFBa0IsQ0FBQzs7MERBRWlDLEVBQUVDLGdCQUFVLENBQUM7OzREQUVYLEVBQUVDLGtCQUFZLENBQUM7OzZEQUVkLEVBQUVDLG1CQUFhLENBQUM7OzhEQUVmLEVBQUVDLHVCQUFjLENBQUM7O29FQUVYLEVBQUVDLDRCQUFtQixDQUFDOzs7V0FHL0UsRUFBRUMsb0JBQVcsQ0FBQzs7MkJBRUUsRUFBRUMsa0NBQXlCLENBQUM7OztBQUd2RCxDQUFDO01BRUQsWUFBZVAifQ==