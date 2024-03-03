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
    default: function() {
        return _default;
    },
    menuButtonBackgroundColour: function() {
        return menuButtonBackgroundColour;
    },
    menuButtonHoverBackgroundColour: function() {
        return menuButtonHoverBackgroundColour;
    },
    menuButtonHoverPreviewBackgroundColour: function() {
        return menuButtonHoverPreviewBackgroundColour;
    },
    tabsActiveBackgroundColour: function() {
        return tabsActiveBackgroundColour;
    },
    tabsArrowButtonColour: function() {
        return tabsArrowButtonColour;
    },
    tabsBackgroundColour: function() {
        return tabsBackgroundColour;
    },
    tabsBorderColour: function() {
        return tabsBorderColour;
    },
    tabsReadOnlyColour: function() {
        return tabsReadOnlyColour;
    }
});
var _common = require("../scheme/common");
var _colours = require("../colours");
var borderColour = _common.commonBorderColour; ///
var tabsBorderColour = _common.commonBorderColour; ///
var tabsReadOnlyColour = _colours.tuatara;
var tabsBackgroundColour = _colours.dawn;
var tabsArrowButtonColour = _colours.woodsmoke;
var tabsActiveBackgroundColour = _colours.stardust;
var menuButtonBackgroundColour = _colours.stormDust;
var menuButtonHoverBackgroundColour = _colours.stardust;
var menuButtonHoverPreviewBackgroundColour = _colours.bonjour;
var _default = {
    borderColour: borderColour,
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    menuButtonBackgroundColour: menuButtonBackgroundColour,
    menuButtonHoverBackgroundColour: menuButtonHoverBackgroundColour,
    menuButtonHoverPreviewBackgroundColour: menuButtonHoverPreviewBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHRhYnNCb3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic1JlYWRPbmx5Q29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IHRhYnNCYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IHRhYnNBcnJvd0J1dHRvbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25Ib3ZlckJhY2tncm91bmRDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25Ib3ZlclByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBib3JkZXJDb2xvdXIsXG4gIHRhYnNCb3JkZXJDb2xvdXIsXG4gIHRhYnNSZWFkT25seUNvbG91cixcbiAgdGFic0JhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgdGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25CYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJQcmV2aWV3QmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJib3JkZXJDb2xvdXIiLCJtZW51QnV0dG9uQmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25Ib3ZlckJhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uSG92ZXJQcmV2aWV3QmFja2dyb3VuZENvbG91ciIsInRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0Fycm93QnV0dG9uQ29sb3VyIiwidGFic0JhY2tncm91bmRDb2xvdXIiLCJ0YWJzQm9yZGVyQ29sb3VyIiwidGFic1JlYWRPbmx5Q29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwidHVhdGFyYSIsImRhd24iLCJ3b29kc21va2UiLCJzdGFyZHVzdCIsInN0b3JtRHVzdCIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxZQUFZO2VBQVpBOztJQWtCYixPQVVFO2VBVkY7O0lBTmFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLCtCQUErQjtlQUEvQkE7O0lBRUFDLHNDQUFzQztlQUF0Q0E7O0lBTkFDLDBCQUEwQjtlQUExQkE7O0lBRkFDLHFCQUFxQjtlQUFyQkE7O0lBRkFDLG9CQUFvQjtlQUFwQkE7O0lBSkFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7OztzQkFSc0I7dUJBRW9DO0FBRWhFLElBQU1SLGVBQWVTLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUYsbUJBQW1CRSwwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1ELHFCQUFxQkUsZ0JBQU87QUFFbEMsSUFBTUosdUJBQXVCSyxhQUFJO0FBRWpDLElBQU1OLHdCQUF3Qk8sa0JBQVM7QUFFdkMsSUFBTVIsNkJBQTZCUyxpQkFBUTtBQUUzQyxJQUFNWiw2QkFBNkJhLGtCQUFTO0FBRTVDLElBQU1aLGtDQUFrQ1csaUJBQVE7QUFFaEQsSUFBTVYseUNBQXlDWSxnQkFBTztJQUU3RCxXQUFlO0lBQ2JmLGNBQUFBO0lBQ0FPLGtCQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUYsc0JBQUFBO0lBQ0FELHVCQUFBQTtJQUNBRCw0QkFBQUE7SUFDQUgsNEJBQUFBO0lBQ0FDLGlDQUFBQTtJQUNBQyx3Q0FBQUE7QUFDRiJ9