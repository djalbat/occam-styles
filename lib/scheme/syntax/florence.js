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
    customColour: function() {
        return customColour;
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
    typeNameColour: function() {
        return typeNameColour;
    },
    contextNameColour: function() {
        return contextNameColour;
    },
    variableNameColour: function() {
        return variableNameColour;
    },
    metavariableNameColour: function() {
        return metavariableNameColour;
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
var customColour = _colours.sushi;
var specialColour = _colours.sushi;
var commentColour = _colours.pablo;
var keywordColour = _colours.razzmatazz;
var reservedColour = _colours.razzmatazz;
var stringLiteralColour = _colours.hokeyPokey;
var typeNameColour = _colours.regentGrey;
var contextNameColour = _colours.cadetBlue;
var variableNameColour = _colours.treePoppy;
var metavariableNameColour = _colours.cadetBlue;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIHJhenptYXRhenosIGhva2V5UG9rZXksIHJlZ2VudEdyZXksIGNhZGV0Qmx1ZSwgdHJlZVBvcHB5LCBzeWNhbW9yZSwgY2VsZXJ5LCB0ZXJyYWNvdHRhLCBmbGFtaW5nbywgaHVycmljYW5lIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGN1c3RvbUNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgY29tbWVudENvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCByZXNlcnZlZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsQ29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IHR5cGVOYW1lQ29sb3VyID0gcmVnZW50R3JleTtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHROYW1lQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgdmFyaWFibGVOYW1lQ29sb3VyID0gdHJlZVBvcHB5O1xuXG5leHBvcnQgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlMYWJlbE5hbWVDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5TGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZmF1bHR5UmVmZXJlbmNlTmFtZUNvbG91ciA9IHRlcnJhY290dGE7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG4iXSwibmFtZXMiOlsiY3VzdG9tQ29sb3VyIiwic3BlY2lhbENvbG91ciIsImNvbW1lbnRDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwicmVzZXJ2ZWRDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwidHlwZU5hbWVDb2xvdXIiLCJjb250ZXh0TmFtZUNvbG91ciIsInZhcmlhYmxlTmFtZUNvbG91ciIsIm1ldGF2YXJpYWJsZU5hbWVDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImZhdWx0eVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInN1c2hpIiwicGFibG8iLCJyYXp6bWF0YXp6IiwiaG9rZXlQb2tleSIsInJlZ2VudEdyZXkiLCJjYWRldEJsdWUiLCJ0cmVlUG9wcHkiLCJzeWNhbW9yZSIsImNlbGVyeSIsInRlcnJhY290dGEiLCJmbGFtaW5nbyIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUlBQSxZQUFZO2VBQVpBLFlBQVk7O0lBRVpDLGFBQWE7ZUFBYkEsYUFBYTs7SUFFYkMsYUFBYTtlQUFiQSxhQUFhOztJQUViQyxhQUFhO2VBQWJBLGFBQWE7O0lBRWJDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFZEMsbUJBQW1CO2VBQW5CQSxtQkFBbUI7O0lBRW5CQyxjQUFjO2VBQWRBLGNBQWM7O0lBRWRDLGlCQUFpQjtlQUFqQkEsaUJBQWlCOztJQUVqQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBRWxCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFFdEJDLGVBQWU7ZUFBZkEsZUFBZTs7SUFFZkMsb0JBQW9CO2VBQXBCQSxvQkFBb0I7O0lBRXBCQyxxQkFBcUI7ZUFBckJBLHFCQUFxQjs7SUFFckJDLDBCQUEwQjtlQUExQkEsMEJBQTBCOztJQUUxQkMsdUJBQXVCO2VBQXZCQSx1QkFBdUI7O0lBRXZCQyw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7SUFFNUJDLG1CQUFtQjtlQUFuQkEsbUJBQW1COztJQUVuQkMsd0JBQXdCO2VBQXhCQSx3QkFBd0I7O0lBRXhCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFFekJDLDhCQUE4QjtlQUE5QkEsOEJBQThCOztJQUU5QkMsMkJBQTJCO2VBQTNCQSwyQkFBMkI7O0lBRTNCQyxnQ0FBZ0M7ZUFBaENBLGdDQUFnQzs7O3VCQTVDNkYsZUFBZTtBQUVsSixJQUFNckIsWUFBWSxHQUFHc0IsUUFBSyxNQUFBLEFBQUM7QUFFM0IsSUFBTXJCLGFBQWEsR0FBR3FCLFFBQUssTUFBQSxBQUFDO0FBRTVCLElBQU1wQixhQUFhLEdBQUdxQixRQUFLLE1BQUEsQUFBQztBQUU1QixJQUFNcEIsYUFBYSxHQUFHcUIsUUFBVSxXQUFBLEFBQUM7QUFFakMsSUFBTXBCLGNBQWMsR0FBR29CLFFBQVUsV0FBQSxBQUFDO0FBRWxDLElBQU1uQixtQkFBbUIsR0FBR29CLFFBQVUsV0FBQSxBQUFDO0FBRXZDLElBQU1uQixjQUFjLEdBQUdvQixRQUFVLFdBQUEsQUFBQztBQUVsQyxJQUFNbkIsaUJBQWlCLEdBQUdvQixRQUFTLFVBQUEsQUFBQztBQUVwQyxJQUFNbkIsa0JBQWtCLEdBQUdvQixRQUFTLFVBQUEsQUFBQztBQUVyQyxJQUFNbkIsc0JBQXNCLEdBQUdrQixRQUFTLFVBQUEsQUFBQztBQUV6QyxJQUFNakIsZUFBZSxHQUFHbUIsUUFBUSxTQUFBLEFBQUM7QUFFakMsSUFBTWxCLG9CQUFvQixHQUFHbUIsUUFBTSxPQUFBLEFBQUM7QUFFcEMsSUFBTWxCLHFCQUFxQixHQUFHbUIsUUFBVSxXQUFBLEFBQUM7QUFFekMsSUFBTWxCLDBCQUEwQixHQUFHbUIsUUFBUSxTQUFBLEFBQUM7QUFFNUMsSUFBTWxCLHVCQUF1QixHQUFHUyxRQUFLLE1BQUEsQUFBQztBQUV0QyxJQUFNUiw0QkFBNEIsR0FBR2tCLFFBQVMsVUFBQSxBQUFDO0FBRS9DLElBQU1qQixtQkFBbUIsR0FBR2EsUUFBUSxTQUFBLEFBQUM7QUFFckMsSUFBTVosd0JBQXdCLEdBQUdhLFFBQU0sT0FBQSxBQUFDO0FBRXhDLElBQU1aLHlCQUF5QixHQUFHYSxRQUFVLFdBQUEsQUFBQztBQUU3QyxJQUFNWiw4QkFBOEIsR0FBR2EsUUFBUSxTQUFBLEFBQUM7QUFFaEQsSUFBTVosMkJBQTJCLEdBQUdHLFFBQUssTUFBQSxBQUFDO0FBRTFDLElBQU1GLGdDQUFnQyxHQUFHWSxRQUFTLFVBQUEsQUFBQyJ9