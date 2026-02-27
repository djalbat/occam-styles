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
const _colours = require("../colours");
const foldFill = _colours.pitchBlack;
const selectedColour = _colours.springWood;
const foldButtonStroke = _colours.pablo;
const backgroundColour = _colours.pitchBlack;
const lineNumberColour = _colours.stormDust;
const foldButtonHoverStroke = _colours.hurricane;
const caretBackgroundColour = _colours.bonjour;
const gutterBackgroundColour = _colours.blackOlive;
const selectionBackgroundColour = _colours.korma;
const scrollbarThumbBackgroundColour = _colours.stormDust;
const scrollbarTrackBackgroundColour = _colours.dune;
const scrollbarCornerBackgroundColour = _colours.dune;
const remoteSelectionsBackgroundColour = _colours.logCabin;
const _default = {
    foldFill,
    selectedColour,
    foldButtonStroke,
    backgroundColour,
    lineNumberColour,
    caretBackgroundColour,
    foldButtonHoverStroke,
    gutterBackgroundColour,
    selectionBackgroundColour,
    scrollbarThumbBackgroundColour,
    scrollbarTrackBackgroundColour,
    scrollbarCornerBackgroundColour,
    remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZHVuZSwga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCBwaXRjaEJsYWNrLCBodXJyaWNhbmUsIGJsYWNrT2xpdmUsIHNwcmluZ1dvb2QgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZEZpbGwgPSBwaXRjaEJsYWNrO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvblN0cm9rZSA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IHBpdGNoQmxhY2s7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb2xkRmlsbCxcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGZvbGRCdXR0b25TdHJva2UsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwicGl0Y2hCbGFjayIsInNwcmluZ1dvb2QiLCJwYWJsbyIsInN0b3JtRHVzdCIsImh1cnJpY2FuZSIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJkdW5lIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVVhQTtlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBY2I7ZUFBQTs7UUFoQmFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQUZBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQWxCQUM7ZUFBQUE7O1FBY0FDO2VBQUFBOzs7eUJBbEJtRztBQUV6RyxNQUFNUixXQUFXUyxtQkFBVTtBQUUzQixNQUFNRixpQkFBaUJHLG1CQUFVO0FBRWpDLE1BQU1YLG1CQUFtQlksY0FBSztBQUU5QixNQUFNZixtQkFBbUJhLG1CQUFVO0FBRW5DLE1BQU1QLG1CQUFtQlUsa0JBQVM7QUFFbEMsTUFBTWQsd0JBQXdCZSxrQkFBUztBQUV2QyxNQUFNaEIsd0JBQXdCaUIsZ0JBQU87QUFFckMsTUFBTWIseUJBQXlCYyxtQkFBVTtBQUV6QyxNQUFNUCw0QkFBNEJRLGNBQUs7QUFFdkMsTUFBTVgsaUNBQWlDTyxrQkFBUztBQUVoRCxNQUFNTixpQ0FBaUNXLGFBQUk7QUFFM0MsTUFBTWIsa0NBQWtDYSxhQUFJO0FBRTVDLE1BQU1kLG1DQUFtQ2UsaUJBQVE7TUFFeEQsV0FBZTtJQUNibEI7SUFDQU87SUFDQVI7SUFDQUg7SUFDQU07SUFDQUw7SUFDQUM7SUFDQUc7SUFDQU87SUFDQUg7SUFDQUM7SUFDQUY7SUFDQUQ7QUFDRiJ9