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
var scrollbarThumbBackgroundColour = _colours.stormDust;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBib25qb3VyLCBsb2dDYWJpbiwgc3Rvcm1EdXN0LCB3b29kc21va2UsIGJsYWNrT2xpdmUgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBsaW5lTnVtYmVyc0NvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNhcmV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gYmxhY2tPbGl2ZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciA9IGR1bmU7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3Qgb3RoZXJTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvcmRlckNvbG91cixcbiAgYmFja2dyb3VuZENvbG91cixcbiAgbGluZU51bWJlcnNDb2xvdXIsXG4gIGd1dHRlckJvcmRlckNvbG91cixcbiAgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBndXR0ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBmb2xkc0xpbmVCYWNrZ3JvdW5kQ29sb3VyLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91cixcbiAgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLFxuICBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIG90aGVyU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsImxpbmVOdW1iZXJzQ29sb3VyIiwiZ3V0dGVyQm9yZGVyQ29sb3VyIiwiY2FyZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZ3V0dGVyQmFja2dyb3VuZENvbG91ciIsImZvbGRzTGluZUJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJvdGhlclNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwid29vZHNtb2tlIiwic3Rvcm1EdXN0IiwiYm9uam91ciIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImR1bmUiLCJsb2dDYWJpbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQU1BQSxZQUFZO2VBQVpBLFlBQVk7O0lBRVpDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUVoQkMsaUJBQWlCO2VBQWpCQSxpQkFBaUI7O0lBRWpCQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFFbEJDLHFCQUFxQjtlQUFyQkEscUJBQXFCOztJQUVyQkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBRXRCQyx5QkFBeUI7ZUFBekJBLHlCQUF5Qjs7SUFFekJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV6QkMsMEJBQTBCO2VBQTFCQSwwQkFBMEI7O0lBRTFCQyw4QkFBOEI7ZUFBOUJBLDhCQUE4Qjs7SUFFOUJDLDhCQUE4QjtlQUE5QkEsOEJBQThCOztJQUU5QkMsK0JBQStCO2VBQS9CQSwrQkFBK0I7O0lBRTVDLE9BYUU7ZUFiRixRQWFFOzs7c0JBekNpQyxVQUFVO3VCQUVvQyxZQUFZO0FBRXRGLElBQU1YLFlBQVksR0FBR1ksT0FBa0IsbUJBQUEsQUFBQyxFQUFDLEdBQUc7QUFFNUMsSUFBTVgsZ0JBQWdCLEdBQUdZLFFBQVMsVUFBQSxBQUFDO0FBRW5DLElBQU1YLGlCQUFpQixHQUFHWSxRQUFTLFVBQUEsQUFBQztBQUVwQyxJQUFNWCxrQkFBa0IsR0FBR1csUUFBUyxVQUFBLEFBQUM7QUFFckMsSUFBTVYscUJBQXFCLEdBQUdXLFFBQU8sUUFBQSxBQUFDO0FBRXRDLElBQU1WLHNCQUFzQixHQUFHVyxRQUFVLFdBQUEsQUFBQztBQUUxQyxJQUFNVix5QkFBeUIsR0FBR1EsUUFBUyxVQUFBLEFBQUM7QUFFNUMsSUFBTVAseUJBQXlCLEdBQUdVLFFBQUssTUFBQSxBQUFDO0FBRXhDLElBQU1ULDBCQUEwQixHQUFHVSxRQUFJLEtBQUEsQUFBQztBQUV4QyxJQUFNVCw4QkFBOEIsR0FBR1MsUUFBSSxLQUFBLEFBQUM7QUFFNUMsSUFBTVIsOEJBQThCLEdBQUdJLFFBQVMsVUFBQSxBQUFDO0FBRWpELElBQU1ILCtCQUErQixHQUFHUSxRQUFRLFNBQUEsQUFBQztJQUV4RCxRQWFFLEdBYmE7SUFDYm5CLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtJQUNoQkMsaUJBQWlCLEVBQWpCQSxpQkFBaUI7SUFDakJDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0lBQ2xCQyxxQkFBcUIsRUFBckJBLHFCQUFxQjtJQUNyQkMsc0JBQXNCLEVBQXRCQSxzQkFBc0I7SUFDdEJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0lBQ3pCQyx5QkFBeUIsRUFBekJBLHlCQUF5QjtJQUN6QkMsMEJBQTBCLEVBQTFCQSwwQkFBMEI7SUFDMUJDLDhCQUE4QixFQUE5QkEsOEJBQThCO0lBQzlCQyw4QkFBOEIsRUFBOUJBLDhCQUE4QjtJQUM5QkMsK0JBQStCLEVBQS9CQSwrQkFBK0I7Q0FDaEMifQ==