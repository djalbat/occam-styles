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
var markdownSyntaxStyle = "\n\n  .markdown.syntax > div > * { color: ".concat(_markdown.colour, "; }\n\n  .markdown.syntax > div > .table { color: ").concat(_markdown.tableColour, "; }\n\n  .markdown.syntax > div > .heading { color: ").concat(_markdown.headingColour, "; }\n\n  .markdown.syntax > div > .list-item { color: ").concat(_markdown.listItemColour, "; }\n\n  .markdown.syntax > div > .directive { color: ").concat(_markdown.directiveColour, "; }\n\n  .markdown.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = markdownSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVycm9yQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuaW1wb3J0IHsgY29sb3VyLCB0YWJsZUNvbG91ciwgaGVhZGluZ0NvbG91ciwgbGlzdEl0ZW1Db2xvdXIsIGRpcmVjdGl2ZUNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L21hcmtkb3duXCI7XG5cbmNvbnN0IG1hcmtkb3duU3ludGF4U3R5bGUgPSBgXG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+ICogeyBjb2xvcjogJHtjb2xvdXJ9OyB9XG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+IC50YWJsZSB7IGNvbG9yOiAke3RhYmxlQ29sb3VyfTsgfVxuXG4gIC5tYXJrZG93bi5zeW50YXggPiBkaXYgPiAuaGVhZGluZyB7IGNvbG9yOiAke2hlYWRpbmdDb2xvdXJ9OyB9XG5cbiAgLm1hcmtkb3duLnN5bnRheCA+IGRpdiA+IC5saXN0LWl0ZW0geyBjb2xvcjogJHtsaXN0SXRlbUNvbG91cn07IH1cblxuICAubWFya2Rvd24uc3ludGF4ID4gZGl2ID4gLmRpcmVjdGl2ZSB7IGNvbG9yOiAke2RpcmVjdGl2ZUNvbG91cn07IH1cblxuICAubWFya2Rvd24uc3ludGF4ID4gZGl2ID4gLmVycm9yIHtcbiAgICBjb2xvcjogJHtlcnJvckNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7ZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmtkb3duU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsibWFya2Rvd25TeW50YXhTdHlsZSIsInRhYmxlQ29sb3VyIiwiY29sb3VyIiwiaGVhZGluZ0NvbG91ciIsImxpc3RJdGVtQ29sb3VyIiwiZGlyZWN0aXZlQ29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQUE7Ozt1QkF2QnVEO3dCQUM2QjtBQUVwRixJQUFNQSxzQkFBc0IsQUFBQyw2Q0FJZ0JDLE9BRkxDLGdCQUFNLEVBQUMsc0RBSUFDLE9BRkZGLHFCQUFXLEVBQUMsd0RBSVJHLE9BRkZELHVCQUFhLEVBQUMsMERBSVpFLE9BRkFELHdCQUFjLEVBQUMsMERBS25ERSxPQUhvQ0QseUJBQWUsRUFBQywyREFLcENFLE9BRmhCRCxvQkFBVyxFQUFDLHdFQUU4QixPQUExQkMsa0NBQXlCLEVBQUM7SUFLdkQsWUFBZVAifQ==