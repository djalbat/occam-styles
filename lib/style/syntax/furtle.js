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
const _furtle = require("../../scheme/syntax/furtle");
const furtleSyntaxStyle = `

  div.furtle.lines > div.line > div.syntax > .type { color: ${_furtle.typeColour}; }

  div.furtle.lines > div.line > div.syntax > .null { color: ${_furtle.nullColour}; }

  div.furtle.lines > div.line > div.syntax > .query { color: ${_furtle.queryColour}; }

  div.furtle.lines > div.line > div.syntax > .symbol { color: ${_furtle.symbolColour}; }

  div.furtle.lines > div.line > div.syntax > .bracket { color: ${_furtle.bracketColour}; }
  
  div.furtle.lines > div.line > div.syntax > .special { color: ${_furtle.specialColour}; }
  
  div.furtle.lines > div.line > div.syntax > .comment { color: ${_default.commentColour}; }
  
  div.furtle.lines > div.line > div.syntax > .boolean { color: ${_furtle.booleanColour}; }

  div.furtle.lines > div.line > div.syntax > .nonsense { color: ${_default.nonsenseColour}; } 

  div.furtle.lines > div.line > div.syntax > .operator { color: ${_furtle.operatorColour}; }
  
  div.furtle.lines > div.line > div.syntax > .string-literal { color: ${_default.stringLiteralColour}; }
  
  div.furtle.lines > div.line > div.syntax > .primary-keyword { color: ${_furtle.priimaryKeywordColour}; }
  
  div.furtle.lines > div.line > div.syntax > .secondary-keyword { color: ${_furtle.secondaryKeywordColour}; }
  
  div.furtle.lines > div.line > div.syntax > .label-name { color: ${_furtle.labelNameColour}; }
  
  div.furtle.lines > div.line > div.syntax > .label-name:hover { color: ${_furtle.labelNameHoverColour}; }

  div.furtle.lines > div.line > div.syntax > .label-name:disabled { color: ${_furtle.disabledLabelNameColour}; }
  
  div.furtle.lines > div.line > div.syntax > .reference-name { color: ${_furtle.referenceNameColour}; }
  
  div.furtle.lines > div.line > div.syntax > .reference-name:hover { color: ${_furtle.referenceNameHoverColour}; }

  div.furtle.lines > div.line > div.syntax > .reference-name:disabled { color: ${_furtle.disabledReferenceNameColour}; }

  div.furtle.lines > div.line > div.syntax > .error {
    color: ${_default.errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${_default.errorTextDecorationColour};
  } 

`;
const _default1 = furtleSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlcnJvckNvbG91ciwgY29tbWVudENvbG91ciwgbm9uc2Vuc2VDb2xvdXIsIHN0cmluZ0xpdGVyYWxDb2xvdXIsIGVycm9yVGV4dERlY29yYXRpb25Db2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9kZWZhdWx0XCI7XG5pbXBvcnQgeyB0eXBlQ29sb3VyLFxuICAgICAgICAgbnVsbENvbG91cixcbiAgICAgICAgIHF1ZXJ5Q29sb3VyLFxuICAgICAgICAgc3ltYm9sQ29sb3VyLFxuICAgICAgICAgYnJhY2tldENvbG91cixcbiAgICAgICAgIHNwZWNpYWxDb2xvdXIsXG4gICAgICAgICBib29sZWFuQ29sb3VyLFxuICAgICAgICAgb3BlcmF0b3JDb2xvdXIsXG4gICAgICAgICBsYWJlbE5hbWVDb2xvdXIsXG4gICAgICAgICByZWZlcmVuY2VOYW1lQ29sb3VyLFxuICAgICAgICAgbGFiZWxOYW1lSG92ZXJDb2xvdXIsXG4gICAgICAgICBwcmlpbWFyeUtleXdvcmRDb2xvdXIsXG4gICAgICAgICBzZWNvbmRhcnlLZXl3b3JkQ29sb3VyLFxuICAgICAgICAgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIsXG4gICAgICAgICByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIsXG4gICAgICAgICBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL3N5bnRheC9mdXJ0bGVcIjtcblxuY29uc3QgZnVydGxlU3ludGF4U3R5bGUgPSBgXG5cbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC50eXBlIHsgY29sb3I6ICR7dHlwZUNvbG91cn07IH1cblxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLm51bGwgeyBjb2xvcjogJHtudWxsQ29sb3VyfTsgfVxuXG4gIGRpdi5mdXJ0bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAucXVlcnkgeyBjb2xvcjogJHtxdWVyeUNvbG91cn07IH1cblxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnN5bWJvbCB7IGNvbG9yOiAke3N5bWJvbENvbG91cn07IH1cblxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmJyYWNrZXQgeyBjb2xvcjogJHticmFja2V0Q29sb3VyfTsgfVxuICBcbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5zcGVjaWFsIHsgY29sb3I6ICR7c3BlY2lhbENvbG91cn07IH1cbiAgXG4gIGRpdi5mdXJ0bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuY29tbWVudCB7IGNvbG9yOiAke2NvbW1lbnRDb2xvdXJ9OyB9XG4gIFxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmJvb2xlYW4geyBjb2xvcjogJHtib29sZWFuQ29sb3VyfTsgfVxuXG4gIGRpdi5mdXJ0bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubm9uc2Vuc2UgeyBjb2xvcjogJHtub25zZW5zZUNvbG91cn07IH0gXG5cbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5vcGVyYXRvciB7IGNvbG9yOiAke29wZXJhdG9yQ29sb3VyfTsgfVxuICBcbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5zdHJpbmctbGl0ZXJhbCB7IGNvbG9yOiAke3N0cmluZ0xpdGVyYWxDb2xvdXJ9OyB9XG4gIFxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnByaW1hcnkta2V5d29yZCB7IGNvbG9yOiAke3ByaWltYXJ5S2V5d29yZENvbG91cn07IH1cbiAgXG4gIGRpdi5mdXJ0bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuc2Vjb25kYXJ5LWtleXdvcmQgeyBjb2xvcjogJHtzZWNvbmRhcnlLZXl3b3JkQ29sb3VyfTsgfVxuICBcbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5sYWJlbC1uYW1lIHsgY29sb3I6ICR7bGFiZWxOYW1lQ29sb3VyfTsgfVxuICBcbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5sYWJlbC1uYW1lOmhvdmVyIHsgY29sb3I6ICR7bGFiZWxOYW1lSG92ZXJDb2xvdXJ9OyB9XG5cbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5sYWJlbC1uYW1lOmRpc2FibGVkIHsgY29sb3I6ICR7ZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXJ9OyB9XG4gIFxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnJlZmVyZW5jZS1uYW1lIHsgY29sb3I6ICR7cmVmZXJlbmNlTmFtZUNvbG91cn07IH1cbiAgXG4gIGRpdi5mdXJ0bGUubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAucmVmZXJlbmNlLW5hbWU6aG92ZXIgeyBjb2xvcjogJHtyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXJ9OyB9XG5cbiAgZGl2LmZ1cnRsZS5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5yZWZlcmVuY2UtbmFtZTpkaXNhYmxlZCB7IGNvbG9yOiAke2Rpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91cn07IH1cblxuICBkaXYuZnVydGxlLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmVycm9yIHtcbiAgICBjb2xvcjogJHtlcnJvckNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7ZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1cnRsZVN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbImZ1cnRsZVN5bnRheFN0eWxlIiwidHlwZUNvbG91ciIsIm51bGxDb2xvdXIiLCJxdWVyeUNvbG91ciIsInN5bWJvbENvbG91ciIsImJyYWNrZXRDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwiY29tbWVudENvbG91ciIsImJvb2xlYW5Db2xvdXIiLCJub25zZW5zZUNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsInByaWltYXJ5S2V5d29yZENvbG91ciIsInNlY29uZGFyeUtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsImVycm9yQ29sb3VyIiwiZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0VBOzs7ZUFBQTs7O3lCQWxFMkc7d0JBZ0IvRDtBQUU1QyxNQUFNQSxvQkFBb0IsQ0FBQzs7NERBRWlDLEVBQUVDLGtCQUFVLENBQUM7OzREQUViLEVBQUVDLGtCQUFVLENBQUM7OzZEQUVaLEVBQUVDLG1CQUFXLENBQUM7OzhEQUViLEVBQUVDLG9CQUFZLENBQUM7OytEQUVkLEVBQUVDLHFCQUFhLENBQUM7OytEQUVoQixFQUFFQyxxQkFBYSxDQUFDOzsrREFFaEIsRUFBRUMsc0JBQWEsQ0FBQzs7K0RBRWhCLEVBQUVDLHFCQUFhLENBQUM7O2dFQUVmLEVBQUVDLHVCQUFjLENBQUM7O2dFQUVqQixFQUFFQyxzQkFBYyxDQUFDOztzRUFFWCxFQUFFQyw0QkFBbUIsQ0FBQzs7dUVBRXJCLEVBQUVDLDZCQUFxQixDQUFDOzt5RUFFdEIsRUFBRUMsOEJBQXNCLENBQUM7O2tFQUVoQyxFQUFFQyx1QkFBZSxDQUFDOzt3RUFFWixFQUFFQyw0QkFBb0IsQ0FBQzs7MkVBRXBCLEVBQUVDLCtCQUF1QixDQUFDOztzRUFFL0IsRUFBRUMsMkJBQW1CLENBQUM7OzRFQUVoQixFQUFFQyxnQ0FBd0IsQ0FBQzs7K0VBRXhCLEVBQUVDLG1DQUEyQixDQUFDOzs7V0FHbEcsRUFBRUMsb0JBQVcsQ0FBQzs7MkJBRUUsRUFBRUMsa0NBQXlCLENBQUM7OztBQUd2RCxDQUFDO01BRUQsWUFBZXJCIn0=