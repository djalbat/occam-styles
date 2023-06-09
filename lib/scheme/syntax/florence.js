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
    disabledReferenceNameColour: function() {
        return disabledReferenceNameColour;
    },
    disabledReferenceNameHoverColour: function() {
        return disabledReferenceNameHoverColour;
    },
    default: function() {
        return _default;
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
var disabledLabelNameColour = _colours.pablo;
var disabledLabelNameHoverColour = _colours.hurricane;
var referenceNameColour = _colours.sycamore;
var referenceNameHoverColour = _colours.celery;
var disabledReferenceNameColour = _colours.pablo;
var disabledReferenceNameHoverColour = _colours.hurricane;
var _default = {
    typeColour: typeColour,
    specialColour: specialColour,
    commentColour: commentColour,
    keywordColour: keywordColour,
    operatorColour: operatorColour,
    metaTypeColour: metaTypeColour,
    stringLiteralColour: stringLiteralColour,
    contextNameColour: contextNameColour,
    labelNameColour: labelNameColour,
    labelNameHoverColour: labelNameHoverColour,
    disabledLabelNameColour: disabledLabelNameColour,
    disabledLabelNameHoverColour: disabledLabelNameHoverColour,
    referenceNameColour: referenceNameColour,
    referenceNameHoverColour: referenceNameHoverColour,
    disabledReferenceNameColour: disabledReferenceNameColour,
    disabledReferenceNameHoverColour: disabledReferenceNameHoverColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgaHVycmljYW5lLCBob2tleVBva2V5LCByYXp6bWF0YXp6LCBzcGFuaXNoR3JlZW4gfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IG1ldGFUeXBlQ29sb3VyID0gc3BhbmlzaEdyZWVuO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciA9IGh1cnJpY2FuZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdHlwZUNvbG91cixcbiAgc3BlY2lhbENvbG91cixcbiAgY29tbWVudENvbG91cixcbiAga2V5d29yZENvbG91cixcbiAgb3BlcmF0b3JDb2xvdXIsXG4gIG1ldGFUeXBlQ29sb3VyLFxuICBzdHJpbmdMaXRlcmFsQ29sb3VyLFxuICBjb250ZXh0TmFtZUNvbG91cixcbiAgbGFiZWxOYW1lQ29sb3VyLFxuICBsYWJlbE5hbWVIb3ZlckNvbG91cixcbiAgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIsXG4gIGRpc2FibGVkTGFiZWxOYW1lSG92ZXJDb2xvdXIsXG4gIHJlZmVyZW5jZU5hbWVDb2xvdXIsXG4gIHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91cixcbiAgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyLFxuICBkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91clxufTtcbiJdLCJuYW1lcyI6WyJ0eXBlQ29sb3VyIiwic3BlY2lhbENvbG91ciIsImNvbW1lbnRDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwib3BlcmF0b3JDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsInN0cmluZ0xpdGVyYWxDb2xvdXIiLCJjb250ZXh0TmFtZUNvbG91ciIsImxhYmVsTmFtZUNvbG91ciIsImxhYmVsTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwiY2FkZXRCbHVlIiwic3VzaGkiLCJwYWJsbyIsInJhenptYXRhenoiLCJzcGFuaXNoR3JlZW4iLCJob2tleVBva2V5Iiwic3ljYW1vcmUiLCJjZWxlcnkiLCJodXJyaWNhbmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlhQSxVQUFVO2VBQVZBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxhQUFhO2VBQWJBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxtQkFBbUI7ZUFBbkJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQUVBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQyw0QkFBNEI7ZUFBNUJBOztJQUVBQyxtQkFBbUI7ZUFBbkJBOztJQUVBQyx3QkFBd0I7ZUFBeEJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQUVBQyxnQ0FBZ0M7ZUFBaENBOztJQUViLE9BaUJFO2VBakJGOzs7dUJBbEMyRztBQUVwRyxJQUFNZixhQUFhZ0I7QUFFbkIsSUFBTWYsZ0JBQWdCZ0I7QUFFdEIsSUFBTWYsZ0JBQWdCZ0I7QUFFdEIsSUFBTWYsZ0JBQWdCZ0I7QUFFdEIsSUFBTWYsaUJBQWlCYTtBQUV2QixJQUFNWixpQkFBaUJlO0FBRXZCLElBQU1kLHNCQUFzQmU7QUFFNUIsSUFBTWQsb0JBQW9CUztBQUUxQixJQUFNUixrQkFBa0JjO0FBRXhCLElBQU1iLHVCQUF1QmM7QUFFN0IsSUFBTWIsMEJBQTBCUTtBQUVoQyxJQUFNUCwrQkFBK0JhO0FBRXJDLElBQU1aLHNCQUFzQlU7QUFFNUIsSUFBTVQsMkJBQTJCVTtBQUVqQyxJQUFNVCw4QkFBOEJJO0FBRXBDLElBQU1ILG1DQUFtQ1M7SUFFaEQsV0FBZTtJQUNieEIsWUFBQUE7SUFDQUMsZUFBQUE7SUFDQUMsZUFBQUE7SUFDQUMsZUFBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FDLGdCQUFBQTtJQUNBQyxxQkFBQUE7SUFDQUMsbUJBQUFBO0lBQ0FDLGlCQUFBQTtJQUNBQyxzQkFBQUE7SUFDQUMseUJBQUFBO0lBQ0FDLDhCQUFBQTtJQUNBQyxxQkFBQUE7SUFDQUMsMEJBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyxrQ0FBQUE7QUFDRiJ9