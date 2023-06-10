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
    clearConsoleFill: function() {
        return clearConsoleFill;
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
var clearConsoleFill = _colours.walnut;
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
    clearConsoleFill: clearConsoleFill,
    tooltipBackgroundColour: tooltipBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCBiaWFuY2EsIHdvb2RzbW9rZSwgc3Rvcm1EdXN0LCB3YWxudXQsIHR1YXRhcmEgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5cbmV4cG9ydCBjb25zdCBjb21tb25GaWxsID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZEZpbGwgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUaHVtYkJvcmRlckNvbG91ciA9IGRhd247XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY2xlYXJDb25zb2xlRmlsbCA9IHdhbG51dDtcblxuZXhwb3J0IGNvbnN0IHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyID0gYmlhbmNhO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkZpbGwsXG4gIGNvbW1vbkNvbG91cixcbiAgY29tbW9uQm9yZGVyQ29sb3VyLFxuICBjb21tb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkRmlsbCxcbiAgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91cixcbiAgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cixcbiAgY2xlYXJDb25zb2xlRmlsbCxcbiAgdG9vbHRpcEJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiY29tbW9uRmlsbCIsImNvbW1vbkNvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbkRpc2FibGVkRmlsbCIsImNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIiLCJjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciIsImNvbW1vblNjcm9sbGJhclRodW1iQm9yZGVyQ29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwiY2xlYXJDb25zb2xlRmlsbCIsInRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyIiwidHVhdGFyYSIsIndvb2RzbW9rZSIsInN0b3JtRHVzdCIsImRhd24iLCJib25qb3VyIiwid2FsbnV0IiwiYmlhbmNhIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFLYUEsVUFBVTtlQUFWQTs7SUFFQUMsWUFBWTtlQUFaQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFFQUMsc0JBQXNCO2VBQXRCQTs7SUFFQUMsMkJBQTJCO2VBQTNCQTs7SUFFQUMsNEJBQTRCO2VBQTVCQTs7SUFFQUMsNEJBQTRCO2VBQTVCQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFFQUMseUJBQXlCO2VBQXpCQTs7SUFFQUMsMEJBQTBCO2VBQTFCQTs7SUFFQUMsZ0NBQWdDO2VBQWhDQTs7SUFFQUMsb0NBQW9DO2VBQXBDQTs7SUFFQUMsb0NBQW9DO2VBQXBDQTs7SUFFQUMsZ0JBQWdCO2VBQWhCQTs7SUFFQUMsdUJBQXVCO2VBQXZCQTs7SUFFYixPQWdCRTtlQWhCRjs7O3VCQWpDNkU7QUFHdEUsSUFBTWQsYUFBYWU7QUFFbkIsSUFBTWQsZUFBZWU7QUFFckIsSUFBTWQscUJBQXFCZTtBQUUzQixJQUFNZCx5QkFBeUJlO0FBRS9CLElBQU1kLDhCQUE4QmU7QUFFcEMsSUFBTWQsK0JBQStCYztBQUVyQyxJQUFNYiwrQkFBK0JhO0FBRXJDLElBQU1aLHFCQUFxQlU7QUFFM0IsSUFBTVQsNEJBQTRCUztBQUVsQyxJQUFNUiw2QkFBNkJRO0FBRW5DLElBQU1QLG1DQUFtQ1E7QUFFekMsSUFBTVAsdUNBQXVDTztBQUU3QyxJQUFNTix1Q0FBdUNLO0FBRTdDLElBQU1KLG1CQUFtQk87QUFFekIsSUFBTU4sMEJBQTBCTztJQUV2QyxXQUFlO0lBQ2JyQixZQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FDLDZCQUFBQTtJQUNBQyw4QkFBQUE7SUFDQUMsOEJBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBQywyQkFBQUE7SUFDQUMsNEJBQUFBO0lBQ0FDLGtDQUFBQTtJQUNBQyxzQ0FBQUE7SUFDQUMsc0NBQUFBO0lBQ0FDLGtCQUFBQTtJQUNBQyx5QkFBQUE7QUFDRiJ9