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
    instructionColour: function() {
        return instructionColour;
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
var primitiveColour = _colours.razzmatazz;
var expressionColour = _colours.hokeyPokey;
var instructionColour = _colours.sycamore;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenosIGhva2V5UG9rZXkgfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHNwZWNpYWxDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IGtleXdvcmRDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHByaW1pdGl2ZUNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBleHByZXNzaW9uQ29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IGluc3RydWN0aW9uQ29sb3VyID0gc3ljYW1vcmU7XG4iXSwibmFtZXMiOlsiZXhwcmVzc2lvbkNvbG91ciIsImluc3RydWN0aW9uQ29sb3VyIiwia2V5d29yZENvbG91ciIsIm9wZXJhdG9yQ29sb3VyIiwicHJpbWl0aXZlQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInR5cGVDb2xvdXIiLCJjYWRldEJsdWUiLCJzdXNoaSIsInJhenptYXRhenoiLCJob2tleVBva2V5Iiwic3ljYW1vcmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNhQSxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxpQkFBaUI7ZUFBakJBOztJQVJBQyxhQUFhO2VBQWJBOztJQUVBQyxjQUFjO2VBQWRBOztJQUVBQyxlQUFlO2VBQWZBOztJQU5BQyxhQUFhO2VBQWJBOztJQUZBQyxVQUFVO2VBQVZBOzs7dUJBRnNEO0FBRTVELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1GLGdCQUFnQkcsY0FBSztBQUUzQixJQUFNTixnQkFBZ0JPLG1CQUFVO0FBRWhDLElBQU1OLGlCQUFpQkssY0FBSztBQUU1QixJQUFNSixrQkFBa0JLLG1CQUFVO0FBRWxDLElBQU1ULG1CQUFtQlUsbUJBQVU7QUFFbkMsSUFBTVQsb0JBQW9CVSxpQkFBUSJ9