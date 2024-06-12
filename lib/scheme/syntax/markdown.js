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
    bulletColour: function() {
        return bulletColour;
    },
    colour: function() {
        return colour;
    },
    directiveColour: function() {
        return directiveColour;
    },
    headingColour: function() {
        return headingColour;
    },
    linkColour: function() {
        return linkColour;
    },
    listingColour: function() {
        return listingColour;
    },
    markerColour: function() {
        return markerColour;
    },
    pathColour: function() {
        return pathColour;
    },
    pathHoverColour: function() {
        return pathHoverColour;
    },
    referenceColour: function() {
        return referenceColour;
    },
    tableColour: function() {
        return tableColour;
    }
});
var _colours = require("../../colours");
var colour = _colours.gainsborough;
var pathColour = _colours.celery;
var linkColour = _colours.gainsborough;
var tableColour = _colours.sycamore;
var markerColour = _colours.spanishGreen;
var bulletColour = _colours.spanishGreen;
var headingColour = _colours.spanishGreen;
var listingColour = _colours.stardust;
var referenceColour = _colours.gainsborough;
var directiveColour = _colours.cadetBlue;
var pathHoverColour = _colours.hokeyPokey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjZWxlcnksIHN0YXJkdXN0LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCBob2tleVBva2V5LCBzcGFuaXNoR3JlZW4sIGdhaW5zYm9yb3VnaCB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBwYXRoQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgbGlua0NvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IHRhYmxlQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBtYXJrZXJDb2xvdXIgPSBzcGFuaXNoR3JlZW47XG5cbmV4cG9ydCBjb25zdCBidWxsZXRDb2xvdXIgPSBzcGFuaXNoR3JlZW47XG5cbmV4cG9ydCBjb25zdCBoZWFkaW5nQ29sb3VyID0gc3BhbmlzaEdyZWVuO1xuXG5leHBvcnQgY29uc3QgbGlzdGluZ0NvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgcmVmZXJlbmNlQ29sb3VyID0gZ2FpbnNib3JvdWdoO1xuXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlQ29sb3VyID0gY2FkZXRCbHVlO1xuXG5leHBvcnQgY29uc3QgcGF0aEhvdmVyQ29sb3VyID0gaG9rZXlQb2tleTtcbiJdLCJuYW1lcyI6WyJidWxsZXRDb2xvdXIiLCJjb2xvdXIiLCJkaXJlY3RpdmVDb2xvdXIiLCJoZWFkaW5nQ29sb3VyIiwibGlua0NvbG91ciIsImxpc3RpbmdDb2xvdXIiLCJtYXJrZXJDb2xvdXIiLCJwYXRoQ29sb3VyIiwicGF0aEhvdmVyQ29sb3VyIiwicmVmZXJlbmNlQ29sb3VyIiwidGFibGVDb2xvdXIiLCJnYWluc2Jvcm91Z2giLCJjZWxlcnkiLCJzeWNhbW9yZSIsInNwYW5pc2hHcmVlbiIsInN0YXJkdXN0IiwiY2FkZXRCbHVlIiwiaG9rZXlQb2tleSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2FBLFlBQVk7ZUFBWkE7O0lBVkFDLE1BQU07ZUFBTkE7O0lBa0JBQyxlQUFlO2VBQWZBOztJQU5BQyxhQUFhO2VBQWJBOztJQVJBQyxVQUFVO2VBQVZBOztJQVVBQyxhQUFhO2VBQWJBOztJQU5BQyxZQUFZO2VBQVpBOztJQU5BQyxVQUFVO2VBQVZBOztJQWtCQUMsZUFBZTtlQUFmQTs7SUFKQUMsZUFBZTtlQUFmQTs7SUFWQUMsV0FBVztlQUFYQTs7O3VCQVJpRjtBQUV2RixJQUFNVCxTQUFTVSxxQkFBWTtBQUUzQixJQUFNSixhQUFhSyxlQUFNO0FBRXpCLElBQU1SLGFBQWFPLHFCQUFZO0FBRS9CLElBQU1ELGNBQWNHLGlCQUFRO0FBRTVCLElBQU1QLGVBQWVRLHFCQUFZO0FBRWpDLElBQU1kLGVBQWVjLHFCQUFZO0FBRWpDLElBQU1YLGdCQUFnQlcscUJBQVk7QUFFbEMsSUFBTVQsZ0JBQWdCVSxpQkFBUTtBQUU5QixJQUFNTixrQkFBa0JFLHFCQUFZO0FBRXBDLElBQU1ULGtCQUFrQmMsa0JBQVM7QUFFakMsSUFBTVIsa0JBQWtCUyxtQkFBVSJ9