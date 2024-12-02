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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtzdXNoaSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgcmF6em1hdGF6eiwgaG9rZXlQb2tleSwgY2VsZXJ5LCBwYWJsb30gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgcmV0dXJuQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IGJyYWNrZXRDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHByaW1pdGl2ZUNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBleHByZXNzaW9uQ29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyID0gcGFibG87XG4iXSwibmFtZXMiOlsiYnJhY2tldENvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwiZXhwcmVzc2lvbkNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwicHJpbWl0aXZlQ29sb3VyIiwicXVlcnlDb2xvdXIiLCJyZWZlcmVuY2VOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwicmV0dXJuQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInR5cGVDb2xvdXIiLCJjYWRldEJsdWUiLCJzdXNoaSIsInJhenptYXRhenoiLCJob2tleVBva2V5Iiwic3ljYW1vcmUiLCJjZWxlcnkiLCJwYWJsbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVWFBLGFBQWE7ZUFBYkE7O0lBb0JBQyx1QkFBdUI7ZUFBdkJBOztJQUVBQywyQkFBMkI7ZUFBM0JBOztJQVpBQyxnQkFBZ0I7ZUFBaEJBOztJQU5BQyxhQUFhO2VBQWJBOztJQVFBQyxlQUFlO2VBQWZBOztJQUlBQyxvQkFBb0I7ZUFBcEJBOztJQVZBQyxjQUFjO2VBQWRBOztJQUVBQyxlQUFlO2VBQWZBOztJQVpBQyxXQUFXO2VBQVhBOztJQWtCQUMsbUJBQW1CO2VBQW5CQTs7SUFJQUMsd0JBQXdCO2VBQXhCQTs7SUFwQkFDLFlBQVk7ZUFBWkE7O0lBSUFDLGFBQWE7ZUFBYkE7O0lBUkFDLFVBQVU7ZUFBVkE7Ozt1QkFGbUU7QUFFekUsSUFBTUEsYUFBYUMsa0JBQVM7QUFFNUIsSUFBTU4sY0FBY08sY0FBSztBQUV6QixJQUFNSixlQUFlSyxtQkFBVTtBQUUvQixJQUFNakIsZ0JBQWdCZ0IsY0FBSztBQUUzQixJQUFNSCxnQkFBZ0JHLGNBQUs7QUFFM0IsSUFBTVosZ0JBQWdCYSxtQkFBVTtBQUVoQyxJQUFNVixpQkFBaUJTLGNBQUs7QUFFNUIsSUFBTVIsa0JBQWtCUyxtQkFBVTtBQUVsQyxJQUFNZCxtQkFBbUJlLG1CQUFVO0FBRW5DLElBQU1iLGtCQUFrQmMsaUJBQVE7QUFFaEMsSUFBTVQsc0JBQXNCUyxpQkFBUTtBQUVwQyxJQUFNYix1QkFBdUJjLGVBQU07QUFFbkMsSUFBTVQsMkJBQTJCUyxlQUFNO0FBRXZDLElBQU1uQiwwQkFBMEJvQixjQUFLO0FBRXJDLElBQU1uQiw4QkFBOEJtQixjQUFLIn0=