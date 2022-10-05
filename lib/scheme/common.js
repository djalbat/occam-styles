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
    commonColour: function() {
        return commonColour;
    },
    titleSVGColour: function() {
        return titleSVGColour;
    },
    clearConsoleColour: function() {
        return clearConsoleColour;
    },
    commonBorderColour: function() {
        return commonBorderColour;
    },
    commonBackgroundColour: function() {
        return commonBackgroundColour;
    },
    commonInputBackgroundColour: function() {
        return commonInputBackgroundColour;
    },
    commonSelectBackgroundColour: function() {
        return commonSelectBackgroundColour;
    },
    commonButtonBackgroundColour: function() {
        return commonButtonBackgroundColour;
    },
    commonDisabledButtonColour: function() {
        return commonDisabledButtonColour;
    },
    commonDisabledInputColour: function() {
        return commonDisabledInputColour;
    },
    commonScrollbarThumbBorderColour: function() {
        return commonScrollbarThumbBorderColour;
    },
    commonScrollbarTrackBackgroundColour: function() {
        return commonScrollbarTrackBackgroundColour;
    },
    commonScrollbarThumbBackgroundColour: function() {
        return commonScrollbarThumbBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _colours = require("../colours");
var commonColour = _colours.woodsmoke;
var titleSVGColour = _colours.emperor;
var clearConsoleColour = _colours.walnut; ///
var commonBorderColour = _colours.stormDust;
var commonBackgroundColour = _colours.dawn;
var commonInputBackgroundColour = _colours.bonjour;
var commonSelectBackgroundColour = _colours.bonjour;
var commonButtonBackgroundColour = _colours.bonjour;
var commonDisabledButtonColour = _colours.stormDust;
var commonDisabledInputColour = _colours.stormDust;
var commonScrollbarThumbBorderColour = _colours.dawn;
var commonScrollbarTrackBackgroundColour = _colours.dawn;
var commonScrollbarThumbBackgroundColour = _colours.stormDust;
var _default = {
    commonColour: commonColour,
    titleSVGColour: titleSVGColour,
    clearConsoleColour: clearConsoleColour,
    commonBorderColour: commonBorderColour,
    commonBackgroundColour: commonBackgroundColour,
    commonInputBackgroundColour: commonInputBackgroundColour,
    commonSelectBackgroundColour: commonSelectBackgroundColour,
    commonButtonBackgroundColour: commonButtonBackgroundColour,
    commonDisabledButtonColour: commonDisabledButtonColour,
    commonDisabledInputColour: commonDisabledInputColour,
    commonScrollbarThumbBorderColour: commonScrollbarThumbBorderColour,
    commonScrollbarTrackBackgroundColour: commonScrollbarTrackBackgroundColour,
    commonScrollbarThumbBackgroundColour: commonScrollbarThumbBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCB3b29kc21va2UsIHN0b3JtRHVzdCwgd2FsbnV0LCBlbXBlcm9yIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHRpdGxlU1ZHQ29sb3VyID0gZW1wZXJvcjtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29uc29sZUNvbG91ciA9IHdhbG51dDsgLy8vXG5cbmV4cG9ydCBjb25zdCBjb21tb25Cb3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25CYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21tb25Db2xvdXIsXG4gIHRpdGxlU1ZHQ29sb3VyLFxuICBjbGVhckNvbnNvbGVDb2xvdXIsXG4gIGNvbW1vbkJvcmRlckNvbG91cixcbiAgY29tbW9uQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91cixcbiAgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91cixcbiAgY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImNvbW1vbkNvbG91ciIsInRpdGxlU1ZHQ29sb3VyIiwiY2xlYXJDb25zb2xlQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwiY29tbW9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciIsImNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIiLCJjb21tb25EaXNhYmxlZElucHV0Q29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJlbXBlcm9yIiwid2FsbnV0Iiwic3Rvcm1EdXN0IiwiZGF3biIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlhQSxZQUFZO2VBQVpBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUVBQyxvQ0FBb0M7ZUFBcENBOztJQUVBQyxvQ0FBb0M7ZUFBcENBOztJQUViLE9BY0U7ZUFkRjs7O3VCQTVCcUU7QUFFOUQsSUFBTVosZUFBZWEsa0JBQVM7QUFFOUIsSUFBTVosaUJBQWlCYSxnQkFBTztBQUU5QixJQUFNWixxQkFBcUJhLGVBQU0sRUFBRSxHQUFHO0FBRXRDLElBQU1aLHFCQUFxQmEsa0JBQVM7QUFFcEMsSUFBTVoseUJBQXlCYSxhQUFJO0FBRW5DLElBQU1aLDhCQUE4QmEsZ0JBQU87QUFFM0MsSUFBTVosK0JBQStCWSxnQkFBTztBQUU1QyxJQUFNWCwrQkFBK0JXLGdCQUFPO0FBRTVDLElBQU1WLDZCQUE2QlEsa0JBQVM7QUFFNUMsSUFBTVAsNEJBQTRCTyxrQkFBUztBQUUzQyxJQUFNTixtQ0FBbUNPLGFBQUk7QUFFN0MsSUFBTU4sdUNBQXVDTSxhQUFJO0FBRWpELElBQU1MLHVDQUF1Q0ksa0JBQVM7SUFFN0QsV0FBZTtJQUNiaEIsY0FBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsOEJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsa0NBQUFBO0lBQ0FDLHNDQUFBQTtJQUNBQyxzQ0FBQUE7QUFDRiJ9