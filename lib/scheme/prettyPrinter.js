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
    foldFill: function() {
        return foldFill;
    },
    foldStroke: function() {
        return foldStroke;
    },
    borderColour: function() {
        return borderColour;
    },
    selectedColour: function() {
        return selectedColour;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    caretBackgroundColour: function() {
        return caretBackgroundColour;
    },
    gutterBackgroundColour: function() {
        return gutterBackgroundColour;
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
var foldFill = _colours.woodsmoke;
var foldStroke = _colours.pablo;
var borderColour = _common.commonBorderColour; ///
var selectedColour = _colours.springWood;
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBorderColour = _colours.dune;
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    foldStroke: foldStroke,
    borderColour: borderColour,
    selectedColour: selectedColour,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    caretBackgroundColour: caretBackgroundColour,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBorderColour: scrollbarThumbBorderColour,
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBwYWJsbywgYm9uam91ciwgbG9nQ2FiaW4sIHN0b3JtRHVzdCwgd29vZHNtb2tlLCBibGFja09saXZlLCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGZvbGRGaWxsID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgZm9sZFN0cm9rZSA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciA9IGR1bmU7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvbGRGaWxsLFxuICBmb2xkU3Ryb2tlLFxuICBib3JkZXJDb2xvdXIsXG4gIHNlbGVjdGVkQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyc0NvbG91cixcbiAgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91cixcbiAgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImZvbGRGaWxsIiwiZm9sZFN0cm9rZSIsImJvcmRlckNvbG91ciIsInNlbGVjdGVkQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsImxpbmVOdW1iZXJzQ29sb3VyIiwiY2FyZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZ3V0dGVyQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwid29vZHNtb2tlIiwicGFibG8iLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJzcHJpbmdXb29kIiwic3Rvcm1EdXN0IiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImR1bmUiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLFFBQVE7ZUFBUkE7O0lBRUFDLFVBQVU7ZUFBVkE7O0lBRUFDLFlBQVk7ZUFBWkE7O0lBRUFDLGNBQWM7ZUFBZEE7O0lBRUFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGlCQUFpQjtlQUFqQkE7O0lBRUFDLHFCQUFxQjtlQUFyQkE7O0lBRUFDLHNCQUFzQjtlQUF0QkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7O0lBRWIsT0FjRTtlQWRGOzs7c0JBOUJtQzt1QkFFaUU7QUFFN0YsSUFBTVosV0FBV2Esa0JBQVM7QUFFMUIsSUFBTVosYUFBYWEsY0FBSztBQUV4QixJQUFNWixlQUFlYSwwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1aLGlCQUFpQmEsbUJBQVU7QUFFakMsSUFBTVosbUJBQW1CUyxrQkFBUztBQUVsQyxJQUFNUixvQkFBb0JZLGtCQUFTO0FBRW5DLElBQU1YLHdCQUF3QlksZ0JBQU87QUFFckMsSUFBTVgseUJBQXlCWSxtQkFBVTtBQUV6QyxJQUFNWCw0QkFBNEJZLGNBQUs7QUFFdkMsSUFBTVgsNkJBQTZCWSxhQUFJO0FBRXZDLElBQU1YLGlDQUFpQ1csYUFBSTtBQUUzQyxJQUFNVixpQ0FBaUNNLGtCQUFTO0FBRWhELElBQU1MLG1DQUFtQ1UsaUJBQVE7SUFFeEQsV0FBZTtJQUNidEIsVUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsY0FBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FDLHdCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsNEJBQUFBO0lBQ0FDLGdDQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsa0NBQUFBO0FBQ0YifQ==