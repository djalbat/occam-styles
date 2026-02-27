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
const _nominal = require("../../scheme/syntax/nominal");
const nominalSyntaxStyle = `

  div.nominal.lines > div.line > div.syntax > .name { color: ${_nominal.nameColour}; }

  div.nominal.lines > div.line > div.syntax > .type { color: ${_nominal.typeColour}; }

  div.nominal.lines > div.line > div.syntax > .stuff { color: ${_nominal.stuffColour}; }

  div.nominal.lines > div.line > div.syntax > .symbol { color: ${_nominal.symbolColour}; }

  div.nominal.lines > div.line > div.syntax > .special { color: ${_nominal.specialColour}; }
  
  div.nominal.lines > div.line > div.syntax > .comment { color: ${_default.commentColour}; }
  
  div.nominal.lines > div.line > div.syntax > .context { color: ${_nominal.contextColour}; }

  div.nominal.lines > div.line > div.syntax > .nonsense { color: ${_default.nonsenseColour}; } 

  div.nominal.lines > div.line > div.syntax > .meta-type { color: ${_nominal.metaTypeColour}; }
  
  div.nominal.lines > div.line > div.syntax > .primitive { color: ${_nominal.primitiveColour}; }

  div.nominal.lines > div.line > div.syntax > .string-literal { color: ${_default.stringLiteralColour}; }

  div.nominal.lines > div.line > div.syntax > .primary-keyword { color: ${_nominal.keywordColour}; }
  
  div.nominal.lines > div.line > div.syntax > .secondary-keyword { color: ${_nominal.keywordColour}; }
  
  div.nominal.lines > div.line > div.syntax > .label-name { color: ${_nominal.labelNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .label-name:hover { color: ${_nominal.labelNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .label-name:disabled { color: ${_nominal.disabledLabelNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .reference-name { color: ${_nominal.referenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .reference-name:hover { color: ${_nominal.referenceNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .reference-name:disabled { color: ${_nominal.disabledReferenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .procedure-reference-name { color: ${_nominal.procedureReferenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .procedure-reference-name:hover { color: ${_nominal.procedureReferenceNameHoverColour}; }

  div.nominal.lines > div.line > div.syntax > .procedure-reference-name:disabled { color: ${_nominal.disabledProcedureReferenceNameColour}; }
  
  div.nominal.lines > div.line > div.syntax > .error {
    color: ${_default.errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${_default.errorTextDecorationColour};
  } 

`;
const _default1 = nominalSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZXJyb3JDb2xvdXIsIGNvbW1lbnRDb2xvdXIsIG5vbnNlbnNlQ29sb3VyLCBzdHJpbmdMaXRlcmFsQ29sb3VyLCBlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuaW1wb3J0IHsgbmFtZUNvbG91cixcbiAgICAgICAgIHR5cGVDb2xvdXIsXG4gICAgICAgICBzdHVmZkNvbG91cixcbiAgICAgICAgIHN5bWJvbENvbG91cixcbiAgICAgICAgIHNwZWNpYWxDb2xvdXIsXG4gICAgICAgICBrZXl3b3JkQ29sb3VyLFxuICAgICAgICAgY29udGV4dENvbG91cixcbiAgICAgICAgIG1ldGFUeXBlQ29sb3VyLFxuICAgICAgICAgcHJpbWl0aXZlQ29sb3VyLFxuICAgICAgICAgbGFiZWxOYW1lQ29sb3VyLFxuICAgICAgICAgcmVmZXJlbmNlTmFtZUNvbG91cixcbiAgICAgICAgIGxhYmVsTmFtZUhvdmVyQ29sb3VyLFxuICAgICAgICAgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIsXG4gICAgICAgICByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIsXG4gICAgICAgICBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIsXG4gICAgICAgICBwcm9jZWR1cmVSZWZlcmVuY2VOYW1lQ29sb3VyLFxuICAgICAgICAgcHJvY2VkdXJlUmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyLFxuICAgICAgICAgZGlzYWJsZWRQcm9jZWR1cmVSZWZlcmVuY2VOYW1lQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvbm9taW5hbFwiO1xuXG5jb25zdCBub21pbmFsU3ludGF4U3R5bGUgPSBgXG5cbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubmFtZSB7IGNvbG9yOiAke25hbWVDb2xvdXJ9OyB9XG5cbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAudHlwZSB7IGNvbG9yOiAke3R5cGVDb2xvdXJ9OyB9XG5cbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuc3R1ZmYgeyBjb2xvcjogJHtzdHVmZkNvbG91cn07IH1cblxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5zeW1ib2wgeyBjb2xvcjogJHtzeW1ib2xDb2xvdXJ9OyB9XG5cbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuc3BlY2lhbCB7IGNvbG9yOiAke3NwZWNpYWxDb2xvdXJ9OyB9XG4gIFxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5jb21tZW50IHsgY29sb3I6ICR7Y29tbWVudENvbG91cn07IH1cbiAgXG4gIGRpdi5ub21pbmFsLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmNvbnRleHQgeyBjb2xvcjogJHtjb250ZXh0Q29sb3VyfTsgfVxuXG4gIGRpdi5ub21pbmFsLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLm5vbnNlbnNlIHsgY29sb3I6ICR7bm9uc2Vuc2VDb2xvdXJ9OyB9IFxuXG4gIGRpdi5ub21pbmFsLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLm1ldGEtdHlwZSB7IGNvbG9yOiAke21ldGFUeXBlQ29sb3VyfTsgfVxuICBcbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAucHJpbWl0aXZlIHsgY29sb3I6ICR7cHJpbWl0aXZlQ29sb3VyfTsgfVxuXG4gIGRpdi5ub21pbmFsLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnN0cmluZy1saXRlcmFsIHsgY29sb3I6ICR7c3RyaW5nTGl0ZXJhbENvbG91cn07IH1cblxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5wcmltYXJ5LWtleXdvcmQgeyBjb2xvcjogJHtrZXl3b3JkQ29sb3VyfTsgfVxuICBcbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuc2Vjb25kYXJ5LWtleXdvcmQgeyBjb2xvcjogJHtrZXl3b3JkQ29sb3VyfTsgfVxuICBcbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubGFiZWwtbmFtZSB7IGNvbG9yOiAke2xhYmVsTmFtZUNvbG91cn07IH1cbiAgXG4gIGRpdi5ub21pbmFsLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmxhYmVsLW5hbWU6aG92ZXIgeyBjb2xvcjogJHtsYWJlbE5hbWVIb3ZlckNvbG91cn07IH1cblxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5sYWJlbC1uYW1lOmRpc2FibGVkIHsgY29sb3I6ICR7ZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXJ9OyB9XG4gIFxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5yZWZlcmVuY2UtbmFtZSB7IGNvbG9yOiAke3JlZmVyZW5jZU5hbWVDb2xvdXJ9OyB9XG4gIFxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5yZWZlcmVuY2UtbmFtZTpob3ZlciB7IGNvbG9yOiAke3JlZmVyZW5jZU5hbWVIb3ZlckNvbG91cn07IH1cblxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5yZWZlcmVuY2UtbmFtZTpkaXNhYmxlZCB7IGNvbG9yOiAke2Rpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91cn07IH1cbiAgXG4gIGRpdi5ub21pbmFsLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnByb2NlZHVyZS1yZWZlcmVuY2UtbmFtZSB7IGNvbG9yOiAke3Byb2NlZHVyZVJlZmVyZW5jZU5hbWVDb2xvdXJ9OyB9XG4gIFxuICBkaXYubm9taW5hbC5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5wcm9jZWR1cmUtcmVmZXJlbmNlLW5hbWU6aG92ZXIgeyBjb2xvcjogJHtwcm9jZWR1cmVSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXJ9OyB9XG5cbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAucHJvY2VkdXJlLXJlZmVyZW5jZS1uYW1lOmRpc2FibGVkIHsgY29sb3I6ICR7ZGlzYWJsZWRQcm9jZWR1cmVSZWZlcmVuY2VOYW1lQ29sb3VyfTsgfVxuICBcbiAgZGl2Lm5vbWluYWwubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAuZXJyb3Ige1xuICAgIGNvbG9yOiAke2Vycm9yQ29sb3VyfTtcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJHtlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyfTtcbiAgfSBcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgbm9taW5hbFN5bnRheFN0eWxlO1xuIl0sIm5hbWVzIjpbIm5vbWluYWxTeW50YXhTdHlsZSIsIm5hbWVDb2xvdXIiLCJ0eXBlQ29sb3VyIiwic3R1ZmZDb2xvdXIiLCJzeW1ib2xDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwiY29tbWVudENvbG91ciIsImNvbnRleHRDb2xvdXIiLCJub25zZW5zZUNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwicHJpbWl0aXZlQ29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsInByb2NlZHVyZVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJwcm9jZWR1cmVSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFByb2NlZHVyZVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJlcnJvckNvbG91ciIsImVycm9yVGV4dERlY29yYXRpb25Db2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRFQTs7O2VBQUE7Ozt5QkExRTJHO3lCQWtCdEQ7QUFFckQsTUFBTUEscUJBQXFCLENBQUM7OzZEQUVpQyxFQUFFQyxtQkFBVSxDQUFDOzs2REFFYixFQUFFQyxtQkFBVSxDQUFDOzs4REFFWixFQUFFQyxvQkFBVyxDQUFDOzsrREFFYixFQUFFQyxxQkFBWSxDQUFDOztnRUFFZCxFQUFFQyxzQkFBYSxDQUFDOztnRUFFaEIsRUFBRUMsc0JBQWEsQ0FBQzs7Z0VBRWhCLEVBQUVDLHNCQUFhLENBQUM7O2lFQUVmLEVBQUVDLHVCQUFjLENBQUM7O2tFQUVoQixFQUFFQyx1QkFBYyxDQUFDOztrRUFFakIsRUFBRUMsd0JBQWUsQ0FBQzs7dUVBRWIsRUFBRUMsNEJBQW1CLENBQUM7O3dFQUVyQixFQUFFQyxzQkFBYSxDQUFDOzswRUFFZCxFQUFFQSxzQkFBYSxDQUFDOzttRUFFdkIsRUFBRUMsd0JBQWUsQ0FBQzs7eUVBRVosRUFBRUMsNkJBQW9CLENBQUM7OzRFQUVwQixFQUFFQyxnQ0FBdUIsQ0FBQzs7dUVBRS9CLEVBQUVDLDRCQUFtQixDQUFDOzs2RUFFaEIsRUFBRUMsaUNBQXdCLENBQUM7O2dGQUV4QixFQUFFQyxvQ0FBMkIsQ0FBQzs7aUZBRTdCLEVBQUVDLHFDQUE0QixDQUFDOzt1RkFFekIsRUFBRUMsMENBQWlDLENBQUM7OzBGQUVqQyxFQUFFQyw2Q0FBb0MsQ0FBQzs7O1dBR3RILEVBQUVDLG9CQUFXLENBQUM7OzJCQUVFLEVBQUVDLGtDQUF5QixDQUFDOzs7QUFHdkQsQ0FBQztNQUVELFlBQWV2QiJ9