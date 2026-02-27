"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get fileNameSVGPaddingLeft () {
        return fileNameSVGPaddingLeft;
    },
    get juliaMonoLineHeight () {
        return juliaMonoLineHeight;
    },
    get markerSVGHeight () {
        return markerSVGHeight;
    },
    get markerSVGMarginLeft () {
        return markerSVGMarginLeft;
    },
    get nameSVGHeight () {
        return nameSVGHeight;
    },
    get nameSVGMarginBottom () {
        return nameSVGMarginBottom;
    },
    get scrollbarThickness () {
        return scrollbarThickness;
    },
    get scrollbarThumbBorderRadius () {
        return scrollbarThumbBorderRadius;
    },
    get scrollbarThumbBorderWidth () {
        return scrollbarThumbBorderWidth;
    },
    get titleSVGHeight () {
        return titleSVGHeight;
    },
    get toggleSVGHeight () {
        return toggleSVGHeight;
    }
});
const _constants = require("./constants");
const nameSVGHeight = "2.1rem";
const titleSVGHeight = "2.1rem";
const toggleSVGHeight = "1.8rem";
const markerSVGHeight = nameSVGHeight; ///
const scrollbarThickness = `${_constants.SCROLLBAR_THICKNESS}px`;
const juliaMonoLineHeight = 1.5;
const nameSVGMarginBottom = "0.4rem";
const markerSVGMarginLeft = "2.4rem";
const fileNameSVGPaddingLeft = "2.2rem";
const scrollbarThumbBorderWidth = "6px";
const scrollbarThumbBorderRadius = `${_constants.SCROLLBAR_THICKNESS / 2}px`;
const _default = {
    nameSVGHeight,
    titleSVGHeight,
    toggleSVGHeight,
    markerSVGHeight,
    scrollbarThickness,
    juliaMonoLineHeight,
    nameSVGMarginBottom,
    markerSVGMarginLeft,
    fileNameSVGPaddingLeft,
    scrollbarThumbBorderWidth,
    scrollbarThumbBorderRadius
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNDUk9MTEJBUl9USElDS05FU1MgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVTVkdIZWlnaHQgPSBcIjIuMXJlbVwiXG5leHBvcnQgY29uc3QgdGl0bGVTVkdIZWlnaHQgPSBcIjIuMXJlbVwiO1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNWR0hlaWdodCA9IFwiMS44cmVtXCJcbmV4cG9ydCBjb25zdCBtYXJrZXJTVkdIZWlnaHQgPSBuYW1lU1ZHSGVpZ2h0OyAvLy9cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaGlja25lc3MgPSBgJHtTQ1JPTExCQVJfVEhJQ0tORVNTfXB4YDtcbmV4cG9ydCBjb25zdCBqdWxpYU1vbm9MaW5lSGVpZ2h0ID0gMS41O1xuZXhwb3J0IGNvbnN0IG5hbWVTVkdNYXJnaW5Cb3R0b20gPSBcIjAuNHJlbVwiO1xuZXhwb3J0IGNvbnN0IG1hcmtlclNWR01hcmdpbkxlZnQgPSBcIjIuNHJlbVwiO1xuZXhwb3J0IGNvbnN0IGZpbGVOYW1lU1ZHUGFkZGluZ0xlZnQgPSBcIjIuMnJlbVwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyV2lkdGggPSBcIjZweFwiO1xuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzID0gYCR7U0NST0xMQkFSX1RISUNLTkVTUyAvIDJ9cHhgO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWVTVkdIZWlnaHQsXG4gIHRpdGxlU1ZHSGVpZ2h0LFxuICB0b2dnbGVTVkdIZWlnaHQsXG4gIG1hcmtlclNWR0hlaWdodCxcbiAgc2Nyb2xsYmFyVGhpY2tuZXNzLFxuICBqdWxpYU1vbm9MaW5lSGVpZ2h0LFxuICBuYW1lU1ZHTWFyZ2luQm90dG9tLFxuICBtYXJrZXJTVkdNYXJnaW5MZWZ0LFxuICBmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0LFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlcldpZHRoLFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c1xufTtcbiJdLCJuYW1lcyI6WyJmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0IiwianVsaWFNb25vTGluZUhlaWdodCIsIm1hcmtlclNWR0hlaWdodCIsIm1hcmtlclNWR01hcmdpbkxlZnQiLCJuYW1lU1ZHSGVpZ2h0IiwibmFtZVNWR01hcmdpbkJvdHRvbSIsInNjcm9sbGJhclRoaWNrbmVzcyIsInNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCIsInRpdGxlU1ZHSGVpZ2h0IiwidG9nZ2xlU1ZHSGVpZ2h0IiwiU0NST0xMQkFSX1RISUNLTkVTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0JBO2VBQUE7O1FBSmFBO2VBQUFBOztRQUhBQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQVBBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBRkFDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFEQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQUNBQztlQUFBQTs7OzJCQUp1QjtBQUU3QixNQUFNTixnQkFBZ0I7QUFDdEIsTUFBTUssaUJBQWlCO0FBQ3ZCLE1BQU1DLGtCQUFrQjtBQUN4QixNQUFNUixrQkFBa0JFLGVBQWUsR0FBRztBQUMxQyxNQUFNRSxxQkFBcUIsR0FBR0ssOEJBQW1CLENBQUMsRUFBRSxDQUFDO0FBQ3JELE1BQU1WLHNCQUFzQjtBQUM1QixNQUFNSSxzQkFBc0I7QUFDNUIsTUFBTUYsc0JBQXNCO0FBQzVCLE1BQU1ILHlCQUF5QjtBQUMvQixNQUFNUSw0QkFBNEI7QUFDbEMsTUFBTUQsNkJBQTZCLEdBQUdJLDhCQUFtQixHQUFHLEVBQUUsRUFBRSxDQUFDO01BRXhFLFdBQWU7SUFDYlA7SUFDQUs7SUFDQUM7SUFDQVI7SUFDQUk7SUFDQUw7SUFDQUk7SUFDQUY7SUFDQUg7SUFDQVE7SUFDQUQ7QUFDRiJ9