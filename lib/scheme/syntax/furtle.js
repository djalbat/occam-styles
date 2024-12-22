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
    disabledLabelNameColour: function() {
        return disabledLabelNameColour;
    },
    disabledReferenceNameColour: function() {
        return disabledReferenceNameColour;
    },
    expressionColour: function() {
        return expressionColour;
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
    operatorColour: function() {
        return operatorColour;
    },
    primitiveColour: function() {
        return primitiveColour;
    },
    queryColour: function() {
        return queryColour;
    },
    referenceNameColour: function() {
        return referenceNameColour;
    },
    referenceNameHoverColour: function() {
        return referenceNameHoverColour;
    },
    returnColour: function() {
        return returnColour;
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
var queryColour = _colours.sushi;
var returnColour = _colours.razzmatazz;
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var primitiveColour = _colours.razzmatazz;
var expressionColour = _colours.hokeyPokey;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHBhYmxvLCBjZWxlcnksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenosIGhva2V5UG9rZXkgfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCByZXR1cm5Db2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgYnJhY2tldENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBvcGVyYXRvckNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgcHJpbWl0aXZlQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IGV4cHJlc3Npb25Db2xvdXIgPSBob2tleVBva2V5O1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJicmFja2V0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJleHByZXNzaW9uQ29sb3VyIiwia2V5d29yZENvbG91ciIsImxhYmVsTmFtZUNvbG91ciIsImxhYmVsTmFtZUhvdmVyQ29sb3VyIiwib3BlcmF0b3JDb2xvdXIiLCJwcmltaXRpdmVDb2xvdXIiLCJxdWVyeUNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJyZXR1cm5Db2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwidHlwZUNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicmF6em1hdGF6eiIsImhva2V5UG9rZXkiLCJzeWNhbW9yZSIsImNlbGVyeSIsInBhYmxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFVYUEsYUFBYTtlQUFiQTs7SUFvQkFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBWkFDLGdCQUFnQjtlQUFoQkE7O0lBTkFDLGFBQWE7ZUFBYkE7O0lBUUFDLGVBQWU7ZUFBZkE7O0lBSUFDLG9CQUFvQjtlQUFwQkE7O0lBVkFDLGNBQWM7ZUFBZEE7O0lBRUFDLGVBQWU7ZUFBZkE7O0lBWkFDLFdBQVc7ZUFBWEE7O0lBa0JBQyxtQkFBbUI7ZUFBbkJBOztJQUlBQyx3QkFBd0I7ZUFBeEJBOztJQXBCQUMsWUFBWTtlQUFaQTs7SUFJQUMsYUFBYTtlQUFiQTs7SUFSQUMsVUFBVTtlQUFWQTs7O3VCQUZxRTtBQUUzRSxJQUFNQSxhQUFhQyxrQkFBUztBQUU1QixJQUFNTixjQUFjTyxjQUFLO0FBRXpCLElBQU1KLGVBQWVLLG1CQUFVO0FBRS9CLElBQU1qQixnQkFBZ0JnQixjQUFLO0FBRTNCLElBQU1ILGdCQUFnQkcsY0FBSztBQUUzQixJQUFNWixnQkFBZ0JhLG1CQUFVO0FBRWhDLElBQU1WLGlCQUFpQlMsY0FBSztBQUU1QixJQUFNUixrQkFBa0JTLG1CQUFVO0FBRWxDLElBQU1kLG1CQUFtQmUsbUJBQVU7QUFFbkMsSUFBTWIsa0JBQWtCYyxpQkFBUTtBQUVoQyxJQUFNVCxzQkFBc0JTLGlCQUFRO0FBRXBDLElBQU1iLHVCQUF1QmMsZUFBTTtBQUVuQyxJQUFNVCwyQkFBMkJTLGVBQU07QUFFdkMsSUFBTW5CLDBCQUEwQm9CLGNBQUs7QUFFckMsSUFBTW5CLDhCQUE4Qm1CLGNBQUsifQ==