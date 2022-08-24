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
    borderColour: function() {
        return borderColour;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    gutterBorderColour: function() {
        return gutterBorderColour;
    },
    caretBackgroundColour: function() {
        return caretBackgroundColour;
    },
    gutterBackgroundColour: function() {
        return gutterBackgroundColour;
    },
    foldsLineBackgroundColour: function() {
        return foldsLineBackgroundColour;
    },
    selectionBackgroundColour: function() {
        return selectionBackgroundColour;
    },
    otherSelectionsBackgroundColour: function() {
        return otherSelectionsBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var borderColour = _common.commonBorderColour; ///
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var gutterBorderColour = _colours.stormDust;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var foldsLineBackgroundColour = _colours.stormDust;
var selectionBackgroundColour = _colours.korma;
var otherSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    borderColour: borderColour,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    gutterBorderColour: gutterBorderColour,
    caretBackgroundColour: caretBackgroundColour,
    gutterBackgroundColour: gutterBackgroundColour,
    foldsLineBackgroundColour: foldsLineBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    otherSelectionsBackgroundColour: otherSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCBlbXBlcm9yLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCBibGFja09saXZlLCB3b29kc21va2UgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBvdGhlclNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYm9yZGVyQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyc0NvbG91cixcbiAgZ3V0dGVyQm9yZGVyQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIG90aGVyU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsImxpbmVOdW1iZXJzQ29sb3VyIiwiZ3V0dGVyQm9yZGVyQ29sb3VyIiwiY2FyZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZ3V0dGVyQmFja2dyb3VuZENvbG91ciIsImZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwib3RoZXJTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsIndvb2RzbW9rZSIsInN0b3JtRHVzdCIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQU1BQSxZQUFZO2VBQVpBLFlBQVk7O0lBRVpDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUVoQkMsaUJBQWlCO2VBQWpCQSxpQkFBaUI7O0lBRWpCQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFFbEJDLHFCQUFxQjtlQUFyQkEscUJBQXFCOztJQUVyQkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBRXRCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFFekJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMsK0JBQStCO2VBQS9CQSwrQkFBK0I7O0lBRTVDLE9BVUU7ZUFWRixRQVVFOzs7c0JBaENpQyxVQUFVO3VCQUV1QyxZQUFZO0FBRXpGLElBQU1SLFlBQVksR0FBR1MsT0FBa0IsbUJBQUEsQUFBQyxFQUFDLEdBQUc7QUFFNUMsSUFBTVIsZ0JBQWdCLEdBQUdTLFFBQVMsVUFBQSxBQUFDO0FBRW5DLElBQU1SLGlCQUFpQixHQUFHUyxRQUFTLFVBQUEsQUFBQztBQUVwQyxJQUFNUixrQkFBa0IsR0FBR1EsUUFBUyxVQUFBLEFBQUM7QUFFckMsSUFBTVAscUJBQXFCLEdBQUdRLFFBQU8sUUFBQSxBQUFDO0FBRXRDLElBQU1QLHNCQUFzQixHQUFHUSxRQUFVLFdBQUEsQUFBQztBQUUxQyxJQUFNUCx5QkFBeUIsR0FBR0ssUUFBUyxVQUFBLEFBQUM7QUFFNUMsSUFBTUoseUJBQXlCLEdBQUdPLFFBQUssTUFBQSxBQUFDO0FBRXhDLElBQU1OLCtCQUErQixHQUFHTyxRQUFRLFNBQUEsQUFBQztJQUV4RCxRQVVFLEdBVmE7SUFDYmYsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUNqQkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLHFCQUFxQixFQUFyQkEscUJBQXFCO0lBQ3JCQyxzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0lBQ3pCQywrQkFBK0IsRUFBL0JBLCtCQUErQjtDQUNoQyJ9