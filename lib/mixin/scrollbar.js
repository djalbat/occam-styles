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
var scrollbarMixin = "\n\n  ::-webkit-scrollbar {\n    width: ".concat(_styles.scrollbarThickness, ";\n    height: ").concat(_styles.scrollbarThickness, ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    cursor: default;\n    border-color: transparent;\n    border-width: ").concat(_styles.scrollbarThumbBorderWidth, ";\n    border-radius: ").concat(_styles.scrollbarThumbBorderRadius, ";\n  }\n\n  ::-webkit-scrollbar-track {\n    cursor: default;\n    background: transparent;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n\n");
var _default = scrollbarMixin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9zY3JvbGxiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjcm9sbGJhclRoaWNrbmVzcywgc2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNvbnN0IHNjcm9sbGJhck1peGluID0gYFxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gICAgaGVpZ2h0OiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItd2lkdGg6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aH07XG4gICAgYm9yZGVyLXJhZGl1czogJHtzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c307XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsYmFyTWl4aW47XG4iXSwibmFtZXMiOlsic2Nyb2xsYmFyTWl4aW4iLCJzY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaHVtYkJvcmRlcldpZHRoIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZCQTs7O2VBQUE7OztzQkEzQjBGO0FBRTFGLElBQU1BLGlCQUFpQixBQUFDLDJDQUlWQyxPQUREQSwwQkFBa0IsRUFBQyxtQkFPWkMsT0FOTkQsMEJBQWtCLEVBQUMscUhBT1pFLE9BRERELGlDQUF5QixFQUFDLDBCQUNFLE9BQTNCQyxrQ0FBMEIsRUFBQztJQWNoRCxXQUFlSCJ9