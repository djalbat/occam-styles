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
var specialColour = _colours.sushi;
var returnColour = _colours.razzmatazz;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var primitiveColour = _colours.razzmatazz;
var expressionColour = _colours.hokeyPokey;
var functionNameColour = _colours.sycamore;
var variableNameColour = _colours.gainsborough;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenosIGhva2V5UG9rZXksIGdhaW5zYm9yb3VnaCB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0eXBlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgcXVlcnlDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHJldHVybkNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBwcmltaXRpdmVDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgZXhwcmVzc2lvbkNvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBmdW5jdGlvbk5hbWVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IHZhcmlhYmxlTmFtZUNvbG91ciA9IGdhaW5zYm9yb3VnaDtcbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uQ29sb3VyIiwiZnVuY3Rpb25OYW1lQ29sb3VyIiwia2V5d29yZENvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwicHJpbWl0aXZlQ29sb3VyIiwicXVlcnlDb2xvdXIiLCJyZXR1cm5Db2xvdXIiLCJzcGVjaWFsQ29sb3VyIiwidHlwZUNvbG91ciIsInZhcmlhYmxlTmFtZUNvbG91ciIsImNhZGV0Qmx1ZSIsInN1c2hpIiwicmF6em1hdGF6eiIsImhva2V5UG9rZXkiLCJzeWNhbW9yZSIsImdhaW5zYm9yb3VnaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa0JhQSxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQVJBQyxhQUFhO2VBQWJBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxlQUFlO2VBQWZBOztJQVZBQyxXQUFXO2VBQVhBOztJQUlBQyxZQUFZO2VBQVpBOztJQUZBQyxhQUFhO2VBQWJBOztJQUpBQyxVQUFVO2VBQVZBOztJQWtCQUMsa0JBQWtCO2VBQWxCQTs7O3VCQXBCb0U7QUFFMUUsSUFBTUQsYUFBYUUsa0JBQVM7QUFFNUIsSUFBTUwsY0FBY00sY0FBSztBQUV6QixJQUFNSixnQkFBZ0JJLGNBQUs7QUFFM0IsSUFBTUwsZUFBZU0sbUJBQVU7QUFFL0IsSUFBTVYsZ0JBQWdCVSxtQkFBVTtBQUVoQyxJQUFNVCxpQkFBaUJRLGNBQUs7QUFFNUIsSUFBTVAsa0JBQWtCUSxtQkFBVTtBQUVsQyxJQUFNWixtQkFBbUJhLG1CQUFVO0FBRW5DLElBQU1aLHFCQUFxQmEsaUJBQVE7QUFFbkMsSUFBTUwscUJBQXFCTSxxQkFBWSJ9