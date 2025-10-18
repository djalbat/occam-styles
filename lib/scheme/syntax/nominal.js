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
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzb3JyZWxsLCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6LCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHN0dWZmQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xDb2xvdXIgPSBzb3JyZWxsO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBwcmltaXRpdmVDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZExhYmVsTmFtZUNvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyID0gcGFibG87XG4iXSwibmFtZXMiOlsiY29udGV4dENvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwia2V5d29yZENvbG91ciIsImxhYmVsTmFtZUNvbG91ciIsImxhYmVsTmFtZUhvdmVyQ29sb3VyIiwibWV0YVR5cGVDb2xvdXIiLCJuYW1lQ29sb3VyIiwicHJpbWl0aXZlQ29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJzdHVmZkNvbG91ciIsInN5bWJvbENvbG91ciIsInR5cGVDb2xvdXIiLCJzcHJpbmdXb29kIiwiY2FkZXRCbHVlIiwicGFibG8iLCJzb3JyZWxsIiwic3VzaGkiLCJyYXp6bWF0YXp6Iiwic3ljYW1vcmUiLCJjZWxlcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdCYUE7ZUFBQUE7O1FBY0FDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFsQkFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFJQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQUlBQztlQUFBQTs7UUFJQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQUpBQztlQUFBQTs7O3VCQUo4RTtBQUVwRixJQUFNUCxhQUFhUSxtQkFBVTtBQUU3QixJQUFNRCxhQUFhRSxrQkFBUztBQUU1QixJQUFNSixjQUFjSyxjQUFLO0FBRXpCLElBQU1KLGVBQWVLLGdCQUFPO0FBRTVCLElBQU1QLGdCQUFnQlEsY0FBSztBQUUzQixJQUFNaEIsZ0JBQWdCaUIsbUJBQVU7QUFFaEMsSUFBTXBCLGdCQUFnQmdCLGtCQUFTO0FBRS9CLElBQU1WLGlCQUFpQlUsa0JBQVM7QUFFaEMsSUFBTVIsa0JBQWtCVyxjQUFLO0FBRTdCLElBQU1mLGtCQUFrQmlCLGlCQUFRO0FBRWhDLElBQU1aLHNCQUFzQlksaUJBQVE7QUFFcEMsSUFBTWhCLHVCQUF1QmlCLGVBQU07QUFFbkMsSUFBTVosMkJBQTJCWSxlQUFNO0FBRXZDLElBQU1yQiwwQkFBMEJnQixjQUFLO0FBRXJDLElBQU1mLDhCQUE4QmUsY0FBSyJ9