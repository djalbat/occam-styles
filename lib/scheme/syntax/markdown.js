"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get bulletColour () {
        return bulletColour;
    },
    get colour () {
        return colour;
    },
    get directiveColour () {
        return directiveColour;
    },
    get headingColour () {
        return headingColour;
    },
    get linkColour () {
        return linkColour;
    },
    get listingColour () {
        return listingColour;
    },
    get markerColour () {
        return markerColour;
    },
    get pathColour () {
        return pathColour;
    },
    get pathHoverColour () {
        return pathHoverColour;
    },
    get referenceColour () {
        return referenceColour;
    },
    get tableColour () {
        return tableColour;
    }
});
const _colours = require("../../colours");
const colour = _colours.gainsborough;
const pathColour = _colours.celery;
const linkColour = _colours.stardust;
const tableColour = _colours.sycamore;
const markerColour = _colours.spanishGreen;
const bulletColour = _colours.spanishGreen;
const headingColour = _colours.spanishGreen;
const listingColour = _colours.stardust;
const referenceColour = _colours.stardust;
const directiveColour = _colours.cadetBlue;
const pathHoverColour = _colours.hokeyPokey;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L21hcmtkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjZWxlcnksIHN0YXJkdXN0LCBzeWNhbW9yZSwgY2FkZXRCbHVlLCBob2tleVBva2V5LCBzcGFuaXNoR3JlZW4sIGdhaW5zYm9yb3VnaCB9IGZyb20gXCIuLi8uLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBwYXRoQ29sb3VyID0gY2VsZXJ5O1xuXG5leHBvcnQgY29uc3QgbGlua0NvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgdGFibGVDb2xvdXIgPSBzeWNhbW9yZTtcblxuZXhwb3J0IGNvbnN0IG1hcmtlckNvbG91ciA9IHNwYW5pc2hHcmVlbjtcblxuZXhwb3J0IGNvbnN0IGJ1bGxldENvbG91ciA9IHNwYW5pc2hHcmVlbjtcblxuZXhwb3J0IGNvbnN0IGhlYWRpbmdDb2xvdXIgPSBzcGFuaXNoR3JlZW47XG5cbmV4cG9ydCBjb25zdCBsaXN0aW5nQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VDb2xvdXIgPSBzdGFyZHVzdDtcblxuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHBhdGhIb3ZlckNvbG91ciA9IGhva2V5UG9rZXk7XG4iXSwibmFtZXMiOlsiYnVsbGV0Q29sb3VyIiwiY29sb3VyIiwiZGlyZWN0aXZlQ29sb3VyIiwiaGVhZGluZ0NvbG91ciIsImxpbmtDb2xvdXIiLCJsaXN0aW5nQ29sb3VyIiwibWFya2VyQ29sb3VyIiwicGF0aENvbG91ciIsInBhdGhIb3ZlckNvbG91ciIsInJlZmVyZW5jZUNvbG91ciIsInRhYmxlQ29sb3VyIiwiZ2FpbnNib3JvdWdoIiwiY2VsZXJ5Iiwic3RhcmR1c3QiLCJzeWNhbW9yZSIsInNwYW5pc2hHcmVlbiIsImNhZGV0Qmx1ZSIsImhva2V5UG9rZXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWNhQTtlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQVVBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQWtCQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQVZBQztlQUFBQTs7O3lCQVJpRjtBQUV2RixNQUFNVCxTQUFTVSxxQkFBWTtBQUUzQixNQUFNSixhQUFhSyxlQUFNO0FBRXpCLE1BQU1SLGFBQWFTLGlCQUFRO0FBRTNCLE1BQU1ILGNBQWNJLGlCQUFRO0FBRTVCLE1BQU1SLGVBQWVTLHFCQUFZO0FBRWpDLE1BQU1mLGVBQWVlLHFCQUFZO0FBRWpDLE1BQU1aLGdCQUFnQlkscUJBQVk7QUFFbEMsTUFBTVYsZ0JBQWdCUSxpQkFBUTtBQUU5QixNQUFNSixrQkFBa0JJLGlCQUFRO0FBRWhDLE1BQU1YLGtCQUFrQmMsa0JBQVM7QUFFakMsTUFBTVIsa0JBQWtCUyxtQkFBVSJ9