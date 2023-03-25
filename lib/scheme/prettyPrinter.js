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
var foldButtonHoverStroke = _colours.stardust;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBwYWJsbywgYm9uam91ciwgc3RhcmR1c3QsIGxvZ0NhYmluLCBzdG9ybUR1c3QsIHdvb2RzbW9rZSwgYmxhY2tPbGl2ZSwgc3ByaW5nV29vZCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uU3Ryb2tlID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgbGluZU51bWJlcnNDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uSG92ZXJTdHJva2UgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciA9IGR1bmU7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvbGRGaWxsLFxuICBib3JkZXJDb2xvdXIsXG4gIHNlbGVjdGVkQ29sb3VyLFxuICBmb2xkQnV0dG9uU3Ryb2tlLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyc0NvbG91cixcbiAgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBmb2xkQnV0dG9uSG92ZXJTdHJva2UsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiZm9sZEZpbGwiLCJib3JkZXJDb2xvdXIiLCJzZWxlY3RlZENvbG91ciIsImZvbGRCdXR0b25TdHJva2UiLCJiYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJmb2xkQnV0dG9uSG92ZXJTdHJva2UiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJzcHJpbmdXb29kIiwicGFibG8iLCJzdG9ybUR1c3QiLCJzdGFyZHVzdCIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJkdW5lIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxRQUFRO2VBQVJBOztJQUVBQyxZQUFZO2VBQVpBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUViLE9BZUU7ZUFmRjs7O3NCQWhDbUM7dUJBRTJFO0FBRXZHLElBQU1iLFdBQVdjLGtCQUFTO0FBRTFCLElBQU1iLGVBQWVjLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTWIsaUJBQWlCYyxtQkFBVTtBQUVqQyxJQUFNYixtQkFBbUJjLGNBQUs7QUFFOUIsSUFBTWIsbUJBQW1CVSxrQkFBUztBQUVsQyxJQUFNVCxvQkFBb0JhLGtCQUFTO0FBRW5DLElBQU1aLHdCQUF3QmEsaUJBQVE7QUFFdEMsSUFBTVosd0JBQXdCYSxnQkFBTztBQUVyQyxJQUFNWix5QkFBeUJhLG1CQUFVO0FBRXpDLElBQU1aLDRCQUE0QmEsY0FBSztBQUV2QyxJQUFNWiw2QkFBNkJhLGFBQUk7QUFFdkMsSUFBTVosaUNBQWlDWSxhQUFJO0FBRTNDLElBQU1YLGlDQUFpQ00sa0JBQVM7QUFFaEQsSUFBTUwsbUNBQW1DVyxpQkFBUTtJQUV4RCxXQUFlO0lBQ2J4QixVQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUMsa0JBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBQyxtQkFBQUE7SUFDQUUsdUJBQUFBO0lBQ0FELHVCQUFBQTtJQUNBRSx3QkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FDLGtDQUFBQTtBQUNGIn0=