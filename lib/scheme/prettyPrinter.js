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
    foldFill: function() {
        return foldFill;
    },
    foldStroke: function() {
        return foldStroke;
    },
    borderColour: function() {
        return borderColour;
    },
    selectedColour: function() {
        return selectedColour;
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
    remoteSelectionsBackgroundColour: function() {
        return remoteSelectionsBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var foldFill = _colours.woodsmoke;
var foldStroke = _colours.hurricane;
var borderColour = _common.commonBorderColour; ///
var selectedColour = _colours.springWood;
var backgroundColour = _colours.woodsmoke;
var lineNumbersColour = _colours.stormDust;
var gutterBorderColour = _colours.stormDust;
var caretBackgroundColour = _colours.bonjour;
var gutterBackgroundColour = _colours.blackOlive;
var selectionBackgroundColour = _colours.korma;
var scrollbarThumbBorderColour = _colours.dune;
var scrollbarTrackBackgroundColour = _colours.dune;
var scrollbarThumbBackgroundColour = _colours.stormDust;
var remoteSelectionsBackgroundColour = _colours.logCabin;
var _default = {
    foldFill: foldFill,
    foldStroke: foldStroke,
    borderColour: borderColour,
    selectedColour: selectedColour,
    backgroundColour: backgroundColour,
    lineNumbersColour: lineNumbersColour,
    gutterBorderColour: gutterBorderColour,
    caretBackgroundColour: caretBackgroundColour,
    gutterBackgroundColour: gutterBackgroundColour,
    selectionBackgroundColour: selectionBackgroundColour,
    scrollbarThumbBorderColour: scrollbarThumbBorderColour,
    scrollbarTrackBackgroundColour: scrollbarTrackBackgroundColour,
    scrollbarThumbBackgroundColour: scrollbarThumbBackgroundColour,
    remoteSelectionsBackgroundColour: remoteSelectionsBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGR1bmUsIGtvcm1hLCBib25qb3VyLCBodXJyaWNhbmUsIGxvZ0NhYmluLCBzdG9ybUR1c3QsIHNwcmluZ1dvb2QsIHdvb2RzbW9rZSwgYmxhY2tPbGl2ZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBmb2xkRmlsbCA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGZvbGRTdHJva2UgPSBodXJyaWNhbmU7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGxpbmVOdW1iZXJzQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZ3V0dGVyQm9yZGVyQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGd1dHRlckJhY2tncm91bmRDb2xvdXIgPSBibGFja09saXZlO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIgPSBkdW5lO1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZHVuZTtcblxuZXhwb3J0IGNvbnN0IHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHJlbW90ZVNlbGVjdGlvbnNCYWNrZ3JvdW5kQ29sb3VyID0gbG9nQ2FiaW47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9sZEZpbGwsXG4gIGZvbGRTdHJva2UsXG4gIGJvcmRlckNvbG91cixcbiAgc2VsZWN0ZWRDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGxpbmVOdW1iZXJzQ29sb3VyLFxuICBndXR0ZXJCb3JkZXJDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZ3V0dGVyQmFja2dyb3VuZENvbG91cixcbiAgc2VsZWN0aW9uQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIsXG4gIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLFxuICByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJmb2xkRmlsbCIsImZvbGRTdHJva2UiLCJib3JkZXJDb2xvdXIiLCJzZWxlY3RlZENvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyc0NvbG91ciIsImd1dHRlckJvcmRlckNvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJyZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciIsIndvb2RzbW9rZSIsImh1cnJpY2FuZSIsImNvbW1vbkJvcmRlckNvbG91ciIsInNwcmluZ1dvb2QiLCJzdG9ybUR1c3QiLCJib25qb3VyIiwiYmxhY2tPbGl2ZSIsImtvcm1hIiwiZHVuZSIsImxvZ0NhYmluIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsUUFBUTtlQUFSQTs7SUFFQUMsVUFBVTtlQUFWQTs7SUFFQUMsWUFBWTtlQUFaQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFFQUMsZ0JBQWdCO2VBQWhCQTs7SUFFQUMsaUJBQWlCO2VBQWpCQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFFQUMscUJBQXFCO2VBQXJCQTs7SUFFQUMsc0JBQXNCO2VBQXRCQTs7SUFFQUMseUJBQXlCO2VBQXpCQTs7SUFFQUMsMEJBQTBCO2VBQTFCQTs7SUFFQUMsOEJBQThCO2VBQTlCQTs7SUFFQUMsOEJBQThCO2VBQTlCQTs7SUFFQUMsZ0NBQWdDO2VBQWhDQTs7SUFFYixPQWVFO2VBZkY7OztzQkFoQ21DO3VCQUVxRTtBQUVqRyxJQUFNYixXQUFXYyxrQkFBUztBQUUxQixJQUFNYixhQUFhYyxrQkFBUztBQUU1QixJQUFNYixlQUFlYywwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1iLGlCQUFpQmMsbUJBQVU7QUFFakMsSUFBTWIsbUJBQW1CVSxrQkFBUztBQUVsQyxJQUFNVCxvQkFBb0JhLGtCQUFTO0FBRW5DLElBQU1aLHFCQUFxQlksa0JBQVM7QUFFcEMsSUFBTVgsd0JBQXdCWSxnQkFBTztBQUVyQyxJQUFNWCx5QkFBeUJZLG1CQUFVO0FBRXpDLElBQU1YLDRCQUE0QlksY0FBSztBQUV2QyxJQUFNWCw2QkFBNkJZLGFBQUk7QUFFdkMsSUFBTVgsaUNBQWlDVyxhQUFJO0FBRTNDLElBQU1WLGlDQUFpQ00sa0JBQVM7QUFFaEQsSUFBTUwsbUNBQW1DVSxpQkFBUTtJQUV4RCxXQUFlO0lBQ2J2QixVQUFBQTtJQUNBQyxZQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUMsa0JBQUFBO0lBQ0FDLG1CQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsdUJBQUFBO0lBQ0FDLHdCQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsNEJBQUFBO0lBQ0FDLGdDQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUMsa0NBQUFBO0FBQ0YifQ==