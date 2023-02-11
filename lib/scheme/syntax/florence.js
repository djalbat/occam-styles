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
var typeColour = _colours.regentGrey;
var specialColour = _colours.sushi;
var commentColour = _colours.pablo;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var metaTypeColour = _colours.spanishGreen;
var stringLiteralColour = _colours.hokeyPokey;
var contextNameColour = _colours.regentGrey;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgZmxhbWluZ28sIHN5Y2Ftb3JlLCByZWdlbnRHcmV5LCBodXJyaWNhbmUsIGhva2V5UG9rZXksIHJhenptYXRhenosIHRlcnJhY290dGEsIHNwYW5pc2hHcmVlbiB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlQ29sb3VyID0gcmVnZW50R3JleTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IG1ldGFUeXBlQ29sb3VyID0gc3BhbmlzaEdyZWVuO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IHJlZ2VudEdyZXk7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZmF1bHR5TGFiZWxOYW1lQ29sb3VyID0gdGVycmFjb3R0YTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eUxhYmVsTmFtZUhvdmVyQ29sb3VyID0gZmxhbWluZ287XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciA9IGh1cnJpY2FuZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eVJlZmVyZW5jZU5hbWVDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5UmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gZmxhbWluZ287XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuIl0sIm5hbWVzIjpbInR5cGVDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwiY29tbWVudENvbG91ciIsImtleXdvcmRDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsImNvbnRleHROYW1lQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJmYXVsdHlMYWJlbE5hbWVDb2xvdXIiLCJmYXVsdHlMYWJlbE5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZmF1bHR5UmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJyZWdlbnRHcmV5Iiwic3VzaGkiLCJwYWJsbyIsInJhenptYXRhenoiLCJzcGFuaXNoR3JlZW4iLCJob2tleVBva2V5Iiwic3ljYW1vcmUiLCJjZWxlcnkiLCJ0ZXJyYWNvdHRhIiwiZmxhbWluZ28iLCJodXJyaWNhbmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlhQSxVQUFVO2VBQVZBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxtQkFBbUI7ZUFBbkJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQUVBQyxxQkFBcUI7ZUFBckJBOztJQUVBQywwQkFBMEI7ZUFBMUJBOztJQUVBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyxtQkFBbUI7ZUFBbkJBOztJQUVBQyx3QkFBd0I7ZUFBeEJBOztJQUVBQyx5QkFBeUI7ZUFBekJBOztJQUVBQyw4QkFBOEI7ZUFBOUJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOzs7dUJBeENxSDtBQUUzSCxJQUFNbkIsYUFBYW9CLG1CQUFVO0FBRTdCLElBQU1uQixnQkFBZ0JvQixjQUFLO0FBRTNCLElBQU1uQixnQkFBZ0JvQixjQUFLO0FBRTNCLElBQU1uQixnQkFBZ0JvQixtQkFBVTtBQUVoQyxJQUFNbkIsaUJBQWlCaUIsY0FBSztBQUU1QixJQUFNaEIsaUJBQWlCbUIscUJBQVk7QUFFbkMsSUFBTWxCLHNCQUFzQm1CLG1CQUFVO0FBRXRDLElBQU1sQixvQkFBb0JhLG1CQUFVO0FBRXBDLElBQU1aLGtCQUFrQmtCLGlCQUFRO0FBRWhDLElBQU1qQix1QkFBdUJrQixlQUFNO0FBRW5DLElBQU1qQix3QkFBd0JrQixtQkFBVTtBQUV4QyxJQUFNakIsNkJBQTZCa0IsaUJBQVE7QUFFM0MsSUFBTWpCLDBCQUEwQlUsY0FBSztBQUVyQyxJQUFNVCwrQkFBK0JpQixrQkFBUztBQUU5QyxJQUFNaEIsc0JBQXNCWSxpQkFBUTtBQUVwQyxJQUFNWCwyQkFBMkJZLGVBQU07QUFFdkMsSUFBTVgsNEJBQTRCWSxtQkFBVTtBQUU1QyxJQUFNWCxpQ0FBaUNZLGlCQUFRO0FBRS9DLElBQU1YLDhCQUE4QkksY0FBSztBQUV6QyxJQUFNSCxtQ0FBbUNXLGtCQUFTIn0=