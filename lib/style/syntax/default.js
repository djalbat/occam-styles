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
const defaultSyntaxStyle = `

  div.lines > div.line > div.syntax * { 
    color: ${_default.colour}; 
    display: inline;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
  }
  
  div.lines > div.line > div.syntax > button {
    cursor: pointer;
    outline: none;
    pointer-events: auto;
    background-color: transparent;
  }
  
  div.lines > div.line > div.syntax > button:disabled {
    cursor: default;
  }

`;
const _default1 = defaultSyntaxStyle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHlsZS9zeW50YXgvZGVmYXVsdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29sb3VyIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9zeW50YXgvZGVmYXVsdFwiO1xuXG5jb25zdCBkZWZhdWx0U3ludGF4U3R5bGUgPSBgXG5cbiAgZGl2LmxpbmVzID4gZGl2LmxpbmUgPiBkaXYuc3ludGF4ICogeyBcbiAgICBjb2xvcjogJHtjb2xvdXJ9OyBcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB9XG4gIFxuICBkaXYubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiBidXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICBkaXYubGluZXMgPiBkaXYubGluZSA+IGRpdi5zeW50YXggPiBidXR0b246ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3ludGF4U3R5bGU7XG4iXSwibmFtZXMiOlsiZGVmYXVsdFN5bnRheFN0eWxlIiwiY29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyQkE7OztlQUFBOzs7eUJBekJ1QjtBQUV2QixNQUFNQSxxQkFBcUIsQ0FBQzs7O1dBR2pCLEVBQUVDLGVBQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JwQixDQUFDO01BRUQsWUFBZUQifQ==