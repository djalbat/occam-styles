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
    borderColour: function() {
        return borderColour;
    },
    selectedColour: function() {
        return selectedColour;
    },
    foldButtonStroke: function() {
        return foldButtonStroke;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    foldButtonHoverStroke: function() {
        return foldButtonHoverStroke;
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
var borderColour = _common.commonBorderColour; ///
var selectedColour = _colours.springWood;
var foldButtonStroke = _colours.pablo;
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var foldButtonHoverStroke = _colours.hurricane;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBorderColour = _colours.dune;
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    borderColour: borderColour,
    selectedColour: selectedColour,
    foldButtonStroke: foldButtonStroke,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    caretBackgroundColour: caretBackgroundColour,
    foldButtonHoverStroke: foldButtonHoverStroke,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBorderColour: scrollbarThumbBorderColour,
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsICBrb3JtYSwgIHBhYmxvLCAgYm9uam91ciwgIGxvZ0NhYmluLCAgc3Rvcm1EdXN0LCAgd29vZHNtb2tlLCAgaHVycmljYW5lLCAgYmxhY2tPbGl2ZSwgIHNwcmluZ1dvb2QgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZEZpbGwgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvblN0cm9rZSA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGxpbmVOdW1iZXJzQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9sZEZpbGwsXG4gIGJvcmRlckNvbG91cixcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGZvbGRCdXR0b25TdHJva2UsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGZvbGRCdXR0b25Ib3ZlclN0cm9rZSxcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLFxuICByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJmb2xkRmlsbCIsImJvcmRlckNvbG91ciIsInNlbGVjdGVkQ29sb3VyIiwiZm9sZEJ1dHRvblN0cm9rZSIsImJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyc0NvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJyZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciIsIndvb2RzbW9rZSIsImNvbW1vbkJvcmRlckNvbG91ciIsInNwcmluZ1dvb2QiLCJwYWJsbyIsInN0b3JtRHVzdCIsImh1cnJpY2FuZSIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJkdW5lIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxRQUFRO2VBQVJBOztJQUVBQyxZQUFZO2VBQVpBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUViLE9BZUU7ZUFmRjs7O3NCQWhDbUM7dUJBRXFGO0FBRWpILElBQU1iLFdBQVdjLGtCQUFTO0FBRTFCLElBQU1iLGVBQWVjLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTWIsaUJBQWlCYyxtQkFBVTtBQUVqQyxJQUFNYixtQkFBbUJjLGNBQUs7QUFFOUIsSUFBTWIsbUJBQW1CVSxrQkFBUztBQUVsQyxJQUFNVCxvQkFBb0JhLGtCQUFTO0FBRW5DLElBQU1aLHdCQUF3QmEsa0JBQVM7QUFFdkMsSUFBTVosd0JBQXdCYSxnQkFBTztBQUVyQyxJQUFNWix5QkFBeUJhLG1CQUFVO0FBRXpDLElBQU1aLDRCQUE0QmEsY0FBSztBQUV2QyxJQUFNWiw2QkFBNkJhLGFBQUk7QUFFdkMsSUFBTVosaUNBQWlDWSxhQUFJO0FBRTNDLElBQU1YLGlDQUFpQ00sa0JBQVM7QUFFaEQsSUFBTUwsbUNBQW1DVyxpQkFBUTtJQUV4RCxXQUFlO0lBQ2J4QixVQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUMsa0JBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUUsdUJBQUFBO0lBQ0FELHVCQUFBQTtJQUNBRSx3QkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FDLGtDQUFBQTtBQUNGIn0=