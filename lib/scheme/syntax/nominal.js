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
    bracketColour: function() {
        return bracketColour;
    },
    contextColour: function() {
        return contextColour;
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
    nameColour: function() {
        return nameColour;
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
    stuffColour: function() {
        return stuffColour;
    },
    symbolColour: function() {
        return symbolColour;
    },
    typeColour: function() {
        return typeColour;
    }
});
var _colours = require("../../colours");
var nameColour = _colours.springWood;
var typeColour = _colours.cadetBlue;
var stuffColour = _colours.pablo;
var symbolColour = _colours.springWood;
var specialColour = _colours.sushi;
var bracketColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var contextColour = _colours.cadetBlue;
var metaTypeColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6LCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHN0dWZmQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuIl0sIm5hbWVzIjpbImJyYWNrZXRDb2xvdXIiLCJjb250ZXh0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsIm5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInN0dWZmQ29sb3VyIiwic3ltYm9sQ29sb3VyIiwidHlwZUNvbG91ciIsInNwcmluZ1dvb2QiLCJjYWRldEJsdWUiLCJwYWJsbyIsInN1c2hpIiwicmF6em1hdGF6eiIsInN5Y2Ftb3JlIiwiY2VsZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjYUEsYUFBYTtlQUFiQTs7SUFJQUMsYUFBYTtlQUFiQTs7SUFZQUMsdUJBQXVCO2VBQXZCQTs7SUFFQUMsMkJBQTJCO2VBQTNCQTs7SUFoQkFDLGFBQWE7ZUFBYkE7O0lBTUFDLGVBQWU7ZUFBZkE7O0lBSUFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGNBQWM7ZUFBZEE7O0lBaEJBQyxVQUFVO2VBQVZBOztJQW9CQUMsbUJBQW1CO2VBQW5CQTs7SUFJQUMsd0JBQXdCO2VBQXhCQTs7SUFoQkFDLGFBQWE7ZUFBYkE7O0lBSkFDLFdBQVc7ZUFBWEE7O0lBRUFDLFlBQVk7ZUFBWkE7O0lBSkFDLFVBQVU7ZUFBVkE7Ozt1QkFKcUU7QUFFM0UsSUFBTU4sYUFBYU8sbUJBQVU7QUFFN0IsSUFBTUQsYUFBYUUsa0JBQVM7QUFFNUIsSUFBTUosY0FBY0ssY0FBSztBQUV6QixJQUFNSixlQUFlRSxtQkFBVTtBQUUvQixJQUFNSixnQkFBZ0JPLGNBQUs7QUFFM0IsSUFBTWxCLGdCQUFnQmtCLGNBQUs7QUFFM0IsSUFBTWQsZ0JBQWdCZSxtQkFBVTtBQUVoQyxJQUFNbEIsZ0JBQWdCZSxrQkFBUztBQUUvQixJQUFNVCxpQkFBaUJTLGtCQUFTO0FBRWhDLElBQU1YLGtCQUFrQmUsaUJBQVE7QUFFaEMsSUFBTVgsc0JBQXNCVyxpQkFBUTtBQUVwQyxJQUFNZCx1QkFBdUJlLGVBQU07QUFFbkMsSUFBTVgsMkJBQTJCVyxlQUFNO0FBRXZDLElBQU1uQiwwQkFBMEJlLGNBQUs7QUFFckMsSUFBTWQsOEJBQThCYyxjQUFLIn0=