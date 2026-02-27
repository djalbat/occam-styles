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
const _customGrammarBNF = require("../../scheme/syntax/customGrammarBNF");
const _default = require("../../scheme/syntax/default");
const customGrammarBNFSyntaxStyle = `

  div.custom-grammar-bnf.lines > div.line > div.syntax > .name { color: ${_customGrammarBNF.nameColour}; }

  div.custom-grammar-bnf.lines > div.line > div.syntax > .type { color: ${_customGrammarBNF.typeColour}; }

  div.custom-grammar-bnf.lines > div.line > div.syntax > .string-literal { color: ${_default.stringLiteralColour}; }
  
  div.custom-grammar-bnf.lines > div.line > div.syntax > .error {
    color: ${_default.errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${_default.errorTextDecorationColour};
  } 

`;
const _default1 = customGrammarBNFSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvY3VzdG9tR3JhbW1hckJORi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbmFtZUNvbG91ciwgdHlwZUNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L2N1c3RvbUdyYW1tYXJCTkZcIlxuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIHN0cmluZ0xpdGVyYWxDb2xvdXIsIGVycm9yVGV4dERlY29yYXRpb25Db2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9kZWZhdWx0XCI7XG5cbmNvbnN0IGN1c3RvbUdyYW1tYXJCTkZTeW50YXhTdHlsZSA9IGBcblxuICBkaXYuY3VzdG9tLWdyYW1tYXItYm5mLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLm5hbWUgeyBjb2xvcjogJHtuYW1lQ29sb3VyfTsgfVxuXG4gIGRpdi5jdXN0b20tZ3JhbW1hci1ibmYubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAudHlwZSB7IGNvbG9yOiAke3R5cGVDb2xvdXJ9OyB9XG5cbiAgZGl2LmN1c3RvbS1ncmFtbWFyLWJuZi5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG4gIFxuICBkaXYuY3VzdG9tLWdyYW1tYXItYm5mLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmVycm9yIHtcbiAgICBjb2xvcjogJHtlcnJvckNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7ZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUdyYW1tYXJCTkZTeW50YXhTdHlsZTtcbiJdLCJuYW1lcyI6WyJjdXN0b21HcmFtbWFyQk5GU3ludGF4U3R5bGUiLCJuYW1lQ29sb3VyIiwidHlwZUNvbG91ciIsInN0cmluZ0xpdGVyYWxDb2xvdXIiLCJlcnJvckNvbG91ciIsImVycm9yVGV4dERlY29yYXRpb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQUE7OztrQ0FuQnVDO3lCQUNxQztBQUU1RSxNQUFNQSw4QkFBOEIsQ0FBQzs7d0VBRW1DLEVBQUVDLDRCQUFVLENBQUM7O3dFQUViLEVBQUVDLDRCQUFVLENBQUM7O2tGQUVILEVBQUVDLDRCQUFtQixDQUFDOzs7V0FHN0YsRUFBRUMsb0JBQVcsQ0FBQzs7MkJBRUUsRUFBRUMsa0NBQXlCLENBQUM7OztBQUd2RCxDQUFDO01BRUQsWUFBZUwifQ==