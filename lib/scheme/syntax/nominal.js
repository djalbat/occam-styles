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
    typeColour: function() {
        return typeColour;
    }
});
var _colours = require("../../colours");
var nameColour = _colours.springWood;
var typeColour = _colours.cadetBlue;
var stuffColour = _colours.pablo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6LCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHN0dWZmQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBicmFja2V0Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHRDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBtZXRhVHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyID0gcGFibG87XG4iXSwibmFtZXMiOlsiYnJhY2tldENvbG91ciIsImNvbnRleHRDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwibmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwic3R1ZmZDb2xvdXIiLCJ0eXBlQ29sb3VyIiwic3ByaW5nV29vZCIsImNhZGV0Qmx1ZSIsInBhYmxvIiwic3VzaGkiLCJyYXp6bWF0YXp6Iiwic3ljYW1vcmUiLCJjZWxlcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlhQSxhQUFhO2VBQWJBOztJQUlBQyxhQUFhO2VBQWJBOztJQVlBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQWhCQUMsYUFBYTtlQUFiQTs7SUFNQUMsZUFBZTtlQUFmQTs7SUFJQUMsb0JBQW9CO2VBQXBCQTs7SUFOQUMsY0FBYztlQUFkQTs7SUFkQUMsVUFBVTtlQUFWQTs7SUFrQkFDLG1CQUFtQjtlQUFuQkE7O0lBSUFDLHdCQUF3QjtlQUF4QkE7O0lBaEJBQyxhQUFhO2VBQWJBOztJQUZBQyxXQUFXO2VBQVhBOztJQUZBQyxVQUFVO2VBQVZBOzs7dUJBSnFFO0FBRTNFLElBQU1MLGFBQWFNLG1CQUFVO0FBRTdCLElBQU1ELGFBQWFFLGtCQUFTO0FBRTVCLElBQU1ILGNBQWNJLGNBQUs7QUFFekIsSUFBTUwsZ0JBQWdCTSxjQUFLO0FBRTNCLElBQU1qQixnQkFBZ0JpQixjQUFLO0FBRTNCLElBQU1iLGdCQUFnQmMsbUJBQVU7QUFFaEMsSUFBTWpCLGdCQUFnQmMsa0JBQVM7QUFFL0IsSUFBTVIsaUJBQWlCUSxrQkFBUztBQUVoQyxJQUFNVixrQkFBa0JjLGlCQUFRO0FBRWhDLElBQU1WLHNCQUFzQlUsaUJBQVE7QUFFcEMsSUFBTWIsdUJBQXVCYyxlQUFNO0FBRW5DLElBQU1WLDJCQUEyQlUsZUFBTTtBQUV2QyxJQUFNbEIsMEJBQTBCYyxjQUFLO0FBRXJDLElBQU1iLDhCQUE4QmEsY0FBSyJ9