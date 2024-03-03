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
    menuButtonHoverColour: function() {
        return menuButtonHoverColour;
    },
    menuButtonHoverPreviewColour: function() {
        return menuButtonHoverPreviewColour;
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
var menuButtonHoverColour = _colours.stardust;
var tabsArrowButtonColour = _colours.woodsmoke;
var tabsActiveBackgroundColour = _colours.stardust;
var menuButtonBackgroundColour = _colours.stormDust;
var menuButtonHoverPreviewColour = _colours.bonjour;
var _default = {
    borderColour: borderColour,
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    menuButtonHoverColour: menuButtonHoverColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    menuButtonBackgroundColour: menuButtonBackgroundColour,
    menuButtonHoverPreviewColour: menuButtonHoverPreviewColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHRhYnNCb3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic1JlYWRPbmx5Q29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IHRhYnNCYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25Ib3ZlckNvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgdGFic0Fycm93QnV0dG9uQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgdGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25CYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyUHJldmlld0NvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYm9yZGVyQ29sb3VyLFxuICB0YWJzQm9yZGVyQ29sb3VyLFxuICB0YWJzUmVhZE9ubHlDb2xvdXIsXG4gIHRhYnNCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgdGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25CYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJQcmV2aWV3Q29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImJvcmRlckNvbG91ciIsIm1lbnVCdXR0b25CYWNrZ3JvdW5kQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyUHJldmlld0NvbG91ciIsInRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0Fycm93QnV0dG9uQ29sb3VyIiwidGFic0JhY2tncm91bmRDb2xvdXIiLCJ0YWJzQm9yZGVyQ29sb3VyIiwidGFic1JlYWRPbmx5Q29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwidHVhdGFyYSIsImRhd24iLCJzdGFyZHVzdCIsIndvb2RzbW9rZSIsInN0b3JtRHVzdCIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxZQUFZO2VBQVpBOztJQWtCYixPQVVFO2VBVkY7O0lBSmFDLDBCQUEwQjtlQUExQkE7O0lBTkFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLDRCQUE0QjtlQUE1QkE7O0lBSkFDLDBCQUEwQjtlQUExQkE7O0lBRkFDLHFCQUFxQjtlQUFyQkE7O0lBSkFDLG9CQUFvQjtlQUFwQkE7O0lBSkFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7OztzQkFSc0I7dUJBRW9DO0FBRWhFLElBQU1SLGVBQWVTLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUYsbUJBQW1CRSwwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1ELHFCQUFxQkUsZ0JBQU87QUFFbEMsSUFBTUosdUJBQXVCSyxhQUFJO0FBRWpDLElBQU1ULHdCQUF3QlUsaUJBQVE7QUFFdEMsSUFBTVAsd0JBQXdCUSxrQkFBUztBQUV2QyxJQUFNVCw2QkFBNkJRLGlCQUFRO0FBRTNDLElBQU1YLDZCQUE2QmEsa0JBQVM7QUFFNUMsSUFBTVgsK0JBQStCWSxnQkFBTztJQUVuRCxXQUFlO0lBQ2JmLGNBQUFBO0lBQ0FPLGtCQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUYsc0JBQUFBO0lBQ0FKLHVCQUFBQTtJQUNBRyx1QkFBQUE7SUFDQUQsNEJBQUFBO0lBQ0FILDRCQUFBQTtJQUNBRSw4QkFBQUE7QUFDRiJ9