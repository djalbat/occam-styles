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
    backgroundColour: function() {
        return backgroundColour;
    },
    borderColour: function() {
        return borderColour;
    },
    bulletPointColour: function() {
        return bulletPointColour;
    },
    default: function() {
        return _default;
    },
    headingColour: function() {
        return headingColour;
    },
    linkColour: function() {
        return linkColour;
    },
    logoBackgroundColour: function() {
        return logoBackgroundColour;
    },
    logoFillColour: function() {
        return logoFillColour;
    }
});
var _common = require("../scheme/common");
var _colours = require("../colours");
var linkColour = _colours.gainsborough;
var borderColour = _common.commonBorderColour; ///
var headingColour = _colours.gainsborough;
var logoFillColour = _colours.hunterGreen;
var backgroundColour = _colours.hunterGreen;
var bulletPointColour = _colours.korma;
var logoBackgroundColour = _colours.bonjour;
var _default = {
    linkColour: linkColour,
    borderColour: borderColour,
    headingColour: headingColour,
    logoFillColour: logoFillColour,
    backgroundColour: backgroundColour,
    bulletPointColour: bulletPointColour,
    logoBackgroundColour: logoBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvd2VsY29tZVNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcblxuaW1wb3J0IHsga29ybWEsIGJvbmpvdXIsIGh1bnRlckdyZWVuLCBnYWluc2Jvcm91Z2ggfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua0NvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCBoZWFkaW5nQ29sb3VyID0gZ2FpbnNib3JvdWdoO1xuXG5leHBvcnQgY29uc3QgbG9nb0ZpbGxDb2xvdXIgPSBodW50ZXJHcmVlbjtcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBodW50ZXJHcmVlbjtcblxuZXhwb3J0IGNvbnN0IGJ1bGxldFBvaW50Q29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBjb25zdCBsb2dvQmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlua0NvbG91cixcbiAgYm9yZGVyQ29sb3VyLFxuICBoZWFkaW5nQ29sb3VyLFxuICBsb2dvRmlsbENvbG91cixcbiAgYmFja2dyb3VuZENvbG91cixcbiAgYnVsbGV0UG9pbnRDb2xvdXIsXG4gIGxvZ29CYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJidWxsZXRQb2ludENvbG91ciIsImhlYWRpbmdDb2xvdXIiLCJsaW5rQ29sb3VyIiwibG9nb0JhY2tncm91bmRDb2xvdXIiLCJsb2dvRmlsbENvbG91ciIsImdhaW5zYm9yb3VnaCIsImNvbW1vbkJvcmRlckNvbG91ciIsImh1bnRlckdyZWVuIiwia29ybWEiLCJib25qb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjYUEsZ0JBQWdCO2VBQWhCQTs7SUFOQUMsWUFBWTtlQUFaQTs7SUFRQUMsaUJBQWlCO2VBQWpCQTs7SUFJYixPQVFFO2VBUkY7O0lBVmFDLGFBQWE7ZUFBYkE7O0lBSkFDLFVBQVU7ZUFBVkE7O0lBWUFDLG9CQUFvQjtlQUFwQkE7O0lBTkFDLGNBQWM7ZUFBZEE7OztzQkFWc0I7dUJBRXVCO0FBRW5ELElBQU1GLGFBQWFHLHFCQUFZO0FBRS9CLElBQU1OLGVBQWVPLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUwsZ0JBQWdCSSxxQkFBWTtBQUVsQyxJQUFNRCxpQkFBaUJHLG9CQUFXO0FBRWxDLElBQU1ULG1CQUFtQlMsb0JBQVc7QUFFcEMsSUFBTVAsb0JBQW9CUSxjQUFLO0FBRS9CLElBQU1MLHVCQUF1Qk0sZ0JBQU87SUFFM0MsV0FBZTtJQUNiUCxZQUFBQTtJQUNBSCxjQUFBQTtJQUNBRSxlQUFBQTtJQUNBRyxnQkFBQUE7SUFDQU4sa0JBQUFBO0lBQ0FFLG1CQUFBQTtJQUNBRyxzQkFBQUE7QUFDRiJ9