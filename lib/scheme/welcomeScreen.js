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
    linkColour: function() {
        return linkColour;
    },
    borderColour: function() {
        return borderColour;
    },
    headingColour: function() {
        return headingColour;
    },
    logoFillColour: function() {
        return logoFillColour;
    },
    backgroundColour: function() {
        return backgroundColour;
    },
    bulletPointColour: function() {
        return bulletPointColour;
    },
    logoBackgroundColour: function() {
        return logoBackgroundColour;
    },
    default: function() {
        return _default;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var linkColour = _colours.gainsborough;
var borderColour = _common.commonBorderColour; ///
var headingColour = _colours.gainsborough;
var logoFillColour = _colours.hunterGreen;
var backgroundColour = _colours.hunterGreen;
var bulletPointColour = _colours.korma;
var logoBackgroundColour = _colours.bonjour;
var _default = {
    colour: colour,
    linkColour: linkColour,
    borderColour: borderColour,
    headingColour: headingColour,
    logoFillColour: logoFillColour,
    backgroundColour: backgroundColour,
    bulletPointColour: bulletPointColour,
    logoBackgroundColour: logoBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvd2VsY29tZVNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCBib25qb3VyLCBodW50ZXJHcmVlbiwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgaGVhZGluZ0NvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGxvZ29GaWxsQ29sb3VyID0gaHVudGVyR3JlZW47XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gaHVudGVyR3JlZW47XG5cbmV4cG9ydCBjb25zdCBidWxsZXRQb2ludENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3QgbG9nb0JhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG91cixcbiAgbGlua0NvbG91cixcbiAgYm9yZGVyQ29sb3VyLFxuICBoZWFkaW5nQ29sb3VyLFxuICBsb2dvRmlsbENvbG91cixcbiAgYmFja2dyb3VuZENvbG91cixcbiAgYnVsbGV0UG9pbnRDb2xvdXIsXG4gIGxvZ29CYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImxpbmtDb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJoZWFkaW5nQ29sb3VyIiwibG9nb0ZpbGxDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwiYnVsbGV0UG9pbnRDb2xvdXIiLCJsb2dvQmFja2dyb3VuZENvbG91ciIsImdhaW5zYm9yb3VnaCIsImNvbW1vbkJvcmRlckNvbG91ciIsImh1bnRlckdyZWVuIiwia29ybWEiLCJib25qb3VyIiwiY29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBTUFBLFVBQVU7ZUFBVkEsVUFBVTs7SUFFVkMsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxhQUFhO2VBQWJBLGFBQWE7O0lBRWJDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFZEMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBRWhCQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFFakJDLG9CQUFvQjtlQUFwQkEsb0JBQW9COztJQUVqQyxPQVNFO2VBVEYsUUFTRTs7O3NCQTNCaUMsVUFBVTt1QkFFYSxZQUFZO0FBRS9ELElBQU1OLFVBQVUsR0FBR08sUUFBWSxhQUFBLEFBQUM7QUFFaEMsSUFBTU4sWUFBWSxHQUFHTyxPQUFrQixtQkFBQSxBQUFDLEVBQUMsR0FBRztBQUU1QyxJQUFNTixhQUFhLEdBQUdLLFFBQVksYUFBQSxBQUFDO0FBRW5DLElBQU1KLGNBQWMsR0FBR00sUUFBVyxZQUFBLEFBQUM7QUFFbkMsSUFBTUwsZ0JBQWdCLEdBQUdLLFFBQVcsWUFBQSxBQUFDO0FBRXJDLElBQU1KLGlCQUFpQixHQUFHSyxRQUFLLE1BQUEsQUFBQztBQUVoQyxJQUFNSixvQkFBb0IsR0FBR0ssUUFBTyxRQUFBLEFBQUM7SUFFNUMsUUFTRSxHQVRhO0lBQ2JDLE1BQU0sRUFBTkEsTUFBTTtJQUNOWixVQUFVLEVBQVZBLFVBQVU7SUFDVkMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxjQUFjLEVBQWRBLGNBQWM7SUFDZEMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEJDLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtDQUNyQiJ9