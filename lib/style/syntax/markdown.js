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
var _default = require("../../scheme/syntax/default");
var _markdown = require("../../scheme/syntax/markdown");
var markdownSyntaxStyle = "\n\n  .markdown.syntax > div > * { color: ".concat(_markdown.colour, "; }\n\n  .markdown.syntax > div > .heading { color: ").concat(_markdown.headingColour, "; }\n\n  .markdown.syntax > div > .directive { color: ").concat(_markdown.directiveColour, "; }\n\n  .markdown.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = markdownSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVycm9yQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuaW1wb3J0IHsgY29sb3VyLCBoZWFkaW5nQ29sb3VyLCBkaXJlY3RpdmVDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9tYXJrZG93blwiO1xuXG5jb25zdCBtYXJrZG93blN5bnRheFN0eWxlID0gYFxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAqIHsgY29sb3I6ICR7Y29sb3VyfTsgfVxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAuaGVhZGluZyB7IGNvbG9yOiAke2hlYWRpbmdDb2xvdXJ9OyB9XG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+IC5kaXJlY3RpdmUgeyBjb2xvcjogJHtkaXJlY3RpdmVDb2xvdXJ9OyB9XG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2Vycm9yVGV4dERlY29yYXRpb25Db2xvdXJ9O1xuICB9IFxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBtYXJrZG93blN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbIm1hcmtkb3duU3ludGF4U3R5bGUiLCJoZWFkaW5nQ29sb3VyIiwiY29sb3VyIiwiZGlyZWN0aXZlQ29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7Ozt1QkFuQnVEO3dCQUNBO0FBRXZELElBQU1BLHNCQUFzQixBQUFDLDZDQUlrQkMsT0FGUEMsZ0JBQU0sRUFBQyx3REFJRUMsT0FGRkYsdUJBQWEsRUFBQywwREFLaERHLE9BSG9DRCx5QkFBZSxFQUFDLDJEQUtwQ0UsT0FGaEJELG9CQUFXLEVBQUMsd0VBRThCLE9BQTFCQyxrQ0FBeUIsRUFBQztJQUt2RCxZQUFlTCJ9