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
    default: function() {
        return _default;
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
    },
    tabsWelcomeScreenTabBackgroundColour: function() {
        return tabsWelcomeScreenTabBackgroundColour;
    }
});
var _common = require("./common");
var _colours = require("../colours");
var tabsBorderColour = _common.commonBorderColour; ///
var tabsReadOnlyColour = _colours.tuatara;
var tabsBackgroundColour = _colours.dawn;
var tabsArrowButtonColour = _colours.woodsmoke;
var tabsActiveBackgroundColour = _colours.stardust;
var tabsWelcomeScreenTabBackgroundColour = _colours.gainsborough;
var _default = {
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour,
    tabsWelcomeScreenTabBackgroundColour: tabsWelcomeScreenTabBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi9jb21tb25cIjtcblxuaW1wb3J0IHsgZGF3biwgdHVhdGFyYSwgc3RhcmR1c3QsIHdvb2RzbW9rZSwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IHRhYnNCb3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic1JlYWRPbmx5Q29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IHRhYnNCYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IHRhYnNBcnJvd0J1dHRvbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzV2VsY29tZVNjcmVlblRhYkJhY2tncm91bmRDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGFic0JvcmRlckNvbG91cixcbiAgdGFic1JlYWRPbmx5Q29sb3VyLFxuICB0YWJzQmFja2dyb3VuZENvbG91cixcbiAgdGFic0Fycm93QnV0dG9uQ29sb3VyLFxuICB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91cixcbiAgdGFic1dlbGNvbWVTY3JlZW5UYWJCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbInRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0Fycm93QnV0dG9uQ29sb3VyIiwidGFic0JhY2tncm91bmRDb2xvdXIiLCJ0YWJzQm9yZGVyQ29sb3VyIiwidGFic1JlYWRPbmx5Q29sb3VyIiwidGFic1dlbGNvbWVTY3JlZW5UYWJCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwidHVhdGFyYSIsImRhd24iLCJ3b29kc21va2UiLCJzdGFyZHVzdCIsImdhaW5zYm9yb3VnaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBa0JBLE9BT0U7ZUFQRjs7SUFKYUEsMEJBQTBCO2VBQTFCQTs7SUFGQUMscUJBQXFCO2VBQXJCQTs7SUFGQUMsb0JBQW9CO2VBQXBCQTs7SUFKQUMsZ0JBQWdCO2VBQWhCQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFRQUMsb0NBQW9DO2VBQXBDQTs7O3NCQWRzQjt1QkFFOEI7QUFFMUQsSUFBTUYsbUJBQW1CRywwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1GLHFCQUFxQkcsZ0JBQU87QUFFbEMsSUFBTUwsdUJBQXVCTSxhQUFJO0FBRWpDLElBQU1QLHdCQUF3QlEsa0JBQVM7QUFFdkMsSUFBTVQsNkJBQTZCVSxpQkFBUTtBQUUzQyxJQUFNTCx1Q0FBdUNNLHFCQUFZO0lBRWhFLFdBQWU7SUFDYlIsa0JBQUFBO0lBQ0FDLG9CQUFBQTtJQUNBRixzQkFBQUE7SUFDQUQsdUJBQUFBO0lBQ0FELDRCQUFBQTtJQUNBSyxzQ0FBQUE7QUFDRiJ9