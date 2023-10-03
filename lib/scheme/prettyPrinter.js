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
var foldButtonHoverStroke = _colours.hurricane;
var caretBackgroundColour = _colours.bonjour;
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
    lineNumbersColour: lineNumbersColour,
    caretBackgroundColour: caretBackgroundColour,
    foldButtonHoverStroke: foldButtonHoverStroke,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCAgcGFibG8sICBib25qb3VyLCAgbG9nQ2FiaW4sICBzdG9ybUR1c3QsICB3b29kc21va2UsICBodXJyaWNhbmUsICBibGFja09saXZlLCAgc3ByaW5nV29vZCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uU3Ryb2tlID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgbGluZU51bWJlcnNDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uSG92ZXJTdHJva2UgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCBjYXJldEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgZ3V0dGVyQmFja2dyb3VuZENvbG91ciA9IGJsYWNrT2xpdmU7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvbGRGaWxsLFxuICBib3JkZXJDb2xvdXIsXG4gIHNlbGVjdGVkQ29sb3VyLFxuICBmb2xkQnV0dG9uU3Ryb2tlLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBsaW5lTnVtYmVyc0NvbG91cixcbiAgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBmb2xkQnV0dG9uSG92ZXJTdHJva2UsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImJvcmRlckNvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyc0NvbG91ciIsInJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2VsZWN0ZWRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwid29vZHNtb2tlIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwic3ByaW5nV29vZCIsInBhYmxvIiwic3Rvcm1EdXN0IiwiaHVycmljYW5lIiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImxvZ0NhYmluIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjYUEsZ0JBQWdCO2VBQWhCQTs7SUFOQUMsWUFBWTtlQUFaQTs7SUFZQUMscUJBQXFCO2VBQXJCQTs7SUFVYixPQWFFO2VBYkY7O0lBWmFDLHFCQUFxQjtlQUFyQkE7O0lBTkFDLGdCQUFnQjtlQUFoQkE7O0lBTkFDLFFBQVE7ZUFBUkE7O0lBZ0JBQyxzQkFBc0I7ZUFBdEJBOztJQU5BQyxpQkFBaUI7ZUFBakJBOztJQVlBQyxnQ0FBZ0M7ZUFBaENBOztJQUZBQyw4QkFBOEI7ZUFBOUJBOztJQWhCQUMsY0FBYztlQUFkQTs7SUFjQUMseUJBQXlCO2VBQXpCQTs7O3NCQXRCc0I7dUJBRThFO0FBRTFHLElBQU1OLFdBQVdPLGtCQUFTO0FBRTFCLElBQU1YLGVBQWVZLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUgsaUJBQWlCSSxtQkFBVTtBQUVqQyxJQUFNVixtQkFBbUJXLGNBQUs7QUFFOUIsSUFBTWYsbUJBQW1CWSxrQkFBUztBQUVsQyxJQUFNTCxvQkFBb0JTLGtCQUFTO0FBRW5DLElBQU1iLHdCQUF3QmMsa0JBQVM7QUFFdkMsSUFBTWYsd0JBQXdCZ0IsZ0JBQU87QUFFckMsSUFBTVoseUJBQXlCYSxtQkFBVTtBQUV6QyxJQUFNUiw0QkFBNEJTLGNBQUs7QUFFdkMsSUFBTVgsaUNBQWlDTyxrQkFBUztBQUVoRCxJQUFNUixtQ0FBbUNhLGlCQUFRO0lBRXhELFdBQWU7SUFDYmhCLFVBQUFBO0lBQ0FKLGNBQUFBO0lBQ0FTLGdCQUFBQTtJQUNBTixrQkFBQUE7SUFDQUosa0JBQUFBO0lBQ0FPLG1CQUFBQTtJQUNBTCx1QkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FHLHdCQUFBQTtJQUNBSywyQkFBQUE7SUFDQUYsZ0NBQUFBO0lBQ0FELGtDQUFBQTtBQUNGIn0=