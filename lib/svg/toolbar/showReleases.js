"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ShowReleasesToolbarSVG;
    }
});
const _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
const _common = require("../../scheme/common");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ShowReleasesToolbarSVG extends _toolbar.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("g", {
            fill: `${_common.showReleasesCrossFill}`,
            transform: "translate(7, 3) rotate(45)"
        }, /*#__PURE__*/ React.createElement("rect", {
            width: "3",
            height: "2",
            x: "-1",
            y: "3"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "8",
            x: "2",
            y: "-3"
        })), /*#__PURE__*/ React.createElement("g", {
            transform: "translate(3, 7)"
        }, /*#__PURE__*/ React.createElement("rect", {
            width: "16",
            height: "2",
            x: "0",
            y: "16"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "3",
            x: "14",
            y: "13"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "3",
            x: "12",
            y: "6"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "3",
            x: "18",
            y: "6"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "7",
            x: "0",
            y: "9"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "10",
            height: "2",
            x: "0",
            y: "7"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "7",
            height: "3",
            x: "0",
            y: "4"
        }), /*#__PURE__*/ React.createElement("path", {
            d: "m 7,4 3,3 H 7 Z"
        }), /*#__PURE__*/ React.createElement("path", {
            d: "m 15.966048,1.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 15.966048,1.0000005 Z"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "7.9999995",
            height: "1.9999995",
            x: "12.000001",
            y: "3.9999998"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "7.9999995",
            height: "1.9999995",
            x: "12.000001",
            y: "9.000001"
        })));
    }
    static defaultProperties = {
        viewBox: "0 0 25 25",
        className: "show-releases"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9zaG93UmVsZWFzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBzaG93UmVsZWFzZXNDcm9zc0ZpbGwgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93UmVsZWFzZXNUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxnIGZpbGw9e2Ake3Nob3dSZWxlYXNlc0Nyb3NzRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNywgMykgcm90YXRlKDQ1KVwiPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjJcIiB4PVwiLTFcIiB5PVwiM1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiOFwiIHg9XCIyXCIgeT1cIi0zXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMywgNylcIj5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjE2XCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIzXCIgeD1cIjE0XCIgeT1cIjEzXCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIzXCIgeD1cIjEyXCIgeT1cIjZcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMThcIiB5PVwiNlwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiN1wiIHg9XCIwXCIgeT1cIjlcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiN1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiM1wiIHg9XCIwXCIgeT1cIjRcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtIDcsNCAzLDMgSCA3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtIDE1Ljk2NjA0OCwxLjAwMDAwMDUgYSAzLjExMTExMDMsMy40OTk5OTk1IDAgMCAwIC0zLjA3NzE1OSwzLjAwMDMzMzcgaCAxLjM1NzgyNiBhIDEuNzc3Nzc3NCwxLjk5OTk5OTYgMCAwIDEgMS43MTkzMzMsLTEuNTAwMTY2OSAxLjc3Nzc3NzQsMS45OTk5OTk2IDAgMCAxIDEuNzE4ODcyLDEuNTAwMTY2OSBoIDEuMzYwMTI0IEEgMy4xMTExMTAzLDMuNDk5OTk5NSAwIDAgMCAxNS45NjYwNDgsMS4wMDAwMDA1IFpcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCIzLjk5OTk5OThcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCI5LjAwMDAwMVwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdmlld0JveDogXCIwIDAgMjUgMjVcIixcbiAgICBjbGFzc05hbWU6IFwic2hvdy1yZWxlYXNlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU2hvd1JlbGVhc2VzVG9vbGJhclNWRyIsIlRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsImZpbGwiLCJzaG93UmVsZWFzZXNDcm9zc0ZpbGwiLCJ0cmFuc2Zvcm0iLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJ2aWV3Qm94IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2dFQUpFO3dCQUVlOzs7Ozs7QUFFdkIsTUFBTUEsK0JBQStCQyxnQkFBVTtJQUM1REMsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQTtZQUFFQyxNQUFNLEdBQUdDLDZCQUFxQixFQUFFO1lBQUVDLFdBQVU7eUJBQzdDLG9CQUFDQztZQUFLQyxPQUFNO1lBQUlDLFFBQU87WUFBSUMsR0FBRTtZQUFLQyxHQUFFOzBCQUNwQyxvQkFBQ0o7WUFBS0MsT0FBTTtZQUFJQyxRQUFPO1lBQUlDLEdBQUU7WUFBSUMsR0FBRTsyQkFFckMsb0JBQUNSO1lBQUVHLFdBQVU7eUJBQ1gsb0JBQUNDO1lBQUtDLE9BQU07WUFBS0MsUUFBTztZQUFJQyxHQUFFO1lBQUlDLEdBQUU7MEJBQ3BDLG9CQUFDSjtZQUFLQyxPQUFNO1lBQUlDLFFBQU87WUFBSUMsR0FBRTtZQUFLQyxHQUFFOzBCQUNwQyxvQkFBQ0o7WUFBS0MsT0FBTTtZQUFJQyxRQUFPO1lBQUlDLEdBQUU7WUFBS0MsR0FBRTswQkFDcEMsb0JBQUNKO1lBQUtDLE9BQU07WUFBSUMsUUFBTztZQUFJQyxHQUFFO1lBQUtDLEdBQUU7MEJBQ3BDLG9CQUFDSjtZQUFLQyxPQUFNO1lBQUlDLFFBQU87WUFBSUMsR0FBRTtZQUFJQyxHQUFFOzBCQUNuQyxvQkFBQ0o7WUFBS0MsT0FBTTtZQUFLQyxRQUFPO1lBQUlDLEdBQUU7WUFBSUMsR0FBRTswQkFDcEMsb0JBQUNKO1lBQUtDLE9BQU07WUFBSUMsUUFBTztZQUFJQyxHQUFFO1lBQUlDLEdBQUU7MEJBQ25DLG9CQUFDQztZQUFLQyxHQUFFOzBCQUNSLG9CQUFDRDtZQUFLQyxHQUFFOzBCQUNSLG9CQUFDTjtZQUFLQyxPQUFNO1lBQVlDLFFBQU87WUFBWUMsR0FBRTtZQUFZQyxHQUFFOzBCQUMzRCxvQkFBQ0o7WUFBS0MsT0FBTTtZQUFZQyxRQUFPO1lBQVlDLEdBQUU7WUFBWUMsR0FBRTs7SUFLbkU7SUFFQSxPQUFPRyxvQkFBb0I7UUFDekJDLFNBQVM7UUFDVEMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9