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
const _markdown = require("../../scheme/syntax/markdown");
const markdownSyntaxStyle = `

  div.markdown.lines > div.line > div.syntax > * { color: ${_markdown.colour}; }

  div.markdown.lines > div.line > div.syntax > .path { color: ${_markdown.pathColour}; }

  div.markdown.lines > div.line > div.syntax > .path:hover { color: ${_markdown.pathHoverColour}; }

  div.markdown.lines > div.line > div.syntax > .link { color: ${_markdown.linkColour}; }

  div.markdown.lines > div.line > div.syntax > .table { color: ${_markdown.tableColour}; }

  div.markdown.lines > div.line > div.syntax > .marker { color: ${_markdown.markerColour}; }

  div.markdown.lines > div.line > div.syntax > .bullet { color: ${_markdown.bulletColour}; }

  div.markdown.lines > div.line > div.syntax > .listing { color: ${_markdown.listingColour}; }

  div.markdown.lines > div.line > div.syntax > .heading { color: ${_markdown.headingColour}; }

  div.markdown.lines > div.line > div.syntax > .nonsense { color: ${_default.nonsenseColour}; } 

  div.markdown.lines > div.line > div.syntax > .reference { color: ${_markdown.referenceColour}; }

  div.markdown.lines > div.line > div.syntax > .directive { color: ${_markdown.directiveColour}; }

  div.markdown.lines > div.line > div.syntax > .error {
    color: ${_default.errorColour};
    text-decoration-line: underline;
    text-decoration-color: ${_default.errorTextDecorationColour};
  } 

`;
const _default1 = markdownSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvbWFya2Rvd24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVycm9yQ29sb3VyLCBub25zZW5zZUNvbG91ciwgZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L2RlZmF1bHRcIjtcbmltcG9ydCB7IGNvbG91cixcbiAgICAgICAgIHBhdGhDb2xvdXIsXG4gICAgICAgICBsaW5rQ29sb3VyLFxuICAgICAgICAgdGFibGVDb2xvdXIsXG4gICAgICAgICBtYXJrZXJDb2xvdXIsXG4gICAgICAgICBidWxsZXRDb2xvdXIsXG4gICAgICAgICBsaXN0aW5nQ29sb3VyLFxuICAgICAgICAgaGVhZGluZ0NvbG91cixcbiAgICAgICAgIHJlZmVyZW5jZUNvbG91cixcbiAgICAgICAgIGRpcmVjdGl2ZUNvbG91cixcbiAgICAgICAgIHBhdGhIb3ZlckNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvc3ludGF4L21hcmtkb3duXCI7XG5cbmNvbnN0IG1hcmtkb3duU3ludGF4U3R5bGUgPSBgXG5cbiAgZGl2Lm1hcmtkb3duLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gKiB7IGNvbG9yOiAke2NvbG91cn07IH1cblxuICBkaXYubWFya2Rvd24ubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAucGF0aCB7IGNvbG9yOiAke3BhdGhDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLnBhdGg6aG92ZXIgeyBjb2xvcjogJHtwYXRoSG92ZXJDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmxpbmsgeyBjb2xvcjogJHtsaW5rQ29sb3VyfTsgfVxuXG4gIGRpdi5tYXJrZG93bi5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC50YWJsZSB7IGNvbG9yOiAke3RhYmxlQ29sb3VyfTsgfVxuXG4gIGRpdi5tYXJrZG93bi5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5tYXJrZXIgeyBjb2xvcjogJHttYXJrZXJDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmJ1bGxldCB7IGNvbG9yOiAke2J1bGxldENvbG91cn07IH1cblxuICBkaXYubWFya2Rvd24ubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAubGlzdGluZyB7IGNvbG9yOiAke2xpc3RpbmdDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmhlYWRpbmcgeyBjb2xvcjogJHtoZWFkaW5nQ29sb3VyfTsgfVxuXG4gIGRpdi5tYXJrZG93bi5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5ub25zZW5zZSB7IGNvbG9yOiAke25vbnNlbnNlQ29sb3VyfTsgfSBcblxuICBkaXYubWFya2Rvd24ubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiAucmVmZXJlbmNlIHsgY29sb3I6ICR7cmVmZXJlbmNlQ29sb3VyfTsgfVxuXG4gIGRpdi5tYXJrZG93bi5saW5lcyA+IGRpdi5saW5lID4gZGl2LnN5bnRheCA+IC5kaXJlY3RpdmUgeyBjb2xvcjogJHtkaXJlY3RpdmVDb2xvdXJ9OyB9XG5cbiAgZGl2Lm1hcmtkb3duLmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ID4gLmVycm9yIHtcbiAgICBjb2xvcjogJHtlcnJvckNvbG91cn07XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7ZXJyb3JUZXh0RGVjb3JhdGlvbkNvbG91cn07XG4gIH0gXG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcmtkb3duU3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsibWFya2Rvd25TeW50YXhTdHlsZSIsImNvbG91ciIsInBhdGhDb2xvdXIiLCJwYXRoSG92ZXJDb2xvdXIiLCJsaW5rQ29sb3VyIiwidGFibGVDb2xvdXIiLCJtYXJrZXJDb2xvdXIiLCJidWxsZXRDb2xvdXIiLCJsaXN0aW5nQ29sb3VyIiwiaGVhZGluZ0NvbG91ciIsIm5vbnNlbnNlQ29sb3VyIiwicmVmZXJlbmNlQ29sb3VyIiwiZGlyZWN0aXZlQ29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpREE7OztlQUFBOzs7eUJBL0N1RTswQkFXdkM7QUFFaEMsTUFBTUEsc0JBQXNCLENBQUM7OzBEQUU2QixFQUFFQyxnQkFBTSxDQUFDOzs4REFFTCxFQUFFQyxvQkFBVSxDQUFDOztvRUFFUCxFQUFFQyx5QkFBZSxDQUFDOzs4REFFeEIsRUFBRUMsb0JBQVUsQ0FBQzs7K0RBRVosRUFBRUMscUJBQVcsQ0FBQzs7Z0VBRWIsRUFBRUMsc0JBQVksQ0FBQzs7Z0VBRWYsRUFBRUMsc0JBQVksQ0FBQzs7aUVBRWQsRUFBRUMsdUJBQWEsQ0FBQzs7aUVBRWhCLEVBQUVDLHVCQUFhLENBQUM7O2tFQUVmLEVBQUVDLHVCQUFjLENBQUM7O21FQUVoQixFQUFFQyx5QkFBZSxDQUFDOzttRUFFbEIsRUFBRUMseUJBQWUsQ0FBQzs7O1dBRzFFLEVBQUVDLG9CQUFXLENBQUM7OzJCQUVFLEVBQUVDLGtDQUF5QixDQUFDOzs7QUFHdkQsQ0FBQztNQUVELFlBQWVkIn0=