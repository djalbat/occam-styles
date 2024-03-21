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
var markdownSyntaxStyle = "\n\n  .markdown.syntax > div > * { color: ".concat(_markdown.colour, "; }\n\n  .markdown.syntax > div > .comment { color: ").concat(_default.commentColour, "; }\n\n  .markdown.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.underlineColour, ";\n  } \n\n");
var _default1 = markdownSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L21hcmtkb3duXCI7XG5pbXBvcnQgeyBlcnJvckNvbG91ciwgY29tbWVudENvbG91ciwgdW5kZXJsaW5lQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBtYXJrZG93blN5bnRheFN0eWxlID0gYFxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAqIHsgY29sb3I6ICR7Y29sb3VyfTsgfVxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAuY29tbWVudCB7IGNvbG9yOiAke2NvbW1lbnRDb2xvdXJ9OyB9XG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke3VuZGVybGluZUNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmtkb3duU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsibWFya2Rvd25TeW50YXhTdHlsZSIsImNvbW1lbnRDb2xvdXIiLCJjb2xvdXIiLCJlcnJvckNvbG91ciIsInVuZGVybGluZUNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O3dCQWpCdUI7dUJBQ3FDO0FBRTVELElBQU1BLHNCQUFzQixBQUFDLDZDQUlrQkMsT0FGUEMsZ0JBQU0sRUFBQyx3REFLbENDLE9BSGtDRixzQkFBYSxFQUFDLDJEQUtoQ0csT0FGaEJELG9CQUFXLEVBQUMsd0VBRW9CLE9BQWhCQyx3QkFBZSxFQUFDO0lBSzdDLFlBQWVKIn0=