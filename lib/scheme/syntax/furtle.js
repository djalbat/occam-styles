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
    get booleanColour () {
        return booleanColour;
    },
    get bracketColour () {
        return bracketColour;
    },
    get disabledLabelNameColour () {
        return disabledLabelNameColour;
    },
    get disabledReferenceNameColour () {
        return disabledReferenceNameColour;
    },
    get labelNameColour () {
        return labelNameColour;
    },
    get labelNameHoverColour () {
        return labelNameHoverColour;
    },
    get nullColour () {
        return nullColour;
    },
    get operatorColour () {
        return operatorColour;
    },
    get priimaryKeywordColour () {
        return priimaryKeywordColour;
    },
    get queryColour () {
        return queryColour;
    },
    get referenceNameColour () {
        return referenceNameColour;
    },
    get referenceNameHoverColour () {
        return referenceNameHoverColour;
    },
    get secondaryKeywordColour () {
        return secondaryKeywordColour;
    },
    get specialColour () {
        return specialColour;
    },
    get symbolColour () {
        return symbolColour;
    },
    get typeColour () {
        return typeColour;
    }
});
var _colours = require("../../colours");
var typeColour = _colours.cadetBlue;
var nullColour = _colours.razzmatazz;
var queryColour = _colours.sushi;
var symbolColour = _colours.sushi;
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var booleanColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var priimaryKeywordColour = _colours.razzmatazz;
var secondaryKeywordColour = _colours.razzmatazz;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHBhYmxvLCBjZWxlcnksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenogfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IG51bGxDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgcXVlcnlDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3Qgc3BlY2lhbENvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgYm9vbGVhbkNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBvcGVyYXRvckNvbG91ciA9IHN1c2hpO1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IHByaWltYXJ5S2V5d29yZENvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlLZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJib29sZWFuQ29sb3VyIiwiYnJhY2tldENvbG91ciIsImRpc2FibGVkTGFiZWxOYW1lQ29sb3VyIiwiZGlzYWJsZWRSZWZlcmVuY2VOYW1lQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJudWxsQ29sb3VyIiwib3BlcmF0b3JDb2xvdXIiLCJwcmlpbWFyeUtleXdvcmRDb2xvdXIiLCJxdWVyeUNvbG91ciIsInJlZmVyZW5jZU5hbWVDb2xvdXIiLCJyZWZlcmVuY2VOYW1lSG92ZXJDb2xvdXIiLCJzZWNvbmRhcnlLZXl3b3JkQ29sb3VyIiwic3BlY2lhbENvbG91ciIsInN5bWJvbENvbG91ciIsInR5cGVDb2xvdXIiLCJjYWRldEJsdWUiLCJyYXp6bWF0YXp6Iiwic3VzaGkiLCJzeWNhbW9yZSIsImNlbGVyeSIsInBhYmxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnQmFBO2VBQUFBOztRQUpBQztlQUFBQTs7UUFvQkFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFkQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQWxCQUM7ZUFBQUE7O1FBWUFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFsQkFDO2VBQUFBOztRQWNBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBRkFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFKQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOzs7dUJBRnlEO0FBRS9ELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1WLGFBQWFXLG1CQUFVO0FBRTdCLElBQU1SLGNBQWNTLGNBQUs7QUFFekIsSUFBTUosZUFBZUksY0FBSztBQUUxQixJQUFNakIsZ0JBQWdCaUIsY0FBSztBQUUzQixJQUFNTCxnQkFBZ0JLLGNBQUs7QUFFM0IsSUFBTWxCLGdCQUFnQmlCLG1CQUFVO0FBRWhDLElBQU1WLGlCQUFpQlcsY0FBSztBQUU1QixJQUFNZCxrQkFBa0JlLGlCQUFRO0FBRWhDLElBQU1ULHNCQUFzQlMsaUJBQVE7QUFFcEMsSUFBTWQsdUJBQXVCZSxlQUFNO0FBRW5DLElBQU1aLHdCQUF3QlMsbUJBQVU7QUFFeEMsSUFBTUwseUJBQXlCSyxtQkFBVTtBQUV6QyxJQUFNTiwyQkFBMkJTLGVBQU07QUFFdkMsSUFBTWxCLDBCQUEwQm1CLGNBQUs7QUFFckMsSUFBTWxCLDhCQUE4QmtCLGNBQUsifQ==