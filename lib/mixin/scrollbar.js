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
var scrollbarMixin = "\n\n  scrollbar-width: none;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  \n  @media (pointer: fine) {\n    scrollbar-width: auto;\n\n    ::-webkit-scrollbar {\n      display: block;\n      width: ".concat(_styles.scrollbarThickness, ";\n      height: ").concat(_styles.scrollbarThickness, ";\n    }\n  \n    ::-webkit-scrollbar-thumb {\n      cursor: default;\n      border-style: solid;\n      border-color: transparent;\n      border-width: ").concat(_styles.scrollbarThumbBorderWidth, ";\n      border-radius: ").concat(_styles.scrollbarThumbBorderRadius, ";\n      background-clip: content-box;\n    }\n  \n    ::-webkit-scrollbar-track {\n      cursor: default;\n    }\n  }\n\n");
var _default = scrollbarMixin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9zY3JvbGxiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjcm9sbGJhclRoaWNrbmVzcywgc2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNvbnN0IHNjcm9sbGJhck1peGluID0gYFxuXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBzY3JvbGxiYXItd2lkdGg6IGF1dG87XG5cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6ICR7c2Nyb2xsYmFyVGhpY2tuZXNzfTtcbiAgICAgIGhlaWdodDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci13aWR0aDogJHtzY3JvbGxiYXJUaHVtYkJvcmRlcldpZHRofTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7c2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXN9O1xuICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbiAgfVxuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxiYXJNaXhpbjtcbiJdLCJuYW1lcyI6WyJzY3JvbGxiYXJNaXhpbiIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNjcm9sbGJhclRodW1iQm9yZGVyV2lkdGgiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUNBOzs7ZUFBQTs7O3NCQW5DMEY7QUFFMUYsSUFBTUEsaUJBQWlCLEFBQUMsa05BY1JDLE9BRERBLDBCQUFrQixFQUFDLHFCQVFaQyxPQVBORCwwQkFBa0IsRUFBQyw2SkFRWkUsT0FEREQsaUNBQXlCLEVBQUMsNEJBQ0UsT0FBM0JDLGtDQUEwQixFQUFDO0lBV2xELFdBQWVIIn0=