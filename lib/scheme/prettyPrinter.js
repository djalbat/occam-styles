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
    lineNumberColour: function() {
        return lineNumberColour;
    },
    remoteSelectionsBackgroundColour: function() {
        return remoteSelectionsBackgroundColour;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
    },
    scrollbarTrackBackgroundColour: function() {
        return scrollbarTrackBackgroundColour;
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
var lineNumberColour = _colours.stormDust;
var foldButtonHoverStroke = _colours.hurricane;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var scrollbarTrackBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    selectedColour: selectedColour,
    foldButtonStroke: foldButtonStroke,
    backgroundColour: backgroundColour,
    lineNumberColour: lineNumberColour,
    caretBackgroundColour: caretBackgroundColour,
    foldButtonHoverStroke: foldButtonHoverStroke,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHVuZSwga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCB3b29kc21va2UsIGh1cnJpY2FuZSwgYmxhY2tPbGl2ZSwgc3ByaW5nV29vZCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGZvbGRCdXR0b25TdHJva2UgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb2xkRmlsbCxcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGZvbGRCdXR0b25TdHJva2UsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzZWxlY3RlZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJzcHJpbmdXb29kIiwicGFibG8iLCJzdG9ybUR1c3QiLCJodXJyaWNhbmUiLCJib25qb3VyIiwiYmxhY2tPbGl2ZSIsImtvcm1hIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVVhQSxnQkFBZ0I7ZUFBaEJBOztJQU1BQyxxQkFBcUI7ZUFBckJBOztJQVliLE9BYUU7ZUFiRjs7SUFkYUMscUJBQXFCO2VBQXJCQTs7SUFOQUMsZ0JBQWdCO2VBQWhCQTs7SUFKQUMsUUFBUTtlQUFSQTs7SUFjQUMsc0JBQXNCO2VBQXRCQTs7SUFOQUMsZ0JBQWdCO2VBQWhCQTs7SUFjQUMsZ0NBQWdDO2VBQWhDQTs7SUFKQUMsOEJBQThCO2VBQTlCQTs7SUFFQUMsOEJBQThCO2VBQTlCQTs7SUFsQkFDLGNBQWM7ZUFBZEE7O0lBY0FDLHlCQUF5QjtlQUF6QkE7Ozt1QkFsQmtHO0FBRXhHLElBQU1QLFdBQVdRLGtCQUFTO0FBRTFCLElBQU1GLGlCQUFpQkcsbUJBQVU7QUFFakMsSUFBTVYsbUJBQW1CVyxjQUFLO0FBRTlCLElBQU1kLG1CQUFtQlksa0JBQVM7QUFFbEMsSUFBTU4sbUJBQW1CUyxrQkFBUztBQUVsQyxJQUFNYix3QkFBd0JjLGtCQUFTO0FBRXZDLElBQU1mLHdCQUF3QmdCLGdCQUFPO0FBRXJDLElBQU1aLHlCQUF5QmEsbUJBQVU7QUFFekMsSUFBTVAsNEJBQTRCUSxjQUFLO0FBRXZDLElBQU1YLGlDQUFpQ08sa0JBQVM7QUFFaEQsSUFBTU4saUNBQWlDTSxrQkFBUztBQUVoRCxJQUFNUixtQ0FBbUNhLGlCQUFRO0lBRXhELFdBQWU7SUFDYmhCLFVBQUFBO0lBQ0FNLGdCQUFBQTtJQUNBUCxrQkFBQUE7SUFDQUgsa0JBQUFBO0lBQ0FNLGtCQUFBQTtJQUNBTCx1QkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FHLHdCQUFBQTtJQUNBTSwyQkFBQUE7SUFDQUgsZ0NBQUFBO0lBQ0FDLGdDQUFBQTtJQUNBRixrQ0FBQUE7QUFDRiJ9