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
var _colours = require("../colours");
var foldFill = _colours.woodsmoke;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvcHJldHR5UHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga29ybWEsIHBhYmxvLCBib25qb3VyLCBsb2dDYWJpbiwgc3RhcmR1c3QsIHN0b3JtRHVzdCwgd29vZHNtb2tlLCBodXJyaWNhbmUsIGJsYWNrT2xpdmUsIHNwcmluZ1dvb2QgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgZm9sZEZpbGwgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBmb2xkQnV0dG9uU3Ryb2tlID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGxpbmVOdW1iZXJzQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlID0gaHVycmljYW5lO1xuXG5leHBvcnQgY29uc3QgY2FyZXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25Ib3ZlckNvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgZ3V0dGVyQmFja2dyb3VuZENvbG91ciA9IGJsYWNrT2xpdmU7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25CYWNrZ3JvdW5kQ29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCByZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciA9IGxvZ0NhYmluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZvbGRGaWxsLFxuICBzZWxlY3RlZENvbG91cixcbiAgZm9sZEJ1dHRvblN0cm9rZSxcbiAgYmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkNvbG91cixcbiAgbGluZU51bWJlcnNDb2xvdXIsXG4gIGNhcmV0QmFja2dyb3VuZENvbG91cixcbiAgZm9sZEJ1dHRvbkhvdmVyU3Ryb2tlLFxuICBtZW51QnV0dG9uSG92ZXJDb2xvdXIsXG4gIGd1dHRlckJhY2tncm91bmRDb2xvdXIsXG4gIHNlbGVjdGlvbkJhY2tncm91bmRDb2xvdXIsXG4gIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgcmVtb3RlU2VsZWN0aW9uc0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImNhcmV0QmFja2dyb3VuZENvbG91ciIsImZvbGRCdXR0b25Ib3ZlclN0cm9rZSIsImZvbGRCdXR0b25TdHJva2UiLCJmb2xkRmlsbCIsImd1dHRlckJhY2tncm91bmRDb2xvdXIiLCJsaW5lTnVtYmVyc0NvbG91ciIsIm1lbnVCdXR0b25Db2xvdXIiLCJtZW51QnV0dG9uSG92ZXJDb2xvdXIiLCJyZW1vdGVTZWxlY3Rpb25zQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInNlbGVjdGVkQ29sb3VyIiwic2VsZWN0aW9uQmFja2dyb3VuZENvbG91ciIsIndvb2RzbW9rZSIsInNwcmluZ1dvb2QiLCJwYWJsbyIsInN0b3JtRHVzdCIsImh1cnJpY2FuZSIsImJvbmpvdXIiLCJzdGFyZHVzdCIsImJsYWNrT2xpdmUiLCJrb3JtYSIsImxvZ0NhYmluIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFVYUEsZ0JBQWdCO2VBQWhCQTs7SUFRQUMscUJBQXFCO2VBQXJCQTs7SUFZYixPQWNFO2VBZEY7O0lBZGFDLHFCQUFxQjtlQUFyQkE7O0lBUkFDLGdCQUFnQjtlQUFoQkE7O0lBSkFDLFFBQVE7ZUFBUkE7O0lBa0JBQyxzQkFBc0I7ZUFBdEJBOztJQVJBQyxpQkFBaUI7ZUFBakJBOztJQUZBQyxnQkFBZ0I7ZUFBaEJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQVFBQyxnQ0FBZ0M7ZUFBaENBOztJQUZBQyw4QkFBOEI7ZUFBOUJBOztJQXBCQUMsY0FBYztlQUFkQTs7SUFrQkFDLHlCQUF5QjtlQUF6QkE7Ozt1QkF0QnNHO0FBRTVHLElBQU1SLFdBQVdTLGtCQUFTO0FBRTFCLElBQU1GLGlCQUFpQkcsbUJBQVU7QUFFakMsSUFBTVgsbUJBQW1CWSxjQUFLO0FBRTlCLElBQU1mLG1CQUFtQmEsa0JBQVM7QUFFbEMsSUFBTU4sbUJBQW1CUyxrQkFBUztBQUVsQyxJQUFNVixvQkFBb0JVLGtCQUFTO0FBRW5DLElBQU1kLHdCQUF3QmUsa0JBQVM7QUFFdkMsSUFBTWhCLHdCQUF3QmlCLGdCQUFPO0FBRXJDLElBQU1WLHdCQUF3QlcsaUJBQVE7QUFFdEMsSUFBTWQseUJBQXlCZSxtQkFBVTtBQUV6QyxJQUFNUiw0QkFBNEJTLGNBQUs7QUFFdkMsSUFBTVgsaUNBQWlDTSxrQkFBUztBQUVoRCxJQUFNUCxtQ0FBbUNhLGlCQUFRO0lBRXhELFdBQWU7SUFDYmxCLFVBQUFBO0lBQ0FPLGdCQUFBQTtJQUNBUixrQkFBQUE7SUFDQUgsa0JBQUFBO0lBQ0FPLGtCQUFBQTtJQUNBRCxtQkFBQUE7SUFDQUwsdUJBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBTSx1QkFBQUE7SUFDQUgsd0JBQUFBO0lBQ0FPLDJCQUFBQTtJQUNBRixnQ0FBQUE7SUFDQUQsa0NBQUFBO0FBQ0YifQ==