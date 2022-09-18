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
    commonTitleButtonSVGColour: function() {
        return commonTitleButtonSVGColour;
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
    commonScrollbarThumbBorderColour: function() {
        return commonScrollbarThumbBorderColour;
    },
    commonScrollbarTrackBackgroundColour: function() {
        return commonScrollbarTrackBackgroundColour;
    },
    commonScrollbarThumbBackgroundColour: function() {
        return commonScrollbarThumbBackgroundColour;
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
var commonTitleButtonSVGColour = _colours.emperor;
var commonInputBackgroundColour = _colours.bonjour;
var commonSelectBackgroundColour = _colours.bonjour;
var commonButtonBackgroundColour = _colours.bonjour;
var commonDisabledButtonColour = _colours.stormDust;
var commonDisabledInputColour = _colours.stormDust;
var commonScrollbarThumbBorderColour = _colours.dawn;
var commonScrollbarTrackBackgroundColour = _colours.dawn;
var commonScrollbarThumbBackgroundColour = _colours.stormDust;
var _default = {
    commonColour: commonColour,
    clearConsoleColour: clearConsoleColour,
    commonBorderColour: commonBorderColour,
    commonBackgroundColour: commonBackgroundColour,
    commonTitleButtonSVGColour: commonTitleButtonSVGColour,
    commonInputBackgroundColour: commonInputBackgroundColour,
    commonSelectBackgroundColour: commonSelectBackgroundColour,
    commonButtonBackgroundColour: commonButtonBackgroundColour,
    commonDisabledButtonColour: commonDisabledButtonColour,
    commonDisabledInputColour: commonDisabledInputColour,
    commonScrollbarThumbBorderColour: commonScrollbarThumbBorderColour,
    commonScrollbarTrackBackgroundColour: commonScrollbarTrackBackgroundColour,
    commonScrollbarThumbBackgroundColour: commonScrollbarThumbBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCB3b29kc21va2UsIHN0b3JtRHVzdCwgd2FsbnV0LCBlbXBlcm9yIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29uc29sZUNvbG91ciA9IHdhbG51dDsgLy8vXG5cbmV4cG9ydCBjb25zdCBjb21tb25Cb3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25CYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblRpdGxlQnV0dG9uU1ZHQ29sb3VyID0gZW1wZXJvcjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21tb25Db2xvdXIsXG4gIGNsZWFyQ29uc29sZUNvbG91cixcbiAgY29tbW9uQm9yZGVyQ29sb3VyLFxuICBjb21tb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25UaXRsZUJ1dHRvblNWR0NvbG91cixcbiAgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91cixcbiAgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91cixcbiAgY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImNvbW1vbkNvbG91ciIsImNsZWFyQ29uc29sZUNvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25UaXRsZUJ1dHRvblNWR0NvbG91ciIsImNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciIsImNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25CdXR0b25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIiLCJjb21tb25EaXNhYmxlZElucHV0Q29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVGh1bWJCb3JkZXJDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJ3b29kc21va2UiLCJ3YWxudXQiLCJzdG9ybUR1c3QiLCJkYXduIiwiZW1wZXJvciIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFJQUEsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFFbEJDLGtCQUFrQjtlQUFsQkEsa0JBQWtCOztJQUVsQkMsc0JBQXNCO2VBQXRCQSxzQkFBc0I7O0lBRXRCQywwQkFBMEI7ZUFBMUJBLDBCQUEwQjs7SUFFMUJDLDJCQUEyQjtlQUEzQkEsMkJBQTJCOztJQUUzQkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBRTVCQyw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7SUFFNUJDLDBCQUEwQjtlQUExQkEsMEJBQTBCOztJQUUxQkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXpCQyxnQ0FBZ0M7ZUFBaENBLGdDQUFnQzs7SUFFaENDLG9DQUFvQztlQUFwQ0Esb0NBQW9DOztJQUVwQ0Msb0NBQW9DO2VBQXBDQSxvQ0FBb0M7O0lBRWpELE9BY0U7ZUFkRixRQWNFOzs7dUJBMUNtRSxZQUFZO0FBRTFFLElBQU1aLFlBQVksR0FBR2EsUUFBUyxVQUFBLEFBQUM7QUFFL0IsSUFBTVosa0JBQWtCLEdBQUdhLFFBQU0sT0FBQSxBQUFDLEVBQUMsR0FBRztBQUV0QyxJQUFNWixrQkFBa0IsR0FBR2EsUUFBUyxVQUFBLEFBQUM7QUFFckMsSUFBTVosc0JBQXNCLEdBQUdhLFFBQUksS0FBQSxBQUFDO0FBRXBDLElBQU1aLDBCQUEwQixHQUFHYSxRQUFPLFFBQUEsQUFBQztBQUUzQyxJQUFNWiwyQkFBMkIsR0FBR2EsUUFBTyxRQUFBLEFBQUM7QUFFNUMsSUFBTVosNEJBQTRCLEdBQUdZLFFBQU8sUUFBQSxBQUFDO0FBRTdDLElBQU1YLDRCQUE0QixHQUFHVyxRQUFPLFFBQUEsQUFBQztBQUU3QyxJQUFNViwwQkFBMEIsR0FBR08sUUFBUyxVQUFBLEFBQUM7QUFFN0MsSUFBTU4seUJBQXlCLEdBQUdNLFFBQVMsVUFBQSxBQUFDO0FBRTVDLElBQU1MLGdDQUFnQyxHQUFHTSxRQUFJLEtBQUEsQUFBQztBQUU5QyxJQUFNTCxvQ0FBb0MsR0FBR0ssUUFBSSxLQUFBLEFBQUM7QUFFbEQsSUFBTUosb0NBQW9DLEdBQUdHLFFBQVMsVUFBQSxBQUFDO0lBRTlELFFBY0UsR0FkYTtJQUNiZixZQUFZLEVBQVpBLFlBQVk7SUFDWkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLGtCQUFrQixFQUFsQkEsa0JBQWtCO0lBQ2xCQyxzQkFBc0IsRUFBdEJBLHNCQUFzQjtJQUN0QkMsMEJBQTBCLEVBQTFCQSwwQkFBMEI7SUFDMUJDLDJCQUEyQixFQUEzQkEsMkJBQTJCO0lBQzNCQyw0QkFBNEIsRUFBNUJBLDRCQUE0QjtJQUM1QkMsNEJBQTRCLEVBQTVCQSw0QkFBNEI7SUFDNUJDLDBCQUEwQixFQUExQkEsMEJBQTBCO0lBQzFCQyx5QkFBeUIsRUFBekJBLHlCQUF5QjtJQUN6QkMsZ0NBQWdDLEVBQWhDQSxnQ0FBZ0M7SUFDaENDLG9DQUFvQyxFQUFwQ0Esb0NBQW9DO0lBQ3BDQyxvQ0FBb0MsRUFBcENBLG9DQUFvQztDQUNyQyJ9