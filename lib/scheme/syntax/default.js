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
    get colour () {
        return colour;
    },
    get commentColour () {
        return commentColour;
    },
    get errorColour () {
        return errorColour;
    },
    get errorTextDecorationColour () {
        return errorTextDecorationColour;
    },
    get nonsenseColour () {
        return nonsenseColour;
    },
    get stringLiteralColour () {
        return stringLiteralColour;
    }
});
const _colours = require("../../colours");
const colour = _colours.springWood;
const errorColour = _colours.gainsborough;
const commentColour = _colours.pablo;
const nonsenseColour = _colours.pablo;
const stringLiteralColour = _colours.hokeyPokey;
const errorTextDecorationColour = _colours.pomegranate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhYmxvLCBzcHJpbmdXb29kLCBwb21lZ3JhbmF0ZSwgaG9rZXlQb2tleSwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBlcnJvckNvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IG5vbnNlbnNlQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsQ29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IGVycm9yVGV4dERlY29yYXRpb25Db2xvdXIgPSBwb21lZ3JhbmF0ZTtcbiJdLCJuYW1lcyI6WyJjb2xvdXIiLCJjb21tZW50Q29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIiwibm9uc2Vuc2VDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwic3ByaW5nV29vZCIsImdhaW5zYm9yb3VnaCIsInBhYmxvIiwiaG9rZXlQb2tleSIsInBvbWVncmFuYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJYUE7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQUZBQztlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQUVBQztlQUFBQTs7O3lCQVY0RDtBQUVsRSxNQUFNTCxTQUFTTSxtQkFBVTtBQUV6QixNQUFNSixjQUFjSyxxQkFBWTtBQUVoQyxNQUFNTixnQkFBZ0JPLGNBQUs7QUFFM0IsTUFBTUosaUJBQWlCSSxjQUFLO0FBRTVCLE1BQU1ILHNCQUFzQkksbUJBQVU7QUFFdEMsTUFBTU4sNEJBQTRCTyxvQkFBVyJ9