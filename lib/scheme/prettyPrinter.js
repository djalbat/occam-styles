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
    scrollbarBackgroundColour: function() {
        return scrollbarBackgroundColour;
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
var scrollbarBackgroundColour = _colours.emperor;
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
    scrollbarBackgroundColour: scrollbarBackgroundColour,
    otherSelectionsBackgroundColour: otherSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCBlbXBlcm9yLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCBibGFja09saXZlLCB3b29kc21va2UgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJCYWNrZ3JvdW5kQ29sb3VyID0gZW1wZXJvcjtcblxuZXhwb3J0IGNvbnN0IG90aGVyU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBib3JkZXJDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBndXR0ZXJCb3JkZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgZm9sZHNMaW5lQmFja2dyb3VuZENvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyQmFja2dyb3VuZENvbG91cixcbiAgb3RoZXJTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwiZm9sZHNMaW5lQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJCYWNrZ3JvdW5kQ29sb3VyIiwib3RoZXJTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsIndvb2RzbW9rZSIsInN0b3JtRHVzdCIsImJvbmpvdXIiLCJibGFja09saXZlIiwia29ybWEiLCJlbXBlcm9yIiwibG9nQ2FiaW4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFNQUEsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxnQkFBZ0I7ZUFBaEJBLGdCQUFnQjs7SUFFaEJDLGlCQUFpQjtlQUFqQkEsaUJBQWlCOztJQUVqQkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBRWxCQyxxQkFBcUI7ZUFBckJBLHFCQUFxQjs7SUFFckJDLHNCQUFzQjtlQUF0QkEsc0JBQXNCOztJQUV0QkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXpCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFFekJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMsK0JBQStCO2VBQS9CQSwrQkFBK0I7O0lBRTVDLE9BV0U7ZUFYRixRQVdFOzs7c0JBbkNpQyxVQUFVO3VCQUV1QyxZQUFZO0FBRXpGLElBQU1ULFlBQVksR0FBR1UsT0FBa0IsbUJBQUEsQUFBQyxFQUFDLEdBQUc7QUFFNUMsSUFBTVQsZ0JBQWdCLEdBQUdVLFFBQVMsVUFBQSxBQUFDO0FBRW5DLElBQU1ULGlCQUFpQixHQUFHVSxRQUFTLFVBQUEsQUFBQztBQUVwQyxJQUFNVCxrQkFBa0IsR0FBR1MsUUFBUyxVQUFBLEFBQUM7QUFFckMsSUFBTVIscUJBQXFCLEdBQUdTLFFBQU8sUUFBQSxBQUFDO0FBRXRDLElBQU1SLHNCQUFzQixHQUFHUyxRQUFVLFdBQUEsQUFBQztBQUUxQyxJQUFNUix5QkFBeUIsR0FBR00sUUFBUyxVQUFBLEFBQUM7QUFFNUMsSUFBTUwseUJBQXlCLEdBQUdRLFFBQUssTUFBQSxBQUFDO0FBRXhDLElBQU1QLHlCQUF5QixHQUFHUSxRQUFPLFFBQUEsQUFBQztBQUUxQyxJQUFNUCwrQkFBK0IsR0FBR1EsUUFBUSxTQUFBLEFBQUM7SUFFeEQsUUFXRSxHQVhhO0lBQ2JqQixZQUFZLEVBQVpBLFlBQVk7SUFDWkMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEJDLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtJQUNsQkMscUJBQXFCLEVBQXJCQSxxQkFBcUI7SUFDckJDLHNCQUFzQixFQUF0QkEsc0JBQXNCO0lBQ3RCQyx5QkFBeUIsRUFBekJBLHlCQUF5QjtJQUN6QkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0lBQ3pCQywrQkFBK0IsRUFBL0JBLCtCQUErQjtDQUNoQyJ9