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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Zsb3JlbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdXNoaSwgcGFibG8sIHJhenptYXRhenosIGhva2V5UG9rZXksIGNhZGV0Qmx1ZSwgc3ljYW1vcmUsIGNlbGVyeSwgdGVycmFjb3R0YSwgZmxhbWluZ28sIGh1cnJpY2FuZSB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgcmVzZXJ2ZWRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0TmFtZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlMYWJlbE5hbWVDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5TGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZmF1bHR5UmVmZXJlbmNlTmFtZUNvbG91ciA9IHRlcnJhY290dGE7XG5cbmV4cG9ydCBjb25zdCBmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBmbGFtaW5nbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBodXJyaWNhbmU7XG4iXSwibmFtZXMiOlsidHlwZUNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwic3BlY2lhbENvbG91ciIsImNvbW1lbnRDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwicmVzZXJ2ZWRDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwiY29udGV4dE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUNvbG91ciIsImZhdWx0eUxhYmVsTmFtZUhvdmVyQ29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUhvdmVyQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImZhdWx0eVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJmYXVsdHlSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicGFibG8iLCJyYXp6bWF0YXp6IiwiaG9rZXlQb2tleSIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwidGVycmFjb3R0YSIsImZsYW1pbmdvIiwiaHVycmljYW5lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJYUEsVUFBVTtlQUFWQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsYUFBYTtlQUFiQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFFQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsaUJBQWlCO2VBQWpCQTs7SUFFQUMsZUFBZTtlQUFmQTs7SUFFQUMsb0JBQW9CO2VBQXBCQTs7SUFFQUMscUJBQXFCO2VBQXJCQTs7SUFFQUMsMEJBQTBCO2VBQTFCQTs7SUFFQUMsdUJBQXVCO2VBQXZCQTs7SUFFQUMsNEJBQTRCO2VBQTVCQTs7SUFFQUMsbUJBQW1CO2VBQW5CQTs7SUFFQUMsd0JBQXdCO2VBQXhCQTs7SUFFQUMseUJBQXlCO2VBQXpCQTs7SUFFQUMsOEJBQThCO2VBQTlCQTs7SUFFQUMsMkJBQTJCO2VBQTNCQTs7SUFFQUMsZ0NBQWdDO2VBQWhDQTs7O3VCQXhDc0c7QUFFNUcsSUFBTW5CLGFBQWFvQixrQkFBUztBQUU1QixJQUFNbkIsaUJBQWlCb0IsY0FBSztBQUU1QixJQUFNbkIsZ0JBQWdCbUIsY0FBSztBQUUzQixJQUFNbEIsZ0JBQWdCbUIsY0FBSztBQUUzQixJQUFNbEIsZ0JBQWdCbUIsbUJBQVU7QUFFaEMsSUFBTWxCLGlCQUFpQmtCLG1CQUFVO0FBRWpDLElBQU1qQixzQkFBc0JrQixtQkFBVTtBQUV0QyxJQUFNakIsb0JBQW9CYSxrQkFBUztBQUVuQyxJQUFNWixrQkFBa0JpQixpQkFBUTtBQUVoQyxJQUFNaEIsdUJBQXVCaUIsZUFBTTtBQUVuQyxJQUFNaEIsd0JBQXdCaUIsbUJBQVU7QUFFeEMsSUFBTWhCLDZCQUE2QmlCLGlCQUFRO0FBRTNDLElBQU1oQiwwQkFBMEJVLGNBQUs7QUFFckMsSUFBTVQsK0JBQStCZ0Isa0JBQVM7QUFFOUMsSUFBTWYsc0JBQXNCVyxpQkFBUTtBQUVwQyxJQUFNViwyQkFBMkJXLGVBQU07QUFFdkMsSUFBTVYsNEJBQTRCVyxtQkFBVTtBQUU1QyxJQUFNVixpQ0FBaUNXLGlCQUFRO0FBRS9DLElBQU1WLDhCQUE4QkksY0FBSztBQUV6QyxJQUFNSCxtQ0FBbUNVLGtCQUFTIn0=