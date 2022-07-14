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
    stringLiteralColour: function() {
        return stringLiteralColour;
    },
    dependencyColour: function() {
        return dependencyColour;
    },
    dependencyHoverColour: function() {
        return dependencyHoverColour;
    },
    faultyDependencyColour: function() {
        return faultyDependencyColour;
    },
    faultyDependencyHoverColour: function() {
        return faultyDependencyHoverColour;
    },
    disabledDependencyColour: function() {
        return disabledDependencyColour;
    },
    disabledDependencyHoverColour: function() {
        return disabledDependencyHoverColour;
    },
    repositoryColour: function() {
        return repositoryColour;
    }
});
var _colours = require("../../colours");
var stringLiteralColour = _colours.hokeyPokey;
var dependencyColour = _colours.hokeyPokey;
var dependencyHoverColour = _colours.portica;
var faultyDependencyColour = _colours.terracotta;
var faultyDependencyHoverColour = _colours.flamingo;
var disabledDependencyColour = _colours.pablo;
var disabledDependencyHoverColour = _colours.hurricane;
var repositoryColour = _colours.hokeyPokey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L21ldGFKU09OLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBob2tleVBva2V5LCBwb3J0aWNhLCB0ZXJyYWNvdHRhLCBwYWJsbywgZmxhbWluZ28sIGh1cnJpY2FuZSB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsQ29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IGRlcGVuZGVuY3lDb2xvdXIgPSBob2tleVBva2V5O1xuXG5leHBvcnQgY29uc3QgZGVwZW5kZW5jeUhvdmVyQ29sb3VyID0gcG9ydGljYTtcblxuZXhwb3J0IGNvbnN0IGZhdWx0eURlcGVuZGVuY3lDb2xvdXIgPSB0ZXJyYWNvdHRhO1xuXG5leHBvcnQgY29uc3QgZmF1bHR5RGVwZW5kZW5jeUhvdmVyQ29sb3VyID0gZmxhbWluZ287XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZERlcGVuZGVuY3lDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkRGVwZW5kZW5jeUhvdmVyQ29sb3VyID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgcmVwb3NpdG9yeUNvbG91ciA9IGhva2V5UG9rZXk7XG4iXSwibmFtZXMiOlsic3RyaW5nTGl0ZXJhbENvbG91ciIsImRlcGVuZGVuY3lDb2xvdXIiLCJkZXBlbmRlbmN5SG92ZXJDb2xvdXIiLCJmYXVsdHlEZXBlbmRlbmN5Q29sb3VyIiwiZmF1bHR5RGVwZW5kZW5jeUhvdmVyQ29sb3VyIiwiZGlzYWJsZWREZXBlbmRlbmN5Q29sb3VyIiwiZGlzYWJsZWREZXBlbmRlbmN5SG92ZXJDb2xvdXIiLCJyZXBvc2l0b3J5Q29sb3VyIiwiaG9rZXlQb2tleSIsInBvcnRpY2EiLCJ0ZXJyYWNvdHRhIiwiZmxhbWluZ28iLCJwYWJsbyIsImh1cnJpY2FuZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUlBQSxtQkFBbUI7ZUFBbkJBLG1CQUFtQjs7SUFFbkJDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUVoQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBRXJCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFFdEJDLDJCQUEyQjtlQUEzQkEsMkJBQTJCOztJQUUzQkMsd0JBQXdCO2VBQXhCQSx3QkFBd0I7O0lBRXhCQyw2QkFBNkI7ZUFBN0JBLDZCQUE2Qjs7SUFFN0JDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOzs7dUJBaEIrQyxlQUFlO0FBRXBGLElBQU1QLG1CQUFtQixHQUFHUSxRQUFVLFdBQUEsQUFBQztBQUV2QyxJQUFNUCxnQkFBZ0IsR0FBR08sUUFBVSxXQUFBLEFBQUM7QUFFcEMsSUFBTU4scUJBQXFCLEdBQUdPLFFBQU8sUUFBQSxBQUFDO0FBRXRDLElBQU1OLHNCQUFzQixHQUFHTyxRQUFVLFdBQUEsQUFBQztBQUUxQyxJQUFNTiwyQkFBMkIsR0FBR08sUUFBUSxTQUFBLEFBQUM7QUFFN0MsSUFBTU4sd0JBQXdCLEdBQUdPLFFBQUssTUFBQSxBQUFDO0FBRXZDLElBQU1OLDZCQUE2QixHQUFHTyxRQUFTLFVBQUEsQUFBQztBQUVoRCxJQUFNTixnQkFBZ0IsR0FBR0MsUUFBVSxXQUFBLEFBQUMifQ==