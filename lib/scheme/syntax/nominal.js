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
var typeColour = _colours.cadetBlue;
var stuffColour = _colours.pablo;
var symbolColour = _colours.sushi;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6IH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBzdHVmZkNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3Qgc3ltYm9sQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBicmFja2V0Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHRDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBtZXRhVHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyID0gcGFibG87XG4iXSwibmFtZXMiOlsiYnJhY2tldENvbG91ciIsImNvbnRleHRDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJzdHVmZkNvbG91ciIsInN5bWJvbENvbG91ciIsInR5cGVDb2xvdXIiLCJjYWRldEJsdWUiLCJwYWJsbyIsInN1c2hpIiwicmF6em1hdGF6eiIsInN5Y2Ftb3JlIiwiY2VsZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZYUEsYUFBYTtlQUFiQTs7SUFJQUMsYUFBYTtlQUFiQTs7SUFZQUMsdUJBQXVCO2VBQXZCQTs7SUFFQUMsMkJBQTJCO2VBQTNCQTs7SUFoQkFDLGFBQWE7ZUFBYkE7O0lBTUFDLGVBQWU7ZUFBZkE7O0lBSUFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGNBQWM7ZUFBZEE7O0lBSUFDLG1CQUFtQjtlQUFuQkE7O0lBSUFDLHdCQUF3QjtlQUF4QkE7O0lBaEJBQyxhQUFhO2VBQWJBOztJQUpBQyxXQUFXO2VBQVhBOztJQUVBQyxZQUFZO2VBQVpBOztJQUpBQyxVQUFVO2VBQVZBOzs7dUJBRnlEO0FBRS9ELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1ILGNBQWNJLGNBQUs7QUFFekIsSUFBTUgsZUFBZUksY0FBSztBQUUxQixJQUFNTixnQkFBZ0JNLGNBQUs7QUFFM0IsSUFBTWhCLGdCQUFnQmdCLGNBQUs7QUFFM0IsSUFBTVosZ0JBQWdCYSxtQkFBVTtBQUVoQyxJQUFNaEIsZ0JBQWdCYSxrQkFBUztBQUUvQixJQUFNUCxpQkFBaUJPLGtCQUFTO0FBRWhDLElBQU1ULGtCQUFrQmEsaUJBQVE7QUFFaEMsSUFBTVYsc0JBQXNCVSxpQkFBUTtBQUVwQyxJQUFNWix1QkFBdUJhLGVBQU07QUFFbkMsSUFBTVYsMkJBQTJCVSxlQUFNO0FBRXZDLElBQU1qQiwwQkFBMEJhLGNBQUs7QUFFckMsSUFBTVosOEJBQThCWSxjQUFLIn0=