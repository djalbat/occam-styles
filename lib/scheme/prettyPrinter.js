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
var scrollbarThumbBorderColour = _colours.dune;
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarThumbBackgroundColour = _colours.pablo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIHBhYmxvLCBrb3JtYSwgYm9uam91ciwgbG9nQ2FiaW4sIHN0b3JtRHVzdCwgYmxhY2tPbGl2ZSwgd29vZHNtb2tlIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgbGluZU51bWJlcnNDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCb3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjYXJldEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgZ3V0dGVyQmFja2dyb3VuZENvbG91ciA9IGJsYWNrT2xpdmU7XG5cbmV4cG9ydCBjb25zdCBmb2xkc0xpbmVCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3Qgb3RoZXJTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvcmRlckNvbG91cixcbiAgYmFja2dyb3VuZENvbG91cixcbiAgbGluZU51bWJlcnNDb2xvdXIsXG4gIGd1dHRlckJvcmRlckNvbG91cixcbiAgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBmb2xkc0xpbmVCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91cixcbiAgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIG90aGVyU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsImxpbmVOdW1iZXJzQ29sb3VyIiwiZ3V0dGVyQm9yZGVyQ29sb3VyIiwiY2FyZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZ3V0dGVyQmFja2dyb3VuZENvbG91ciIsImZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJvdGhlclNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwid29vZHNtb2tlIiwic3Rvcm1EdXN0IiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImR1bmUiLCJwYWJsbyIsImxvZ0NhYmluIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBTUFBLFlBQVk7ZUFBWkEsWUFBWTs7SUFFWkMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBRWhCQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFFakJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUVsQkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBRXJCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFFdEJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXpCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFFMUJDLDhCQUE4QjtlQUE5QkEsOEJBQThCOztJQUU5QkMsOEJBQThCO2VBQTlCQSw4QkFBOEI7O0lBRTlCQywrQkFBK0I7ZUFBL0JBLCtCQUErQjs7SUFFNUMsT0FhRTtlQWJGLFFBYUU7OztzQkF6Q2lDLFVBQVU7dUJBRTJDLFlBQVk7QUFFN0YsSUFBTVgsWUFBWSxHQUFHWSxPQUFrQixtQkFBQSxBQUFDLEVBQUMsR0FBRztBQUU1QyxJQUFNWCxnQkFBZ0IsR0FBR1ksUUFBUyxVQUFBLEFBQUM7QUFFbkMsSUFBTVgsaUJBQWlCLEdBQUdZLFFBQVMsVUFBQSxBQUFDO0FBRXBDLElBQU1YLGtCQUFrQixHQUFHVyxRQUFTLFVBQUEsQUFBQztBQUVyQyxJQUFNVixxQkFBcUIsR0FBR1csUUFBTyxRQUFBLEFBQUM7QUFFdEMsSUFBTVYsc0JBQXNCLEdBQUdXLFFBQVUsV0FBQSxBQUFDO0FBRTFDLElBQU1WLHlCQUF5QixHQUFHUSxRQUFTLFVBQUEsQUFBQztBQUU1QyxJQUFNUCx5QkFBeUIsR0FBR1UsUUFBSyxNQUFBLEFBQUM7QUFFeEMsSUFBTVQsMEJBQTBCLEdBQUdVLFFBQUksS0FBQSxBQUFDO0FBRXhDLElBQU1ULDhCQUE4QixHQUFHUyxRQUFJLEtBQUEsQUFBQztBQUU1QyxJQUFNUiw4QkFBOEIsR0FBR1MsUUFBSyxNQUFBLEFBQUM7QUFFN0MsSUFBTVIsK0JBQStCLEdBQUdTLFFBQVEsU0FBQSxBQUFDO0lBRXhELFFBYUUsR0FiYTtJQUNicEIsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQ2hCQyxpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUNqQkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLHFCQUFxQixFQUFyQkEscUJBQXFCO0lBQ3JCQyxzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7SUFDekJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0lBQ3pCQywwQkFBMEIsRUFBMUJBLDBCQUEwQjtJQUMxQkMsOEJBQThCLEVBQTlCQSw4QkFBOEI7SUFDOUJDLDhCQUE4QixFQUE5QkEsOEJBQThCO0lBQzlCQywrQkFBK0IsRUFBL0JBLCtCQUErQjtDQUNoQyJ9