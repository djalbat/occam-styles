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
    colour: function() {
        return colour;
    },
    commentColour: function() {
        return commentColour;
    },
    errorColour: function() {
        return errorColour;
    },
    errorTextDecorationColour: function() {
        return errorTextDecorationColour;
    },
    nonsenseColour: function() {
        return nonsenseColour;
    },
    stringLiteralColour: function() {
        return stringLiteralColour;
    }
});
var _colours = require("../../colours");
var colour = _colours.springWood;
var errorColour = _colours.gainsborough;
var commentColour = _colours.pablo;
var nonsenseColour = _colours.pablo;
var stringLiteralColour = _colours.hokeyPokey;
var errorTextDecorationColour = _colours.pomegranate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2hlbWUvc3ludGF4L2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhYmxvLCBzcHJpbmdXb29kLCBwb21lZ3JhbmF0ZSwgaG9rZXlQb2tleSwgZ2FpbnNib3JvdWdoIH0gZnJvbSBcIi4uLy4uL2NvbG91cnNcIjtcblxuZXhwb3J0IGNvbnN0IGNvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBlcnJvckNvbG91ciA9IGdhaW5zYm9yb3VnaDtcblxuZXhwb3J0IGNvbnN0IGNvbW1lbnRDb2xvdXIgPSBwYWJsbztcblxuZXhwb3J0IGNvbnN0IG5vbnNlbnNlQ29sb3VyID0gcGFibG87XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdMaXRlcmFsQ29sb3VyID0gaG9rZXlQb2tleTtcblxuZXhwb3J0IGNvbnN0IGVycm9yVGV4dERlY29yYXRpb25Db2xvdXIgPSBwb21lZ3JhbmF0ZTtcbiJdLCJuYW1lcyI6WyJjb2xvdXIiLCJjb21tZW50Q29sb3VyIiwiZXJyb3JDb2xvdXIiLCJlcnJvclRleHREZWNvcmF0aW9uQ29sb3VyIiwibm9uc2Vuc2VDb2xvdXIiLCJzdHJpbmdMaXRlcmFsQ29sb3VyIiwic3ByaW5nV29vZCIsImdhaW5zYm9yb3VnaCIsInBhYmxvIiwiaG9rZXlQb2tleSIsInBvbWVncmFuYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJYUEsTUFBTTtlQUFOQTs7SUFJQUMsYUFBYTtlQUFiQTs7SUFGQUMsV0FBVztlQUFYQTs7SUFRQUMseUJBQXlCO2VBQXpCQTs7SUFKQUMsY0FBYztlQUFkQTs7SUFFQUMsbUJBQW1CO2VBQW5CQTs7O3VCQVY0RDtBQUVsRSxJQUFNTCxTQUFTTSxtQkFBVTtBQUV6QixJQUFNSixjQUFjSyxxQkFBWTtBQUVoQyxJQUFNTixnQkFBZ0JPLGNBQUs7QUFFM0IsSUFBTUosaUJBQWlCSSxjQUFLO0FBRTVCLElBQU1ILHNCQUFzQkksbUJBQVU7QUFFdEMsSUFBTU4sNEJBQTRCTyxvQkFBVyJ9