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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIGNlbGVyeSwgc3ljYW1vcmUsIGNhZGV0Qmx1ZSwgaHVycmljYW5lLCBob2tleVBva2V5LCByYXp6bWF0YXp6LCBzcGFuaXNoR3JlZW4gfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IG1ldGFUeXBlQ29sb3VyID0gc3BhbmlzaEdyZWVuO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciA9IGh1cnJpY2FuZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG4iXSwibmFtZXMiOlsidHlwZUNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJjb21tZW50Q29sb3VyIiwia2V5d29yZENvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwibWV0YVR5cGVDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiY29udGV4dE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVIb3ZlckNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicGFibG8iLCJyYXp6bWF0YXp6Iiwic3BhbmlzaEdyZWVuIiwiaG9rZXlQb2tleSIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwiaHVycmljYW5lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJYUEsVUFBVTtlQUFWQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFFQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsaUJBQWlCO2VBQWpCQTs7SUFFQUMsZUFBZTtlQUFmQTs7SUFFQUMsb0JBQW9CO2VBQXBCQTs7SUFFQUMsdUJBQXVCO2VBQXZCQTs7SUFFQUMsNEJBQTRCO2VBQTVCQTs7SUFFQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsd0JBQXdCO2VBQXhCQTs7SUFFQUMsMkJBQTJCO2VBQTNCQTs7SUFFQUMsZ0NBQWdDO2VBQWhDQTs7O3VCQWhDOEY7QUFFcEcsSUFBTWYsYUFBYWdCLGtCQUFTO0FBRTVCLElBQU1mLGdCQUFnQmdCLGNBQUs7QUFFM0IsSUFBTWYsZ0JBQWdCZ0IsY0FBSztBQUUzQixJQUFNZixnQkFBZ0JnQixtQkFBVTtBQUVoQyxJQUFNZixpQkFBaUJhLGNBQUs7QUFFNUIsSUFBTVosaUJBQWlCZSxxQkFBWTtBQUVuQyxJQUFNZCxzQkFBc0JlLG1CQUFVO0FBRXRDLElBQU1kLG9CQUFvQlMsa0JBQVM7QUFFbkMsSUFBTVIsa0JBQWtCYyxpQkFBUTtBQUVoQyxJQUFNYix1QkFBdUJjLGVBQU07QUFFbkMsSUFBTWIsMEJBQTBCUSxjQUFLO0FBRXJDLElBQU1QLCtCQUErQmEsa0JBQVM7QUFFOUMsSUFBTVosc0JBQXNCVSxpQkFBUTtBQUVwQyxJQUFNVCwyQkFBMkJVLGVBQU07QUFFdkMsSUFBTVQsOEJBQThCSSxjQUFLO0FBRXpDLElBQU1ILG1DQUFtQ1Msa0JBQVMifQ==