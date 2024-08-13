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
    contextNameColour: function() {
        return contextNameColour;
    },
    disabledLabelNameColour: function() {
        return disabledLabelNameColour;
    },
    disabledReferenceNameColour: function() {
        return disabledReferenceNameColour;
    },
    keywordColour: function() {
        return keywordColour;
    },
    labelNameColour: function() {
        return labelNameColour;
    },
    labelNameHoverColour: function() {
        return labelNameHoverColour;
    },
    metaTypeColour: function() {
        return metaTypeColour;
    },
    operatorColour: function() {
        return operatorColour;
    },
    referenceNameColour: function() {
        return referenceNameColour;
    },
    referenceNameHoverColour: function() {
        return referenceNameHoverColour;
    },
    specialColour: function() {
        return specialColour;
    },
    typeColour: function() {
        return typeColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var metaTypeColour = _colours.gainsborough;
var contextNameColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var referenceNameColour = _colours.sycamore;
var referenceNameHoverColour = _colours.celery;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgcmF6em1hdGF6eiwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBtZXRhVHlwZUNvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHROYW1lQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJjb250ZXh0TmFtZUNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwia2V5d29yZENvbG91ciIsImxhYmVsTmFtZUNvbG91ciIsImxhYmVsTmFtZUhvdmVyQ29sb3VyIiwibWV0YVR5cGVDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwidHlwZUNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicmF6em1hdGF6eiIsImdhaW5zYm9yb3VnaCIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwicGFibG8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNhQSxpQkFBaUI7ZUFBakJBOztJQU1BQyx1QkFBdUI7ZUFBdkJBOztJQU1BQywyQkFBMkI7ZUFBM0JBOztJQWxCQUMsYUFBYTtlQUFiQTs7SUFRQUMsZUFBZTtlQUFmQTs7SUFFQUMsb0JBQW9CO2VBQXBCQTs7SUFOQUMsY0FBYztlQUFkQTs7SUFGQUMsY0FBYztlQUFkQTs7SUFZQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsd0JBQXdCO2VBQXhCQTs7SUFsQkFDLGFBQWE7ZUFBYkE7O0lBRkFDLFVBQVU7ZUFBVkE7Ozt1QkFGdUU7QUFFN0UsSUFBTUEsYUFBYUMsa0JBQVM7QUFFNUIsSUFBTUYsZ0JBQWdCRyxjQUFLO0FBRTNCLElBQU1WLGdCQUFnQlcsbUJBQVU7QUFFaEMsSUFBTVAsaUJBQWlCTSxjQUFLO0FBRTVCLElBQU1QLGlCQUFpQlMscUJBQVk7QUFFbkMsSUFBTWYsb0JBQW9CWSxrQkFBUztBQUVuQyxJQUFNUixrQkFBa0JZLGlCQUFRO0FBRWhDLElBQU1YLHVCQUF1QlksZUFBTTtBQUVuQyxJQUFNaEIsMEJBQTBCaUIsY0FBSztBQUVyQyxJQUFNVixzQkFBc0JRLGlCQUFRO0FBRXBDLElBQU1QLDJCQUEyQlEsZUFBTTtBQUV2QyxJQUFNZiw4QkFBOEJnQixjQUFLIn0=