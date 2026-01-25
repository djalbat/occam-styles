"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get bracketColour () {
        return bracketColour;
    },
    get disabledLabelNameColour () {
        return disabledLabelNameColour;
    },
    get disabledReferenceNameColour () {
        return disabledReferenceNameColour;
    },
    get keywordColour () {
        return keywordColour;
    },
    get labelNameColour () {
        return labelNameColour;
    },
    get labelNameHoverColour () {
        return labelNameHoverColour;
    },
    get operatorColour () {
        return operatorColour;
    },
    get primitiveColour () {
        return primitiveColour;
    },
    get queryColour () {
        return queryColour;
    },
    get referenceNameColour () {
        return referenceNameColour;
    },
    get referenceNameHoverColour () {
        return referenceNameHoverColour;
    },
    get specialColour () {
        return specialColour;
    },
    get symbolColour () {
        return symbolColour;
    },
    get typeColour () {
        return typeColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var queryColour = _colours.sushi;
var symbolColour = _colours.sushi;
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var primitiveColour = _colours.razzmatazz;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHBhYmxvLCBjZWxlcnksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenogfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGJyYWNrZXRDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHByaW1pdGl2ZUNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuIl0sIm5hbWVzIjpbImJyYWNrZXRDb2xvdXIiLCJkaXNhYmxlZExhYmVsTmFtZUNvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbE5hbWVDb2xvdXIiLCJsYWJlbE5hbWVIb3ZlckNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwicHJpbWl0aXZlQ29sb3VyIiwicXVlcnlDb2xvdXIiLCJyZWZlcmVuY2VOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInN5bWJvbENvbG91ciIsInR5cGVDb2xvdXIiLCJjYWRldEJsdWUiLCJzdXNoaSIsInJhenptYXRhenoiLCJzeWNhbW9yZSIsImNlbGVyeSIsInBhYmxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFVYUE7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBWkFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOzs7dUJBRnlEO0FBRS9ELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1OLGNBQWNPLGNBQUs7QUFFekIsSUFBTUgsZUFBZUcsY0FBSztBQUUxQixJQUFNZixnQkFBZ0JlLGNBQUs7QUFFM0IsSUFBTUosZ0JBQWdCSSxjQUFLO0FBRTNCLElBQU1aLGdCQUFnQmEsbUJBQVU7QUFFaEMsSUFBTVYsaUJBQWlCUyxjQUFLO0FBRTVCLElBQU1SLGtCQUFrQlMsbUJBQVU7QUFFbEMsSUFBTVosa0JBQWtCYSxpQkFBUTtBQUVoQyxJQUFNUixzQkFBc0JRLGlCQUFRO0FBRXBDLElBQU1aLHVCQUF1QmEsZUFBTTtBQUVuQyxJQUFNUiwyQkFBMkJRLGVBQU07QUFFdkMsSUFBTWpCLDBCQUEwQmtCLGNBQUs7QUFFckMsSUFBTWpCLDhCQUE4QmlCLGNBQUsifQ==