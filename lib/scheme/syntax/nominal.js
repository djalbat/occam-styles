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
    typeColour: function() {
        return typeColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var stuffColour = _colours.pablo;
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var contextColour = _colours.cadetBlue;
var metaTypeColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6IH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBzdHVmZkNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuIl0sIm5hbWVzIjpbImJyYWNrZXRDb2xvdXIiLCJjb250ZXh0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwic3R1ZmZDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwicGFibG8iLCJzdXNoaSIsInJhenptYXRhenoiLCJzeWNhbW9yZSIsImNlbGVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWFBLGFBQWE7ZUFBYkE7O0lBTUFDLGFBQWE7ZUFBYkE7O0lBWUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBaEJBQyxhQUFhO2VBQWJBOztJQU1BQyxlQUFlO2VBQWZBOztJQUlBQyxvQkFBb0I7ZUFBcEJBOztJQU5BQyxjQUFjO2VBQWRBOztJQUlBQyxtQkFBbUI7ZUFBbkJBOztJQUlBQyx3QkFBd0I7ZUFBeEJBOztJQWRBQyxhQUFhO2VBQWJBOztJQUpBQyxXQUFXO2VBQVhBOztJQUZBQyxVQUFVO2VBQVZBOzs7dUJBRnlEO0FBRS9ELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1GLGNBQWNHLGNBQUs7QUFFekIsSUFBTWQsZ0JBQWdCZSxjQUFLO0FBRTNCLElBQU1MLGdCQUFnQkssY0FBSztBQUUzQixJQUFNWCxnQkFBZ0JZLG1CQUFVO0FBRWhDLElBQU1mLGdCQUFnQlksa0JBQVM7QUFFL0IsSUFBTU4saUJBQWlCTSxrQkFBUztBQUVoQyxJQUFNUixrQkFBa0JZLGlCQUFRO0FBRWhDLElBQU1ULHNCQUFzQlMsaUJBQVE7QUFFcEMsSUFBTVgsdUJBQXVCWSxlQUFNO0FBRW5DLElBQU1ULDJCQUEyQlMsZUFBTTtBQUV2QyxJQUFNaEIsMEJBQTBCWSxjQUFLO0FBRXJDLElBQU1YLDhCQUE4QlcsY0FBSyJ9