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
var typeNameColour = _colours.cadetBlue;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIHJhenptYXRhenosIGhva2V5UG9rZXksIGNhZGV0Qmx1ZSwgc3ljYW1vcmUsIGNlbGVyeSwgdGVycmFjb3R0YSwgZmxhbWluZ28sIGh1cnJpY2FuZSB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Db2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgcmVzZXJ2ZWRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCB0eXBlTmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHROYW1lQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eUxhYmVsTmFtZUNvbG91ciA9IHRlcnJhY290dGE7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlMYWJlbE5hbWVIb3ZlckNvbG91ciA9IGZsYW1pbmdvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlSZWZlcmVuY2VOYW1lQ29sb3VyID0gdGVycmFjb3R0YTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eVJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGZsYW1pbmdvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGh1cnJpY2FuZTtcbiJdLCJuYW1lcyI6WyJjdXN0b21Db2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwiY29tbWVudENvbG91ciIsImtleXdvcmRDb2xvdXIiLCJyZXNlcnZlZENvbG91ciIsInN0cmluZ0xpdGVyYWxDb2xvdXIiLCJ0eXBlTmFtZUNvbG91ciIsImNvbnRleHROYW1lQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJmYXVsdHlMYWJlbE5hbWVDb2xvdXIiLCJmYXVsdHlMYWJlbE5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZmF1bHR5UmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJzdXNoaSIsInBhYmxvIiwicmF6em1hdGF6eiIsImhva2V5UG9rZXkiLCJjYWRldEJsdWUiLCJzeWNhbW9yZSIsImNlbGVyeSIsInRlcnJhY290dGEiLCJmbGFtaW5nbyIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUlBQSxZQUFZO2VBQVpBLFlBQVk7O0lBRVpDLGFBQWE7ZUFBYkEsYUFBYTs7SUFFYkMsYUFBYTtlQUFiQSxhQUFhOztJQUViQyxhQUFhO2VBQWJBLGFBQWE7O0lBRWJDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFZEMsbUJBQW1CO2VBQW5CQSxtQkFBbUI7O0lBRW5CQyxjQUFjO2VBQWRBLGNBQWM7O0lBRWRDLGlCQUFpQjtlQUFqQkEsaUJBQWlCOztJQUVqQkMsZUFBZTtlQUFmQSxlQUFlOztJQUVmQyxvQkFBb0I7ZUFBcEJBLG9CQUFvQjs7SUFFcEJDLHFCQUFxQjtlQUFyQkEscUJBQXFCOztJQUVyQkMsMEJBQTBCO2VBQTFCQSwwQkFBMEI7O0lBRTFCQyx1QkFBdUI7ZUFBdkJBLHVCQUF1Qjs7SUFFdkJDLDRCQUE0QjtlQUE1QkEsNEJBQTRCOztJQUU1QkMsbUJBQW1CO2VBQW5CQSxtQkFBbUI7O0lBRW5CQyx3QkFBd0I7ZUFBeEJBLHdCQUF3Qjs7SUFFeEJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMsOEJBQThCO2VBQTlCQSw4QkFBOEI7O0lBRTlCQywyQkFBMkI7ZUFBM0JBLDJCQUEyQjs7SUFFM0JDLGdDQUFnQztlQUFoQ0EsZ0NBQWdDOzs7dUJBeENzRSxlQUFlO0FBRTNILElBQU1uQixZQUFZLEdBQUdvQixRQUFLLE1BQUEsQUFBQztBQUUzQixJQUFNbkIsYUFBYSxHQUFHbUIsUUFBSyxNQUFBLEFBQUM7QUFFNUIsSUFBTWxCLGFBQWEsR0FBR21CLFFBQUssTUFBQSxBQUFDO0FBRTVCLElBQU1sQixhQUFhLEdBQUdtQixRQUFVLFdBQUEsQUFBQztBQUVqQyxJQUFNbEIsY0FBYyxHQUFHa0IsUUFBVSxXQUFBLEFBQUM7QUFFbEMsSUFBTWpCLG1CQUFtQixHQUFHa0IsUUFBVSxXQUFBLEFBQUM7QUFFdkMsSUFBTWpCLGNBQWMsR0FBR2tCLFFBQVMsVUFBQSxBQUFDO0FBRWpDLElBQU1qQixpQkFBaUIsR0FBR2lCLFFBQVMsVUFBQSxBQUFDO0FBRXBDLElBQU1oQixlQUFlLEdBQUdpQixRQUFRLFNBQUEsQUFBQztBQUVqQyxJQUFNaEIsb0JBQW9CLEdBQUdpQixRQUFNLE9BQUEsQUFBQztBQUVwQyxJQUFNaEIscUJBQXFCLEdBQUdpQixRQUFVLFdBQUEsQUFBQztBQUV6QyxJQUFNaEIsMEJBQTBCLEdBQUdpQixRQUFRLFNBQUEsQUFBQztBQUU1QyxJQUFNaEIsdUJBQXVCLEdBQUdTLFFBQUssTUFBQSxBQUFDO0FBRXRDLElBQU1SLDRCQUE0QixHQUFHZ0IsUUFBUyxVQUFBLEFBQUM7QUFFL0MsSUFBTWYsbUJBQW1CLEdBQUdXLFFBQVEsU0FBQSxBQUFDO0FBRXJDLElBQU1WLHdCQUF3QixHQUFHVyxRQUFNLE9BQUEsQUFBQztBQUV4QyxJQUFNVix5QkFBeUIsR0FBR1csUUFBVSxXQUFBLEFBQUM7QUFFN0MsSUFBTVYsOEJBQThCLEdBQUdXLFFBQVEsU0FBQSxBQUFDO0FBRWhELElBQU1WLDJCQUEyQixHQUFHRyxRQUFLLE1BQUEsQUFBQztBQUUxQyxJQUFNRixnQ0FBZ0MsR0FBR1UsUUFBUyxVQUFBLEFBQUMifQ==