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
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var contextColour = _colours.cadetBlue;
var metaTypeColour = _colours.cadetBlue;
var labelColour = _colours.sycamore;
var labelHoverColour = _colours.celery;
var disabledLabelColour = _colours.pablo;
var referenceColour = _colours.sycamore;
var referenceHoverColour = _colours.celery;
var disabledReferenceColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6IH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBicmFja2V0Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbENvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZUNvbG91ciA9IHBhYmxvO1xuIl0sIm5hbWVzIjpbImJyYWNrZXRDb2xvdXIiLCJjb250ZXh0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbENvbG91ciIsImRpc2FibGVkUmVmZXJlbmNlQ29sb3VyIiwia2V5d29yZENvbG91ciIsImxhYmVsQ29sb3VyIiwibGFiZWxIb3ZlckNvbG91ciIsIm1ldGFUeXBlQ29sb3VyIiwib3BlcmF0b3JDb2xvdXIiLCJyZWZlcmVuY2VDb2xvdXIiLCJyZWZlcmVuY2VIb3ZlckNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwic3VzaGkiLCJyYXp6bWF0YXp6Iiwic3ljYW1vcmUiLCJjZWxlcnkiLCJwYWJsbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLGFBQWE7ZUFBYkE7O0lBUUFDLGFBQWE7ZUFBYkE7O0lBUUFDLG1CQUFtQjtlQUFuQkE7O0lBTUFDLHVCQUF1QjtlQUF2QkE7O0lBbEJBQyxhQUFhO2VBQWJBOztJQVFBQyxXQUFXO2VBQVhBOztJQUVBQyxnQkFBZ0I7ZUFBaEJBOztJQUpBQyxjQUFjO2VBQWRBOztJQUpBQyxjQUFjO2VBQWRBOztJQVlBQyxlQUFlO2VBQWZBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQWxCQUMsYUFBYTtlQUFiQTs7SUFKQUMsVUFBVTtlQUFWQTs7O3VCQUZ5RDtBQUUvRCxJQUFNQSxhQUFhQyxrQkFBUztBQUU1QixJQUFNYixnQkFBZ0JjLGNBQUs7QUFFM0IsSUFBTUgsZ0JBQWdCRyxjQUFLO0FBRTNCLElBQU1WLGdCQUFnQlcsbUJBQVU7QUFFaEMsSUFBTVAsaUJBQWlCTSxjQUFLO0FBRTVCLElBQU1iLGdCQUFnQlksa0JBQVM7QUFFL0IsSUFBTU4saUJBQWlCTSxrQkFBUztBQUVoQyxJQUFNUixjQUFjVyxpQkFBUTtBQUU1QixJQUFNVixtQkFBbUJXLGVBQU07QUFFL0IsSUFBTWYsc0JBQXNCZ0IsY0FBSztBQUVqQyxJQUFNVCxrQkFBa0JPLGlCQUFRO0FBRWhDLElBQU1OLHVCQUF1Qk8sZUFBTTtBQUVuQyxJQUFNZCwwQkFBMEJlLGNBQUsifQ==