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
    menuButtonPreviewBackgroundColour: function() {
        return menuButtonPreviewBackgroundColour;
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
var menuButtonPreviewBackgroundColour = _colours.snowWhite;
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
    menuButtonPreviewBackgroundColour: menuButtonPreviewBackgroundColour,
    menuButtonHoverPreviewBackgroundColour: menuButtonHoverPreviewBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UsIHNub3dXaGl0ZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic0JvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCB0YWJzUmVhZE9ubHlDb2xvdXIgPSB0dWF0YXJhO1xuXG5leHBvcnQgY29uc3QgdGFic0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgdGFic0Fycm93QnV0dG9uQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgdGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25CYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvblByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyID0gc25vd1doaXRlO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyUHJldmlld0JhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvcmRlckNvbG91cixcbiAgdGFic0JvcmRlckNvbG91cixcbiAgdGFic1JlYWRPbmx5Q29sb3VyLFxuICB0YWJzQmFja2dyb3VuZENvbG91cixcbiAgdGFic0Fycm93QnV0dG9uQ29sb3VyLFxuICB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25Ib3ZlckJhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25QcmV2aWV3QmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkhvdmVyUHJldmlld0JhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uSG92ZXJCYWNrZ3JvdW5kQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyUHJldmlld0JhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uUHJldmlld0JhY2tncm91bmRDb2xvdXIiLCJ0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91ciIsInRhYnNBcnJvd0J1dHRvbkNvbG91ciIsInRhYnNCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0JvcmRlckNvbG91ciIsInRhYnNSZWFkT25seUNvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsInR1YXRhcmEiLCJkYXduIiwid29vZHNtb2tlIiwic3RhcmR1c3QiLCJzdG9ybUR1c3QiLCJzbm93V2hpdGUiLCJib25qb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsWUFBWTtlQUFaQTs7SUFvQmIsT0FXRTtlQVhGOztJQVJhQywwQkFBMEI7ZUFBMUJBOztJQUVBQywrQkFBK0I7ZUFBL0JBOztJQUlBQyxzQ0FBc0M7ZUFBdENBOztJQUZBQyxpQ0FBaUM7ZUFBakNBOztJQU5BQywwQkFBMEI7ZUFBMUJBOztJQUZBQyxxQkFBcUI7ZUFBckJBOztJQUZBQyxvQkFBb0I7ZUFBcEJBOztJQUpBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOzs7c0JBUnNCO3VCQUUrQztBQUUzRSxJQUFNVCxlQUFlVSwwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1GLG1CQUFtQkUsMEJBQWtCLEVBQUUsR0FBRztBQUVoRCxJQUFNRCxxQkFBcUJFLGdCQUFPO0FBRWxDLElBQU1KLHVCQUF1QkssYUFBSTtBQUVqQyxJQUFNTix3QkFBd0JPLGtCQUFTO0FBRXZDLElBQU1SLDZCQUE2QlMsaUJBQVE7QUFFM0MsSUFBTWIsNkJBQTZCYyxrQkFBUztBQUU1QyxJQUFNYixrQ0FBa0NZLGlCQUFRO0FBRWhELElBQU1WLG9DQUFvQ1ksa0JBQVM7QUFFbkQsSUFBTWIseUNBQXlDYyxnQkFBTztJQUU3RCxXQUFlO0lBQ2JqQixjQUFBQTtJQUNBUSxrQkFBQUE7SUFDQUMsb0JBQUFBO0lBQ0FGLHNCQUFBQTtJQUNBRCx1QkFBQUE7SUFDQUQsNEJBQUFBO0lBQ0FKLDRCQUFBQTtJQUNBQyxpQ0FBQUE7SUFDQUUsbUNBQUFBO0lBQ0FELHdDQUFBQTtBQUNGIn0=