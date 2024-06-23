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
var _customGrammarBNF = require("../../scheme/syntax/customGrammarBNF");
var _default = require("../../scheme/syntax/default");
var customGrammarBNFSyntaxStyle = "\n\n  .custom-grammar-bnf.syntax > div > .name { color: ".concat(_customGrammarBNF.nameColour, "; }\n\n  .custom-grammar-bnf.syntax > div > .type { color: ").concat(_customGrammarBNF.typeColour, "; }\n\n  .custom-grammar-bnf.syntax > div > .string-literal { color: ").concat(_default.stringLiteralColour, "; }\n  \n  .custom-grammar-bnf.syntax > div > .error {\n    color: ").concat(_default.errorColour, ";\n    text-decoration-line: underline;\n    text-decoration-color: ").concat(_default.errorTextDecorationColour, ";\n  } \n\n");
var _default1 = customGrammarBNFSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbmFtZUNvbG91ciwgdHlwZUNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L2N1c3RvbUdyYW1tYXJCTkZcIlxuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIHN0cmluZ0xpdGVyYWxDb2xvdXIsIGVycm9yVGV4dERlY29yYXRpb25Db2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9kZWZhdWx0XCI7XG5cbmNvbnN0IGN1c3RvbUdyYW1tYXJCTkZTeW50YXhTdHlsZSA9IGBcblxuICAuY3VzdG9tLWdyYW1tYXItYm5mLnN5bnRheCA+IGRpdiA+IC5uYW1lIHsgY29sb3I6ICR7bmFtZUNvbG91cn07IH1cblxuICAuY3VzdG9tLWdyYW1tYXItYm5mLnN5bnRheCA+IGRpdiA+IC50eXBlIHsgY29sb3I6ICR7dHlwZUNvbG91cn07IH1cblxuICAuY3VzdG9tLWdyYW1tYXItYm5mLnN5bnRheCA+IGRpdiA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG4gIFxuICAuY3VzdG9tLWdyYW1tYXItYm5mLnN5bnRheCA+IGRpdiA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2Vycm9yVGV4dERlY29yYXRpb25Db2xvdXJ9O1xuICB9IFxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21HcmFtbWFyQk5GU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsiY3VzdG9tR3JhbW1hckJORlN5bnRheFN0eWxlIiwidHlwZUNvbG91ciIsIm5hbWVDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQkE7OztlQUFBOzs7Z0NBbkJ1Qzt1QkFDcUM7QUFFNUUsSUFBTUEsOEJBQThCLEFBQUMsMkRBSWlCQyxPQUZBQyw0QkFBVSxFQUFDLCtEQUlEQyxPQUZWRiw0QkFBVSxFQUFDLHlFQUtwREcsT0FIbURELDRCQUFtQixFQUFDLHVFQUt2REUsT0FGaEJELG9CQUFXLEVBQUMsd0VBRThCLE9BQTFCQyxrQ0FBeUIsRUFBQztJQUt2RCxZQUFlTCJ9