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
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarThumbBackgroundColour = _colours.stormDust;
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
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHVuZSwga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCB3b29kc21va2UsIGh1cnJpY2FuZSwgYmxhY2tPbGl2ZSwgc3ByaW5nV29vZCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGZvbGRCdXR0b25TdHJva2UgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9sZEZpbGwsXG4gIHNlbGVjdGVkQ29sb3VyLFxuICBmb2xkQnV0dG9uU3Ryb2tlLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGZvbGRCdXR0b25Ib3ZlclN0cm9rZSxcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJmb2xkQnV0dG9uSG92ZXJTdHJva2UiLCJmb2xkQnV0dG9uU3Ryb2tlIiwiZm9sZEZpbGwiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlckNvbG91ciIsInJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwid29vZHNtb2tlIiwic3ByaW5nV29vZCIsInBhYmxvIiwic3Rvcm1EdXN0IiwiaHVycmljYW5lIiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImR1bmUiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVWFBLGdCQUFnQjtlQUFoQkE7O0lBTUFDLHFCQUFxQjtlQUFyQkE7O0lBWWIsT0FhRTtlQWJGOztJQWRhQyxxQkFBcUI7ZUFBckJBOztJQU5BQyxnQkFBZ0I7ZUFBaEJBOztJQUpBQyxRQUFRO2VBQVJBOztJQWNBQyxzQkFBc0I7ZUFBdEJBOztJQU5BQyxnQkFBZ0I7ZUFBaEJBOztJQWNBQyxnQ0FBZ0M7ZUFBaENBOztJQUZBQyw4QkFBOEI7ZUFBOUJBOztJQUZBQyw4QkFBOEI7ZUFBOUJBOztJQWhCQUMsY0FBYztlQUFkQTs7SUFjQUMseUJBQXlCO2VBQXpCQTs7O3VCQWxCa0c7QUFFeEcsSUFBTVAsV0FBV1Esa0JBQVM7QUFFMUIsSUFBTUYsaUJBQWlCRyxtQkFBVTtBQUVqQyxJQUFNVixtQkFBbUJXLGNBQUs7QUFFOUIsSUFBTWQsbUJBQW1CWSxrQkFBUztBQUVsQyxJQUFNTixtQkFBbUJTLGtCQUFTO0FBRWxDLElBQU1iLHdCQUF3QmMsa0JBQVM7QUFFdkMsSUFBTWYsd0JBQXdCZ0IsZ0JBQU87QUFFckMsSUFBTVoseUJBQXlCYSxtQkFBVTtBQUV6QyxJQUFNUCw0QkFBNEJRLGNBQUs7QUFFdkMsSUFBTVYsaUNBQWlDVyxhQUFJO0FBRTNDLElBQU1aLGlDQUFpQ08sa0JBQVM7QUFFaEQsSUFBTVIsbUNBQW1DYyxpQkFBUTtJQUV4RCxXQUFlO0lBQ2JqQixVQUFBQTtJQUNBTSxnQkFBQUE7SUFDQVAsa0JBQUFBO0lBQ0FILGtCQUFBQTtJQUNBTSxrQkFBQUE7SUFDQUwsdUJBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBRyx3QkFBQUE7SUFDQU0sMkJBQUFBO0lBQ0FGLGdDQUFBQTtJQUNBRCxnQ0FBQUE7SUFDQUQsa0NBQUFBO0FBQ0YifQ==