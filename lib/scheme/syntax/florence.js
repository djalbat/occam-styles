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
    operatorColour: function() {
        return operatorColour;
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
    reservedColour: function() {
        return reservedColour;
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
var operatorColour = _colours.sushi;
var specialColour = _colours.sushi;
var commentColour = _colours.pablo;
var keywordColour = _colours.razzmatazz;
var reservedColour = _colours.razzmatazz;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIHJhenptYXRhenosIGhva2V5UG9rZXksIGNhZGV0Qmx1ZSwgc3ljYW1vcmUsIGNlbGVyeSwgdGVycmFjb3R0YSwgZmxhbWluZ28sIGh1cnJpY2FuZSB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgcmVzZXJ2ZWRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlMYWJlbE5hbWVDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5TGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZmF1bHR5UmVmZXJlbmNlTmFtZUNvbG91ciA9IHRlcnJhY290dGE7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG4iXSwibmFtZXMiOlsidHlwZUNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwic3BlY2lhbENvbG91ciIsImNvbW1lbnRDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwicmVzZXJ2ZWRDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiY29udGV4dE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImZhdWx0eVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicGFibG8iLCJyYXp6bWF0YXp6IiwiaG9rZXlQb2tleSIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwidGVycmFjb3R0YSIsImZsYW1pbmdvIiwiaHVycmljYW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBSUFBLFVBQVU7ZUFBVkEsVUFBVTs7SUFFVkMsY0FBYztlQUFkQSxjQUFjOztJQUVkQyxhQUFhO2VBQWJBLGFBQWE7O0lBRWJDLGFBQWE7ZUFBYkEsYUFBYTs7SUFFYkMsYUFBYTtlQUFiQSxhQUFhOztJQUViQyxjQUFjO2VBQWRBLGNBQWM7O0lBRWRDLG1CQUFtQjtlQUFuQkEsbUJBQW1COztJQUVuQkMsaUJBQWlCO2VBQWpCQSxpQkFBaUI7O0lBRWpCQyxlQUFlO2VBQWZBLGVBQWU7O0lBRWZDLG9CQUFvQjtlQUFwQkEsb0JBQW9COztJQUVwQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBRXJCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFFMUJDLHVCQUF1QjtlQUF2QkEsdUJBQXVCOztJQUV2QkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBRTVCQyxtQkFBbUI7ZUFBbkJBLG1CQUFtQjs7SUFFbkJDLHdCQUF3QjtlQUF4QkEsd0JBQXdCOztJQUV4QkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXpCQyw4QkFBOEI7ZUFBOUJBLDhCQUE4Qjs7SUFFOUJDLDJCQUEyQjtlQUEzQkEsMkJBQTJCOztJQUUzQkMsZ0NBQWdDO2VBQWhDQSxnQ0FBZ0M7Ozt1QkF4Q3NFLGVBQWU7QUFFM0gsSUFBTW5CLFVBQVUsR0FBR29CLFFBQVMsVUFBQSxBQUFDO0FBRTdCLElBQU1uQixjQUFjLEdBQUdvQixRQUFLLE1BQUEsQUFBQztBQUU3QixJQUFNbkIsYUFBYSxHQUFHbUIsUUFBSyxNQUFBLEFBQUM7QUFFNUIsSUFBTWxCLGFBQWEsR0FBR21CLFFBQUssTUFBQSxBQUFDO0FBRTVCLElBQU1sQixhQUFhLEdBQUdtQixRQUFVLFdBQUEsQUFBQztBQUVqQyxJQUFNbEIsY0FBYyxHQUFHa0IsUUFBVSxXQUFBLEFBQUM7QUFFbEMsSUFBTWpCLG1CQUFtQixHQUFHa0IsUUFBVSxXQUFBLEFBQUM7QUFFdkMsSUFBTWpCLGlCQUFpQixHQUFHYSxRQUFTLFVBQUEsQUFBQztBQUVwQyxJQUFNWixlQUFlLEdBQUdpQixRQUFRLFNBQUEsQUFBQztBQUVqQyxJQUFNaEIsb0JBQW9CLEdBQUdpQixRQUFNLE9BQUEsQUFBQztBQUVwQyxJQUFNaEIscUJBQXFCLEdBQUdpQixRQUFVLFdBQUEsQUFBQztBQUV6QyxJQUFNaEIsMEJBQTBCLEdBQUdpQixRQUFRLFNBQUEsQUFBQztBQUU1QyxJQUFNaEIsdUJBQXVCLEdBQUdVLFFBQUssTUFBQSxBQUFDO0FBRXRDLElBQU1ULDRCQUE0QixHQUFHZ0IsUUFBUyxVQUFBLEFBQUM7QUFFL0MsSUFBTWYsbUJBQW1CLEdBQUdXLFFBQVEsU0FBQSxBQUFDO0FBRXJDLElBQU1WLHdCQUF3QixHQUFHVyxRQUFNLE9BQUEsQUFBQztBQUV4QyxJQUFNVix5QkFBeUIsR0FBR1csUUFBVSxXQUFBLEFBQUM7QUFFN0MsSUFBTVYsOEJBQThCLEdBQUdXLFFBQVEsU0FBQSxBQUFDO0FBRWhELElBQU1WLDJCQUEyQixHQUFHSSxRQUFLLE1BQUEsQUFBQztBQUUxQyxJQUFNSCxnQ0FBZ0MsR0FBR1UsUUFBUyxVQUFBLEFBQUMifQ==