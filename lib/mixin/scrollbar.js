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
var scrollbarMixin = "\n\n  ::-webkit-scrollbar {\n    width: ".concat(_styles.scrollbarThickness, ";\n    height: ").concat(_styles.scrollbarThickness, ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    cursor: default;\n    border-color: transparent;\n    border-width: ").concat(_styles.scrollbarThumbBorderWidth, ";\n    border-radius: ").concat(_styles.scrollbarThumbBorderRadius, ";\n    background-clip: content-box;\n  }\n\n  ::-webkit-scrollbar-track {\n    cursor: default;\n    background: transparent;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n\n");
var _default = scrollbarMixin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9zY3JvbGxiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjcm9sbGJhclRoaWNrbmVzcywgc2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNvbnN0IHNjcm9sbGJhck1peGluID0gYFxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gICAgaGVpZ2h0OiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItd2lkdGg6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aH07XG4gICAgYm9yZGVyLXJhZGl1czogJHtzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c307XG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxiYXJNaXhpbjtcbiJdLCJuYW1lcyI6WyJzY3JvbGxiYXJNaXhpbiIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNjcm9sbGJhclRodW1iQm9yZGVyV2lkdGgiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O3NCQTVCMEY7QUFFMUYsSUFBTUEsaUJBQWlCLEFBQUMsMkNBSVZDLE9BRERBLDBCQUFrQixFQUFDLG1CQU9aQyxPQU5ORCwwQkFBa0IsRUFBQyxxSEFPWkUsT0FEREQsaUNBQXlCLEVBQUMsMEJBQ0UsT0FBM0JDLGtDQUEwQixFQUFDO0lBZWhELFdBQWVIIn0=