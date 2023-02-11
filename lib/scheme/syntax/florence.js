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
    typeColour: function() {
        return typeColour;
    },
    specialColour: function() {
        return specialColour;
    },
    commentColour: function() {
        return commentColour;
    },
    keywordColour: function() {
        return keywordColour;
    },
    operatorColour: function() {
        return operatorColour;
    },
    metaTypeColour: function() {
        return metaTypeColour;
    },
    stringLiteralColour: function() {
        return stringLiteralColour;
    },
    contextNameColour: function() {
        return contextNameColour;
    },
    labelNameColour: function() {
        return labelNameColour;
    },
    labelNameHoverColour: function() {
        return labelNameHoverColour;
    },
    faultyLabelNameColour: function() {
        return faultyLabelNameColour;
    },
    faultyLabelNameHoverColour: function() {
        return faultyLabelNameHoverColour;
    },
    disabledLabelNameColour: function() {
        return disabledLabelNameColour;
    },
    disabledLabelNameHoverColour: function() {
        return disabledLabelNameHoverColour;
    },
    referenceNameColour: function() {
        return referenceNameColour;
    },
    referenceNameHoverColour: function() {
        return referenceNameHoverColour;
    },
    faultyReferenceNameColour: function() {
        return faultyReferenceNameColour;
    },
    faultyReferenceNameHoverColour: function() {
        return faultyReferenceNameHoverColour;
    },
    disabledReferenceNameColour: function() {
        return disabledReferenceNameColour;
    },
    disabledReferenceNameHoverColour: function() {
        return disabledReferenceNameHoverColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var specialColour = _colours.sushi;
var commentColour = _colours.pablo;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var metaTypeColour = _colours.spanishGreen;
var stringLiteralColour = _colours.hokeyPokey;
var contextNameColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var faultyLabelNameColour = _colours.terracotta;
var faultyLabelNameHoverColour = _colours.flamingo;
var disabledLabelNameColour = _colours.pablo;
var disabledLabelNameHoverColour = _colours.hurricane;
var referenceNameColour = _colours.sycamore;
var referenceNameHoverColour = _colours.celery;
var faultyReferenceNameColour = _colours.terracotta;
var faultyReferenceNameHoverColour = _colours.flamingo;
var disabledReferenceNameColour = _colours.pablo;
var disabledReferenceNameHoverColour = _colours.hurricane;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgZmxhbWluZ28sIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIGh1cnJpY2FuZSwgaG9rZXlQb2tleSwgcmF6em1hdGF6eiwgdGVycmFjb3R0YSwgc3BhbmlzaEdyZWVuIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBjb21tZW50Q29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBtZXRhVHlwZUNvbG91ciA9IHNwYW5pc2hHcmVlbjtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ0xpdGVyYWxDb2xvdXIgPSBob2tleVBva2V5O1xuXG5leHBvcnQgY29uc3QgY29udGV4dE5hbWVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZmF1bHR5TGFiZWxOYW1lQ29sb3VyID0gdGVycmFjb3R0YTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eUxhYmVsTmFtZUhvdmVyQ29sb3VyID0gZmxhbWluZ287XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciA9IGh1cnJpY2FuZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eVJlZmVyZW5jZU5hbWVDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5UmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gZmxhbWluZ287XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuIl0sIm5hbWVzIjpbInR5cGVDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwiY29tbWVudENvbG91ciIsImtleXdvcmRDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsImNvbnRleHROYW1lQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJmYXVsdHlMYWJlbE5hbWVDb2xvdXIiLCJmYXVsdHlMYWJlbE5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZmF1bHR5UmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJjYWRldEJsdWUiLCJzdXNoaSIsInBhYmxvIiwicmF6em1hdGF6eiIsInNwYW5pc2hHcmVlbiIsImhva2V5UG9rZXkiLCJzeWNhbW9yZSIsImNlbGVyeSIsInRlcnJhY290dGEiLCJmbGFtaW5nbyIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWFBLFVBQVU7ZUFBVkE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGNBQWM7ZUFBZEE7O0lBRUFDLGNBQWM7ZUFBZEE7O0lBRUFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLGlCQUFpQjtlQUFqQkE7O0lBRUFDLGVBQWU7ZUFBZkE7O0lBRUFDLG9CQUFvQjtlQUFwQkE7O0lBRUFDLHFCQUFxQjtlQUFyQkE7O0lBRUFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBRUFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLHdCQUF3QjtlQUF4QkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7Ozt1QkF4Q29IO0FBRTFILElBQU1uQixhQUFhb0Isa0JBQVM7QUFFNUIsSUFBTW5CLGdCQUFnQm9CLGNBQUs7QUFFM0IsSUFBTW5CLGdCQUFnQm9CLGNBQUs7QUFFM0IsSUFBTW5CLGdCQUFnQm9CLG1CQUFVO0FBRWhDLElBQU1uQixpQkFBaUJpQixjQUFLO0FBRTVCLElBQU1oQixpQkFBaUJtQixxQkFBWTtBQUVuQyxJQUFNbEIsc0JBQXNCbUIsbUJBQVU7QUFFdEMsSUFBTWxCLG9CQUFvQmEsa0JBQVM7QUFFbkMsSUFBTVosa0JBQWtCa0IsaUJBQVE7QUFFaEMsSUFBTWpCLHVCQUF1QmtCLGVBQU07QUFFbkMsSUFBTWpCLHdCQUF3QmtCLG1CQUFVO0FBRXhDLElBQU1qQiw2QkFBNkJrQixpQkFBUTtBQUUzQyxJQUFNakIsMEJBQTBCVSxjQUFLO0FBRXJDLElBQU1ULCtCQUErQmlCLGtCQUFTO0FBRTlDLElBQU1oQixzQkFBc0JZLGlCQUFRO0FBRXBDLElBQU1YLDJCQUEyQlksZUFBTTtBQUV2QyxJQUFNWCw0QkFBNEJZLG1CQUFVO0FBRTVDLElBQU1YLGlDQUFpQ1ksaUJBQVE7QUFFL0MsSUFBTVgsOEJBQThCSSxjQUFLO0FBRXpDLElBQU1ILG1DQUFtQ1csa0JBQVMifQ==