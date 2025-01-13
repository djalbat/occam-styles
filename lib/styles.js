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
var scrollbarThumbBorderRadius = "".concat(_constants.SCROLLBAR_THICKNESS / 2, "px");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNDUk9MTEJBUl9USElDS05FU1MgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVTVkdIZWlnaHQgPSBcIjIuMXJlbVwiXG5leHBvcnQgY29uc3QgdGl0bGVTVkdIZWlnaHQgPSBcIjIuMXJlbVwiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNWR0hlaWdodCA9IFwiMS44cmVtXCJcbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdIZWlnaHQgPSBuYW1lU1ZHSGVpZ2h0OyAvLy9cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaGlja25lc3MgPSBgJHtTQ1JPTExCQVJfVEhJQ0tORVNTfXB4YDtcbmV4cG9ydCBjb25zdCBqdWxpYU1vbm9MaW5lSGVpZ2h0ID0gMS41O1xuZXhwb3J0IGNvbnN0IG5hbWVTVkdNYXJnaW5Cb3R0b20gPSBcIjAuNHJlbVwiO1xuZXhwb3J0IGNvbnN0IG1hcmtlclNWR01hcmdpbkxlZnQgPSBcIjIuNHJlbVwiO1xuZXhwb3J0IGNvbnN0IGZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQgPSBcIjIuMnJlbVwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyV2lkdGggPSBcIjZweFwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzID0gYCR7U0NST0xMQkFSX1RISUNLTkVTUyAvIDJ9cHhgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWVTVkdIZWlnaHQsXG4gIHRpdGxlU1ZHSGVpZ2h0LFxuICB0b2dnbGVTVkdIZWlnaHQsXG4gIG1hcmtlclNWR0hlaWdodCxcbiAgc2Nyb2xsYmFyVGhpY2tuZXNzLFxuICBqdWxpYU1vbm9MaW5lSGVpZ2h0LFxuICBuYW1lU1ZHTWFyZ2luQm90dG9tLFxuICBtYXJrZXJTVkdNYXJnaW5MZWZ0LFxuICBmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0LFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlcldpZHRoLFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c1xufTtcbiJdLCJuYW1lcyI6WyJmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0IiwianVsaWFNb25vTGluZUhlaWdodCIsIm1hcmtlclNWR0hlaWdodCIsIm1hcmtlclNWR01hcmdpbkxlZnQiLCJuYW1lU1ZHSGVpZ2h0IiwibmFtZVNWR01hcmdpbkJvdHRvbSIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCIsInRpdGxlU1ZHSGVpZ2h0IiwidG9nZ2xlU1ZHSGVpZ2h0IiwiU0NST0xMQkFSX1RISUNLTkVTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0JBLE9BWUU7ZUFaRjs7SUFKYUEsc0JBQXNCO2VBQXRCQTs7SUFIQUMsbUJBQW1CO2VBQW5CQTs7SUFGQUMsZUFBZTtlQUFmQTs7SUFJQUMsbUJBQW1CO2VBQW5CQTs7SUFQQUMsYUFBYTtlQUFiQTs7SUFNQUMsbUJBQW1CO2VBQW5CQTs7SUFGQUMsa0JBQWtCO2VBQWxCQTs7SUFNQUMsMEJBQTBCO2VBQTFCQTs7SUFEQUMseUJBQXlCO2VBQXpCQTs7SUFSQUMsY0FBYztlQUFkQTs7SUFDQUMsZUFBZTtlQUFmQTs7O3lCQUp1QjtBQUU3QixJQUFNTixnQkFBZ0I7QUFDdEIsSUFBTUssaUJBQWlCO0FBQ3ZCLElBQU1DLGtCQUFrQjtBQUN4QixJQUFNUixrQkFBa0JFLGVBQWUsR0FBRztBQUMxQyxJQUFNRSxxQkFBcUIsQUFBQyxHQUFzQixPQUFwQkssOEJBQW1CLEVBQUM7QUFDbEQsSUFBTVYsc0JBQXNCO0FBQzVCLElBQU1JLHNCQUFzQjtBQUM1QixJQUFNRixzQkFBc0I7QUFDNUIsSUFBTUgseUJBQXlCO0FBQy9CLElBQU1RLDRCQUE0QjtBQUNsQyxJQUFNRCw2QkFBNkIsQUFBQyxHQUEwQixPQUF4QkksOEJBQW1CLEdBQUcsR0FBRTtJQUVyRSxXQUFlO0lBQ2JQLGVBQUFBO0lBQ0FLLGdCQUFBQTtJQUNBQyxpQkFBQUE7SUFDQVIsaUJBQUFBO0lBQ0FJLG9CQUFBQTtJQUNBTCxxQkFBQUE7SUFDQUkscUJBQUFBO0lBQ0FGLHFCQUFBQTtJQUNBSCx3QkFBQUE7SUFDQVEsMkJBQUFBO0lBQ0FELDRCQUFBQTtBQUNGIn0=