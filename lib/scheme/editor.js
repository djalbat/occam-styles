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
    tabsBorderColour: function() {
        return tabsBorderColour;
    },
    tabsReadOnlyColour: function() {
        return tabsReadOnlyColour;
    },
    tabsBackgroundColour: function() {
        return tabsBackgroundColour;
    },
    tabsArrowButtonColour: function() {
        return tabsArrowButtonColour;
    },
    tabsWelcomeScreenTabColour: function() {
        return tabsWelcomeScreenTabColour;
    },
    tabsActiveBackgroundColour: function() {
        return tabsActiveBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var tabsBorderColour = _common.commonBorderColour; ///
var tabsReadOnlyColour = _colours.tuatara;
var tabsBackgroundColour = _colours.dawn;
var tabsArrowButtonColour = _colours.woodsmoke;
var tabsWelcomeScreenTabColour = _colours.tuatara;
var tabsActiveBackgroundColour = _colours.stardust;
var _default = {
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    tabsWelcomeScreenTabColour: tabsWelcomeScreenTabColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi9jb21tb25cIjtcblxuaW1wb3J0IHsgZGF3biwgdHVhdGFyYSwgc3RhcmR1c3QsIHdvb2RzbW9rZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCB0YWJzQm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHRhYnNSZWFkT25seUNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCB0YWJzQmFja2dyb3VuZENvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCB0YWJzQXJyb3dCdXR0b25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCB0YWJzV2VsY29tZVNjcmVlblRhYkNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRhYnNCb3JkZXJDb2xvdXIsXG4gIHRhYnNSZWFkT25seUNvbG91cixcbiAgdGFic0JhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgdGFic1dlbGNvbWVTY3JlZW5UYWJDb2xvdXIsXG4gIHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbInRhYnNCb3JkZXJDb2xvdXIiLCJ0YWJzUmVhZE9ubHlDb2xvdXIiLCJ0YWJzQmFja2dyb3VuZENvbG91ciIsInRhYnNBcnJvd0J1dHRvbkNvbG91ciIsInRhYnNXZWxjb21lU2NyZWVuVGFiQ29sb3VyIiwidGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ0dWF0YXJhIiwiZGF3biIsIndvb2RzbW9rZSIsInN0YXJkdXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsZ0JBQWdCO2VBQWhCQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFFQUMsb0JBQW9CO2VBQXBCQTs7SUFFQUMscUJBQXFCO2VBQXJCQTs7SUFFQUMsMEJBQTBCO2VBQTFCQTs7SUFFQUMsMEJBQTBCO2VBQTFCQTs7SUFFYixPQU9FO2VBUEY7OztzQkFoQm1DO3VCQUVnQjtBQUU1QyxJQUFNTCxtQkFBbUJNLDRCQUFvQixHQUFHO0FBRWhELElBQU1MLHFCQUFxQk07QUFFM0IsSUFBTUwsdUJBQXVCTTtBQUU3QixJQUFNTCx3QkFBd0JNO0FBRTlCLElBQU1MLDZCQUE2Qkc7QUFFbkMsSUFBTUYsNkJBQTZCSztJQUUxQyxXQUFlO0lBQ2JWLGtCQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsc0JBQUFBO0lBQ0FDLHVCQUFBQTtJQUNBQyw0QkFBQUE7SUFDQUMsNEJBQUFBO0FBQ0YifQ==