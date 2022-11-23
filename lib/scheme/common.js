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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge2Rhd24sIGJvbmpvdXIsIGJpYW5jYSwgd29vZHNtb2tlLCBzdG9ybUR1c3QsIHdhbG51dCwgdHVhdGFyYSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25GaWxsID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29uc29sZUNvbG91ciA9IHdhbG51dDsgLy8vXG5cbmV4cG9ydCBjb25zdCB0b29sdGlwQmFja2dyb3VuZENvbG91ciA9IGJpYW5jYTsgIC8vL1xuXG5leHBvcnQgY29uc3QgY29tbW9uQm9yZGVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uQmFja2dyb3VuZENvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2VsZWN0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tbW9uRmlsbCxcbiAgY29tbW9uQ29sb3VyLFxuICBjbGVhckNvbnNvbGVDb2xvdXIsXG4gIHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25Cb3JkZXJDb2xvdXIsXG4gIGNvbW1vbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uU2VsZWN0QmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJjb21tb25GaWxsIiwiY29tbW9uQ29sb3VyIiwiY2xlYXJDb25zb2xlQ29sb3VyIiwidG9vbHRpcEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJjb21tb25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2VsZWN0QmFja2dyb3VuZENvbG91ciIsImNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciIsImNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciIsImNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInR1YXRhcmEiLCJ3b29kc21va2UiLCJ3YWxudXQiLCJiaWFuY2EiLCJzdG9ybUR1c3QiLCJkYXduIiwiYm9uam91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWFBLFVBQVU7ZUFBVkE7O0lBRUFDLFlBQVk7ZUFBWkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLHNCQUFzQjtlQUF0QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBRUFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7O0lBRUFDLG9DQUFvQztlQUFwQ0E7O0lBRUFDLG9DQUFvQztlQUFwQ0E7O0lBRWIsT0FlRTtlQWZGOzs7dUJBOUI0RTtBQUVyRSxJQUFNYixhQUFhYyxnQkFBTztBQUUxQixJQUFNYixlQUFlYyxrQkFBUztBQUU5QixJQUFNYixxQkFBcUJjLGVBQU0sRUFBRSxHQUFHO0FBRXRDLElBQU1iLDBCQUEwQmMsZUFBTSxFQUFHLEdBQUc7QUFFNUMsSUFBTWIscUJBQXFCYyxrQkFBUztBQUVwQyxJQUFNYix5QkFBeUJjLGFBQUk7QUFFbkMsSUFBTWIsOEJBQThCYyxnQkFBTztBQUUzQyxJQUFNYiwrQkFBK0JhLGdCQUFPO0FBRTVDLElBQU1aLCtCQUErQlksZ0JBQU87QUFFNUMsSUFBTVgsNkJBQTZCUyxrQkFBUztBQUU1QyxJQUFNUiw0QkFBNEJRLGtCQUFTO0FBRTNDLElBQU1QLG1DQUFtQ1EsYUFBSTtBQUU3QyxJQUFNUCx1Q0FBdUNPLGFBQUk7QUFFakQsSUFBTU4sdUNBQXVDSyxrQkFBUztJQUU3RCxXQUFlO0lBQ2JsQixZQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMseUJBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBQyx3QkFBQUE7SUFDQUMsNkJBQUFBO0lBQ0FDLDhCQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsNEJBQUFBO0lBQ0FDLDJCQUFBQTtJQUNBQyxrQ0FBQUE7SUFDQUMsc0NBQUFBO0lBQ0FDLHNDQUFBQTtBQUNGIn0=