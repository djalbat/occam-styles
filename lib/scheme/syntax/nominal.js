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
    disabledLabelNameColour: function() {
        return disabledLabelNameColour;
    },
    disabledReferenceNameColour: function() {
        return disabledReferenceNameColour;
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
    metaTypeColour: function() {
        return metaTypeColour;
    },
    nameColour: function() {
        return nameColour;
    },
    referenceNameColour: function() {
        return referenceNameColour;
    },
    referenceNameHoverColour: function() {
        return referenceNameHoverColour;
    },
    specialColour: function() {
        return specialColour;
    },
    stuffColour: function() {
        return stuffColour;
    },
    symbolColour: function() {
        return symbolColour;
    },
    typeColour: function() {
        return typeColour;
    }
});
var _colours = require("../../colours");
var nameColour = _colours.springWood;
var typeColour = _colours.cadetBlue;
var stuffColour = _colours.pablo;
var symbolColour = _colours.sorrell;
var specialColour = _colours.sushi;
var bracketColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var contextColour = _colours.cadetBlue;
var metaTypeColour = _colours.cadetBlue;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHN1c2hpLCBwYWJsbywgY2VsZXJ5LCBzb3JyZWxsLCBzeWNhbW9yZSwgY2FkZXRCbHVlLCByYXp6bWF0YXp6LCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IG5hbWVDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHN0dWZmQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xDb2xvdXIgPSBzb3JyZWxsO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qga2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0Q29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgbWV0YVR5cGVDb2xvdXIgPSBjYWRldEJsdWU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkUmVmZXJlbmNlTmFtZUNvbG91ciA9IHBhYmxvO1xuIl0sIm5hbWVzIjpbImJyYWNrZXRDb2xvdXIiLCJjb250ZXh0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJtZXRhVHlwZUNvbG91ciIsIm5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lQ29sb3VyIiwicmVmZXJlbmNlTmFtZUhvdmVyQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInN0dWZmQ29sb3VyIiwic3ltYm9sQ29sb3VyIiwidHlwZUNvbG91ciIsInNwcmluZ1dvb2QiLCJjYWRldEJsdWUiLCJwYWJsbyIsInNvcnJlbGwiLCJzdXNoaSIsInJhenptYXRhenoiLCJzeWNhbW9yZSIsImNlbGVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2FBLGFBQWE7ZUFBYkE7O0lBSUFDLGFBQWE7ZUFBYkE7O0lBWUFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBaEJBQyxhQUFhO2VBQWJBOztJQU1BQyxlQUFlO2VBQWZBOztJQUlBQyxvQkFBb0I7ZUFBcEJBOztJQU5BQyxjQUFjO2VBQWRBOztJQWhCQUMsVUFBVTtlQUFWQTs7SUFvQkFDLG1CQUFtQjtlQUFuQkE7O0lBSUFDLHdCQUF3QjtlQUF4QkE7O0lBaEJBQyxhQUFhO2VBQWJBOztJQUpBQyxXQUFXO2VBQVhBOztJQUVBQyxZQUFZO2VBQVpBOztJQUpBQyxVQUFVO2VBQVZBOzs7dUJBSjhFO0FBRXBGLElBQU1OLGFBQWFPLG1CQUFVO0FBRTdCLElBQU1ELGFBQWFFLGtCQUFTO0FBRTVCLElBQU1KLGNBQWNLLGNBQUs7QUFFekIsSUFBTUosZUFBZUssZ0JBQU87QUFFNUIsSUFBTVAsZ0JBQWdCUSxjQUFLO0FBRTNCLElBQU1uQixnQkFBZ0JtQixjQUFLO0FBRTNCLElBQU1mLGdCQUFnQmdCLG1CQUFVO0FBRWhDLElBQU1uQixnQkFBZ0JlLGtCQUFTO0FBRS9CLElBQU1ULGlCQUFpQlMsa0JBQVM7QUFFaEMsSUFBTVgsa0JBQWtCZ0IsaUJBQVE7QUFFaEMsSUFBTVosc0JBQXNCWSxpQkFBUTtBQUVwQyxJQUFNZix1QkFBdUJnQixlQUFNO0FBRW5DLElBQU1aLDJCQUEyQlksZUFBTTtBQUV2QyxJQUFNcEIsMEJBQTBCZSxjQUFLO0FBRXJDLElBQU1kLDhCQUE4QmMsY0FBSyJ9