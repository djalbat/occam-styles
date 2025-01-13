"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    fileNameSVGPaddingLeft: function() {
        return fileNameSVGPaddingLeft;
    },
    juliaMonoLineHeight: function() {
        return juliaMonoLineHeight;
    },
    markerSVGHeight: function() {
        return markerSVGHeight;
    },
    markerSVGMarginLeft: function() {
        return markerSVGMarginLeft;
    },
    nameSVGHeight: function() {
        return nameSVGHeight;
    },
    nameSVGMarginBottom: function() {
        return nameSVGMarginBottom;
    },
    scrollbarThickness: function() {
        return scrollbarThickness;
    },
    scrollbarThumbBorderRadius: function() {
        return scrollbarThumbBorderRadius;
    },
    scrollbarThumbBorderWidth: function() {
        return scrollbarThumbBorderWidth;
    },
    titleSVGHeight: function() {
        return titleSVGHeight;
    },
    toggleSVGHeight: function() {
        return toggleSVGHeight;
    }
});
var _constants = require("./constants");
var nameSVGHeight = "2.1rem";
var titleSVGHeight = "2.1rem";
var toggleSVGHeight = "1.8rem";
var markerSVGHeight = nameSVGHeight; ///
var scrollbarThickness = "".concat(_constants.SCROLLBAR_THICKNESS, "px");
var juliaMonoLineHeight = 1.5;
var nameSVGMarginBottom = "0.4rem";
var markerSVGMarginLeft = "2.4rem";
var fileNameSVGPaddingLeft = "2.2rem";
var scrollbarThumbBorderWidth = "6px";
var scrollbarThumbBorderRadius = scrollbarThickness; ///
var _default = {
    nameSVGHeight: nameSVGHeight,
    titleSVGHeight: titleSVGHeight,
    toggleSVGHeight: toggleSVGHeight,
    markerSVGHeight: markerSVGHeight,
    scrollbarThickness: scrollbarThickness,
    juliaMonoLineHeight: juliaMonoLineHeight,
    nameSVGMarginBottom: nameSVGMarginBottom,
    markerSVGMarginLeft: markerSVGMarginLeft,
    fileNameSVGPaddingLeft: fileNameSVGPaddingLeft,
    scrollbarThumbBorderWidth: scrollbarThumbBorderWidth,
    scrollbarThumbBorderRadius: scrollbarThumbBorderRadius
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNDUk9MTEJBUl9USElDS05FU1MgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVTVkdIZWlnaHQgPSBcIjIuMXJlbVwiXG5leHBvcnQgY29uc3QgdGl0bGVTVkdIZWlnaHQgPSBcIjIuMXJlbVwiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNWR0hlaWdodCA9IFwiMS44cmVtXCJcbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdIZWlnaHQgPSBuYW1lU1ZHSGVpZ2h0OyAvLy9cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaGlja25lc3MgPSBgJHtTQ1JPTExCQVJfVEhJQ0tORVNTfXB4YDtcbmV4cG9ydCBjb25zdCBqdWxpYU1vbm9MaW5lSGVpZ2h0ID0gMS41O1xuZXhwb3J0IGNvbnN0IG5hbWVTVkdNYXJnaW5Cb3R0b20gPSBcIjAuNHJlbVwiO1xuZXhwb3J0IGNvbnN0IG1hcmtlclNWR01hcmdpbkxlZnQgPSBcIjIuNHJlbVwiO1xuZXhwb3J0IGNvbnN0IGZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQgPSBcIjIuMnJlbVwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyV2lkdGggPSBcIjZweFwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzID0gc2Nyb2xsYmFyVGhpY2tuZXNzOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lU1ZHSGVpZ2h0LFxuICB0aXRsZVNWR0hlaWdodCxcbiAgdG9nZ2xlU1ZHSGVpZ2h0LFxuICBtYXJrZXJTVkdIZWlnaHQsXG4gIHNjcm9sbGJhclRoaWNrbmVzcyxcbiAganVsaWFNb25vTGluZUhlaWdodCxcbiAgbmFtZVNWR01hcmdpbkJvdHRvbSxcbiAgbWFya2VyU1ZHTWFyZ2luTGVmdCxcbiAgZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCxcbiAgc2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCxcbiAgc2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXNcbn07XG4iXSwibmFtZXMiOlsiZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCIsImp1bGlhTW9ub0xpbmVIZWlnaHQiLCJtYXJrZXJTVkdIZWlnaHQiLCJtYXJrZXJTVkdNYXJnaW5MZWZ0IiwibmFtZVNWR0hlaWdodCIsIm5hbWVTVkdNYXJnaW5Cb3R0b20iLCJzY3JvbGxiYXJUaGlja25lc3MiLCJzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1cyIsInNjcm9sbGJhclRodW1iQm9yZGVyV2lkdGgiLCJ0aXRsZVNWR0hlaWdodCIsInRvZ2dsZVNWR0hlaWdodCIsIlNDUk9MTEJBUl9USElDS05FU1MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdCQSxPQVlFO2VBWkY7O0lBSmFBLHNCQUFzQjtlQUF0QkE7O0lBSEFDLG1CQUFtQjtlQUFuQkE7O0lBRkFDLGVBQWU7ZUFBZkE7O0lBSUFDLG1CQUFtQjtlQUFuQkE7O0lBUEFDLGFBQWE7ZUFBYkE7O0lBTUFDLG1CQUFtQjtlQUFuQkE7O0lBRkFDLGtCQUFrQjtlQUFsQkE7O0lBTUFDLDBCQUEwQjtlQUExQkE7O0lBREFDLHlCQUF5QjtlQUF6QkE7O0lBUkFDLGNBQWM7ZUFBZEE7O0lBQ0FDLGVBQWU7ZUFBZkE7Ozt5QkFKdUI7QUFFN0IsSUFBTU4sZ0JBQWdCO0FBQ3RCLElBQU1LLGlCQUFpQjtBQUN2QixJQUFNQyxrQkFBa0I7QUFDeEIsSUFBTVIsa0JBQWtCRSxlQUFlLEdBQUc7QUFDMUMsSUFBTUUscUJBQXFCLEFBQUMsR0FBc0IsT0FBcEJLLDhCQUFtQixFQUFDO0FBQ2xELElBQU1WLHNCQUFzQjtBQUM1QixJQUFNSSxzQkFBc0I7QUFDNUIsSUFBTUYsc0JBQXNCO0FBQzVCLElBQU1ILHlCQUF5QjtBQUMvQixJQUFNUSw0QkFBNEI7QUFDbEMsSUFBTUQsNkJBQTZCRCxvQkFBb0IsR0FBRztJQUVqRSxXQUFlO0lBQ2JGLGVBQUFBO0lBQ0FLLGdCQUFBQTtJQUNBQyxpQkFBQUE7SUFDQVIsaUJBQUFBO0lBQ0FJLG9CQUFBQTtJQUNBTCxxQkFBQUE7SUFDQUkscUJBQUFBO0lBQ0FGLHFCQUFBQTtJQUNBSCx3QkFBQUE7SUFDQVEsMkJBQUFBO0lBQ0FELDRCQUFBQTtBQUNGIn0=