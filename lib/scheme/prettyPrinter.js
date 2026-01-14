"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get backgroundColour () {
        return backgroundColour;
    },
    get caretBackgroundColour () {
        return caretBackgroundColour;
    },
    get default () {
        return _default;
    },
    get foldButtonHoverStroke () {
        return foldButtonHoverStroke;
    },
    get foldButtonStroke () {
        return foldButtonStroke;
    },
    get foldFill () {
        return foldFill;
    },
    get gutterBackgroundColour () {
        return gutterBackgroundColour;
    },
    get lineNumberColour () {
        return lineNumberColour;
    },
    get remoteSelectionsBackgroundColour () {
        return remoteSelectionsBackgroundColour;
    },
    get scrollbarCornerBackgroundColour () {
        return scrollbarCornerBackgroundColour;
    },
    get scrollbarThumbBackgroundColour () {
        return scrollbarThumbBackgroundColour;
    },
    get scrollbarTrackBackgroundColour () {
        return scrollbarTrackBackgroundColour;
    },
    get selectedColour () {
        return selectedColour;
    },
    get selectionBackgroundColour () {
        return selectionBackgroundColour;
    }
});
var _colours = require("../colours");
var foldFill = _colours.pitchBlack;
var selectedColour = _colours.springWood;
var foldButtonStroke = _colours.pablo;
var backgroundColour = _colours.pitchBlack;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHVuZSwga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCBwaXRjaEJsYWNrLCBodXJyaWNhbmUsIGJsYWNrT2xpdmUsIHNwcmluZ1dvb2QgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZEZpbGwgPSBwaXRjaEJsYWNrO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvblN0cm9rZSA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IHBpdGNoQmxhY2s7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb2xkRmlsbCxcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGZvbGRCdXR0b25TdHJva2UsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwicGl0Y2hCbGFjayIsInNwcmluZ1dvb2QiLCJwYWJsbyIsInN0b3JtRHVzdCIsImh1cnJpY2FuZSIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJkdW5lIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVhQTtlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBY2I7ZUFBQTs7UUFoQmFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQUZBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQWxCQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOzs7dUJBbEJtRztBQUV6RyxJQUFNUixXQUFXUyxtQkFBVTtBQUUzQixJQUFNRixpQkFBaUJHLG1CQUFVO0FBRWpDLElBQU1YLG1CQUFtQlksY0FBSztBQUU5QixJQUFNZixtQkFBbUJhLG1CQUFVO0FBRW5DLElBQU1QLG1CQUFtQlUsa0JBQVM7QUFFbEMsSUFBTWQsd0JBQXdCZSxrQkFBUztBQUV2QyxJQUFNaEIsd0JBQXdCaUIsZ0JBQU87QUFFckMsSUFBTWIseUJBQXlCYyxtQkFBVTtBQUV6QyxJQUFNUCw0QkFBNEJRLGNBQUs7QUFFdkMsSUFBTVgsaUNBQWlDTyxrQkFBUztBQUVoRCxJQUFNTixpQ0FBaUNXLGFBQUk7QUFFM0MsSUFBTWIsa0NBQWtDYSxhQUFJO0FBRTVDLElBQU1kLG1DQUFtQ2UsaUJBQVE7SUFFeEQsV0FBZTtJQUNibEIsVUFBQUE7SUFDQU8sZ0JBQUFBO0lBQ0FSLGtCQUFBQTtJQUNBSCxrQkFBQUE7SUFDQU0sa0JBQUFBO0lBQ0FMLHVCQUFBQTtJQUNBQyx1QkFBQUE7SUFDQUcsd0JBQUFBO0lBQ0FPLDJCQUFBQTtJQUNBSCxnQ0FBQUE7SUFDQUMsZ0NBQUFBO0lBQ0FGLGlDQUFBQTtJQUNBRCxrQ0FBQUE7QUFDRiJ9