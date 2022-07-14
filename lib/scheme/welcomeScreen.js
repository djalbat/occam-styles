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
    colour: function() {
        return colour;
    },
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
var colour = _colours.dawn;
var linkColour = _colours.pablo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvd2VsY29tZVNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7IGJvbmpvdXIsIGRhd24sIGdhaW5zYm9yb3VnaCwgaHVudGVyR3JlZW4sIGtvcm1hLCBwYWJsbyB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgbGlua0NvbG91ciA9IHBhYmxvO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IGhlYWRpbmdDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBsb2dvRmlsbENvbG91ciA9IGh1bnRlckdyZWVuO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IGh1bnRlckdyZWVuO1xuXG5leHBvcnQgY29uc3QgYnVsbGV0UG9pbnRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGNvbnN0IGxvZ29CYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb2xvdXIsXG4gIGxpbmtDb2xvdXIsXG4gIGJvcmRlckNvbG91cixcbiAgaGVhZGluZ0NvbG91cixcbiAgbG9nb0ZpbGxDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXIsXG4gIGJ1bGxldFBvaW50Q29sb3VyLFxuICBsb2dvQmFja2dyb3VuZENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJjb2xvdXIiLCJsaW5rQ29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiaGVhZGluZ0NvbG91ciIsImxvZ29GaWxsQ29sb3VyIiwiYmFja2dyb3VuZENvbG91ciIsImJ1bGxldFBvaW50Q29sb3VyIiwibG9nb0JhY2tncm91bmRDb2xvdXIiLCJkYXduIiwicGFibG8iLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJnYWluc2Jvcm91Z2giLCJodW50ZXJHcmVlbiIsImtvcm1hIiwiYm9uam91ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQU1BQSxNQUFNO2VBQU5BLE1BQU07O0lBRU5DLFVBQVU7ZUFBVkEsVUFBVTs7SUFFVkMsWUFBWTtlQUFaQSxZQUFZOztJQUVaQyxhQUFhO2VBQWJBLGFBQWE7O0lBRWJDLGNBQWM7ZUFBZEEsY0FBYzs7SUFFZEMsZ0JBQWdCO2VBQWhCQSxnQkFBZ0I7O0lBRWhCQyxpQkFBaUI7ZUFBakJBLGlCQUFpQjs7SUFFakJDLG9CQUFvQjtlQUFwQkEsb0JBQW9COztJQUVqQyxPQVNFO2VBVEYsUUFTRTs7O3NCQTdCaUMsVUFBVTt1QkFFMEIsWUFBWTtBQUU1RSxJQUFNUCxNQUFNLEdBQUdRLFFBQUksS0FBQSxBQUFDO0FBRXBCLElBQU1QLFVBQVUsR0FBR1EsUUFBSyxNQUFBLEFBQUM7QUFFekIsSUFBTVAsWUFBWSxHQUFHUSxPQUFrQixtQkFBQSxBQUFDLEVBQUMsR0FBRztBQUU1QyxJQUFNUCxhQUFhLEdBQUdRLFFBQVksYUFBQSxBQUFDO0FBRW5DLElBQU1QLGNBQWMsR0FBR1EsUUFBVyxZQUFBLEFBQUM7QUFFbkMsSUFBTVAsZ0JBQWdCLEdBQUdPLFFBQVcsWUFBQSxBQUFDO0FBRXJDLElBQU1OLGlCQUFpQixHQUFHTyxRQUFLLE1BQUEsQUFBQztBQUVoQyxJQUFNTixvQkFBb0IsR0FBR08sUUFBTyxRQUFBLEFBQUM7SUFFNUMsUUFTRSxHQVRhO0lBQ2JkLE1BQU0sRUFBTkEsTUFBTTtJQUNOQyxVQUFVLEVBQVZBLFVBQVU7SUFDVkMsWUFBWSxFQUFaQSxZQUFZO0lBQ1pDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxjQUFjLEVBQWRBLGNBQWM7SUFDZEMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7SUFDaEJDLGlCQUFpQixFQUFqQkEsaUJBQWlCO0lBQ2pCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtDQUNyQiJ9