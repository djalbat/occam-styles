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
var clearConsoleColour = _colours.walnut; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCB3b29kc21va2UsIHN0b3JtRHVzdCwgd2FsbnV0IH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29uc29sZUNvbG91ciA9IHdhbG51dDsgLy8vXG5cbmV4cG9ydCBjb25zdCBjb21tb25Cb3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25CYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkNvbG91cixcbiAgY2xlYXJDb25zb2xlQ29sb3VyLFxuICBjb21tb25Cb3JkZXJDb2xvdXIsXG4gIGNvbW1vbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uU2VsZWN0QmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiY29tbW9uQ29sb3VyIiwiY2xlYXJDb25zb2xlQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwiY29tbW9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciIsImNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIiLCJjb21tb25EaXNhYmxlZElucHV0Q29sb3VyIiwid29vZHNtb2tlIiwid2FsbnV0Iiwic3Rvcm1EdXN0IiwiZGF3biIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFJQUEsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFFbEJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUVsQkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBRXRCQywyQkFBMkI7ZUFBM0JBLDJCQUEyQjs7SUFFM0JDLDRCQUE0QjtlQUE1QkEsNEJBQTRCOztJQUU1QkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBRTVCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFFMUJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQUV0QyxPQVVFO2VBVkYsUUFVRTs7O3VCQTlCMEQsWUFBWTtBQUVqRSxJQUFNUixZQUFZLEdBQUdTLFFBQVMsVUFBQSxBQUFDO0FBRS9CLElBQU1SLGtCQUFrQixHQUFHUyxRQUFNLE9BQUEsQUFBQyxFQUFDLEdBQUc7QUFFdEMsSUFBTVIsa0JBQWtCLEdBQUdTLFFBQVMsVUFBQSxBQUFDO0FBRXJDLElBQU1SLHNCQUFzQixHQUFHUyxRQUFJLEtBQUEsQUFBQztBQUVwQyxJQUFNUiwyQkFBMkIsR0FBR1MsUUFBTyxRQUFBLEFBQUM7QUFFNUMsSUFBTVIsNEJBQTRCLEdBQUdRLFFBQU8sUUFBQSxBQUFDO0FBRTdDLElBQU1QLDRCQUE0QixHQUFHTyxRQUFPLFFBQUEsQUFBQztBQUU3QyxJQUFNTiwwQkFBMEIsR0FBR0ksUUFBUyxVQUFBLEFBQUM7QUFFN0MsSUFBTUgseUJBQXlCLEdBQUdHLFFBQVMsVUFBQSxBQUFDO0lBRW5ELFFBVUUsR0FWYTtJQUNiWCxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0lBQ2xCQyxzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMsMkJBQTJCLEVBQTNCQSwyQkFBMkI7SUFDM0JDLDRCQUE0QixFQUE1QkEsNEJBQTRCO0lBQzVCQyw0QkFBNEIsRUFBNUJBLDRCQUE0QjtJQUM1QkMsMEJBQTBCLEVBQTFCQSwwQkFBMEI7SUFDMUJDLHlCQUF5QixFQUF6QkEseUJBQXlCO0NBQzFCIn0=