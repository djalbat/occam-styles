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
    backgroundColour: function() {
        return backgroundColour;
    },
    borderColour: function() {
        return borderColour;
    },
    caretBackgroundColour: function() {
        return caretBackgroundColour;
    },
    default: function() {
        return _default;
    },
    foldButtonHoverStroke: function() {
        return foldButtonHoverStroke;
    },
    foldButtonStroke: function() {
        return foldButtonStroke;
    },
    foldFill: function() {
        return foldFill;
    },
    fontSizeButtonColour: function() {
        return fontSizeButtonColour;
    },
    fontSizeButtonHoverColour: function() {
        return fontSizeButtonHoverColour;
    },
    gutterBackgroundColour: function() {
        return gutterBackgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    remoteSelectionsBackgroundColour: function() {
        return remoteSelectionsBackgroundColour;
    },
    scrollbarThumbBackgroundColour: function() {
        return scrollbarThumbBackgroundColour;
    },
    selectedColour: function() {
        return selectedColour;
    },
    selectionBackgroundColour: function() {
        return selectionBackgroundColour;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var foldFill = _colours.woodsmoke;
var borderColour = _common.commonBorderColour; ///
var selectedColour = _colours.springWood;
var foldButtonStroke = _colours.pablo;
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var fontSizeButtonColour = _colours.stormDust;
var foldButtonHoverStroke = _colours.hurricane;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var fontSizeButtonHoverColour = _colours.stardust;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    borderColour: borderColour,
    selectedColour: selectedColour,
    foldButtonStroke: foldButtonStroke,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    fontSizeButtonColour: fontSizeButtonColour,
    caretBackgroundColour: caretBackgroundColour,
    foldButtonHoverStroke: foldButtonHoverStroke,
    gutterBackgroundColour: gutterBackgroundColour,
    fontSizeButtonHoverColour: fontSizeButtonHoverColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCBwYWJsbywgYm9uam91ciwgbG9nQ2FiaW4sIHN0YXJkdXN0LCBzdG9ybUR1c3QsIHdvb2RzbW9rZSwgaHVycmljYW5lLCBibGFja09saXZlLCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGZvbGRGaWxsID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGZvbGRCdXR0b25TdHJva2UgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGZvbnRTaXplQnV0dG9uQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3QgZm9udFNpemVCdXR0b25Ib3ZlckNvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIgPSBsb2dDYWJpbjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmb2xkRmlsbCxcbiAgYm9yZGVyQ29sb3VyLFxuICBzZWxlY3RlZENvbG91cixcbiAgZm9sZEJ1dHRvblN0cm9rZSxcbiAgYmFja2dyb3VuZENvbG91cixcbiAgbGluZU51bWJlcnNDb2xvdXIsXG4gIGZvbnRTaXplQnV0dG9uQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGZvbGRCdXR0b25Ib3ZlclN0cm9rZSxcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgZm9udFNpemVCdXR0b25Ib3ZlckNvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLFxuICByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kQ29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiY2FyZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlIiwiZm9sZEJ1dHRvblN0cm9rZSIsImZvbGRGaWxsIiwiZm9udFNpemVCdXR0b25Db2xvdXIiLCJmb250U2l6ZUJ1dHRvbkhvdmVyQ29sb3VyIiwiZ3V0dGVyQmFja2dyb3VuZENvbG91ciIsImxpbmVOdW1iZXJzQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3RlZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJzcHJpbmdXb29kIiwicGFibG8iLCJzdG9ybUR1c3QiLCJodXJyaWNhbmUiLCJib25qb3VyIiwiYmxhY2tPbGl2ZSIsInN0YXJkdXN0Iiwia29ybWEiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2FBLGdCQUFnQjtlQUFoQkE7O0lBTkFDLFlBQVk7ZUFBWkE7O0lBY0FDLHFCQUFxQjtlQUFyQkE7O0lBWWIsT0FlRTtlQWZGOztJQWRhQyxxQkFBcUI7ZUFBckJBOztJQVJBQyxnQkFBZ0I7ZUFBaEJBOztJQU5BQyxRQUFRO2VBQVJBOztJQVlBQyxvQkFBb0I7ZUFBcEJBOztJQVFBQyx5QkFBeUI7ZUFBekJBOztJQUZBQyxzQkFBc0I7ZUFBdEJBOztJQVJBQyxpQkFBaUI7ZUFBakJBOztJQWdCQUMsZ0NBQWdDO2VBQWhDQTs7SUFGQUMsOEJBQThCO2VBQTlCQTs7SUFwQkFDLGNBQWM7ZUFBZEE7O0lBa0JBQyx5QkFBeUI7ZUFBekJBOzs7c0JBMUJzQjt1QkFFZ0Y7QUFFNUcsSUFBTVIsV0FBV1Msa0JBQVM7QUFFMUIsSUFBTWIsZUFBZWMsMEJBQWtCLEVBQUUsR0FBRztBQUU1QyxJQUFNSCxpQkFBaUJJLG1CQUFVO0FBRWpDLElBQU1aLG1CQUFtQmEsY0FBSztBQUU5QixJQUFNakIsbUJBQW1CYyxrQkFBUztBQUVsQyxJQUFNTCxvQkFBb0JTLGtCQUFTO0FBRW5DLElBQU1aLHVCQUF1Qlksa0JBQVM7QUFFdEMsSUFBTWYsd0JBQXdCZ0Isa0JBQVM7QUFFdkMsSUFBTWpCLHdCQUF3QmtCLGdCQUFPO0FBRXJDLElBQU1aLHlCQUF5QmEsbUJBQVU7QUFFekMsSUFBTWQsNEJBQTRCZSxpQkFBUTtBQUUxQyxJQUFNVCw0QkFBNEJVLGNBQUs7QUFFdkMsSUFBTVosaUNBQWlDTyxrQkFBUztBQUVoRCxJQUFNUixtQ0FBbUNjLGlCQUFRO0lBRXhELFdBQWU7SUFDYm5CLFVBQUFBO0lBQ0FKLGNBQUFBO0lBQ0FXLGdCQUFBQTtJQUNBUixrQkFBQUE7SUFDQUosa0JBQUFBO0lBQ0FTLG1CQUFBQTtJQUNBSCxzQkFBQUE7SUFDQUosdUJBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBSyx3QkFBQUE7SUFDQUQsMkJBQUFBO0lBQ0FNLDJCQUFBQTtJQUNBRixnQ0FBQUE7SUFDQUQsa0NBQUFBO0FBQ0YifQ==