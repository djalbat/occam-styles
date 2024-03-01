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
    borderColour: function() {
        return borderColour;
    },
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
    }
});
var _common = require("./common");
var _colours = require("../colours");
var borderColour = _common.commonBorderColour; ///
var tabsBorderColour = _common.commonBorderColour; ///
var tabsReadOnlyColour = _colours.tuatara;
var tabsBackgroundColour = _colours.dawn;
var tabsArrowButtonColour = _colours.woodsmoke;
var tabsActiveBackgroundColour = _colours.stardust;
var _default = {
    borderColour: borderColour,
    tabsBorderColour: tabsBorderColour,
    tabsReadOnlyColour: tabsReadOnlyColour,
    tabsBackgroundColour: tabsBackgroundColour,
    tabsArrowButtonColour: tabsArrowButtonColour,
    tabsActiveBackgroundColour: tabsActiveBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi9jb21tb25cIjtcblxuaW1wb3J0IHsgZGF3biwgdHVhdGFyYSwgc3RhcmR1c3QsIHdvb2RzbW9rZSB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdGFic0JvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCB0YWJzUmVhZE9ubHlDb2xvdXIgPSB0dWF0YXJhO1xuXG5leHBvcnQgY29uc3QgdGFic0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgdGFic0Fycm93QnV0dG9uQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgdGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBib3JkZXJDb2xvdXIsXG4gIHRhYnNCb3JkZXJDb2xvdXIsXG4gIHRhYnNSZWFkT25seUNvbG91cixcbiAgdGFic0JhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgdGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwidGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIiLCJ0YWJzQXJyb3dCdXR0b25Db2xvdXIiLCJ0YWJzQmFja2dyb3VuZENvbG91ciIsInRhYnNCb3JkZXJDb2xvdXIiLCJ0YWJzUmVhZE9ubHlDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ0dWF0YXJhIiwiZGF3biIsIndvb2RzbW9rZSIsInN0YXJkdXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNYUEsWUFBWTtlQUFaQTs7SUFZYixPQU9FO2VBUEY7O0lBRmFDLDBCQUEwQjtlQUExQkE7O0lBRkFDLHFCQUFxQjtlQUFyQkE7O0lBRkFDLG9CQUFvQjtlQUFwQkE7O0lBSkFDLGdCQUFnQjtlQUFoQkE7O0lBRUFDLGtCQUFrQjtlQUFsQkE7OztzQkFSc0I7dUJBRWdCO0FBRTVDLElBQU1MLGVBQWVNLDBCQUFrQixFQUFFLEdBQUc7QUFFNUMsSUFBTUYsbUJBQW1CRSwwQkFBa0IsRUFBRSxHQUFHO0FBRWhELElBQU1ELHFCQUFxQkUsZ0JBQU87QUFFbEMsSUFBTUosdUJBQXVCSyxhQUFJO0FBRWpDLElBQU1OLHdCQUF3Qk8sa0JBQVM7QUFFdkMsSUFBTVIsNkJBQTZCUyxpQkFBUTtJQUVsRCxXQUFlO0lBQ2JWLGNBQUFBO0lBQ0FJLGtCQUFBQTtJQUNBQyxvQkFBQUE7SUFDQUYsc0JBQUFBO0lBQ0FELHVCQUFBQTtJQUNBRCw0QkFBQUE7QUFDRiJ9