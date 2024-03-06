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
    menuButtonHoverPreviewBackgroundColour: function() {
        return menuButtonHoverPreviewBackgroundColour;
    },
    menuButtonPreviewBackgroundColour: function() {
        return menuButtonPreviewBackgroundColour;
    },
    menuPreviewBackgroundColour: function() {
        return menuPreviewBackgroundColour;
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
var menuButtonBackgroundColour = _colours.stormDust;
var tabsActiveBackgroundColour = _colours.stardust;
var menuPreviewBackgroundColour = _colours.snowWhite;
var menuButtonHoverBackgroundColour = _colours.stardust;
var menuButtonPreviewBackgroundColour = _colours.snowWhite;
var menuButtonHoverPreviewBackgroundColour = _colours.bonjour;
var _default = {
    borderColour: borderColour,
    tabsBorderColour: tabsBorderColour,
    menuBorderColour: menuBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    menuBackgroundColour: menuBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    menuButtonBorderColour: menuButtonBorderColour,
    menuButtonBackgroundColour: menuButtonBackgroundColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    menuPreviewBackgroundColour: menuPreviewBackgroundColour,
    menuButtonHoverBackgroundColour: menuButtonHoverBackgroundColour,
    menuButtonPreviewBackgroundColour: menuButtonPreviewBackgroundColour,
    menuButtonHoverPreviewBackgroundColour: menuButtonHoverPreviewBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UsIHNub3dXaGl0ZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic0JvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCBtZW51Qm9yZGVyQ29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IHRhYnNSZWFkT25seUNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCB0YWJzQmFja2dyb3VuZENvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBtZW51QmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHRhYnNBcnJvd0J1dHRvbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25Cb3JkZXJDb2xvdXIgPSB0dWF0YXJhO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudVByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyID0gc25vd1doaXRlO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvblByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyID0gc25vd1doaXRlO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyUHJldmlld0JhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvcmRlckNvbG91cixcbiAgdGFic0JvcmRlckNvbG91cixcbiAgbWVudUJvcmRlckNvbG91cixcbiAgdGFic1JlYWRPbmx5Q29sb3VyLFxuICB0YWJzQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgbWVudUJ1dHRvbkJvcmRlckNvbG91cixcbiAgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51UHJldmlld0JhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25Ib3ZlckJhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25QcmV2aWV3QmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkhvdmVyUHJldmlld0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwibWVudUJhY2tncm91bmRDb2xvdXIiLCJtZW51Qm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uQm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25Ib3ZlclByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwibWVudUJ1dHRvblByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwibWVudVByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIiLCJ0YWJzQXJyb3dCdXR0b25Db2xvdXIiLCJ0YWJzQmFja2dyb3VuZENvbG91ciIsInRhYnNCb3JkZXJDb2xvdXIiLCJ0YWJzUmVhZE9ubHlDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ0dWF0YXJhIiwiZGF3biIsInN0b3JtRHVzdCIsIndvb2RzbW9rZSIsInN0YXJkdXN0Iiwic25vd1doaXRlIiwiYm9uam91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWFBLFlBQVk7ZUFBWkE7O0lBNEJiLE9BZUU7ZUFmRjs7SUFsQmFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGdCQUFnQjtlQUFoQkE7O0lBWUFDLDBCQUEwQjtlQUExQkE7O0lBRkFDLHNCQUFzQjtlQUF0QkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7O0lBSUFDLHNDQUFzQztlQUF0Q0E7O0lBRkFDLGlDQUFpQztlQUFqQ0E7O0lBSkFDLDJCQUEyQjtlQUEzQkE7O0lBRkFDLDBCQUEwQjtlQUExQkE7O0lBTkFDLHFCQUFxQjtlQUFyQkE7O0lBSkFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGdCQUFnQjtlQUFoQkE7O0lBSUFDLGtCQUFrQjtlQUFsQkE7OztzQkFWc0I7dUJBRStDO0FBRTNFLElBQU1iLGVBQWVjLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUYsbUJBQW1CRSwwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1aLG1CQUFtQmEsZ0JBQU87QUFFaEMsSUFBTUYscUJBQXFCRSxnQkFBTztBQUVsQyxJQUFNSix1QkFBdUJLLGFBQUk7QUFFakMsSUFBTWYsdUJBQXVCZ0Isa0JBQVM7QUFFdEMsSUFBTVAsd0JBQXdCUSxrQkFBUztBQUV2QyxJQUFNZCx5QkFBeUJXLGdCQUFPO0FBRXRDLElBQU1aLDZCQUE2QmMsa0JBQVM7QUFFNUMsSUFBTVIsNkJBQTZCVSxpQkFBUTtBQUUzQyxJQUFNWCw4QkFBOEJZLGtCQUFTO0FBRTdDLElBQU1mLGtDQUFrQ2MsaUJBQVE7QUFFaEQsSUFBTVosb0NBQW9DYSxrQkFBUztBQUVuRCxJQUFNZCx5Q0FBeUNlLGdCQUFPO0lBRTdELFdBQWU7SUFDYnJCLGNBQUFBO0lBQ0FZLGtCQUFBQTtJQUNBVixrQkFBQUE7SUFDQVcsb0JBQUFBO0lBQ0FGLHNCQUFBQTtJQUNBVixzQkFBQUE7SUFDQVMsdUJBQUFBO0lBQ0FOLHdCQUFBQTtJQUNBRCw0QkFBQUE7SUFDQU0sNEJBQUFBO0lBQ0FELDZCQUFBQTtJQUNBSCxpQ0FBQUE7SUFDQUUsbUNBQUFBO0lBQ0FELHdDQUFBQTtBQUNGIn0=