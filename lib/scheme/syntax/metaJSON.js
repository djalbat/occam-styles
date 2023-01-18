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
    repositoryColour: function() {
        return repositoryColour;
    },
    dependencyColour: function() {
        return dependencyColour;
    },
    stringLiteralColour: function() {
        return stringLiteralColour;
    },
    dependencyHoverColour: function() {
        return dependencyHoverColour;
    },
    faultyDependencyColour: function() {
        return faultyDependencyColour;
    },
    disabledDependencyColour: function() {
        return disabledDependencyColour;
    }
});
var _colours = require("../../colours");
var repositoryColour = _colours.hokeyPokey;
var dependencyColour = _colours.hokeyPokey;
var stringLiteralColour = _colours.hokeyPokey;
var dependencyHoverColour = _colours.portica;
var faultyDependencyColour = _colours.terracotta;
var disabledDependencyColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L21ldGFKU09OLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYWJsbywgcG9ydGljYSwgaG9rZXlQb2tleSwgdGVycmFjb3R0YSB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCByZXBvc2l0b3J5Q29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVuY3lDb2xvdXIgPSBob2tleVBva2V5O1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nTGl0ZXJhbENvbG91ciA9IGhva2V5UG9rZXk7XG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbmN5SG92ZXJDb2xvdXIgPSBwb3J0aWNhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5RGVwZW5kZW5jeUNvbG91ciA9IHRlcnJhY290dGE7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZERlcGVuZGVuY3lDb2xvdXIgPSBwYWJsbztcblxuIl0sIm5hbWVzIjpbInJlcG9zaXRvcnlDb2xvdXIiLCJkZXBlbmRlbmN5Q29sb3VyIiwic3RyaW5nTGl0ZXJhbENvbG91ciIsImRlcGVuZGVuY3lIb3ZlckNvbG91ciIsImZhdWx0eURlcGVuZGVuY3lDb2xvdXIiLCJkaXNhYmxlZERlcGVuZGVuY3lDb2xvdXIiLCJob2tleVBva2V5IiwicG9ydGljYSIsInRlcnJhY290dGEiLCJwYWJsbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWFBLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLHFCQUFxQjtlQUFyQkE7O0lBRUFDLHNCQUFzQjtlQUF0QkE7O0lBRUFDLHdCQUF3QjtlQUF4QkE7Ozt1QkFaMEM7QUFFaEQsSUFBTUwsbUJBQW1CTSxtQkFBVTtBQUVuQyxJQUFNTCxtQkFBbUJLLG1CQUFVO0FBRW5DLElBQU1KLHNCQUFzQkksbUJBQVU7QUFFdEMsSUFBTUgsd0JBQXdCSSxnQkFBTztBQUVyQyxJQUFNSCx5QkFBeUJJLG1CQUFVO0FBRXpDLElBQU1ILDJCQUEyQkksY0FBSyJ9