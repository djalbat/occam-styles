"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _styles = require("../styles");
var scrollbarMixin = "\n\n  ::-webkit-scrollbar {\n    width: ".concat(_styles.scrollbarThickness, ";\n    height: ").concat(_styles.scrollbarThickness, ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    cursor: default;\n    border-style: solid;\n    border-color: transparent;\n    border-width: ").concat(scrollbarThumbBorderWidth, ";\n    border-radius: ").concat(scrollbarThumbBorderRadius, ";\n    background-clip: content-box;\n    background-color: ").concat(scrollbarThumbBackgroundColour, ";\n  }\n\n  ::-webkit-scrollbar-track {\n    cursor: default;\n    background: transparent;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n\n");
var _default = scrollbarMixin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9zY3JvbGxiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjcm9sbGJhclRoaWNrbmVzcyB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY29uc3Qgc2Nyb2xsYmFyTWl4aW4gPSBgXG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgICBoZWlnaHQ6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXdpZHRoOiAke3Njcm9sbGJhclRodW1iQm9yZGVyV2lkdGh9O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXN9O1xuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbGJhck1peGluO1xuIl0sIm5hbWVzIjpbInNjcm9sbGJhck1peGluIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCIsInNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQ0E7OztlQUFBOzs7c0JBOUJtQztBQUVuQyxJQUFNQSxpQkFBaUIsQUFBQywyQ0FJVkMsT0FEREEsMEJBQWtCLEVBQUMsbUJBUVpDLE9BUE5ELDBCQUFrQixFQUFDLCtJQVFaRSxPQURERCwyQkFBMEIsMEJBR3RCRSxPQUZIRCw0QkFBMkIsZ0VBRU8sT0FBL0JDLGdDQUErQjtJQWN2RCxXQUFlSiJ9