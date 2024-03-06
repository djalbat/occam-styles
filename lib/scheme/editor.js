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
var menuButtonBorderColour = _colours.tuatara;
var menuButtonBackgroundColour = _colours.stormDust;
var tabsActiveBackgroundColour = _colours.stardust;
var menuButtonHoverBackgroundColour = _colours.stardust;
var menuButtonPreviewBackgroundColour = _colours.snowWhite;
var menuButtonHoverPreviewBackgroundColour = _colours.bonjour;
var _default = {
    borderColour: borderColour,
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    menuButtonBorderColour: menuButtonBorderColour,
    menuButtonBackgroundColour: menuButtonBackgroundColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    menuButtonHoverBackgroundColour: menuButtonHoverBackgroundColour,
    menuButtonPreviewBackgroundColour: menuButtonPreviewBackgroundColour,
    menuButtonHoverPreviewBackgroundColour: menuButtonHoverPreviewBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UsIHNub3dXaGl0ZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic0JvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCB0YWJzUmVhZE9ubHlDb2xvdXIgPSB0dWF0YXJhO1xuXG5leHBvcnQgY29uc3QgdGFic0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgdGFic0Fycm93QnV0dG9uQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkJvcmRlckNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uSG92ZXJCYWNrZ3JvdW5kQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uUHJldmlld0JhY2tncm91bmRDb2xvdXIgPSBzbm93V2hpdGU7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uSG92ZXJQcmV2aWV3QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYm9yZGVyQ29sb3VyLFxuICB0YWJzQm9yZGVyQ29sb3VyLFxuICB0YWJzUmVhZE9ubHlDb2xvdXIsXG4gIHRhYnNCYWNrZ3JvdW5kQ29sb3VyLFxuICB0YWJzQXJyb3dCdXR0b25Db2xvdXIsXG4gIG1lbnVCdXR0b25Cb3JkZXJDb2xvdXIsXG4gIG1lbnVCdXR0b25CYWNrZ3JvdW5kQ29sb3VyLFxuICB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvblByZXZpZXdCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJQcmV2aWV3QmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJib3JkZXJDb2xvdXIiLCJtZW51QnV0dG9uQmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25Cb3JkZXJDb2xvdXIiLCJtZW51QnV0dG9uSG92ZXJCYWNrZ3JvdW5kQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyUHJldmlld0JhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uUHJldmlld0JhY2tncm91bmRDb2xvdXIiLCJ0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91ciIsInRhYnNBcnJvd0J1dHRvbkNvbG91ciIsInRhYnNCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0JvcmRlckNvbG91ciIsInRhYnNSZWFkT25seUNvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsInR1YXRhcmEiLCJkYXduIiwid29vZHNtb2tlIiwic3Rvcm1EdXN0Iiwic3RhcmR1c3QiLCJzbm93V2hpdGUiLCJib25qb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsWUFBWTtlQUFaQTs7SUFzQmIsT0FZRTtlQVpGOztJQVZhQywwQkFBMEI7ZUFBMUJBOztJQUZBQyxzQkFBc0I7ZUFBdEJBOztJQU1BQywrQkFBK0I7ZUFBL0JBOztJQUlBQyxzQ0FBc0M7ZUFBdENBOztJQUZBQyxpQ0FBaUM7ZUFBakNBOztJQUpBQywwQkFBMEI7ZUFBMUJBOztJQU5BQyxxQkFBcUI7ZUFBckJBOztJQUZBQyxvQkFBb0I7ZUFBcEJBOztJQUpBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOzs7c0JBUnNCO3VCQUUrQztBQUUzRSxJQUFNVixlQUFlVywwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1GLG1CQUFtQkUsMEJBQWtCLEVBQUUsR0FBRztBQUVoRCxJQUFNRCxxQkFBcUJFLGdCQUFPO0FBRWxDLElBQU1KLHVCQUF1QkssYUFBSTtBQUVqQyxJQUFNTix3QkFBd0JPLGtCQUFTO0FBRXZDLElBQU1aLHlCQUF5QlUsZ0JBQU87QUFFdEMsSUFBTVgsNkJBQTZCYyxrQkFBUztBQUU1QyxJQUFNVCw2QkFBNkJVLGlCQUFRO0FBRTNDLElBQU1iLGtDQUFrQ2EsaUJBQVE7QUFFaEQsSUFBTVgsb0NBQW9DWSxrQkFBUztBQUVuRCxJQUFNYix5Q0FBeUNjLGdCQUFPO0lBRTdELFdBQWU7SUFDYmxCLGNBQUFBO0lBQ0FTLGtCQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUYsc0JBQUFBO0lBQ0FELHVCQUFBQTtJQUNBTCx3QkFBQUE7SUFDQUQsNEJBQUFBO0lBQ0FLLDRCQUFBQTtJQUNBSCxpQ0FBQUE7SUFDQUUsbUNBQUFBO0lBQ0FELHdDQUFBQTtBQUNGIn0=