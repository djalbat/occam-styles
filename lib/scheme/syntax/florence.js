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
    stringLiteralColour: function() {
        return stringLiteralColour;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgaHVycmljYW5lLCBob2tleVBva2V5LCByYXp6bWF0YXp6LCBnYWluc2Jvcm91Z2ggfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IG1ldGFUeXBlQ29sb3VyID0gZ2FpbnNib3JvdWdoO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciA9IGh1cnJpY2FuZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG4iXSwibmFtZXMiOlsiY29udGV4dE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwib3BlcmF0b3JDb2xvdXIiLCJyZWZlcmVuY2VOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInN0cmluZ0xpdGVyYWxDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwic3VzaGkiLCJyYXp6bWF0YXp6IiwiZ2FpbnNib3JvdWdoIiwiaG9rZXlQb2tleSIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwicGFibG8iLCJodXJyaWNhbmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnQmFBLGlCQUFpQjtlQUFqQkE7O0lBTUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBTUFDLDJCQUEyQjtlQUEzQkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7O0lBeEJBQyxhQUFhO2VBQWJBOztJQVVBQyxlQUFlO2VBQWZBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQVJBQyxjQUFjO2VBQWRBOztJQUZBQyxjQUFjO2VBQWRBOztJQWdCQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsd0JBQXdCO2VBQXhCQTs7SUF0QkFDLGFBQWE7ZUFBYkE7O0lBUUFDLG1CQUFtQjtlQUFuQkE7O0lBVkFDLFVBQVU7ZUFBVkE7Ozt1QkFGOEY7QUFFcEcsSUFBTUEsYUFBYUMsa0JBQVM7QUFFNUIsSUFBTUgsZ0JBQWdCSSxjQUFLO0FBRTNCLElBQU1YLGdCQUFnQlksbUJBQVU7QUFFaEMsSUFBTVIsaUJBQWlCTyxjQUFLO0FBRTVCLElBQU1SLGlCQUFpQlUscUJBQVk7QUFFbkMsSUFBTUwsc0JBQXNCTSxtQkFBVTtBQUV0QyxJQUFNbkIsb0JBQW9CZSxrQkFBUztBQUVuQyxJQUFNVCxrQkFBa0JjLGlCQUFRO0FBRWhDLElBQU1iLHVCQUF1QmMsZUFBTTtBQUVuQyxJQUFNcEIsMEJBQTBCcUIsY0FBSztBQUVyQyxJQUFNcEIsK0JBQStCcUIsa0JBQVM7QUFFOUMsSUFBTWIsc0JBQXNCVSxpQkFBUTtBQUVwQyxJQUFNVCwyQkFBMkJVLGVBQU07QUFFdkMsSUFBTWxCLDhCQUE4Qm1CLGNBQUs7QUFFekMsSUFBTWxCLG1DQUFtQ21CLGtCQUFTIn0=