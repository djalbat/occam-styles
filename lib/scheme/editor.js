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
    menuBackgroundColour: function() {
        return menuBackgroundColour;
    },
    menuBorderColour: function() {
        return menuBorderColour;
    },
    menuButtonBackgroundColour: function() {
        return menuButtonBackgroundColour;
    },
    menuButtonBorderColour: function() {
        return menuButtonBorderColour;
    },
    menuButtonHoverBackgroundColour: function() {
        return menuButtonHoverBackgroundColour;
    },
    menuButtonHoverLightBackgroundColour: function() {
        return menuButtonHoverLightBackgroundColour;
    },
    menuButtonLightBackgroundColour: function() {
        return menuButtonLightBackgroundColour;
    },
    menuLightBackgroundColour: function() {
        return menuLightBackgroundColour;
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
var menuBorderColour = _colours.tuatara;
var tabsReadOnlyColour = _colours.tuatara;
var tabsBackgroundColour = _colours.dawn;
var menuBackgroundColour = _colours.stormDust;
var tabsArrowButtonColour = _colours.woodsmoke;
var menuButtonBorderColour = _colours.tuatara;
var menuLightBackgroundColour = _colours.springWood;
var menuButtonBackgroundColour = _colours.stormDust;
var tabsActiveBackgroundColour = _colours.stardust;
var menuButtonHoverBackgroundColour = _colours.stardust;
var menuButtonLightBackgroundColour = _colours.springWood;
var menuButtonHoverLightBackgroundColour = _colours.bonjour;
var _default = {
    borderColour: borderColour,
    tabsBorderColour: tabsBorderColour,
    menuBorderColour: menuBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    menuBackgroundColour: menuBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    menuButtonBorderColour: menuButtonBorderColour,
    menuLightBackgroundColour: menuLightBackgroundColour,
    menuButtonBackgroundColour: menuButtonBackgroundColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    menuButtonHoverBackgroundColour: menuButtonHoverBackgroundColour,
    menuButtonLightBackgroundColour: menuButtonLightBackgroundColour,
    menuButtonHoverLightBackgroundColour: menuButtonHoverLightBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UsIHNwcmluZ1dvb2QgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHRhYnNCb3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgbWVudUJvcmRlckNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCB0YWJzUmVhZE9ubHlDb2xvdXIgPSB0dWF0YXJhO1xuXG5leHBvcnQgY29uc3QgdGFic0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgbWVudUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzQXJyb3dCdXR0b25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uQm9yZGVyQ29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IG1lbnVMaWdodEJhY2tncm91bmRDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkxpZ2h0QmFja2dyb3VuZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uSG92ZXJMaWdodEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvcmRlckNvbG91cixcbiAgdGFic0JvcmRlckNvbG91cixcbiAgbWVudUJvcmRlckNvbG91cixcbiAgdGFic1JlYWRPbmx5Q29sb3VyLFxuICB0YWJzQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgbWVudUJ1dHRvbkJvcmRlckNvbG91cixcbiAgbWVudUxpZ2h0QmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uTGlnaHRCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJMaWdodEJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwibWVudUJhY2tncm91bmRDb2xvdXIiLCJtZW51Qm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uQm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25Ib3ZlckxpZ2h0QmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25MaWdodEJhY2tncm91bmRDb2xvdXIiLCJtZW51TGlnaHRCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIiLCJ0YWJzQXJyb3dCdXR0b25Db2xvdXIiLCJ0YWJzQmFja2dyb3VuZENvbG91ciIsInRhYnNCb3JkZXJDb2xvdXIiLCJ0YWJzUmVhZE9ubHlDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ0dWF0YXJhIiwiZGF3biIsInN0b3JtRHVzdCIsIndvb2RzbW9rZSIsInNwcmluZ1dvb2QiLCJzdGFyZHVzdCIsImJvbmpvdXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLFlBQVk7ZUFBWkE7O0lBNEJiLE9BZUU7ZUFmRjs7SUFsQmFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGdCQUFnQjtlQUFoQkE7O0lBY0FDLDBCQUEwQjtlQUExQkE7O0lBSkFDLHNCQUFzQjtlQUF0QkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7O0lBSUFDLG9DQUFvQztlQUFwQ0E7O0lBRkFDLCtCQUErQjtlQUEvQkE7O0lBUkFDLHlCQUF5QjtlQUF6QkE7O0lBSUFDLDBCQUEwQjtlQUExQkE7O0lBUkFDLHFCQUFxQjtlQUFyQkE7O0lBSkFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGdCQUFnQjtlQUFoQkE7O0lBSUFDLGtCQUFrQjtlQUFsQkE7OztzQkFWc0I7dUJBRWdEO0FBRTVFLElBQU1iLGVBQWVjLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUYsbUJBQW1CRSwwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1aLG1CQUFtQmEsZ0JBQU87QUFFaEMsSUFBTUYscUJBQXFCRSxnQkFBTztBQUVsQyxJQUFNSix1QkFBdUJLLGFBQUk7QUFFakMsSUFBTWYsdUJBQXVCZ0Isa0JBQVM7QUFFdEMsSUFBTVAsd0JBQXdCUSxrQkFBUztBQUV2QyxJQUFNZCx5QkFBeUJXLGdCQUFPO0FBRXRDLElBQU1QLDRCQUE0QlcsbUJBQVU7QUFFNUMsSUFBTWhCLDZCQUE2QmMsa0JBQVM7QUFFNUMsSUFBTVIsNkJBQTZCVyxpQkFBUTtBQUUzQyxJQUFNZixrQ0FBa0NlLGlCQUFRO0FBRWhELElBQU1iLGtDQUFrQ1ksbUJBQVU7QUFFbEQsSUFBTWIsdUNBQXVDZSxnQkFBTztJQUUzRCxXQUFlO0lBQ2JyQixjQUFBQTtJQUNBWSxrQkFBQUE7SUFDQVYsa0JBQUFBO0lBQ0FXLG9CQUFBQTtJQUNBRixzQkFBQUE7SUFDQVYsc0JBQUFBO0lBQ0FTLHVCQUFBQTtJQUNBTix3QkFBQUE7SUFDQUksMkJBQUFBO0lBQ0FMLDRCQUFBQTtJQUNBTSw0QkFBQUE7SUFDQUosaUNBQUFBO0lBQ0FFLGlDQUFBQTtJQUNBRCxzQ0FBQUE7QUFDRiJ9