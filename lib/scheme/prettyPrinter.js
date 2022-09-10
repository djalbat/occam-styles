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
    scrollbarThumbBorderColour: function() {
        return scrollbarThumbBorderColour;
    },
    scrollbarTrackBackgroundColour: function() {
        return scrollbarTrackBackgroundColour;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
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
var scrollbarThumbBorderColour = _colours.tuatara;
var scrollbarTrackBackgroundColour = _colours.tuatara;
var scrollbarThumbBackgroundColour = _colours.hurricane;
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
    scrollbarThumbBorderColour: scrollbarThumbBorderColour,
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    otherSelectionsBackgroundColour: otherSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCB0dWF0YXJhLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCBibGFja09saXZlLCB3b29kc21va2UsIGh1cnJpY2FuZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGxpbmVOdW1iZXJzQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZ3V0dGVyQm9yZGVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3QgZm9sZHNMaW5lQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCBvdGhlclNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYm9yZGVyQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyc0NvbG91cixcbiAgZ3V0dGVyQm9yZGVyQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgb3RoZXJTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJib3JkZXJDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJndXR0ZXJCb3JkZXJDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwiZm9sZHNMaW5lQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsIm90aGVyU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ3b29kc21va2UiLCJzdG9ybUR1c3QiLCJib25qb3VyIiwiYmxhY2tPbGl2ZSIsImtvcm1hIiwidHVhdGFyYSIsImh1cnJpY2FuZSIsImxvZ0NhYmluIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBTUFBLFlBQVk7ZUFBWkEsWUFBWTs7SUFFWkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBRWhCQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFFakJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUVsQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBRXJCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFFdEJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXpCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFFMUJDLDhCQUE4QjtlQUE5QkEsOEJBQThCOztJQUU5QkMsOEJBQThCO2VBQTlCQSw4QkFBOEI7O0lBRTlCQywrQkFBK0I7ZUFBL0JBLCtCQUErQjs7SUFFNUMsT0FhRTtlQWJGLFFBYUU7OztzQkF6Q2lDLFVBQVU7dUJBRWtELFlBQVk7QUFFcEcsSUFBTVgsWUFBWSxHQUFHWSxPQUFrQixtQkFBQSxBQUFDLEVBQUMsR0FBRztBQUU1QyxJQUFNWCxnQkFBZ0IsR0FBR1ksUUFBUyxVQUFBLEFBQUM7QUFFbkMsSUFBTVgsaUJBQWlCLEdBQUdZLFFBQVMsVUFBQSxBQUFDO0FBRXBDLElBQU1YLGtCQUFrQixHQUFHVyxRQUFTLFVBQUEsQUFBQztBQUVyQyxJQUFNVixxQkFBcUIsR0FBR1csUUFBTyxRQUFBLEFBQUM7QUFFdEMsSUFBTVYsc0JBQXNCLEdBQUdXLFFBQVUsV0FBQSxBQUFDO0FBRTFDLElBQU1WLHlCQUF5QixHQUFHUSxRQUFTLFVBQUEsQUFBQztBQUU1QyxJQUFNUCx5QkFBeUIsR0FBR1UsUUFBSyxNQUFBLEFBQUM7QUFFeEMsSUFBTVQsMEJBQTBCLEdBQUdVLFFBQU8sUUFBQSxBQUFDO0FBRTNDLElBQU1ULDhCQUE4QixHQUFHUyxRQUFPLFFBQUEsQUFBQztBQUUvQyxJQUFNUiw4QkFBOEIsR0FBR1MsUUFBUyxVQUFBLEFBQUM7QUFFakQsSUFBTVIsK0JBQStCLEdBQUdTLFFBQVEsU0FBQSxBQUFDO0lBRXhELFFBYUUsR0FiYTtJQUNicEIsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUNqQkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLHFCQUFxQixFQUFyQkEscUJBQXFCO0lBQ3JCQyxzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0lBQ3pCQywwQkFBMEIsRUFBMUJBLDBCQUEwQjtJQUMxQkMsOEJBQThCLEVBQTlCQSw4QkFBOEI7SUFDOUJDLDhCQUE4QixFQUE5QkEsOEJBQThCO0lBQzlCQywrQkFBK0IsRUFBL0JBLCtCQUErQjtDQUNoQyJ9