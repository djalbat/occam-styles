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
var metaTypeColour = _colours.regentGrey;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgZmxhbWluZ28sIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIGh1cnJpY2FuZSwgaG9rZXlQb2tleSwgcmF6em1hdGF6eiwgdGVycmFjb3R0YSwgcmVnZW50R3JleSB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgY29tbWVudENvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBvcGVyYXRvckNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSByZWdlbnRHcmV5O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlMYWJlbE5hbWVDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5TGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZmF1bHR5UmVmZXJlbmNlTmFtZUNvbG91ciA9IHRlcnJhY290dGE7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG4iXSwibmFtZXMiOlsidHlwZUNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJjb21tZW50Q29sb3VyIiwia2V5d29yZENvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwibWV0YVR5cGVDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiY29udGV4dE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImZhdWx0eVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicGFibG8iLCJyYXp6bWF0YXp6IiwicmVnZW50R3JleSIsImhva2V5UG9rZXkiLCJzeWNhbW9yZSIsImNlbGVyeSIsInRlcnJhY290dGEiLCJmbGFtaW5nbyIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWFBLFVBQVU7ZUFBVkE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGFBQWE7ZUFBYkE7O0lBRUFDLGNBQWM7ZUFBZEE7O0lBRUFDLGNBQWM7ZUFBZEE7O0lBRUFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLGlCQUFpQjtlQUFqQkE7O0lBRUFDLGVBQWU7ZUFBZkE7O0lBRUFDLG9CQUFvQjtlQUFwQkE7O0lBRUFDLHFCQUFxQjtlQUFyQkE7O0lBRUFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBRUFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLHdCQUF3QjtlQUF4QkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLDhCQUE4QjtlQUE5QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7Ozt1QkF4Q2tIO0FBRXhILElBQU1uQixhQUFhb0Isa0JBQVM7QUFFNUIsSUFBTW5CLGdCQUFnQm9CLGNBQUs7QUFFM0IsSUFBTW5CLGdCQUFnQm9CLGNBQUs7QUFFM0IsSUFBTW5CLGdCQUFnQm9CLG1CQUFVO0FBRWhDLElBQU1uQixpQkFBaUJpQixjQUFLO0FBRTVCLElBQU1oQixpQkFBaUJtQixtQkFBVTtBQUVqQyxJQUFNbEIsc0JBQXNCbUIsbUJBQVU7QUFFdEMsSUFBTWxCLG9CQUFvQmEsa0JBQVM7QUFFbkMsSUFBTVosa0JBQWtCa0IsaUJBQVE7QUFFaEMsSUFBTWpCLHVCQUF1QmtCLGVBQU07QUFFbkMsSUFBTWpCLHdCQUF3QmtCLG1CQUFVO0FBRXhDLElBQU1qQiw2QkFBNkJrQixpQkFBUTtBQUUzQyxJQUFNakIsMEJBQTBCVSxjQUFLO0FBRXJDLElBQU1ULCtCQUErQmlCLGtCQUFTO0FBRTlDLElBQU1oQixzQkFBc0JZLGlCQUFRO0FBRXBDLElBQU1YLDJCQUEyQlksZUFBTTtBQUV2QyxJQUFNWCw0QkFBNEJZLG1CQUFVO0FBRTVDLElBQU1YLGlDQUFpQ1ksaUJBQVE7QUFFL0MsSUFBTVgsOEJBQThCSSxjQUFLO0FBRXpDLElBQU1ILG1DQUFtQ1csa0JBQVMifQ==