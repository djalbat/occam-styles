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
    linkColour: linkColour,
    borderColour: borderColour,
    headingColour: headingColour,
    logoFillColour: logoFillColour,
    backgroundColour: backgroundColour,
    bulletPointColour: bulletPointColour,
    logoBackgroundColour: logoBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvd2VsY29tZVNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGtvcm1hLCBib25qb3VyLCBodW50ZXJHcmVlbiwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgaGVhZGluZ0NvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGxvZ29GaWxsQ29sb3VyID0gaHVudGVyR3JlZW47XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gaHVudGVyR3JlZW47XG5cbmV4cG9ydCBjb25zdCBidWxsZXRQb2ludENvbG91ciA9IGtvcm1hO1xuXG5leHBvcnQgY29uc3QgbG9nb0JhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpbmtDb2xvdXIsXG4gIGJvcmRlckNvbG91cixcbiAgaGVhZGluZ0NvbG91cixcbiAgbG9nb0ZpbGxDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGJ1bGxldFBvaW50Q29sb3VyLFxuICBsb2dvQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJsaW5rQ29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiaGVhZGluZ0NvbG91ciIsImxvZ29GaWxsQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsImJ1bGxldFBvaW50Q29sb3VyIiwibG9nb0JhY2tncm91bmRDb2xvdXIiLCJnYWluc2Jvcm91Z2giLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJodW50ZXJHcmVlbiIsImtvcm1hIiwiYm9uam91ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQU1BQSxVQUFVO2VBQVZBLFVBQVU7O0lBRVZDLFlBQVk7ZUFBWkEsWUFBWTs7SUFFWkMsYUFBYTtlQUFiQSxhQUFhOztJQUViQyxjQUFjO2VBQWRBLGNBQWM7O0lBRWRDLGdCQUFnQjtlQUFoQkEsZ0JBQWdCOztJQUVoQkMsaUJBQWlCO2VBQWpCQSxpQkFBaUI7O0lBRWpCQyxvQkFBb0I7ZUFBcEJBLG9CQUFvQjs7SUFFakMsT0FRRTtlQVJGLFFBUUU7OztzQkExQmlDLFVBQVU7dUJBRWEsWUFBWTtBQUUvRCxJQUFNTixVQUFVLEdBQUdPLFFBQVksYUFBQSxBQUFDO0FBRWhDLElBQU1OLFlBQVksR0FBR08sT0FBa0IsbUJBQUEsQUFBQyxFQUFDLEdBQUc7QUFFNUMsSUFBTU4sYUFBYSxHQUFHSyxRQUFZLGFBQUEsQUFBQztBQUVuQyxJQUFNSixjQUFjLEdBQUdNLFFBQVcsWUFBQSxBQUFDO0FBRW5DLElBQU1MLGdCQUFnQixHQUFHSyxRQUFXLFlBQUEsQUFBQztBQUVyQyxJQUFNSixpQkFBaUIsR0FBR0ssUUFBSyxNQUFBLEFBQUM7QUFFaEMsSUFBTUosb0JBQW9CLEdBQUdLLFFBQU8sUUFBQSxBQUFDO0lBRTVDLFFBUUUsR0FSYTtJQUNiWCxVQUFVLEVBQVZBLFVBQVU7SUFDVkMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxjQUFjLEVBQWRBLGNBQWM7SUFDZEMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEJDLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtDQUNyQiJ9