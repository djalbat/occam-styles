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
    menuButtonColour: function() {
        return menuButtonColour;
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
var menuButtonColour = _colours.stormDust;
var tabsBorderColour = _common.commonBorderColour; ///
var tabsReadOnlyColour = _colours.tuatara;
var tabsBackgroundColour = _colours.dawn;
var menuButtonHoverColour = _colours.stardust;
var tabsArrowButtonColour = _colours.woodsmoke;
var tabsActiveBackgroundColour = _colours.stardust;
var menuButtonHoverPreviewColour = _colours.bonjour;
var _default = {
    borderColour: borderColour,
    menuButtonColour: menuButtonColour,
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    menuButtonHoverColour: menuButtonHoverColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    menuButtonHoverPreviewColour: menuButtonHoverPreviewColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzQm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHRhYnNSZWFkT25seUNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCB0YWJzQmFja2dyb3VuZENvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uSG92ZXJDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IHRhYnNBcnJvd0J1dHRvbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uSG92ZXJQcmV2aWV3Q29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBib3JkZXJDb2xvdXIsXG4gIG1lbnVCdXR0b25Db2xvdXIsXG4gIHRhYnNCb3JkZXJDb2xvdXIsXG4gIHRhYnNSZWFkT25seUNvbG91cixcbiAgdGFic0JhY2tncm91bmRDb2xvdXIsXG4gIG1lbnVCdXR0b25Ib3ZlckNvbG91cixcbiAgdGFic0Fycm93QnV0dG9uQ29sb3VyLFxuICB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkhvdmVyUHJldmlld0NvbG91clxufTtcbiJdLCJuYW1lcyI6WyJib3JkZXJDb2xvdXIiLCJtZW51QnV0dG9uQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyUHJldmlld0NvbG91ciIsInRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0Fycm93QnV0dG9uQ29sb3VyIiwidGFic0JhY2tncm91bmRDb2xvdXIiLCJ0YWJzQm9yZGVyQ29sb3VyIiwidGFic1JlYWRPbmx5Q29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwic3Rvcm1EdXN0IiwidHVhdGFyYSIsImRhd24iLCJzdGFyZHVzdCIsIndvb2RzbW9rZSIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1hQSxZQUFZO2VBQVpBOztJQWtCYixPQVVFO2VBVkY7O0lBaEJhQyxnQkFBZ0I7ZUFBaEJBOztJQVFBQyxxQkFBcUI7ZUFBckJBOztJQU1BQyw0QkFBNEI7ZUFBNUJBOztJQUZBQywwQkFBMEI7ZUFBMUJBOztJQUZBQyxxQkFBcUI7ZUFBckJBOztJQUpBQyxvQkFBb0I7ZUFBcEJBOztJQUpBQyxnQkFBZ0I7ZUFBaEJBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOzs7c0JBVnNCO3VCQUVvQztBQUVoRSxJQUFNUixlQUFlUywwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1SLG1CQUFtQlMsa0JBQVM7QUFFbEMsSUFBTUgsbUJBQW1CRSwwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1ELHFCQUFxQkcsZ0JBQU87QUFFbEMsSUFBTUwsdUJBQXVCTSxhQUFJO0FBRWpDLElBQU1WLHdCQUF3QlcsaUJBQVE7QUFFdEMsSUFBTVIsd0JBQXdCUyxrQkFBUztBQUV2QyxJQUFNViw2QkFBNkJTLGlCQUFRO0FBRTNDLElBQU1WLCtCQUErQlksZ0JBQU87SUFFbkQsV0FBZTtJQUNiZixjQUFBQTtJQUNBQyxrQkFBQUE7SUFDQU0sa0JBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBRixzQkFBQUE7SUFDQUosdUJBQUFBO0lBQ0FHLHVCQUFBQTtJQUNBRCw0QkFBQUE7SUFDQUQsOEJBQUFBO0FBQ0YifQ==