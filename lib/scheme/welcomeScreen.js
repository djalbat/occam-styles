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
var backgroundColour = _colours.woodsmoke;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvd2VsY29tZVNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tbW9uQm9yZGVyQ29sb3VyIH0gZnJvbSBcIi4uL3NjaGVtZS9jb21tb25cIjtcblxuaW1wb3J0IHsga29ybWEsIGJvbmpvdXIsIHdvb2RzbW9rZSwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ29GaWxsID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGxpbmtDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBib3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgdmVyc2lvbkNvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGhlYWRpbmdDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgY29uc3QgYnVsbGV0UG9pbnRDb2xvdXIgPSBrb3JtYTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2dvRmlsbCxcbiAgbGlua0NvbG91cixcbiAgYm9yZGVyQ29sb3VyLFxuICB2ZXJzaW9uQ29sb3VyLFxuICBoZWFkaW5nQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyLFxuICBidWxsZXRQb2ludENvbG91clxufTtcbiJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kQ29sb3VyIiwiYm9yZGVyQ29sb3VyIiwiYnVsbGV0UG9pbnRDb2xvdXIiLCJoZWFkaW5nQ29sb3VyIiwibGlua0NvbG91ciIsImxvZ29GaWxsIiwidmVyc2lvbkNvbG91ciIsImJvbmpvdXIiLCJnYWluc2Jvcm91Z2giLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ3b29kc21va2UiLCJrb3JtYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBZ0JhQTtlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQUViO2VBQUE7O1FBTmFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOzs7c0JBVnNCO3VCQUVxQjtBQUVqRCxJQUFNRCxXQUFXRSxnQkFBTztBQUV4QixJQUFNSCxhQUFhSSxxQkFBWTtBQUUvQixJQUFNUCxlQUFlUSwwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLElBQU1ILGdCQUFnQkUscUJBQVk7QUFFbEMsSUFBTUwsZ0JBQWdCSyxxQkFBWTtBQUVsQyxJQUFNUixtQkFBbUJVLGtCQUFTO0FBRWxDLElBQU1SLG9CQUFvQlMsY0FBSztJQUV0QyxXQUFlO0lBQ2JOLFVBQUFBO0lBQ0FELFlBQUFBO0lBQ0FILGNBQUFBO0lBQ0FLLGVBQUFBO0lBQ0FILGVBQUFBO0lBQ0FILGtCQUFBQTtJQUNBRSxtQkFBQUE7QUFDRiJ9