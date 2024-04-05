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
    contextNameColour: function() {
        return contextNameColour;
    },
    disabledLabelNameColour: function() {
        return disabledLabelNameColour;
    },
    disabledLabelNameHoverColour: function() {
        return disabledLabelNameHoverColour;
    },
    disabledReferenceNameColour: function() {
        return disabledReferenceNameColour;
    },
    disabledReferenceNameHoverColour: function() {
        return disabledReferenceNameHoverColour;
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
    typeColour: function() {
        return typeColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var metaTypeColour = _colours.gainsborough;
var contextNameColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledLabelNameHoverColour = _colours.hurricane;
var referenceNameColour = _colours.sycamore;
var referenceNameHoverColour = _colours.celery;
var disabledReferenceNameColour = _colours.pablo;
var disabledReferenceNameHoverColour = _colours.hurricane;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgaHVycmljYW5lLCByYXp6bWF0YXp6LCBnYWluc2Jvcm91Z2ggfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IG1ldGFUeXBlQ29sb3VyID0gZ2FpbnNib3JvdWdoO1xuXG5leHBvcnQgY29uc3QgY29udGV4dE5hbWVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuIl0sIm5hbWVzIjpbImNvbnRleHROYW1lQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwic3VzaGkiLCJyYXp6bWF0YXp6IiwiZ2FpbnNib3JvdWdoIiwic3ljYW1vcmUiLCJjZWxlcnkiLCJwYWJsbyIsImh1cnJpY2FuZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2FBLGlCQUFpQjtlQUFqQkE7O0lBTUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBTUFDLDJCQUEyQjtlQUEzQkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7O0lBdEJBQyxhQUFhO2VBQWJBOztJQVFBQyxlQUFlO2VBQWZBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQU5BQyxjQUFjO2VBQWRBOztJQUZBQyxjQUFjO2VBQWRBOztJQWNBQyxtQkFBbUI7ZUFBbkJBOztJQUVBQyx3QkFBd0I7ZUFBeEJBOztJQXBCQUMsYUFBYTtlQUFiQTs7SUFGQUMsVUFBVTtlQUFWQTs7O3VCQUZrRjtBQUV4RixJQUFNQSxhQUFhQyxrQkFBUztBQUU1QixJQUFNRixnQkFBZ0JHLGNBQUs7QUFFM0IsSUFBTVYsZ0JBQWdCVyxtQkFBVTtBQUVoQyxJQUFNUCxpQkFBaUJNLGNBQUs7QUFFNUIsSUFBTVAsaUJBQWlCUyxxQkFBWTtBQUVuQyxJQUFNakIsb0JBQW9CYyxrQkFBUztBQUVuQyxJQUFNUixrQkFBa0JZLGlCQUFRO0FBRWhDLElBQU1YLHVCQUF1QlksZUFBTTtBQUVuQyxJQUFNbEIsMEJBQTBCbUIsY0FBSztBQUVyQyxJQUFNbEIsK0JBQStCbUIsa0JBQVM7QUFFOUMsSUFBTVgsc0JBQXNCUSxpQkFBUTtBQUVwQyxJQUFNUCwyQkFBMkJRLGVBQU07QUFFdkMsSUFBTWhCLDhCQUE4QmlCLGNBQUs7QUFFekMsSUFBTWhCLG1DQUFtQ2lCLGtCQUFTIn0=