"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MenuDiv;
    }
});
const _easy = require("easy");
const _div = /*#__PURE__*/ _interop_require_default(require("../div"));
const _index = require("../../../index");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MenuDiv extends _easy.Element {
    childElements() {
        const ToolbarSVGs = [
            _index.ZoomInMenuSVG,
            _index.ZoomOutMenuSVG,
            _index.ResetZoomMenuSVG,
            _index.InvertColoursMenuSVG,
            _index.DraftModeMenuSVG,
            _index.PresentationModeMenuSVG,
            _index.PrettyPrinterMenuSVG,
            _index.PrettyPrinterPreviewPaneMenuSVG,
            _index.PreviewPaneMenuSVG,
            _index.PreviewPanePrettyPrinterMenuSVG,
            _index.EmbeddedModeMenuSVG,
            _index.FullScreenModeMenuSVG
        ], childElements = ToolbarSVGs.map((ToolbarSVG)=>/*#__PURE__*/ React.createElement(_div.default, null, /*#__PURE__*/ React.createElement(ToolbarSVG, null)));
        return childElements;
    }
    static tagName = "div";
    static defaultProperties = {
        className: "menu"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgWm9vbUluTWVudVNWRyxcbiAgICAgICAgIFpvb21PdXRNZW51U1ZHLFxuICAgICAgICAgUmVzZXRab29tTWVudVNWRyxcbiAgICAgICAgIERyYWZ0TW9kZU1lbnVTVkcsXG4gICAgICAgICBQcmV2aWV3UGFuZU1lbnVTVkcsXG4gICAgICAgICBFbWJlZGRlZE1vZGVNZW51U1ZHLFxuICAgICAgICAgSW52ZXJ0Q29sb3Vyc01lbnVTVkcsXG4gICAgICAgICBQcmV0dHlQcmludGVyTWVudVNWRyxcbiAgICAgICAgIEZ1bGxTY3JlZW5Nb2RlTWVudVNWRyxcbiAgICAgICAgIFByZXNlbnRhdGlvbk1vZGVNZW51U1ZHLFxuICAgICAgICAgUHJldmlld1BhbmVQcmV0dHlQcmludGVyTWVudVNWRyxcbiAgICAgICAgIFByZXR0eVByaW50ZXJQcmV2aWV3UGFuZU1lbnVTVkcgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFRvb2xiYXJTVkdzID0gW1xuICAgICAgICAgICAgWm9vbUluTWVudVNWRyxcbiAgICAgICAgICAgIFpvb21PdXRNZW51U1ZHLFxuICAgICAgICAgICAgUmVzZXRab29tTWVudVNWRyxcbiAgICAgICAgICAgIEludmVydENvbG91cnNNZW51U1ZHLFxuICAgICAgICAgICAgRHJhZnRNb2RlTWVudVNWRyxcbiAgICAgICAgICAgIFByZXNlbnRhdGlvbk1vZGVNZW51U1ZHLFxuICAgICAgICAgICAgUHJldHR5UHJpbnRlck1lbnVTVkcsXG4gICAgICAgICAgICBQcmV0dHlQcmludGVyUHJldmlld1BhbmVNZW51U1ZHLFxuICAgICAgICAgICAgUHJldmlld1BhbmVNZW51U1ZHLFxuICAgICAgICAgICAgUHJldmlld1BhbmVQcmV0dHlQcmludGVyTWVudVNWRyxcbiAgICAgICAgICAgIEVtYmVkZGVkTW9kZU1lbnVTVkcsXG4gICAgICAgICAgICBGdWxsU2NyZWVuTW9kZU1lbnVTVkdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBUb29sYmFyU1ZHcy5tYXAoKFRvb2xiYXJTVkcpID0+XG5cbiAgICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICAgIDxUb29sYmFyU1ZHIC8+XG4gICAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk1lbnVEaXYiLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsIlRvb2xiYXJTVkdzIiwiWm9vbUluTWVudVNWRyIsIlpvb21PdXRNZW51U1ZHIiwiUmVzZXRab29tTWVudVNWRyIsIkludmVydENvbG91cnNNZW51U1ZHIiwiRHJhZnRNb2RlTWVudVNWRyIsIlByZXNlbnRhdGlvbk1vZGVNZW51U1ZHIiwiUHJldHR5UHJpbnRlck1lbnVTVkciLCJQcmV0dHlQcmludGVyUHJldmlld1BhbmVNZW51U1ZHIiwiUHJldmlld1BhbmVNZW51U1ZHIiwiUHJldmlld1BhbmVQcmV0dHlQcmludGVyTWVudVNWRyIsIkVtYmVkZGVkTW9kZU1lbnVTVkciLCJGdWxsU2NyZWVuTW9kZU1lbnVTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQkE7OztlQUFxQkE7OztzQkFsQkc7NERBRVI7dUJBYWdDOzs7Ozs7QUFHakMsTUFBTUEsZ0JBQWdCQyxhQUFPO0lBQzFDQyxnQkFBZ0I7UUFDZCxNQUFNQyxjQUFjO1lBQ1pDLG9CQUFhO1lBQ2JDLHFCQUFjO1lBQ2RDLHVCQUFnQjtZQUNoQkMsMkJBQW9CO1lBQ3BCQyx1QkFBZ0I7WUFDaEJDLDhCQUF1QjtZQUN2QkMsMkJBQW9CO1lBQ3BCQyxzQ0FBK0I7WUFDL0JDLHlCQUFrQjtZQUNsQkMsc0NBQStCO1lBQy9CQywwQkFBbUI7WUFDbkJDLDRCQUFxQjtTQUN0QixFQUNEYixnQkFBZ0JDLFlBQVlhLEdBQUcsQ0FBQyxDQUFDQywyQkFFL0Isb0JBQUNDLFlBQUcsc0JBQ0Ysb0JBQUNEO1FBS1gsT0FBT2Y7SUFDVDtJQUVBLE9BQU9pQixVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=