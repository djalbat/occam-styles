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
var markdownSyntaxStyle = "\n\n  .markdown.syntax > div > * { color: ".concat(_markdown.colour, "; }\n\n  .markdown.syntax > div > .comment { color: ").concat(_default.commentColour, "; }\n\n  .markdown.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = markdownSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L21hcmtkb3duXCI7XG5pbXBvcnQgeyBlcnJvckNvbG91ciwgY29tbWVudENvbG91ciwgZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L2RlZmF1bHRcIjtcblxuY29uc3QgbWFya2Rvd25TeW50YXhTdHlsZSA9IGBcblxuICAubWFya2Rvd24uc3ludGF4ID4gZGl2ID4gKiB7IGNvbG9yOiAke2NvbG91cn07IH1cblxuICAubWFya2Rvd24uc3ludGF4ID4gZGl2ID4gLmNvbW1lbnQgeyBjb2xvcjogJHtjb21tZW50Q29sb3VyfTsgfVxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAuZXJyb3Ige1xuICAgIGNvbG9yOiAke2Vycm9yQ29sb3VyfTtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJHtlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyfTtcbiAgfSBcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgbWFya2Rvd25TeW50YXhTdHlsZTtcbiJdLCJuYW1lcyI6WyJtYXJrZG93blN5bnRheFN0eWxlIiwiY29tbWVudENvbG91ciIsImNvbG91ciIsImVycm9yQ29sb3VyIiwiZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O3dCQWpCdUI7dUJBQytDO0FBRXRFLElBQU1BLHNCQUFzQixBQUFDLDZDQUlrQkMsT0FGUEMsZ0JBQU0sRUFBQyx3REFLbENDLE9BSGtDRixzQkFBYSxFQUFDLDJEQUtoQ0csT0FGaEJELG9CQUFXLEVBQUMsd0VBRThCLE9BQTFCQyxrQ0FBeUIsRUFBQztJQUt2RCxZQUFlSiJ9