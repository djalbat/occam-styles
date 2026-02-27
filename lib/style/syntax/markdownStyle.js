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
const _default = require("../../scheme/syntax/default");
const _markdownStyle = require("../../scheme/syntax/markdownStyle");
const markdownStyleSyntaxStyle = `

  div.markdown-style.lines > div.line > div.syntax > * { color: ${_markdownStyle.colour}; }

  div.markdown-style.lines > div.line > div.syntax > .name { color: ${_markdownStyle.nameColour}; }

  div.markdown-style.lines > div.line > div.syntax > .value { color: ${_markdownStyle.valueColour}; }

  div.markdown-style.lines > div.line > div.syntax > .media { color: ${_markdownStyle.mediaColour}; }

  div.markdown-style.lines > div.line > div.syntax > .special { color: ${_markdownStyle.specialColour}; }

  div.markdown-style.lines > div.line > div.syntax > .content { color: ${_markdownStyle.contentColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .nonsense { color: ${_default.nonsenseColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .rule-name { color: ${_markdownStyle.ruleNameColour}; }

  div.markdown-style.lines > div.line > div.syntax > .delimiter { color: ${_markdownStyle.delimiterColour}; }

  div.markdown-style.lines > div.line > div.syntax > .media-type { color: ${_markdownStyle.mediaTypeColour}; }

  div.markdown-style.lines > div.line > div.syntax > .string-literal { color: ${_default.stringLiteralColour}; }

  div.markdown-style.lines > div.line > div.syntax > .content { background-color: ${_markdownStyle.contentBackgroundColour}; } 

  div.markdown-style.lines > div.line > div.syntax > .error {
    color: ${_default.errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${_default.errorTextDecorationColour};
  } 

`;
const _default1 = markdownStyleSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd25TdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIG5vbnNlbnNlQ29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuaW1wb3J0IHsgY29sb3VyLFxuICAgICAgICAgbmFtZUNvbG91cixcbiAgICAgICAgIHZhbHVlQ29sb3VyLFxuICAgICAgICAgbWVkaWFDb2xvdXIsXG4gICAgICAgICBzcGVjaWFsQ29sb3VyLFxuICAgICAgICAgY29udGVudENvbG91cixcbiAgICAgICAgIHJ1bGVOYW1lQ29sb3VyLFxuICAgICAgICAgZGVsaW1pdGVyQ29sb3VyLFxuICAgICAgICAgbWVkaWFUeXBlQ29sb3VyLFxuICAgICAgICAgY29udGVudEJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9tYXJrZG93blN0eWxlXCI7XG5cbmNvbnN0IG1hcmtkb3duU3R5bGVTeW50YXhTdHlsZSA9IGBcblxuICBkaXYubWFya2Rvd24tc3R5bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAqIHsgY29sb3I6ICR7Y29sb3VyfTsgfVxuXG4gIGRpdi5tYXJrZG93bi1zdHlsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5uYW1lIHsgY29sb3I6ICR7bmFtZUNvbG91cn07IH1cblxuICBkaXYubWFya2Rvd24tc3R5bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAudmFsdWUgeyBjb2xvcjogJHt2YWx1ZUNvbG91cn07IH1cblxuICBkaXYubWFya2Rvd24tc3R5bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubWVkaWEgeyBjb2xvcjogJHttZWRpYUNvbG91cn07IH1cblxuICBkaXYubWFya2Rvd24tc3R5bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuc3BlY2lhbCB7IGNvbG9yOiAke3NwZWNpYWxDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLXN0eWxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmNvbnRlbnQgeyBjb2xvcjogJHtjb250ZW50Q29sb3VyfTsgfSBcblxuICBkaXYubWFya2Rvd24tc3R5bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubm9uc2Vuc2UgeyBjb2xvcjogJHtub25zZW5zZUNvbG91cn07IH0gXG5cbiAgZGl2Lm1hcmtkb3duLXN0eWxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnJ1bGUtbmFtZSB7IGNvbG9yOiAke3J1bGVOYW1lQ29sb3VyfTsgfVxuXG4gIGRpdi5tYXJrZG93bi1zdHlsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5kZWxpbWl0ZXIgeyBjb2xvcjogJHtkZWxpbWl0ZXJDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLXN0eWxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLm1lZGlhLXR5cGUgeyBjb2xvcjogJHttZWRpYVR5cGVDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLXN0eWxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnN0cmluZy1saXRlcmFsIHsgY29sb3I6ICR7c3RyaW5nTGl0ZXJhbENvbG91cn07IH1cblxuICBkaXYubWFya2Rvd24tc3R5bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuY29udGVudCB7IGJhY2tncm91bmQtY29sb3I6ICR7Y29udGVudEJhY2tncm91bmRDb2xvdXJ9OyB9IFxuXG4gIGRpdi5tYXJrZG93bi1zdHlsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5lcnJvciB7XG4gICAgY29sb3I6ICR7ZXJyb3JDb2xvdXJ9O1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAke2Vycm9yVGV4dERlY29yYXRpb25Db2xvdXJ9O1xuICB9IFxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBtYXJrZG93blN0eWxlU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsibWFya2Rvd25TdHlsZVN5bnRheFN0eWxlIiwiY29sb3VyIiwibmFtZUNvbG91ciIsInZhbHVlQ29sb3VyIiwibWVkaWFDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwiY29udGVudENvbG91ciIsIm5vbnNlbnNlQ29sb3VyIiwicnVsZU5hbWVDb2xvdXIiLCJkZWxpbWl0ZXJDb2xvdXIiLCJtZWRpYVR5cGVDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiY29udGVudEJhY2tncm91bmRDb2xvdXIiLCJlcnJvckNvbG91ciIsImVycm9yVGV4dERlY29yYXRpb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdEQTs7O2VBQUE7Ozt5QkE5QzRGOytCQVVwRDtBQUV4QyxNQUFNQSwyQkFBMkIsQ0FBQzs7Z0VBRThCLEVBQUVDLHFCQUFNLENBQUM7O29FQUVMLEVBQUVDLHlCQUFVLENBQUM7O3FFQUVaLEVBQUVDLDBCQUFXLENBQUM7O3FFQUVkLEVBQUVDLDBCQUFXLENBQUM7O3VFQUVaLEVBQUVDLDRCQUFhLENBQUM7O3VFQUVoQixFQUFFQyw0QkFBYSxDQUFDOzt3RUFFZixFQUFFQyx1QkFBYyxDQUFDOzt5RUFFaEIsRUFBRUMsNkJBQWMsQ0FBQzs7eUVBRWpCLEVBQUVDLDhCQUFlLENBQUM7OzBFQUVqQixFQUFFQyw4QkFBZSxDQUFDOzs4RUFFZCxFQUFFQyw0QkFBbUIsQ0FBQzs7a0ZBRWxCLEVBQUVDLHNDQUF1QixDQUFDOzs7V0FHakcsRUFBRUMsb0JBQVcsQ0FBQzs7MkJBRUUsRUFBRUMsa0NBQXlCLENBQUM7OztBQUd2RCxDQUFDO01BRUQsWUFBZWQifQ==