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
var commonBorderColour = _colours.stormDust;
var commonBackgroundColour = _colours.dawn;
var commonInputBackgroundColour = _colours.bonjour;
var commonSelectBackgroundColour = _colours.bonjour;
var commonButtonBackgroundColour = _colours.bonjour;
var commonDisabledButtonColour = _colours.stormDust;
var commonDisabledInputColour = _colours.stormDust;
var _default = {
    commonColour: commonColour,
    commonBorderColour: commonBorderColour,
    commonBackgroundColour: commonBackgroundColour,
    commonInputBackgroundColour: commonInputBackgroundColour,
    commonSelectBackgroundColour: commonSelectBackgroundColour,
    commonButtonBackgroundColour: commonButtonBackgroundColour,
    commonDisabledButtonColour: commonDisabledButtonColour,
    commonDisabledInputColour: commonDisabledInputColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBib25qb3VyLCB3b29kc21va2UsIHN0b3JtRHVzdCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBjb21tb25Cb3JkZXJDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25CYWNrZ3JvdW5kQ29sb3VyID0gZGF3bjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRCdXR0b25Db2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkNvbG91cixcbiAgY29tbW9uQm9yZGVyQ29sb3VyLFxuICBjb21tb25CYWNrZ3JvdW5kQ29sb3VyLFxuICBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyLFxuICBjb21tb25EaXNhYmxlZElucHV0Q29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImNvbW1vbkNvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uQnV0dG9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyIiwiY29tbW9uRGlzYWJsZWRJbnB1dENvbG91ciIsIndvb2RzbW9rZSIsInN0b3JtRHVzdCIsImRhd24iLCJib25qb3VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBSUFBLFlBQVk7ZUFBWkEsWUFBWTs7SUFFWkMsa0JBQWtCO2VBQWxCQSxrQkFBa0I7O0lBRWxCQyxzQkFBc0I7ZUFBdEJBLHNCQUFzQjs7SUFFdEJDLDJCQUEyQjtlQUEzQkEsMkJBQTJCOztJQUUzQkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBRTVCQyw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7SUFFNUJDLDBCQUEwQjtlQUExQkEsMEJBQTBCOztJQUUxQkMseUJBQXlCO2VBQXpCQSx5QkFBeUI7O0lBRXRDLE9BU0U7ZUFURixRQVNFOzs7dUJBM0JrRCxZQUFZO0FBRXpELElBQU1QLFlBQVksR0FBR1EsUUFBUyxVQUFBLEFBQUM7QUFFL0IsSUFBTVAsa0JBQWtCLEdBQUdRLFFBQVMsVUFBQSxBQUFDO0FBRXJDLElBQU1QLHNCQUFzQixHQUFHUSxRQUFJLEtBQUEsQUFBQztBQUVwQyxJQUFNUCwyQkFBMkIsR0FBR1EsUUFBTyxRQUFBLEFBQUM7QUFFNUMsSUFBTVAsNEJBQTRCLEdBQUdPLFFBQU8sUUFBQSxBQUFDO0FBRTdDLElBQU1OLDRCQUE0QixHQUFHTSxRQUFPLFFBQUEsQUFBQztBQUU3QyxJQUFNTCwwQkFBMEIsR0FBR0csUUFBUyxVQUFBLEFBQUM7QUFFN0MsSUFBTUYseUJBQXlCLEdBQUdFLFFBQVMsVUFBQSxBQUFDO0lBRW5ELFFBU0UsR0FUYTtJQUNiVCxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFDbEJDLHNCQUFzQixFQUF0QkEsc0JBQXNCO0lBQ3RCQywyQkFBMkIsRUFBM0JBLDJCQUEyQjtJQUMzQkMsNEJBQTRCLEVBQTVCQSw0QkFBNEI7SUFDNUJDLDRCQUE0QixFQUE1QkEsNEJBQTRCO0lBQzVCQywwQkFBMEIsRUFBMUJBLDBCQUEwQjtJQUMxQkMseUJBQXlCLEVBQXpCQSx5QkFBeUI7Q0FDMUIifQ==