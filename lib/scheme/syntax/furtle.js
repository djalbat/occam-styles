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
    get bracketColour () {
        return bracketColour;
    },
    get disabledLabelNameColour () {
        return disabledLabelNameColour;
    },
    get disabledReferenceNameColour () {
        return disabledReferenceNameColour;
    },
    get keywordColour () {
        return keywordColour;
    },
    get labelNameColour () {
        return labelNameColour;
    },
    get labelNameHoverColour () {
        return labelNameHoverColour;
    },
    get operatorColour () {
        return operatorColour;
    },
    get primitiveColour () {
        return primitiveColour;
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
    get returnColour () {
        return returnColour;
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
var queryColour = _colours.sushi;
var symbolColour = _colours.sushi;
var returnColour = _colours.razzmatazz;
var bracketColour = _colours.sushi;
var specialColour = _colours.sushi;
var keywordColour = _colours.razzmatazz;
var operatorColour = _colours.sushi;
var primitiveColour = _colours.razzmatazz;
var labelNameColour = _colours.sycamore;
var referenceNameColour = _colours.sycamore;
var labelNameHoverColour = _colours.celery;
var referenceNameHoverColour = _colours.celery;
var disabledLabelNameColour = _colours.pablo;
var disabledReferenceNameColour = _colours.pablo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2Z1cnRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VzaGksIHBhYmxvLCBjZWxlcnksIHN5Y2Ftb3JlLCBjYWRldEJsdWUsIHJhenptYXRhenogfSBmcm9tIFwiLi4vLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZUNvbG91ciA9IGNhZGV0Qmx1ZTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xDb2xvdXIgPSBzdXNoaTtcblxuZXhwb3J0IGNvbnN0IHJldHVybkNvbG91ciA9IHJhenptYXRheno7XG5cbmV4cG9ydCBjb25zdCBicmFja2V0Q29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBzcGVjaWFsQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBrZXl3b3JkQ29sb3VyID0gcmF6em1hdGF6ejtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yQ29sb3VyID0gc3VzaGk7XG5cbmV4cG9ydCBjb25zdCBwcmltaXRpdmVDb2xvdXIgPSByYXp6bWF0YXp6O1xuXG5leHBvcnQgY29uc3QgbGFiZWxOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCByZWZlcmVuY2VOYW1lQ29sb3VyID0gc3ljYW1vcmU7XG5cbmV4cG9ydCBjb25zdCBsYWJlbE5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IHJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciA9IGNlbGVyeTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkTGFiZWxOYW1lQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIgPSBwYWJsbztcbiJdLCJuYW1lcyI6WyJicmFja2V0Q29sb3VyIiwiZGlzYWJsZWRMYWJlbE5hbWVDb2xvdXIiLCJkaXNhYmxlZFJlZmVyZW5jZU5hbWVDb2xvdXIiLCJrZXl3b3JkQ29sb3VyIiwibGFiZWxOYW1lQ29sb3VyIiwibGFiZWxOYW1lSG92ZXJDb2xvdXIiLCJvcGVyYXRvckNvbG91ciIsInByaW1pdGl2ZUNvbG91ciIsInF1ZXJ5Q29sb3VyIiwicmVmZXJlbmNlTmFtZUNvbG91ciIsInJlZmVyZW5jZU5hbWVIb3ZlckNvbG91ciIsInJldHVybkNvbG91ciIsInNwZWNpYWxDb2xvdXIiLCJzeW1ib2xDb2xvdXIiLCJ0eXBlQ29sb3VyIiwiY2FkZXRCbHVlIiwic3VzaGkiLCJyYXp6bWF0YXp6Iiwic3ljYW1vcmUiLCJjZWxlcnkiLCJwYWJsbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBWWFBO2VBQUFBOztRQWtCQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQWhCQUM7ZUFBQUE7O1FBTUFDO2VBQUFBOztRQUlBQztlQUFBQTs7UUFSQUM7ZUFBQUE7O1FBRUFDO2VBQUFBOztRQWRBQztlQUFBQTs7UUFrQkFDO2VBQUFBOztRQUlBQztlQUFBQTs7UUFsQkFDO2VBQUFBOztRQUlBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOzs7dUJBRnlEO0FBRS9ELElBQU1BLGFBQWFDLGtCQUFTO0FBRTVCLElBQU1QLGNBQWNRLGNBQUs7QUFFekIsSUFBTUgsZUFBZUcsY0FBSztBQUUxQixJQUFNTCxlQUFlTSxtQkFBVTtBQUUvQixJQUFNakIsZ0JBQWdCZ0IsY0FBSztBQUUzQixJQUFNSixnQkFBZ0JJLGNBQUs7QUFFM0IsSUFBTWIsZ0JBQWdCYyxtQkFBVTtBQUVoQyxJQUFNWCxpQkFBaUJVLGNBQUs7QUFFNUIsSUFBTVQsa0JBQWtCVSxtQkFBVTtBQUVsQyxJQUFNYixrQkFBa0JjLGlCQUFRO0FBRWhDLElBQU1ULHNCQUFzQlMsaUJBQVE7QUFFcEMsSUFBTWIsdUJBQXVCYyxlQUFNO0FBRW5DLElBQU1ULDJCQUEyQlMsZUFBTTtBQUV2QyxJQUFNbEIsMEJBQTBCbUIsY0FBSztBQUVyQyxJQUFNbEIsOEJBQThCa0IsY0FBSyJ9