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
    commonFill: function() {
        return commonFill;
    },
    commonColour: function() {
        return commonColour;
    },
    clearConsoleColour: function() {
        return clearConsoleColour;
    },
    tooltipBackgroundColour: function() {
        return tooltipBackgroundColour;
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
var commonFill = _colours.tuatara;
var commonColour = _colours.woodsmoke;
var clearConsoleColour = _colours.walnut; ///
var tooltipBackgroundColour = _colours.bianca; ///
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
    commonFill: commonFill,
    commonColour: commonColour,
    clearConsoleColour: clearConsoleColour,
    tooltipBackgroundColour: tooltipBackgroundColour,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCBiaWFuY2EsIHdvb2RzbW9rZSwgc3Rvcm1EdXN0LCB3YWxudXQsIHR1YXRhcmEgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRmlsbCA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCBjb21tb25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBjbGVhckNvbnNvbGVDb2xvdXIgPSB3YWxudXQ7IC8vL1xuXG5leHBvcnQgY29uc3QgdG9vbHRpcEJhY2tncm91bmRDb2xvdXIgPSBiaWFuY2E7ICAvLy9cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkZpbGwsXG4gIGNvbW1vbkNvbG91cixcbiAgY2xlYXJDb25zb2xlQ29sb3VyLFxuICB0b29sdGlwQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uQm9yZGVyQ29sb3VyLFxuICBjb21tb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyLFxuICBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91cixcbiAgY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiY29tbW9uRmlsbCIsImNvbW1vbkNvbG91ciIsImNsZWFyQ29uc29sZUNvbG91ciIsInRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwiY29tbW9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciIsImNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIiLCJjb21tb25EaXNhYmxlZElucHV0Q29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJ0dWF0YXJhIiwid29vZHNtb2tlIiwid2FsbnV0IiwiYmlhbmNhIiwic3Rvcm1EdXN0IiwiZGF3biIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlhQSxVQUFVO2VBQVZBOztJQUVBQyxZQUFZO2VBQVpBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUVBQyxvQ0FBb0M7ZUFBcENBOztJQUVBQyxvQ0FBb0M7ZUFBcENBOztJQUViLE9BZUU7ZUFmRjs7O3VCQTlCNkU7QUFFdEUsSUFBTWIsYUFBYWMsZ0JBQU87QUFFMUIsSUFBTWIsZUFBZWMsa0JBQVM7QUFFOUIsSUFBTWIscUJBQXFCYyxlQUFNLEVBQUUsR0FBRztBQUV0QyxJQUFNYiwwQkFBMEJjLGVBQU0sRUFBRyxHQUFHO0FBRTVDLElBQU1iLHFCQUFxQmMsa0JBQVM7QUFFcEMsSUFBTWIseUJBQXlCYyxhQUFJO0FBRW5DLElBQU1iLDhCQUE4QmMsZ0JBQU87QUFFM0MsSUFBTWIsK0JBQStCYSxnQkFBTztBQUU1QyxJQUFNWiwrQkFBK0JZLGdCQUFPO0FBRTVDLElBQU1YLDZCQUE2QlMsa0JBQVM7QUFFNUMsSUFBTVIsNEJBQTRCUSxrQkFBUztBQUUzQyxJQUFNUCxtQ0FBbUNRLGFBQUk7QUFFN0MsSUFBTVAsdUNBQXVDTyxhQUFJO0FBRWpELElBQU1OLHVDQUF1Q0ssa0JBQVM7SUFFN0QsV0FBZTtJQUNibEIsWUFBQUE7SUFDQUMsY0FBQUE7SUFDQUMsb0JBQUFBO0lBQ0FDLHlCQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsOEJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsa0NBQUFBO0lBQ0FDLHNDQUFBQTtJQUNBQyxzQ0FBQUE7QUFDRiJ9