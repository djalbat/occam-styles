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
var _nominal = require("../../scheme/syntax/nominal");
var nominalSyntaxStyle = "\n\n  .nominal.syntax > div > .type { color: ".concat(_nominal.typeColour, "; }\n\n  .nominal.syntax > div > .special { color: ").concat(_nominal.specialColour, "; }\n  \n  .nominal.syntax > div > .comment { color: ").concat(_default.commentColour, "; }\n  \n  .nominal.syntax > div > .nonsense { color: ").concat(_default.nonsenseColour, "; } \n\n  .nominal.syntax > div > .operator { color: ").concat(_nominal.operatorColour, "; }\n  \n  .nominal.syntax > div > .context { color: ").concat(_nominal.contextColour, "; }\n\n  .nominal.syntax > div > .meta-type { color: ").concat(_nominal.metaTypeColour, "; }\n\n  .nominal.syntax > div > .primary-keyword { color: ").concat(_nominal.keywordColour, "; }\n  \n  .nominal.syntax > div > .secondary-keyword { color: ").concat(_nominal.keywordColour, "; }\n  \n  .nominal.syntax > div > .string-literal { color: ").concat(_default.stringLiteralColour, "; }\n\n  .nominal.syntax > div > .label { color: ").concat(_nominal.labelColour, "; }\n  \n  .nominal.syntax > div > .label:hover { color: ").concat(_nominal.labelHoverColour, "; }\n\n  .nominal.syntax > div > .label:disabled { color: ").concat(_nominal.disabledLabelColour, "; }\n  \n  .nominal.syntax > div > .reference { color: ").concat(_nominal.referenceColour, "; }\n  \n  .nominal.syntax > div > .reference:hover { color: ").concat(_nominal.referenceHoverColour, "; }\n\n  .nominal.syntax > div > .reference:disabled { color: ").concat(_nominal.disabledReferenceColour, "; }\n  \n  .nominal.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = nominalSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIGNvbW1lbnRDb2xvdXIsIG5vbnNlbnNlQ29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuaW1wb3J0IHsgdHlwZUNvbG91cixcbiAgICAgICAgIHNwZWNpYWxDb2xvdXIsXG4gICAgICAgICBrZXl3b3JkQ29sb3VyLFxuICAgICAgICAgb3BlcmF0b3JDb2xvdXIsXG4gICAgICAgICBjb250ZXh0Q29sb3VyLFxuICAgICAgICAgbWV0YVR5cGVDb2xvdXIsXG4gICAgICAgICBsYWJlbENvbG91cixcbiAgICAgICAgIGxhYmVsSG92ZXJDb2xvdXIsXG4gICAgICAgICBkaXNhYmxlZExhYmVsQ29sb3VyLFxuICAgICAgICAgcmVmZXJlbmNlQ29sb3VyLFxuICAgICAgICAgcmVmZXJlbmNlSG92ZXJDb2xvdXIsXG4gICAgICAgICBkaXNhYmxlZFJlZmVyZW5jZUNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L25vbWluYWxcIjtcblxuY29uc3Qgbm9taW5hbFN5bnRheFN0eWxlID0gYFxuXG4gIC5ub21pbmFsLnN5bnRheCA+IGRpdiA+IC50eXBlIHsgY29sb3I6ICR7dHlwZUNvbG91cn07IH1cblxuICAubm9taW5hbC5zeW50YXggPiBkaXYgPiAuc3BlY2lhbCB7IGNvbG9yOiAke3NwZWNpYWxDb2xvdXJ9OyB9XG4gIFxuICAubm9taW5hbC5zeW50YXggPiBkaXYgPiAuY29tbWVudCB7IGNvbG9yOiAke2NvbW1lbnRDb2xvdXJ9OyB9XG4gIFxuICAubm9taW5hbC5zeW50YXggPiBkaXYgPiAubm9uc2Vuc2UgeyBjb2xvcjogJHtub25zZW5zZUNvbG91cn07IH0gXG5cbiAgLm5vbWluYWwuc3ludGF4ID4gZGl2ID4gLm9wZXJhdG9yIHsgY29sb3I6ICR7b3BlcmF0b3JDb2xvdXJ9OyB9XG4gIFxuICAubm9taW5hbC5zeW50YXggPiBkaXYgPiAuY29udGV4dCB7IGNvbG9yOiAke2NvbnRleHRDb2xvdXJ9OyB9XG5cbiAgLm5vbWluYWwuc3ludGF4ID4gZGl2ID4gLm1ldGEtdHlwZSB7IGNvbG9yOiAke21ldGFUeXBlQ29sb3VyfTsgfVxuXG4gIC5ub21pbmFsLnN5bnRheCA+IGRpdiA+IC5wcmltYXJ5LWtleXdvcmQgeyBjb2xvcjogJHtrZXl3b3JkQ29sb3VyfTsgfVxuICBcbiAgLm5vbWluYWwuc3ludGF4ID4gZGl2ID4gLnNlY29uZGFyeS1rZXl3b3JkIHsgY29sb3I6ICR7a2V5d29yZENvbG91cn07IH1cbiAgXG4gIC5ub21pbmFsLnN5bnRheCA+IGRpdiA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG5cbiAgLm5vbWluYWwuc3ludGF4ID4gZGl2ID4gLmxhYmVsIHsgY29sb3I6ICR7bGFiZWxDb2xvdXJ9OyB9XG4gIFxuICAubm9taW5hbC5zeW50YXggPiBkaXYgPiAubGFiZWw6aG92ZXIgeyBjb2xvcjogJHtsYWJlbEhvdmVyQ29sb3VyfTsgfVxuXG4gIC5ub21pbmFsLnN5bnRheCA+IGRpdiA+IC5sYWJlbDpkaXNhYmxlZCB7IGNvbG9yOiAke2Rpc2FibGVkTGFiZWxDb2xvdXJ9OyB9XG4gIFxuICAubm9taW5hbC5zeW50YXggPiBkaXYgPiAucmVmZXJlbmNlIHsgY29sb3I6ICR7cmVmZXJlbmNlQ29sb3VyfTsgfVxuICBcbiAgLm5vbWluYWwuc3ludGF4ID4gZGl2ID4gLnJlZmVyZW5jZTpob3ZlciB7IGNvbG9yOiAke3JlZmVyZW5jZUhvdmVyQ29sb3VyfTsgfVxuXG4gIC5ub21pbmFsLnN5bnRheCA+IGRpdiA+IC5yZWZlcmVuY2U6ZGlzYWJsZWQgeyBjb2xvcjogJHtkaXNhYmxlZFJlZmVyZW5jZUNvbG91cn07IH1cbiAgXG4gIC5ub21pbmFsLnN5bnRheCA+IGRpdiA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2Vycm9yVGV4dERlY29yYXRpb25Db2xvdXJ9O1xuICB9IFxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBub21pbmFsU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsibm9taW5hbFN5bnRheFN0eWxlIiwic3BlY2lhbENvbG91ciIsInR5cGVDb2xvdXIiLCJjb21tZW50Q29sb3VyIiwibm9uc2Vuc2VDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsImNvbnRleHRDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwibGFiZWxDb2xvdXIiLCJsYWJlbEhvdmVyQ29sb3VyIiwiZGlzYWJsZWRMYWJlbENvbG91ciIsInJlZmVyZW5jZUNvbG91ciIsInJlZmVyZW5jZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VDb2xvdXIiLCJlcnJvckNvbG91ciIsImVycm9yVGV4dERlY29yYXRpb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBEQTs7O2VBQUE7Ozt1QkF4RDJHO3VCQVluRTtBQUV4QyxJQUFNQSxxQkFBcUIsQUFBQyxnREFJa0JDLE9BRkhDLG1CQUFVLEVBQUMsdURBSVJDLE9BRkFGLHNCQUFhLEVBQUMseURBSWJHLE9BRkRELHNCQUFhLEVBQUMsMERBSWJFLE9BRkFELHVCQUFjLEVBQUMseURBSWhCRSxPQUZDRCx1QkFBYyxFQUFDLHlEQUlkRSxPQUZGRCxzQkFBYSxFQUFDLHlEQUlORSxPQUZORCx1QkFBYyxFQUFDLCtEQUlQQyxPQUZGQSxzQkFBYSxFQUFDLG1FQUlmQyxPQUZHRCxzQkFBYSxFQUFDLGdFQUkxQkUsT0FGU0QsNEJBQW1CLEVBQUMscURBSXZCRSxPQUZORCxvQkFBVyxFQUFDLDZEQUlIRSxPQUZIRCx5QkFBZ0IsRUFBQyw4REFJbkJFLE9BRktELDRCQUFtQixFQUFDLDJEQUluQkUsT0FGTkQsd0JBQWUsRUFBQyxpRUFJUEUsT0FGSEQsNkJBQW9CLEVBQUMsa0VBSzlERSxPQUg0Q0QsZ0NBQXVCLEVBQUMsNERBS3BERSxPQUZoQkQsb0JBQVcsRUFBQyx3RUFFOEIsT0FBMUJDLGtDQUF5QixFQUFDO0lBS3ZELFlBQWVqQiJ9