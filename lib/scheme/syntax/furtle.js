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
    expressionColour: function() {
        return expressionColour;
    },
    functionNameColour: function() {
        return functionNameColour;
    },
    keywordColour: function() {
        return keywordColour;
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
    returnColour: function() {
        return returnColour;
    },
    specialColour: function() {
        return specialColour;
    },
    typeColour: function() {
        return typeColour;
    },
    variableNameColour: function() {
        return variableNameColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var queryColour = _colours.sushi;
var returnColour = _colours.razzmatazz;
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var primitiveColour = _colours.razzmatazz;
var expressionColour = _colours.hokeyPokey;
var functionNameColour = _colours.sycamore;
var variableNameColour = _colours.gainsborough;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenosIGhva2V5UG9rZXksIGdhaW5zYm9yb3VnaCB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgcXVlcnlDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHJldHVybkNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBicmFja2V0Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBwcmltaXRpdmVDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgZXhwcmVzc2lvbkNvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBmdW5jdGlvbk5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHZhcmlhYmxlTmFtZUNvbG91ciA9IGdhaW5zYm9yb3VnaDtcbiJdLCJuYW1lcyI6WyJicmFja2V0Q29sb3VyIiwiZXhwcmVzc2lvbkNvbG91ciIsImZ1bmN0aW9uTmFtZUNvbG91ciIsImtleXdvcmRDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsInByaW1pdGl2ZUNvbG91ciIsInF1ZXJ5Q29sb3VyIiwicmV0dXJuQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInR5cGVDb2xvdXIiLCJ2YXJpYWJsZU5hbWVDb2xvdXIiLCJjYWRldEJsdWUiLCJzdXNoaSIsInJhenptYXRhenoiLCJob2tleVBva2V5Iiwic3ljYW1vcmUiLCJnYWluc2Jvcm91Z2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVVhQSxhQUFhO2VBQWJBOztJQVVBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQVJBQyxhQUFhO2VBQWJBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxlQUFlO2VBQWZBOztJQVpBQyxXQUFXO2VBQVhBOztJQUVBQyxZQUFZO2VBQVpBOztJQUlBQyxhQUFhO2VBQWJBOztJQVJBQyxVQUFVO2VBQVZBOztJQW9CQUMsa0JBQWtCO2VBQWxCQTs7O3VCQXRCb0U7QUFFMUUsSUFBTUQsYUFBYUUsa0JBQVM7QUFFNUIsSUFBTUwsY0FBY00sY0FBSztBQUV6QixJQUFNTCxlQUFlTSxtQkFBVTtBQUUvQixJQUFNYixnQkFBZ0JZLGNBQUs7QUFFM0IsSUFBTUosZ0JBQWdCSSxjQUFLO0FBRTNCLElBQU1ULGdCQUFnQlUsbUJBQVU7QUFFaEMsSUFBTVQsaUJBQWlCUSxjQUFLO0FBRTVCLElBQU1QLGtCQUFrQlEsbUJBQVU7QUFFbEMsSUFBTVosbUJBQW1CYSxtQkFBVTtBQUVuQyxJQUFNWixxQkFBcUJhLGlCQUFRO0FBRW5DLElBQU1MLHFCQUFxQk0scUJBQVkifQ==