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
    foldLineColour: function() {
        return foldLineColour;
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
var foldFill = _colours.stormDust;
var borderColour = _common.commonBorderColour; ///
var foldLineColour = foldFill;
var selectedColour = _colours.springWood;
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
    foldFill: foldFill,
    borderColour: borderColour,
    foldLineColour: foldLineColour,
    selectedColour: selectedColour,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCBzcHJpbmdXb29kLCB3b29kc21va2UsIGJsYWNrT2xpdmUgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZEZpbGwgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgZm9sZExpbmVDb2xvdXIgPSBmb2xkRmlsbDtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciA9IGR1bmU7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb2xkRmlsbCxcbiAgYm9yZGVyQ29sb3VyLFxuICBmb2xkTGluZUNvbG91cixcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBndXR0ZXJCb3JkZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgZm9sZHNMaW5lQmFja2dyb3VuZENvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLFxuICByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJmb2xkRmlsbCIsImJvcmRlckNvbG91ciIsImZvbGRMaW5lQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwiZm9sZHNMaW5lQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwic3Rvcm1EdXN0IiwiY29tbW9uQm9yZGVyQ29sb3VyIiwic3ByaW5nV29vZCIsIndvb2RzbW9rZSIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJkdW5lIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxRQUFRO2VBQVJBOztJQUVBQyxZQUFZO2VBQVpBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQyxzQkFBc0I7ZUFBdEJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUViLE9BZ0JFO2VBaEJGOzs7c0JBbENtQzt1QkFFMEQ7QUFFdEYsSUFBTWQsV0FBV2Usa0JBQVM7QUFFMUIsSUFBTWQsZUFBZWUsMEJBQWtCLEVBQUUsR0FBRztBQUU1QyxJQUFNZCxpQkFBaUJGO0FBRXZCLElBQU1HLGlCQUFpQmMsbUJBQVU7QUFFakMsSUFBTWIsbUJBQW1CYyxrQkFBUztBQUVsQyxJQUFNYixvQkFBb0JVLGtCQUFTO0FBRW5DLElBQU1ULHFCQUFxQlMsa0JBQVM7QUFFcEMsSUFBTVIsd0JBQXdCWSxnQkFBTztBQUVyQyxJQUFNWCx5QkFBeUJZLG1CQUFVO0FBRXpDLElBQU1YLDRCQUE0Qk0sa0JBQVM7QUFFM0MsSUFBTUwsNEJBQTRCVyxjQUFLO0FBRXZDLElBQU1WLDZCQUE2QlcsYUFBSTtBQUV2QyxJQUFNVixpQ0FBaUNVLGFBQUk7QUFFM0MsSUFBTVQsaUNBQWlDRSxrQkFBUztBQUVoRCxJQUFNRCxtQ0FBbUNTLGlCQUFRO0lBRXhELFdBQWU7SUFDYnZCLFVBQUFBO0lBQ0FDLGNBQUFBO0lBQ0FDLGdCQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUMsa0JBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FDLHdCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsMkJBQUFBO0lBQ0FDLDRCQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FDLGtDQUFBQTtBQUNGIn0=