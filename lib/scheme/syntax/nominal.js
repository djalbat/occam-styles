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
var operatorColour = _colours.sushi;
var metaTypeColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6IH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBzdHVmZkNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IG1ldGFUeXBlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJicmFja2V0Q29sb3VyIiwiY29udGV4dENvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwia2V5d29yZENvbG91ciIsImxhYmVsTmFtZUNvbG91ciIsImxhYmVsTmFtZUhvdmVyQ29sb3VyIiwibWV0YVR5cGVDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwic3R1ZmZDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwicGFibG8iLCJzdXNoaSIsInJhenptYXRhenoiLCJzeWNhbW9yZSIsImNlbGVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWFBLGFBQWE7ZUFBYkE7O0lBTUFDLGFBQWE7ZUFBYkE7O0lBY0FDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBbEJBQyxhQUFhO2VBQWJBOztJQVFBQyxlQUFlO2VBQWZBOztJQUlBQyxvQkFBb0I7ZUFBcEJBOztJQU5BQyxjQUFjO2VBQWRBOztJQUZBQyxjQUFjO2VBQWRBOztJQU1BQyxtQkFBbUI7ZUFBbkJBOztJQUlBQyx3QkFBd0I7ZUFBeEJBOztJQWhCQUMsYUFBYTtlQUFiQTs7SUFKQUMsV0FBVztlQUFYQTs7SUFGQUMsVUFBVTtlQUFWQTs7O3VCQUZ5RDtBQUUvRCxJQUFNQSxhQUFhQyxrQkFBUztBQUU1QixJQUFNRixjQUFjRyxjQUFLO0FBRXpCLElBQU1mLGdCQUFnQmdCLGNBQUs7QUFFM0IsSUFBTUwsZ0JBQWdCSyxjQUFLO0FBRTNCLElBQU1aLGdCQUFnQmEsbUJBQVU7QUFFaEMsSUFBTWhCLGdCQUFnQmEsa0JBQVM7QUFFL0IsSUFBTU4saUJBQWlCUSxjQUFLO0FBRTVCLElBQU1ULGlCQUFpQk8sa0JBQVM7QUFFaEMsSUFBTVQsa0JBQWtCYSxpQkFBUTtBQUVoQyxJQUFNVCxzQkFBc0JTLGlCQUFRO0FBRXBDLElBQU1aLHVCQUF1QmEsZUFBTTtBQUVuQyxJQUFNVCwyQkFBMkJTLGVBQU07QUFFdkMsSUFBTWpCLDBCQUEwQmEsY0FBSztBQUVyQyxJQUFNWiw4QkFBOEJZLGNBQUsifQ==