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
    borderColour: function() {
        return borderColour;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    gutterBorderColour: function() {
        return gutterBorderColour;
    },
    caretBackgroundColour: function() {
        return caretBackgroundColour;
    },
    gutterBackgroundColour: function() {
        return gutterBackgroundColour;
    },
    foldsLineBackgroundColour: function() {
        return foldsLineBackgroundColour;
    },
    selectionBackgroundColour: function() {
        return selectionBackgroundColour;
    },
    scrollbarThumbBorderColour: function() {
        return scrollbarThumbBorderColour;
    },
    scrollbarTrackBackgroundColour: function() {
        return scrollbarTrackBackgroundColour;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
    },
    remoteSelectionsBackgroundColour: function() {
        return remoteSelectionsBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var borderColour = _common.commonBorderColour; ///
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var gutterBorderColour = _colours.stormDust;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var foldsLineBackgroundColour = _colours.stormDust;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBorderColour = _colours.dune;
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    borderColour: borderColour,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    gutterBorderColour: gutterBorderColour,
    caretBackgroundColour: caretBackgroundColour,
    gutterBackgroundColour: gutterBackgroundColour,
    foldsLineBackgroundColour: foldsLineBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBorderColour: scrollbarThumbBorderColour,
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCB3b29kc21va2UsIGJsYWNrT2xpdmUgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciA9IGR1bmU7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBib3JkZXJDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBndXR0ZXJCb3JkZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgZm9sZHNMaW5lQmFja2dyb3VuZENvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLFxuICByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwiZm9sZHNMaW5lQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwid29vZHNtb2tlIiwic3Rvcm1EdXN0IiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImR1bmUiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLFlBQVk7ZUFBWkE7O0lBRUFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGlCQUFpQjtlQUFqQkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLHFCQUFxQjtlQUFyQkE7O0lBRUFDLHNCQUFzQjtlQUF0QkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7O0lBRWIsT0FhRTtlQWJGOzs7c0JBNUJtQzt1QkFFOEM7QUFFMUUsSUFBTVgsZUFBZVksMEJBQWtCLEVBQUUsR0FBRztBQUU1QyxJQUFNWCxtQkFBbUJZLGtCQUFTO0FBRWxDLElBQU1YLG9CQUFvQlksa0JBQVM7QUFFbkMsSUFBTVgscUJBQXFCVyxrQkFBUztBQUVwQyxJQUFNVix3QkFBd0JXLGdCQUFPO0FBRXJDLElBQU1WLHlCQUF5QlcsbUJBQVU7QUFFekMsSUFBTVYsNEJBQTRCUSxrQkFBUztBQUUzQyxJQUFNUCw0QkFBNEJVLGNBQUs7QUFFdkMsSUFBTVQsNkJBQTZCVSxhQUFJO0FBRXZDLElBQU1ULGlDQUFpQ1MsYUFBSTtBQUUzQyxJQUFNUixpQ0FBaUNJLGtCQUFTO0FBRWhELElBQU1ILG1DQUFtQ1EsaUJBQVE7SUFFeEQsV0FBZTtJQUNibkIsY0FBQUE7SUFDQUMsa0JBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FDLHdCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FDLGtDQUFBQTtBQUNGIn0=