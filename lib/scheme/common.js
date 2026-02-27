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
    get cancelCharacterMapFill () {
        return cancelCharacterMapFill;
    },
    get clearConsoleFill () {
        return clearConsoleFill;
    },
    get commonBackgroundColour () {
        return commonBackgroundColour;
    },
    get commonBorderColour () {
        return commonBorderColour;
    },
    get commonButtonBackgroundColour () {
        return commonButtonBackgroundColour;
    },
    get commonColour () {
        return commonColour;
    },
    get commonDisabledButtonColour () {
        return commonDisabledButtonColour;
    },
    get commonDisabledFill () {
        return commonDisabledFill;
    },
    get commonDisabledInputColour () {
        return commonDisabledInputColour;
    },
    get commonFill () {
        return commonFill;
    },
    get commonInputBackgroundColour () {
        return commonInputBackgroundColour;
    },
    get commonInputSelectedBackgroundColour () {
        return commonInputSelectedBackgroundColour;
    },
    get commonInputSelectedColour () {
        return commonInputSelectedColour;
    },
    get commonScrollbarCornerBackgroundColour () {
        return commonScrollbarCornerBackgroundColour;
    },
    get commonScrollbarThumbBackgroundColour () {
        return commonScrollbarThumbBackgroundColour;
    },
    get commonScrollbarTrackBackgroundColour () {
        return commonScrollbarTrackBackgroundColour;
    },
    get commonSelectBackgroundColour () {
        return commonSelectBackgroundColour;
    },
    get default () {
        return _default;
    },
    get glyphUnicodeCharacterBackgroundColour () {
        return glyphUnicodeCharacterBackgroundColour;
    },
    get glyphUnicodeCharacterColour () {
        return glyphUnicodeCharacterColour;
    },
    get hideReleasesCrossFill () {
        return hideReleasesCrossFill;
    },
    get selectedGlyphUnicodeCharacterColour () {
        return selectedGlyphUnicodeCharacterColour;
    },
    get showReleasesCrossFill () {
        return showReleasesCrossFill;
    },
    get tooltipBackgroundColour () {
        return tooltipBackgroundColour;
    }
});
const _colours = require("../colours");
const commonFill = _colours.tuatara;
const commonColour = _colours.woodsmoke;
const commonDisabledFill = _colours.stormDust;
const commonBorderColour = _colours.stormDust;
const commonBackgroundColour = _colours.dawn;
const commonInputSelectedColour = _colours.springWood;
const commonInputBackgroundColour = _colours.bonjour;
const commonInputSelectedBackgroundColour = _colours.woodsmoke;
const commonSelectBackgroundColour = _colours.bonjour;
const commonButtonBackgroundColour = _colours.bonjour;
const commonDisabledInputColour = _colours.stormDust;
const commonDisabledButtonColour = _colours.stormDust;
const commonScrollbarThumbBackgroundColour = _colours.naturalGray;
const commonScrollbarTrackBackgroundColour = _colours.gainsborough;
const commonScrollbarCornerBackgroundColour = _colours.gainsborough;
const clearConsoleFill = _colours.walnut;
const showReleasesCrossFill = _colours.woodland;
const hideReleasesCrossFill = _colours.walnut;
const cancelCharacterMapFill = _colours.walnut;
const tooltipBackgroundColour = _colours.bianca;
const glyphUnicodeCharacterColour = _colours.stardust;
const selectedGlyphUnicodeCharacterColour = _colours.bonjour;
const glyphUnicodeCharacterBackgroundColour = _colours.woodsmoke;
const _default = {
    commonFill,
    commonColour,
    commonDisabledFill,
    commonBorderColour,
    commonBackgroundColour,
    commonInputSelectedColour,
    commonInputBackgroundColour,
    commonInputSelectedBackgroundColour,
    commonSelectBackgroundColour,
    commonButtonBackgroundColour,
    commonDisabledInputColour,
    commonDisabledButtonColour,
    commonScrollbarThumbBackgroundColour,
    commonScrollbarTrackBackgroundColour,
    commonScrollbarCornerBackgroundColour,
    clearConsoleFill,
    showReleasesCrossFill,
    hideReleasesCrossFill,
    cancelCharacterMapFill,
    tooltipBackgroundColour,
    glyphUnicodeCharacterColour,
    selectedGlyphUnicodeCharacterColour,
    glyphUnicodeCharacterBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvY29tbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkYXduLCBiaWFuY2EsIHdhbG51dCwgdHVhdGFyYSwgYm9uam91ciwgd29vZGxhbmQsIHN0YXJkdXN0LCB3b29kc21va2UsIHN0b3JtRHVzdCwgc3ByaW5nV29vZCwgbmF0dXJhbEdyYXksIGdhaW5zYm9yb3VnaCB9IGZyb20gXCIuLi9jb2xvdXJzXCI7XG5cbmV4cG9ydCBjb25zdCBjb21tb25GaWxsID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkNvbG91ciA9IHdvb2RzbW9rZTtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkRpc2FibGVkRmlsbCA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJvcmRlckNvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgY29tbW9uSW5wdXRTZWxlY3RlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBjb21tb25JbnB1dEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uSW5wdXRTZWxlY3RlZEJhY2tncm91bmRDb2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZWxlY3RCYWNrZ3JvdW5kQ29sb3VyID0gYm9uam91cjtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgY29uc3QgY29tbW9uRGlzYWJsZWRJbnB1dENvbG91ciA9IHN0b3JtRHVzdDtcblxuZXhwb3J0IGNvbnN0IGNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyID0gc3Rvcm1EdXN0O1xuXG5leHBvcnQgY29uc3QgY29tbW9uU2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyID0gbmF0dXJhbEdyYXk7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIgPSBnYWluc2Jvcm91Z2g7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyID0gZ2FpbnNib3JvdWdoO1xuXG5leHBvcnQgY29uc3QgY2xlYXJDb25zb2xlRmlsbCA9IHdhbG51dDtcblxuZXhwb3J0IGNvbnN0IHNob3dSZWxlYXNlc0Nyb3NzRmlsbCA9IHdvb2RsYW5kO1xuXG5leHBvcnQgY29uc3QgaGlkZVJlbGVhc2VzQ3Jvc3NGaWxsID0gd2FsbnV0O1xuXG5leHBvcnQgY29uc3QgY2FuY2VsQ2hhcmFjdGVyTWFwRmlsbCA9IHdhbG51dDtcblxuZXhwb3J0IGNvbnN0IHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyID0gYmlhbmNhO1xuXG5leHBvcnQgY29uc3QgZ2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyID0gc3RhcmR1c3Q7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZEdseXBoVW5pY29kZUNoYXJhY3RlckNvbG91ciA9IGJvbmpvdXI7XG5cbmV4cG9ydCBjb25zdCBnbHlwaFVuaWNvZGVDaGFyYWN0ZXJCYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1vbkZpbGwsXG4gIGNvbW1vbkNvbG91cixcbiAgY29tbW9uRGlzYWJsZWRGaWxsLFxuICBjb21tb25Cb3JkZXJDb2xvdXIsXG4gIGNvbW1vbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbklucHV0U2VsZWN0ZWRDb2xvdXIsXG4gIGNvbW1vbklucHV0QmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uSW5wdXRTZWxlY3RlZEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIsXG4gIGNvbW1vbkRpc2FibGVkQnV0dG9uQ29sb3VyLFxuICBjb21tb25TY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsXG4gIGNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cixcbiAgY29tbW9uU2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cixcbiAgY2xlYXJDb25zb2xlRmlsbCxcbiAgc2hvd1JlbGVhc2VzQ3Jvc3NGaWxsLFxuICBoaWRlUmVsZWFzZXNDcm9zc0ZpbGwsXG4gIGNhbmNlbENoYXJhY3Rlck1hcEZpbGwsXG4gIHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3VyLFxuICBnbHlwaFVuaWNvZGVDaGFyYWN0ZXJDb2xvdXIsXG4gIHNlbGVjdGVkR2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyLFxuICBnbHlwaFVuaWNvZGVDaGFyYWN0ZXJCYWNrZ3JvdW5kQ29sb3VyXG59O1xuIl0sIm5hbWVzIjpbImNhbmNlbENoYXJhY3Rlck1hcEZpbGwiLCJjbGVhckNvbnNvbGVGaWxsIiwiY29tbW9uQmFja2dyb3VuZENvbG91ciIsImNvbW1vbkJvcmRlckNvbG91ciIsImNvbW1vbkJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJjb21tb25Db2xvdXIiLCJjb21tb25EaXNhYmxlZEJ1dHRvbkNvbG91ciIsImNvbW1vbkRpc2FibGVkRmlsbCIsImNvbW1vbkRpc2FibGVkSW5wdXRDb2xvdXIiLCJjb21tb25GaWxsIiwiY29tbW9uSW5wdXRCYWNrZ3JvdW5kQ29sb3VyIiwiY29tbW9uSW5wdXRTZWxlY3RlZEJhY2tncm91bmRDb2xvdXIiLCJjb21tb25JbnB1dFNlbGVjdGVkQ29sb3VyIiwiY29tbW9uU2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsImNvbW1vblNlbGVjdEJhY2tncm91bmRDb2xvdXIiLCJnbHlwaFVuaWNvZGVDaGFyYWN0ZXJCYWNrZ3JvdW5kQ29sb3VyIiwiZ2x5cGhVbmljb2RlQ2hhcmFjdGVyQ29sb3VyIiwiaGlkZVJlbGVhc2VzQ3Jvc3NGaWxsIiwic2VsZWN0ZWRHbHlwaFVuaWNvZGVDaGFyYWN0ZXJDb2xvdXIiLCJzaG93UmVsZWFzZXNDcm9zc0ZpbGwiLCJ0b29sdGlwQmFja2dyb3VuZENvbG91ciIsInR1YXRhcmEiLCJ3b29kc21va2UiLCJzdG9ybUR1c3QiLCJkYXduIiwic3ByaW5nV29vZCIsImJvbmpvdXIiLCJuYXR1cmFsR3JheSIsImdhaW5zYm9yb3VnaCIsIndhbG51dCIsIndvb2RsYW5kIiwiYmlhbmNhIiwic3RhcmR1c3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdDYUE7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQXRCQUM7ZUFBQUE7O1FBRkFDO2VBQUFBOztRQVlBQztlQUFBQTs7UUFoQkFDO2VBQUFBOztRQW9CQUM7ZUFBQUE7O1FBbEJBQztlQUFBQTs7UUFnQkFDO2VBQUFBOztRQXBCQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQVZBQztlQUFBQTs7UUE4QmI7ZUFBQTs7UUFGYUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBVkFDO2VBQUFBOztRQU1BQztlQUFBQTs7O3lCQXhDMkg7QUFFakksTUFBTWIsYUFBYWMsZ0JBQU87QUFFMUIsTUFBTWxCLGVBQWVtQixrQkFBUztBQUU5QixNQUFNakIscUJBQXFCa0Isa0JBQVM7QUFFcEMsTUFBTXRCLHFCQUFxQnNCLGtCQUFTO0FBRXBDLE1BQU12Qix5QkFBeUJ3QixhQUFJO0FBRW5DLE1BQU1kLDRCQUE0QmUsbUJBQVU7QUFFNUMsTUFBTWpCLDhCQUE4QmtCLGdCQUFPO0FBRTNDLE1BQU1qQixzQ0FBc0NhLGtCQUFTO0FBRXJELE1BQU1SLCtCQUErQlksZ0JBQU87QUFFNUMsTUFBTXhCLCtCQUErQndCLGdCQUFPO0FBRTVDLE1BQU1wQiw0QkFBNEJpQixrQkFBUztBQUUzQyxNQUFNbkIsNkJBQTZCbUIsa0JBQVM7QUFFNUMsTUFBTVgsdUNBQXVDZSxvQkFBVztBQUV4RCxNQUFNZCx1Q0FBdUNlLHFCQUFZO0FBRXpELE1BQU1qQix3Q0FBd0NpQixxQkFBWTtBQUUxRCxNQUFNN0IsbUJBQW1COEIsZUFBTTtBQUUvQixNQUFNVix3QkFBd0JXLGlCQUFRO0FBRXRDLE1BQU1iLHdCQUF3QlksZUFBTTtBQUVwQyxNQUFNL0IseUJBQXlCK0IsZUFBTTtBQUVyQyxNQUFNVCwwQkFBMEJXLGVBQU07QUFFdEMsTUFBTWYsOEJBQThCZ0IsaUJBQVE7QUFFNUMsTUFBTWQsc0NBQXNDUSxnQkFBTztBQUVuRCxNQUFNWCx3Q0FBd0NPLGtCQUFTO01BRTlELFdBQWU7SUFDYmY7SUFDQUo7SUFDQUU7SUFDQUo7SUFDQUQ7SUFDQVU7SUFDQUY7SUFDQUM7SUFDQUs7SUFDQVo7SUFDQUk7SUFDQUY7SUFDQVE7SUFDQUM7SUFDQUY7SUFDQVo7SUFDQW9CO0lBQ0FGO0lBQ0FuQjtJQUNBc0I7SUFDQUo7SUFDQUU7SUFDQUg7QUFDRiJ9