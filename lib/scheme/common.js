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
    commonFill: function() {
        return commonFill;
    },
    commonColour: function() {
        return commonColour;
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
    commonDisabledFill: function() {
        return commonDisabledFill;
    },
    commonDisabledInputColour: function() {
        return commonDisabledInputColour;
    },
    commonDisabledButtonColour: function() {
        return commonDisabledButtonColour;
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
    glyphColour: function() {
        return glyphColour;
    },
    clearConsoleFill: function() {
        return clearConsoleFill;
    },
    expandedGlyphColour: function() {
        return expandedGlyphColour;
    },
    tooltipBackgroundColour: function() {
        return tooltipBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _colours = require("../colours");
var commonFill = _colours.tuatara;
var commonColour = _colours.woodsmoke;
var commonBorderColour = _colours.stormDust;
var commonBackgroundColour = _colours.dawn;
var commonInputBackgroundColour = _colours.bonjour;
var commonSelectBackgroundColour = _colours.bonjour;
var commonButtonBackgroundColour = _colours.bonjour;
var commonDisabledFill = _colours.stormDust;
var commonDisabledInputColour = _colours.stormDust;
var commonDisabledButtonColour = _colours.stormDust;
var commonScrollbarThumbBorderColour = _colours.dawn;
var commonScrollbarTrackBackgroundColour = _colours.dawn;
var commonScrollbarThumbBackgroundColour = _colours.stormDust;
var glyphColour = _colours.stardust;
var clearConsoleFill = _colours.walnut;
var expandedGlyphColour = _colours.springWood;
var tooltipBackgroundColour = _colours.bianca;
var _default = {
    commonFill: commonFill,
    commonColour: commonColour,
    commonBorderColour: commonBorderColour,
    commonBackgroundColour: commonBackgroundColour,
    commonInputBackgroundColour: commonInputBackgroundColour,
    commonSelectBackgroundColour: commonSelectBackgroundColour,
    commonButtonBackgroundColour: commonButtonBackgroundColour,
    commonDisabledFill: commonDisabledFill,
    commonDisabledInputColour: commonDisabledInputColour,
    commonDisabledButtonColour: commonDisabledButtonColour,
    commonScrollbarThumbBorderColour: commonScrollbarThumbBorderColour,
    commonScrollbarTrackBackgroundColour: commonScrollbarTrackBackgroundColour,
    commonScrollbarThumbBackgroundColour: commonScrollbarThumbBackgroundColour,
    glyphColour: glyphColour,
    clearConsoleFill: clearConsoleFill,
    expandedGlyphColour: expandedGlyphColour,
    tooltipBackgroundColour: tooltipBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge2Rhd24sIGJvbmpvdXIsIGJpYW5jYSwgd29vZHNtb2tlLCBzdG9ybUR1c3QsIHdhbG51dCwgdHVhdGFyYSwgc3ByaW5nV29vZCwgc3RhcmR1c3R9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25GaWxsID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZEZpbGwgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgZ2x5cGhDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29uc29sZUZpbGwgPSB3YWxudXQ7XG5cbmV4cG9ydCBjb25zdCBleHBhbmRlZEdseXBoQ29sb3VyID0gc3ByaW5nV29vZDtcblxuZXhwb3J0IGNvbnN0IHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyID0gYmlhbmNhO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkZpbGwsXG4gIGNvbW1vbkNvbG91cixcbiAgY29tbW9uQm9yZGVyQ29sb3VyLFxuICBjb21tb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkRmlsbCxcbiAgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91cixcbiAgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgZ2x5cGhDb2xvdXIsXG4gIGNsZWFyQ29uc29sZUZpbGwsXG4gIGV4cGFuZGVkR2x5cGhDb2xvdXIsXG4gIHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImNvbW1vbkZpbGwiLCJjb21tb25Db2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJjb21tb25CYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2VsZWN0QmFja2dyb3VuZENvbG91ciIsImNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25EaXNhYmxlZEZpbGwiLCJjb21tb25EaXNhYmxlZElucHV0Q29sb3VyIiwiY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIiLCJjb21tb25TY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciIsImNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsImdseXBoQ29sb3VyIiwiY2xlYXJDb25zb2xlRmlsbCIsImV4cGFuZGVkR2x5cGhDb2xvdXIiLCJ0b29sdGlwQmFja2dyb3VuZENvbG91ciIsInR1YXRhcmEiLCJ3b29kc21va2UiLCJzdG9ybUR1c3QiLCJkYXduIiwiYm9uam91ciIsInN0YXJkdXN0Iiwid2FsbnV0Iiwic3ByaW5nV29vZCIsImJpYW5jYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSWFBLFVBQVU7ZUFBVkE7O0lBRUFDLFlBQVk7ZUFBWkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLHNCQUFzQjtlQUF0QkE7O0lBRUFDLDJCQUEyQjtlQUEzQkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBRUFDLDRCQUE0QjtlQUE1QkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7O0lBRUFDLHlCQUF5QjtlQUF6QkE7O0lBRUFDLDBCQUEwQjtlQUExQkE7O0lBRUFDLGdDQUFnQztlQUFoQ0E7O0lBRUFDLG9DQUFvQztlQUFwQ0E7O0lBRUFDLG9DQUFvQztlQUFwQ0E7O0lBRUFDLFdBQVc7ZUFBWEE7O0lBRUFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLG1CQUFtQjtlQUFuQkE7O0lBRUFDLHVCQUF1QjtlQUF2QkE7O0lBRWIsT0FrQkU7ZUFsQkY7Ozt1QkFwQ2lHO0FBRTFGLElBQU1oQixhQUFhaUI7QUFFbkIsSUFBTWhCLGVBQWVpQjtBQUVyQixJQUFNaEIscUJBQXFCaUI7QUFFM0IsSUFBTWhCLHlCQUF5QmlCO0FBRS9CLElBQU1oQiw4QkFBOEJpQjtBQUVwQyxJQUFNaEIsK0JBQStCZ0I7QUFFckMsSUFBTWYsK0JBQStCZTtBQUVyQyxJQUFNZCxxQkFBcUJZO0FBRTNCLElBQU1YLDRCQUE0Qlc7QUFFbEMsSUFBTVYsNkJBQTZCVTtBQUVuQyxJQUFNVCxtQ0FBbUNVO0FBRXpDLElBQU1ULHVDQUF1Q1M7QUFFN0MsSUFBTVIsdUNBQXVDTztBQUU3QyxJQUFNTixjQUFjUztBQUVwQixJQUFNUixtQkFBbUJTO0FBRXpCLElBQU1SLHNCQUFzQlM7QUFFNUIsSUFBTVIsMEJBQTBCUztJQUV2QyxXQUFlO0lBQ2J6QixZQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsOEJBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsNEJBQUFBO0lBQ0FDLGtDQUFBQTtJQUNBQyxzQ0FBQUE7SUFDQUMsc0NBQUFBO0lBQ0FDLGFBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBQyxxQkFBQUE7SUFDQUMseUJBQUFBO0FBQ0YifQ==