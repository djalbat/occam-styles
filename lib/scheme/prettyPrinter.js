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
    scrollbarCornerBackgroundColour: function() {
        return scrollbarCornerBackgroundColour;
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
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarCornerBackgroundColour = _colours.dune;
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
    scrollbarCornerBackgroundColour: scrollbarCornerBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHVuZSwga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCB3b29kc21va2UsIGh1cnJpY2FuZSwgYmxhY2tPbGl2ZSwgc3ByaW5nV29vZCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGZvbGRCdXR0b25TdHJva2UgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb2xkRmlsbCxcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGZvbGRCdXR0b25TdHJva2UsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwid29vZHNtb2tlIiwic3ByaW5nV29vZCIsInBhYmxvIiwic3Rvcm1EdXN0IiwiaHVycmljYW5lIiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImR1bmUiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVWFBLGdCQUFnQjtlQUFoQkE7O0lBTUFDLHFCQUFxQjtlQUFyQkE7O0lBY2IsT0FjRTtlQWRGOztJQWhCYUMscUJBQXFCO2VBQXJCQTs7SUFOQUMsZ0JBQWdCO2VBQWhCQTs7SUFKQUMsUUFBUTtlQUFSQTs7SUFjQUMsc0JBQXNCO2VBQXRCQTs7SUFOQUMsZ0JBQWdCO2VBQWhCQTs7SUFnQkFDLGdDQUFnQztlQUFoQ0E7O0lBRkFDLCtCQUErQjtlQUEvQkE7O0lBSkFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBbEJBQyxjQUFjO2VBQWRBOztJQWNBQyx5QkFBeUI7ZUFBekJBOzs7dUJBbEJrRztBQUV4RyxJQUFNUixXQUFXUyxrQkFBUztBQUUxQixJQUFNRixpQkFBaUJHLG1CQUFVO0FBRWpDLElBQU1YLG1CQUFtQlksY0FBSztBQUU5QixJQUFNZixtQkFBbUJhLGtCQUFTO0FBRWxDLElBQU1QLG1CQUFtQlUsa0JBQVM7QUFFbEMsSUFBTWQsd0JBQXdCZSxrQkFBUztBQUV2QyxJQUFNaEIsd0JBQXdCaUIsZ0JBQU87QUFFckMsSUFBTWIseUJBQXlCYyxtQkFBVTtBQUV6QyxJQUFNUCw0QkFBNEJRLGNBQUs7QUFFdkMsSUFBTVgsaUNBQWlDTyxrQkFBUztBQUVoRCxJQUFNTixpQ0FBaUNXLGFBQUk7QUFFM0MsSUFBTWIsa0NBQWtDYSxhQUFJO0FBRTVDLElBQU1kLG1DQUFtQ2UsaUJBQVE7SUFFeEQsV0FBZTtJQUNibEIsVUFBQUE7SUFDQU8sZ0JBQUFBO0lBQ0FSLGtCQUFBQTtJQUNBSCxrQkFBQUE7SUFDQU0sa0JBQUFBO0lBQ0FMLHVCQUFBQTtJQUNBQyx1QkFBQUE7SUFDQUcsd0JBQUFBO0lBQ0FPLDJCQUFBQTtJQUNBSCxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FGLGlDQUFBQTtJQUNBRCxrQ0FBQUE7QUFDRiJ9