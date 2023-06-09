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
    colour: function() {
        return colour;
    },
    errorColour: function() {
        return errorColour;
    },
    nonsenseColour: function() {
        return nonsenseColour;
    },
    underlineColour: function() {
        return underlineColour;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _colours = require("../../colours");
var colour = _colours.springWood;
var errorColour = _colours.gainsborough;
var nonsenseColour = _colours.pablo;
var underlineColour = _colours.pomegranate;
var backgroundColour = _colours.dune;
var _default = {
    colour: colour,
    errorColour: errorColour,
    nonsenseColour: nonsenseColour,
    underlineColour: underlineColour,
    backgroundColour: backgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGR1bmUsIHBhYmxvLCBzcHJpbmdXb29kLCBwb21lZ3JhbmF0ZSwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBlcnJvckNvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IG5vbnNlbnNlQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCB1bmRlcmxpbmVDb2xvdXIgPSBwb21lZ3JhbmF0ZTtcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG91cixcbiAgZXJyb3JDb2xvdXIsXG4gIG5vbnNlbnNlQ29sb3VyLFxuICB1bmRlcmxpbmVDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiY29sb3VyIiwiZXJyb3JDb2xvdXIiLCJub25zZW5zZUNvbG91ciIsInVuZGVybGluZUNvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJzcHJpbmdXb29kIiwiZ2FpbnNib3JvdWdoIiwicGFibG8iLCJwb21lZ3JhbmF0ZSIsImR1bmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlhQSxNQUFNO2VBQU5BOztJQUVBQyxXQUFXO2VBQVhBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUViLE9BTUU7ZUFORjs7O3VCQVptRTtBQUU1RCxJQUFNSixTQUFTSztBQUVmLElBQU1KLGNBQWNLO0FBRXBCLElBQU1KLGlCQUFpQks7QUFFdkIsSUFBTUosa0JBQWtCSztBQUV4QixJQUFNSixtQkFBbUJLO0lBRWhDLFdBQWU7SUFDYlQsUUFBQUE7SUFDQUMsYUFBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FDLGlCQUFBQTtJQUNBQyxrQkFBQUE7QUFDRiJ9