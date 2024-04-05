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
var _markdown = require("../../scheme/syntax/markdown");
var _default = require("../../scheme/syntax/default");
var markdownSyntaxStyle = "\n\n  .markdown.syntax > div > * { color: ".concat(_markdown.colour, "; }\n\n  .markdown.syntax > div > .import { color: ").concat(_markdown.importColour, "; }\n\n  .markdown.syntax > div > .comment { color: ").concat(_default.commentColour, "; }\n\n  .markdown.syntax > div > .string-literal { color: ").concat(_default.stringLiteralColour, "; }\n  \n  .markdown.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = markdownSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbG91ciwgaW1wb3J0Q29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvbWFya2Rvd25cIjtcbmltcG9ydCB7IGVycm9yQ29sb3VyLCBjb21tZW50Q29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBtYXJrZG93blN5bnRheFN0eWxlID0gYFxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAqIHsgY29sb3I6ICR7Y29sb3VyfTsgfVxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAuaW1wb3J0IHsgY29sb3I6ICR7aW1wb3J0Q29sb3VyfTsgfVxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAuY29tbWVudCB7IGNvbG9yOiAke2NvbW1lbnRDb2xvdXJ9OyB9XG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG4gIFxuICAubWFya2Rvd24uc3ludGF4ID4gZGl2ID4gLmVycm9yIHtcbiAgICBjb2xvcjogJHtlcnJvckNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7ZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmtkb3duU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsibWFya2Rvd25TeW50YXhTdHlsZSIsImltcG9ydENvbG91ciIsImNvbG91ciIsImNvbW1lbnRDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQUE7Ozt3QkFyQnFDO3VCQUNzRDtBQUUzRixJQUFNQSxzQkFBc0IsQUFBQyw2Q0FJaUJDLE9BRk5DLGdCQUFNLEVBQUMsdURBSUFDLE9BRkRGLHNCQUFZLEVBQUMsd0RBSUxHLE9BRlBELHNCQUFhLEVBQUMsK0RBS2hERSxPQUh5Q0QsNEJBQW1CLEVBQUMsNkRBSzdDRSxPQUZoQkQsb0JBQVcsRUFBQyx3RUFFOEIsT0FBMUJDLGtDQUF5QixFQUFDO0lBS3ZELFlBQWVOIn0=