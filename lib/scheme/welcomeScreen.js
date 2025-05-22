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
    get backgroundColour () {
        return backgroundColour;
    },
    get borderColour () {
        return borderColour;
    },
    get bulletPointColour () {
        return bulletPointColour;
    },
    get default () {
        return _default;
    },
    get headingColour () {
        return headingColour;
    },
    get linkColour () {
        return linkColour;
    },
    get logoFill () {
        return logoFill;
    },
    get versionColour () {
        return versionColour;
    }
});
var _common = require("../scheme/common");
var _colours = require("../colours");
var logoFill = _colours.bonjour;
var linkColour = _colours.gainsborough;
var borderColour = _common.commonBorderColour; ///
var versionColour = _colours.gainsborough;
var headingColour = _colours.gainsborough;
var backgroundColour = _colours.hunterGreen;
var bulletPointColour = _colours.korma;
var _default = {
    logoFill: logoFill,
    linkColour: linkColour,
    borderColour: borderColour,
    versionColour: versionColour,
    headingColour: headingColour,
    backgroundColour: backgroundColour,
    bulletPointColour: bulletPointColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvd2VsY29tZVNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcblxuaW1wb3J0IHsga29ybWEsIGJvbmpvdXIsIGh1bnRlckdyZWVuLCBnYWluc2Jvcm91Z2ggfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgbG9nb0ZpbGwgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgbGlua0NvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IGNvbW1vbkJvcmRlckNvbG91cjsgLy8vXG5cbmV4cG9ydCBjb25zdCB2ZXJzaW9uQ29sb3VyID0gZ2FpbnNib3JvdWdoO1xuXG5leHBvcnQgY29uc3QgaGVhZGluZ0NvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBodW50ZXJHcmVlbjtcblxuZXhwb3J0IGNvbnN0IGJ1bGxldFBvaW50Q29sb3VyID0ga29ybWE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nb0ZpbGwsXG4gIGxpbmtDb2xvdXIsXG4gIGJvcmRlckNvbG91cixcbiAgdmVyc2lvbkNvbG91cixcbiAgaGVhZGluZ0NvbG91cixcbiAgYmFja2dyb3VuZENvbG91cixcbiAgYnVsbGV0UG9pbnRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsImJvcmRlckNvbG91ciIsImJ1bGxldFBvaW50Q29sb3VyIiwiaGVhZGluZ0NvbG91ciIsImxpbmtDb2xvdXIiLCJsb2dvRmlsbCIsInZlcnNpb25Db2xvdXIiLCJib25qb3VyIiwiZ2FpbnNib3JvdWdoIiwiY29tbW9uQm9yZGVyQ29sb3VyIiwiaHVudGVyR3JlZW4iLCJrb3JtYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0JhQTtlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQUViO2VBQUE7O1FBTmFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOzs7c0JBVnNCO3VCQUV1QjtBQUVuRCxJQUFNRCxXQUFXRSxnQkFBTztBQUV4QixJQUFNSCxhQUFhSSxxQkFBWTtBQUUvQixJQUFNUCxlQUFlUSwwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1ILGdCQUFnQkUscUJBQVk7QUFFbEMsSUFBTUwsZ0JBQWdCSyxxQkFBWTtBQUVsQyxJQUFNUixtQkFBbUJVLG9CQUFXO0FBRXBDLElBQU1SLG9CQUFvQlMsY0FBSztJQUV0QyxXQUFlO0lBQ2JOLFVBQUFBO0lBQ0FELFlBQUFBO0lBQ0FILGNBQUFBO0lBQ0FLLGVBQUFBO0lBQ0FILGVBQUFBO0lBQ0FILGtCQUFBQTtJQUNBRSxtQkFBQUE7QUFDRiJ9