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
    foldStrokeHover: function() {
        return foldStrokeHover;
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
var foldStrokeHover = _colours.stardust;
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
    foldStrokeHover: foldStrokeHover,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBwYWJsbywgYm9uam91ciwgc3RhcmR1c3QsIGxvZ0NhYmluLCBzdG9ybUR1c3QsIHdvb2RzbW9rZSwgYmxhY2tPbGl2ZSwgc3ByaW5nV29vZCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRTdHJva2UgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkU3Ryb2tlSG92ZXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciA9IGR1bmU7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvbGRGaWxsLFxuICBmb2xkU3Ryb2tlLFxuICBib3JkZXJDb2xvdXIsXG4gIHNlbGVjdGVkQ29sb3VyLFxuICBmb2xkU3Ryb2tlSG92ZXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiZm9sZEZpbGwiLCJmb2xkU3Ryb2tlIiwiYm9yZGVyQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJmb2xkU3Ryb2tlSG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJwYWJsbyIsImNvbW1vbkJvcmRlckNvbG91ciIsInNwcmluZ1dvb2QiLCJzdGFyZHVzdCIsInN0b3JtRHVzdCIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJkdW5lIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxRQUFRO2VBQVJBOztJQUVBQyxVQUFVO2VBQVZBOztJQUVBQyxZQUFZO2VBQVpBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUViLE9BZUU7ZUFmRjs7O3NCQWhDbUM7dUJBRTJFO0FBRXZHLElBQU1iLFdBQVdjLGtCQUFTO0FBRTFCLElBQU1iLGFBQWFjLGNBQUs7QUFFeEIsSUFBTWIsZUFBZWMsMEJBQWtCLEVBQUUsR0FBRztBQUU1QyxJQUFNYixpQkFBaUJjLG1CQUFVO0FBRWpDLElBQU1iLGtCQUFrQmMsaUJBQVE7QUFFaEMsSUFBTWIsbUJBQW1CUyxrQkFBUztBQUVsQyxJQUFNUixvQkFBb0JhLGtCQUFTO0FBRW5DLElBQU1aLHdCQUF3QmEsZ0JBQU87QUFFckMsSUFBTVoseUJBQXlCYSxtQkFBVTtBQUV6QyxJQUFNWiw0QkFBNEJhLGNBQUs7QUFFdkMsSUFBTVosNkJBQTZCYSxhQUFJO0FBRXZDLElBQU1aLGlDQUFpQ1ksYUFBSTtBQUUzQyxJQUFNWCxpQ0FBaUNPLGtCQUFTO0FBRWhELElBQU1OLG1DQUFtQ1csaUJBQVE7SUFFeEQsV0FBZTtJQUNieEIsVUFBQUE7SUFDQUMsWUFBQUE7SUFDQUMsY0FBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FDLGlCQUFBQTtJQUNBQyxrQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBQyx3QkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FDLGtDQUFBQTtBQUNGIn0=