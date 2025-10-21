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
    get contextColour () {
        return contextColour;
    },
    get disabledLabelNameColour () {
        return disabledLabelNameColour;
    },
    get disabledProcedureReferenceNameColour () {
        return disabledProcedureReferenceNameColour;
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
    get metaTypeColour () {
        return metaTypeColour;
    },
    get nameColour () {
        return nameColour;
    },
    get primitiveColour () {
        return primitiveColour;
    },
    get procedureReferenceNameColour () {
        return procedureReferenceNameColour;
    },
    get procedureReferenceNameHoverColour () {
        return procedureReferenceNameHoverColour;
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
    get stuffColour () {
        return stuffColour;
    },
    get symbolColour () {
        return symbolColour;
    },
    get typeColour () {
        return typeColour;
    }
});
var _colours = require("../../colours");
var nameColour = _colours.springWood;
var typeColour = _colours.cadetBlue;
var stuffColour = _colours.pablo;
var symbolColour = _colours.sorrell;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var contextColour = _colours.cadetBlue;
var metaTypeColour = _colours.cadetBlue;
var primitiveColour = _colours.sushi;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var referenceNameHoverColour = _colours.celery;
var disabledReferenceNameColour = _colours.pablo;
var procedureReferenceNameColour = _colours.sycamore;
var procedureReferenceNameHoverColour = _colours.celery;
var disabledProcedureReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzb3JyZWxsLCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6LCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHN0dWZmQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xDb2xvdXIgPSBzb3JyZWxsO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBwcmltaXRpdmVDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBwcm9jZWR1cmVSZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFByb2NlZHVyZVJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJjb250ZXh0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZFByb2NlZHVyZVJlZmVyZW5jZU5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsIm5hbWVDb2xvdXIiLCJwcmltaXRpdmVDb2xvdXIiLCJwcm9jZWR1cmVSZWZlcmVuY2VOYW1lQ29sb3VyIiwicHJvY2VkdXJlUmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJzdHVmZkNvbG91ciIsInN5bWJvbENvbG91ciIsInR5cGVDb2xvdXIiLCJzcHJpbmdXb29kIiwiY2FkZXRCbHVlIiwicGFibG8iLCJzb3JyZWxsIiwic3VzaGkiLCJyYXp6bWF0YXp6Iiwic3ljYW1vcmUiLCJjZWxlcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdCYUE7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQVVBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBbEJBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFkQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFNQUM7ZUFBQUE7O1FBbEJBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQUpBQztlQUFBQTs7O3VCQUo4RTtBQUVwRixJQUFNVCxhQUFhVSxtQkFBVTtBQUU3QixJQUFNRCxhQUFhRSxrQkFBUztBQUU1QixJQUFNSixjQUFjSyxjQUFLO0FBRXpCLElBQU1KLGVBQWVLLGdCQUFPO0FBRTVCLElBQU1QLGdCQUFnQlEsY0FBSztBQUUzQixJQUFNbEIsZ0JBQWdCbUIsbUJBQVU7QUFFaEMsSUFBTXZCLGdCQUFnQm1CLGtCQUFTO0FBRS9CLElBQU1aLGlCQUFpQlksa0JBQVM7QUFFaEMsSUFBTVYsa0JBQWtCYSxjQUFLO0FBRTdCLElBQU1qQixrQkFBa0JtQixpQkFBUTtBQUVoQyxJQUFNWixzQkFBc0JZLGlCQUFRO0FBRXBDLElBQU1sQix1QkFBdUJtQixlQUFNO0FBRW5DLElBQU14QiwwQkFBMEJtQixjQUFLO0FBRXJDLElBQU1QLDJCQUEyQlksZUFBTTtBQUV2QyxJQUFNdEIsOEJBQThCaUIsY0FBSztBQUV6QyxJQUFNViwrQkFBK0JjLGlCQUFRO0FBRTdDLElBQU1iLG9DQUFvQ2MsZUFBTTtBQUVoRCxJQUFNdkIsdUNBQXVDa0IsY0FBSyJ9