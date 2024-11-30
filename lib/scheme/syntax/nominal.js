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
var metaTypeColour = _colours.cadetBlue;
var labelColour = _colours.sycamore;
var labelHoverColour = _colours.celery;
var disabledLabelColour = _colours.pablo;
var referenceColour = _colours.sycamore;
var referenceHoverColour = _colours.celery;
var disabledReferenceColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6IH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbENvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgbGFiZWxIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZUNvbG91ciA9IHN5Y2Ftb3JlO1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlSG92ZXJDb2xvdXIgPSBjZWxlcnk7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZUNvbG91ciA9IHBhYmxvO1xuIl0sIm5hbWVzIjpbImNvbnRleHRDb2xvdXIiLCJkaXNhYmxlZExhYmVsQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxDb2xvdXIiLCJsYWJlbEhvdmVyQ29sb3VyIiwibWV0YVR5cGVDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsInJlZmVyZW5jZUNvbG91ciIsInJlZmVyZW5jZUhvdmVyQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInR5cGVDb2xvdXIiLCJjYWRldEJsdWUiLCJzdXNoaSIsInJhenptYXRhenoiLCJzeWNhbW9yZSIsImNlbGVyeSIsInBhYmxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZYUEsYUFBYTtlQUFiQTs7SUFRQUMsbUJBQW1CO2VBQW5CQTs7SUFNQUMsdUJBQXVCO2VBQXZCQTs7SUFsQkFDLGFBQWE7ZUFBYkE7O0lBUUFDLFdBQVc7ZUFBWEE7O0lBRUFDLGdCQUFnQjtlQUFoQkE7O0lBSkFDLGNBQWM7ZUFBZEE7O0lBSkFDLGNBQWM7ZUFBZEE7O0lBWUFDLGVBQWU7ZUFBZkE7O0lBRUFDLG9CQUFvQjtlQUFwQkE7O0lBbEJBQyxhQUFhO2VBQWJBOztJQUZBQyxVQUFVO2VBQVZBOzs7dUJBRnlEO0FBRS9ELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1GLGdCQUFnQkcsY0FBSztBQUUzQixJQUFNVixnQkFBZ0JXLG1CQUFVO0FBRWhDLElBQU1QLGlCQUFpQk0sY0FBSztBQUU1QixJQUFNYixnQkFBZ0JZLGtCQUFTO0FBRS9CLElBQU1OLGlCQUFpQk0sa0JBQVM7QUFFaEMsSUFBTVIsY0FBY1csaUJBQVE7QUFFNUIsSUFBTVYsbUJBQW1CVyxlQUFNO0FBRS9CLElBQU1mLHNCQUFzQmdCLGNBQUs7QUFFakMsSUFBTVQsa0JBQWtCTyxpQkFBUTtBQUVoQyxJQUFNTix1QkFBdUJPLGVBQU07QUFFbkMsSUFBTWQsMEJBQTBCZSxjQUFLIn0=