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
    delimiterColour: function() {
        return delimiterColour;
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
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var delimiterColour = _colours.sushi;
var primitiveColour = _colours.razzmatazz;
var expressionColour = _colours.hokeyPokey;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtzdXNoaSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgcmF6em1hdGF6eiwgaG9rZXlQb2tleSwgY2VsZXJ5LCBwYWJsb30gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgcmV0dXJuQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGRlbGltaXRlckNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgcHJpbWl0aXZlQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IGV4cHJlc3Npb25Db2xvdXIgPSBob2tleVBva2V5O1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJkZWxpbWl0ZXJDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsImV4cHJlc3Npb25Db2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsInByaW1pdGl2ZUNvbG91ciIsInF1ZXJ5Q29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInJldHVybkNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwic3VzaGkiLCJyYXp6bWF0YXp6IiwiaG9rZXlQb2tleSIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwicGFibG8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdCYUEsZUFBZTtlQUFmQTs7SUFjQUMsdUJBQXVCO2VBQXZCQTs7SUFFQUMsMkJBQTJCO2VBQTNCQTs7SUFaQUMsZ0JBQWdCO2VBQWhCQTs7SUFSQUMsYUFBYTtlQUFiQTs7SUFVQUMsZUFBZTtlQUFmQTs7SUFJQUMsb0JBQW9CO2VBQXBCQTs7SUFaQUMsY0FBYztlQUFkQTs7SUFJQUMsZUFBZTtlQUFmQTs7SUFaQUMsV0FBVztlQUFYQTs7SUFrQkFDLG1CQUFtQjtlQUFuQkE7O0lBSUFDLHdCQUF3QjtlQUF4QkE7O0lBcEJBQyxZQUFZO2VBQVpBOztJQUVBQyxhQUFhO2VBQWJBOztJQU5BQyxVQUFVO2VBQVZBOzs7dUJBRm1FO0FBRXpFLElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1OLGNBQWNPLGNBQUs7QUFFekIsSUFBTUosZUFBZUssbUJBQVU7QUFFL0IsSUFBTUosZ0JBQWdCRyxjQUFLO0FBRTNCLElBQU1aLGdCQUFnQmEsbUJBQVU7QUFFaEMsSUFBTVYsaUJBQWlCUyxjQUFLO0FBRTVCLElBQU1oQixrQkFBa0JnQixjQUFLO0FBRTdCLElBQU1SLGtCQUFrQlMsbUJBQVU7QUFFbEMsSUFBTWQsbUJBQW1CZSxtQkFBVTtBQUVuQyxJQUFNYixrQkFBa0JjLGlCQUFRO0FBRWhDLElBQU1ULHNCQUFzQlMsaUJBQVE7QUFFcEMsSUFBTWIsdUJBQXVCYyxlQUFNO0FBRW5DLElBQU1ULDJCQUEyQlMsZUFBTTtBQUV2QyxJQUFNbkIsMEJBQTBCb0IsY0FBSztBQUVyQyxJQUFNbkIsOEJBQThCbUIsY0FBSyJ9