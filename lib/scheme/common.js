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
    commonDisabledFill: function() {
        return commonDisabledFill;
    },
    commonDisabledInputColour: function() {
        return commonDisabledInputColour;
    },
    commonDisabledButtonColour: function() {
        return commonDisabledButtonColour;
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
    clearConsoleFill: function() {
        return clearConsoleFill;
    },
    tooltipBackgroundColour: function() {
        return tooltipBackgroundColour;
    },
    commonHoverButtonColour: function() {
        return commonHoverButtonColour;
    },
    commonHoverButtonBackgroundColour: function() {
        return commonHoverButtonBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _colours = require("../colours");
var commonFill = _colours.tuatara;
var commonColour = _colours.woodsmoke;
var commonBorderColour = _colours.stormDust;
var commonBackgroundColour = _colours.dawn;
var commonInputBackgroundColour = _colours.bonjour;
var commonSelectBackgroundColour = _colours.bonjour;
var commonButtonBackgroundColour = _colours.bonjour;
var commonDisabledFill = _colours.stormDust;
var commonDisabledInputColour = _colours.stormDust;
var commonDisabledButtonColour = _colours.stormDust;
var commonScrollbarThumbBorderColour = _colours.dawn;
var commonScrollbarTrackBackgroundColour = _colours.dawn;
var commonScrollbarThumbBackgroundColour = _colours.stormDust;
var clearConsoleFill = _colours.walnut;
var tooltipBackgroundColour = _colours.bianca;
var commonHoverButtonColour = _colours.springWood;
var commonHoverButtonBackgroundColour = _colours.stardust;
var _default = {
    commonFill: commonFill,
    commonColour: commonColour,
    commonBorderColour: commonBorderColour,
    commonBackgroundColour: commonBackgroundColour,
    commonInputBackgroundColour: commonInputBackgroundColour,
    commonSelectBackgroundColour: commonSelectBackgroundColour,
    commonButtonBackgroundColour: commonButtonBackgroundColour,
    commonDisabledFill: commonDisabledFill,
    commonDisabledInputColour: commonDisabledInputColour,
    commonDisabledButtonColour: commonDisabledButtonColour,
    commonScrollbarThumbBorderColour: commonScrollbarThumbBorderColour,
    commonScrollbarTrackBackgroundColour: commonScrollbarTrackBackgroundColour,
    commonScrollbarThumbBackgroundColour: commonScrollbarThumbBackgroundColour,
    clearConsoleFill: clearConsoleFill,
    tooltipBackgroundColour: tooltipBackgroundColour,
    commonHoverButtonColour: commonHoverButtonColour,
    commonHoverButtonBackgroundColour: commonHoverButtonBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCBiaWFuY2EsIHdvb2RzbW9rZSwgc3RhcmR1c3QsIHN0b3JtRHVzdCwgd2FsbnV0LCB0dWF0YXJhLCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuXG5leHBvcnQgY29uc3QgY29tbW9uRmlsbCA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCBjb21tb25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBjb21tb25Cb3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25CYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRGaWxsID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29uc29sZUZpbGwgPSB3YWxudXQ7XG5cbmV4cG9ydCBjb25zdCB0b29sdGlwQmFja2dyb3VuZENvbG91ciA9IGJpYW5jYTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkhvdmVyQnV0dG9uQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkhvdmVyQnV0dG9uQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkZpbGwsXG4gIGNvbW1vbkNvbG91cixcbiAgY29tbW9uQm9yZGVyQ29sb3VyLFxuICBjb21tb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkRmlsbCxcbiAgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91cixcbiAgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgY2xlYXJDb25zb2xlRmlsbCxcbiAgdG9vbHRpcEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkhvdmVyQnV0dG9uQ29sb3VyLFxuICBjb21tb25Ib3ZlckJ1dHRvbkJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiY29tbW9uRmlsbCIsImNvbW1vbkNvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbkRpc2FibGVkRmlsbCIsImNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIiLCJjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciIsImNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwiY2xlYXJDb25zb2xlRmlsbCIsInRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uSG92ZXJCdXR0b25Db2xvdXIiLCJjb21tb25Ib3ZlckJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJ0dWF0YXJhIiwid29vZHNtb2tlIiwic3Rvcm1EdXN0IiwiZGF3biIsImJvbmpvdXIiLCJ3YWxudXQiLCJiaWFuY2EiLCJzcHJpbmdXb29kIiwic3RhcmR1c3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUthQSxVQUFVO2VBQVZBOztJQUVBQyxZQUFZO2VBQVpBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUVBQyxvQ0FBb0M7ZUFBcENBOztJQUVBQyxvQ0FBb0M7ZUFBcENBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQyxpQ0FBaUM7ZUFBakNBOztJQUViLE9Ba0JFO2VBbEJGOzs7dUJBckNtRztBQUc1RixJQUFNaEIsYUFBYWlCO0FBRW5CLElBQU1oQixlQUFlaUI7QUFFckIsSUFBTWhCLHFCQUFxQmlCO0FBRTNCLElBQU1oQix5QkFBeUJpQjtBQUUvQixJQUFNaEIsOEJBQThCaUI7QUFFcEMsSUFBTWhCLCtCQUErQmdCO0FBRXJDLElBQU1mLCtCQUErQmU7QUFFckMsSUFBTWQscUJBQXFCWTtBQUUzQixJQUFNWCw0QkFBNEJXO0FBRWxDLElBQU1WLDZCQUE2QlU7QUFFbkMsSUFBTVQsbUNBQW1DVTtBQUV6QyxJQUFNVCx1Q0FBdUNTO0FBRTdDLElBQU1SLHVDQUF1Q087QUFFN0MsSUFBTU4sbUJBQW1CUztBQUV6QixJQUFNUiwwQkFBMEJTO0FBRWhDLElBQU1SLDBCQUEwQlM7QUFFaEMsSUFBTVIsb0NBQW9DUztJQUVqRCxXQUFlO0lBQ2J6QixZQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsOEJBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsNEJBQUFBO0lBQ0FDLGtDQUFBQTtJQUNBQyxzQ0FBQUE7SUFDQUMsc0NBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBQyx5QkFBQUE7SUFDQUMseUJBQUFBO0lBQ0FDLG1DQUFBQTtBQUNGIn0=