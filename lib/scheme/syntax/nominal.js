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
    contextColour: function() {
        return contextColour;
    },
    disabledLabelColour: function() {
        return disabledLabelColour;
    },
    disabledReferenceColour: function() {
        return disabledReferenceColour;
    },
    keywordColour: function() {
        return keywordColour;
    },
    labelColour: function() {
        return labelColour;
    },
    labelHoverColour: function() {
        return labelHoverColour;
    },
    metaTypeColour: function() {
        return metaTypeColour;
    },
    operatorColour: function() {
        return operatorColour;
    },
    referenceColour: function() {
        return referenceColour;
    },
    referenceHoverColour: function() {
        return referenceHoverColour;
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
var contextColour = _colours.cadetBlue;
var metaTypeColour = _colours.gainsborough;
var labelColour = _colours.sycamore;
var labelHoverColour = _colours.celery;
var disabledLabelColour = _colours.pablo;
var referenceColour = _colours.sycamore;
var referenceHoverColour = _colours.celery;
var disabledReferenceColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6LCBnYWluc2Jvcm91Z2ggfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGNvbnRleHRDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBtZXRhVHlwZUNvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGxhYmVsQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbEhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbENvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlQ29sb3VyID0gcGFibG87XG4iXSwibmFtZXMiOlsiY29udGV4dENvbG91ciIsImRpc2FibGVkTGFiZWxDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZUNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJsYWJlbENvbG91ciIsImxhYmVsSG92ZXJDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwicmVmZXJlbmNlQ29sb3VyIiwicmVmZXJlbmNlSG92ZXJDb2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwidHlwZUNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicmF6em1hdGF6eiIsImdhaW5zYm9yb3VnaCIsInN5Y2Ftb3JlIiwiY2VsZXJ5IiwicGFibG8iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlhQSxhQUFhO2VBQWJBOztJQVFBQyxtQkFBbUI7ZUFBbkJBOztJQU1BQyx1QkFBdUI7ZUFBdkJBOztJQWxCQUMsYUFBYTtlQUFiQTs7SUFRQUMsV0FBVztlQUFYQTs7SUFFQUMsZ0JBQWdCO2VBQWhCQTs7SUFKQUMsY0FBYztlQUFkQTs7SUFKQUMsY0FBYztlQUFkQTs7SUFZQUMsZUFBZTtlQUFmQTs7SUFFQUMsb0JBQW9CO2VBQXBCQTs7SUFsQkFDLGFBQWE7ZUFBYkE7O0lBRkFDLFVBQVU7ZUFBVkE7Ozt1QkFGdUU7QUFFN0UsSUFBTUEsYUFBYUMsa0JBQVM7QUFFNUIsSUFBTUYsZ0JBQWdCRyxjQUFLO0FBRTNCLElBQU1WLGdCQUFnQlcsbUJBQVU7QUFFaEMsSUFBTVAsaUJBQWlCTSxjQUFLO0FBRTVCLElBQU1iLGdCQUFnQlksa0JBQVM7QUFFL0IsSUFBTU4saUJBQWlCUyxxQkFBWTtBQUVuQyxJQUFNWCxjQUFjWSxpQkFBUTtBQUU1QixJQUFNWCxtQkFBbUJZLGVBQU07QUFFL0IsSUFBTWhCLHNCQUFzQmlCLGNBQUs7QUFFakMsSUFBTVYsa0JBQWtCUSxpQkFBUTtBQUVoQyxJQUFNUCx1QkFBdUJRLGVBQU07QUFFbkMsSUFBTWYsMEJBQTBCZ0IsY0FBSyJ9