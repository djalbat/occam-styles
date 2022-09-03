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
    commonColour: function() {
        return commonColour;
    },
    clearConsoleColour: function() {
        return clearConsoleColour;
    },
    commonBorderColour: function() {
        return commonBorderColour;
    },
    commonBackgroundColour: function() {
        return commonBackgroundColour;
    },
    commonInputBackgroundColour: function() {
        return commonInputBackgroundColour;
    },
    commonSelectBackgroundColour: function() {
        return commonSelectBackgroundColour;
    },
    commonButtonBackgroundColour: function() {
        return commonButtonBackgroundColour;
    },
    commonDisabledButtonColour: function() {
        return commonDisabledButtonColour;
    },
    commonDisabledInputColour: function() {
        return commonDisabledInputColour;
    },
    default: function() {
        return _default;
    }
});
var _colours = require("../colours");
var commonColour = _colours.woodsmoke;
var clearConsoleColour = _colours.terracotta; ///
var commonBorderColour = _colours.stormDust;
var commonBackgroundColour = _colours.dawn;
var commonInputBackgroundColour = _colours.bonjour;
var commonSelectBackgroundColour = _colours.bonjour;
var commonButtonBackgroundColour = _colours.bonjour;
var commonDisabledButtonColour = _colours.stormDust;
var commonDisabledInputColour = _colours.stormDust;
var _default = {
    commonColour: commonColour,
    clearConsoleColour: clearConsoleColour,
    commonBorderColour: commonBorderColour,
    commonBackgroundColour: commonBackgroundColour,
    commonInputBackgroundColour: commonInputBackgroundColour,
    commonSelectBackgroundColour: commonSelectBackgroundColour,
    commonButtonBackgroundColour: commonButtonBackgroundColour,
    commonDisabledButtonColour: commonDisabledButtonColour,
    commonDisabledInputColour: commonDisabledInputColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCB3b29kc21va2UsIHN0b3JtRHVzdCwgdGVycmFjb3R0YSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBjbGVhckNvbnNvbGVDb2xvdXIgPSB0ZXJyYWNvdHRhOyAvLy9cblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tbW9uQ29sb3VyLFxuICBjbGVhckNvbnNvbGVDb2xvdXIsXG4gIGNvbW1vbkJvcmRlckNvbG91cixcbiAgY29tbW9uQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91cixcbiAgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJjb21tb25Db2xvdXIiLCJjbGVhckNvbnNvbGVDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJjb21tb25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2VsZWN0QmFja2dyb3VuZENvbG91ciIsImNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciIsImNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIiLCJ3b29kc21va2UiLCJ0ZXJyYWNvdHRhIiwic3Rvcm1EdXN0IiwiZGF3biIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFJQUEsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFFbEJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUVsQkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBRXRCQywyQkFBMkI7ZUFBM0JBLDJCQUEyQjs7SUFFM0JDLDRCQUE0QjtlQUE1QkEsNEJBQTRCOztJQUU1QkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBRTVCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFFMUJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV0QyxPQVVFO2VBVkYsUUFVRTs7O3VCQTlCOEQsWUFBWTtBQUVyRSxJQUFNUixZQUFZLEdBQUdTLFFBQVMsVUFBQSxBQUFDO0FBRS9CLElBQU1SLGtCQUFrQixHQUFHUyxRQUFVLFdBQUEsQUFBQyxFQUFDLEdBQUc7QUFFMUMsSUFBTVIsa0JBQWtCLEdBQUdTLFFBQVMsVUFBQSxBQUFDO0FBRXJDLElBQU1SLHNCQUFzQixHQUFHUyxRQUFJLEtBQUEsQUFBQztBQUVwQyxJQUFNUiwyQkFBMkIsR0FBR1MsUUFBTyxRQUFBLEFBQUM7QUFFNUMsSUFBTVIsNEJBQTRCLEdBQUdRLFFBQU8sUUFBQSxBQUFDO0FBRTdDLElBQU1QLDRCQUE0QixHQUFHTyxRQUFPLFFBQUEsQUFBQztBQUU3QyxJQUFNTiwwQkFBMEIsR0FBR0ksUUFBUyxVQUFBLEFBQUM7QUFFN0MsSUFBTUgseUJBQXlCLEdBQUdHLFFBQVMsVUFBQSxBQUFDO0lBRW5ELFFBVUUsR0FWYTtJQUNiWCxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0lBQ2xCQyxzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMsMkJBQTJCLEVBQTNCQSwyQkFBMkI7SUFDM0JDLDRCQUE0QixFQUE1QkEsNEJBQTRCO0lBQzVCQyw0QkFBNEIsRUFBNUJBLDRCQUE0QjtJQUM1QkMsMEJBQTBCLEVBQTFCQSwwQkFBMEI7SUFDMUJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0NBQzFCIn0=