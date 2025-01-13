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
    backgroundColour: function() {
        return backgroundColour;
    },
    caretBackgroundColour: function() {
        return caretBackgroundColour;
    },
    default: function() {
        return _default;
    },
    foldButtonHoverStroke: function() {
        return foldButtonHoverStroke;
    },
    foldButtonStroke: function() {
        return foldButtonStroke;
    },
    foldFill: function() {
        return foldFill;
    },
    gutterBackgroundColour: function() {
        return gutterBackgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    remoteSelectionsBackgroundColour: function() {
        return remoteSelectionsBackgroundColour;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
    },
    selectedColour: function() {
        return selectedColour;
    },
    selectionBackgroundColour: function() {
        return selectionBackgroundColour;
    }
});
var _colours = require("../colours");
var foldFill = _colours.woodsmoke;
var selectedColour = _colours.springWood;
var foldButtonStroke = _colours.pablo;
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var foldButtonHoverStroke = _colours.hurricane;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBackgroundColour = _colours.naturalGray;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    selectedColour: selectedColour,
    foldButtonStroke: foldButtonStroke,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    caretBackgroundColour: caretBackgroundColour,
    foldButtonHoverStroke: foldButtonHoverStroke,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCB3b29kc21va2UsIGh1cnJpY2FuZSwgYmxhY2tPbGl2ZSwgc3ByaW5nV29vZCwgbmF0dXJhbEdyYXkgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZEZpbGwgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uU3Ryb2tlID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgbGluZU51bWJlcnNDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uSG92ZXJTdHJva2UgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCBjYXJldEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgZ3V0dGVyQmFja2dyb3VuZENvbG91ciA9IGJsYWNrT2xpdmU7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBuYXR1cmFsR3JheTtcblxuZXhwb3J0IGNvbnN0IHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9sZEZpbGwsXG4gIHNlbGVjdGVkQ29sb3VyLFxuICBmb2xkQnV0dG9uU3Ryb2tlLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyc0NvbG91cixcbiAgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBmb2xkQnV0dG9uSG92ZXJTdHJva2UsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyc0NvbG91ciIsInJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwid29vZHNtb2tlIiwic3ByaW5nV29vZCIsInBhYmxvIiwic3Rvcm1EdXN0IiwiaHVycmljYW5lIiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsIm5hdHVyYWxHcmF5IiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVVhQSxnQkFBZ0I7ZUFBaEJBOztJQU1BQyxxQkFBcUI7ZUFBckJBOztJQVViLE9BWUU7ZUFaRjs7SUFaYUMscUJBQXFCO2VBQXJCQTs7SUFOQUMsZ0JBQWdCO2VBQWhCQTs7SUFKQUMsUUFBUTtlQUFSQTs7SUFjQUMsc0JBQXNCO2VBQXRCQTs7SUFOQUMsaUJBQWlCO2VBQWpCQTs7SUFZQUMsZ0NBQWdDO2VBQWhDQTs7SUFGQUMsOEJBQThCO2VBQTlCQTs7SUFoQkFDLGNBQWM7ZUFBZEE7O0lBY0FDLHlCQUF5QjtlQUF6QkE7Ozt1QkFsQnlHO0FBRS9HLElBQU1OLFdBQVdPLGtCQUFTO0FBRTFCLElBQU1GLGlCQUFpQkcsbUJBQVU7QUFFakMsSUFBTVQsbUJBQW1CVSxjQUFLO0FBRTlCLElBQU1iLG1CQUFtQlcsa0JBQVM7QUFFbEMsSUFBTUwsb0JBQW9CUSxrQkFBUztBQUVuQyxJQUFNWix3QkFBd0JhLGtCQUFTO0FBRXZDLElBQU1kLHdCQUF3QmUsZ0JBQU87QUFFckMsSUFBTVgseUJBQXlCWSxtQkFBVTtBQUV6QyxJQUFNUCw0QkFBNEJRLGNBQUs7QUFFdkMsSUFBTVYsaUNBQWlDVyxvQkFBVztBQUVsRCxJQUFNWixtQ0FBbUNhLGlCQUFRO0lBRXhELFdBQWU7SUFDYmhCLFVBQUFBO0lBQ0FLLGdCQUFBQTtJQUNBTixrQkFBQUE7SUFDQUgsa0JBQUFBO0lBQ0FNLG1CQUFBQTtJQUNBTCx1QkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FHLHdCQUFBQTtJQUNBSywyQkFBQUE7SUFDQUYsZ0NBQUFBO0lBQ0FELGtDQUFBQTtBQUNGIn0=