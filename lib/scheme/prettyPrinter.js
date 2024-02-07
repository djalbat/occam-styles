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
    gutterBackgroundColour: function() {
        return gutterBackgroundColour;
    },
    lineNumbersColour: function() {
        return lineNumbersColour;
    },
    menuButtonColour: function() {
        return menuButtonColour;
    },
    menuButtonHoverColour: function() {
        return menuButtonHoverColour;
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
var menuButtonColour = _colours.stormDust;
var lineNumbersColour = _colours.stormDust;
var foldButtonHoverStroke = _colours.hurricane;
var caretBackgroundColour = _colours.bonjour;
var menuButtonHoverColour = _colours.stardust;
var gutterBackgroundColour = _colours.blackOlive;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    borderColour: borderColour,
    selectedColour: selectedColour,
    foldButtonStroke: foldButtonStroke,
    backgroundColour: backgroundColour,
    menuButtonColour: menuButtonColour,
    lineNumbersColour: lineNumbersColour,
    caretBackgroundColour: caretBackgroundColour,
    foldButtonHoverStroke: foldButtonHoverStroke,
    menuButtonHoverColour: menuButtonHoverColour,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCBwYWJsbywgYm9uam91ciwgbG9nQ2FiaW4sIHN0YXJkdXN0LCBzdG9ybUR1c3QsIHdvb2RzbW9rZSwgaHVycmljYW5lLCBibGFja09saXZlLCBzcHJpbmdXb29kIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGZvbGRGaWxsID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IGZvbGRCdXR0b25TdHJva2UgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgbGluZU51bWJlcnNDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uSG92ZXJTdHJva2UgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCBjYXJldEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9sZEZpbGwsXG4gIGJvcmRlckNvbG91cixcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGZvbGRCdXR0b25TdHJva2UsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25Db2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBjYXJldEJhY2tncm91bmRDb2xvdXIsXG4gIGZvbGRCdXR0b25Ib3ZlclN0cm9rZSxcbiAgbWVudUJ1dHRvbkhvdmVyQ29sb3VyLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJjYXJldEJhY2tncm91bmRDb2xvdXIiLCJmb2xkQnV0dG9uSG92ZXJTdHJva2UiLCJmb2xkQnV0dG9uU3Ryb2tlIiwiZm9sZEZpbGwiLCJndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwibGluZU51bWJlcnNDb2xvdXIiLCJtZW51QnV0dG9uQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyQ29sb3VyIiwicmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3RlZENvbG91ciIsInNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJzcHJpbmdXb29kIiwicGFibG8iLCJzdG9ybUR1c3QiLCJodXJyaWNhbmUiLCJib25qb3VyIiwic3RhcmR1c3QiLCJibGFja09saXZlIiwia29ybWEiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2FBLGdCQUFnQjtlQUFoQkE7O0lBTkFDLFlBQVk7ZUFBWkE7O0lBY0FDLHFCQUFxQjtlQUFyQkE7O0lBWWIsT0FlRTtlQWZGOztJQWRhQyxxQkFBcUI7ZUFBckJBOztJQVJBQyxnQkFBZ0I7ZUFBaEJBOztJQU5BQyxRQUFRO2VBQVJBOztJQW9CQUMsc0JBQXNCO2VBQXRCQTs7SUFSQUMsaUJBQWlCO2VBQWpCQTs7SUFGQUMsZ0JBQWdCO2VBQWhCQTs7SUFRQUMscUJBQXFCO2VBQXJCQTs7SUFRQUMsZ0NBQWdDO2VBQWhDQTs7SUFGQUMsOEJBQThCO2VBQTlCQTs7SUFwQkFDLGNBQWM7ZUFBZEE7O0lBa0JBQyx5QkFBeUI7ZUFBekJBOzs7c0JBMUJzQjt1QkFFZ0Y7QUFFNUcsSUFBTVIsV0FBV1Msa0JBQVM7QUFFMUIsSUFBTWIsZUFBZWMsMEJBQWtCLEVBQUUsR0FBRztBQUU1QyxJQUFNSCxpQkFBaUJJLG1CQUFVO0FBRWpDLElBQU1aLG1CQUFtQmEsY0FBSztBQUU5QixJQUFNakIsbUJBQW1CYyxrQkFBUztBQUVsQyxJQUFNTixtQkFBbUJVLGtCQUFTO0FBRWxDLElBQU1YLG9CQUFvQlcsa0JBQVM7QUFFbkMsSUFBTWYsd0JBQXdCZ0Isa0JBQVM7QUFFdkMsSUFBTWpCLHdCQUF3QmtCLGdCQUFPO0FBRXJDLElBQU1YLHdCQUF3QlksaUJBQVE7QUFFdEMsSUFBTWYseUJBQXlCZ0IsbUJBQVU7QUFFekMsSUFBTVQsNEJBQTRCVSxjQUFLO0FBRXZDLElBQU1aLGlDQUFpQ08sa0JBQVM7QUFFaEQsSUFBTVIsbUNBQW1DYyxpQkFBUTtJQUV4RCxXQUFlO0lBQ2JuQixVQUFBQTtJQUNBSixjQUFBQTtJQUNBVyxnQkFBQUE7SUFDQVIsa0JBQUFBO0lBQ0FKLGtCQUFBQTtJQUNBUSxrQkFBQUE7SUFDQUQsbUJBQUFBO0lBQ0FMLHVCQUFBQTtJQUNBQyx1QkFBQUE7SUFDQU0sdUJBQUFBO0lBQ0FILHdCQUFBQTtJQUNBTywyQkFBQUE7SUFDQUYsZ0NBQUFBO0lBQ0FELGtDQUFBQTtBQUNGIn0=