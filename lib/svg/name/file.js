"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _name = /*#__PURE__*/ _interop_require_default(require("../../svg/name"));
const _styles = require("../../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FileNameSVG extends _name.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
            width: "14",
            height: "2",
            x: "2",
            y: "16"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "7",
            x: "14",
            y: "9"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "2",
            height: "12",
            x: "2",
            y: "4"
        }), /*#__PURE__*/ React.createElement("rect", {
            width: "7",
            height: "2",
            x: "2",
            y: "2"
        }), /*#__PURE__*/ React.createElement("path", {
            d: "m 9,2 7,7 h -7 z"
        }));
    }
    static defaultProperties = {
        className: "file"
    };
}
const _default = (0, _easywithstyle.default)(FileNameSVG)`

  padding-left: ${_styles.fileNameSVGPaddingLeft};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbmFtZS9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgTmFtZVNWRyBmcm9tIFwiLi4vLi4vc3ZnL25hbWVcIjtcblxuaW1wb3J0IHsgZmlsZU5hbWVTVkdQYWRkaW5nTGVmdCB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgRmlsZU5hbWVTVkcgZXh0ZW5kcyBOYW1lU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCIxNlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjdcIiB4PVwiMTRcIiB5PVwiOVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEyXCIgeD1cIjJcIiB5PVwiNFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiN1wiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCIyXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gOSwyIDcsNyBoIC03IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZmlsZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShGaWxlTmFtZVNWRylgXG5cbiAgcGFkZGluZy1sZWZ0OiAke2ZpbGVOYW1lU1ZHUGFkZGluZ0xlZnR9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRmlsZU5hbWVTVkciLCJOYW1lU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJmaWxlTmFtZVNWR1BhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkE7OztlQUFBOzs7c0VBMUJzQjs2REFFRjt3QkFFbUI7Ozs7OztBQUV2QyxNQUFNQSxvQkFBb0JDLGFBQU87SUFDL0JDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7WUFBS0MsT0FBTTtZQUFLQyxRQUFPO1lBQUlDLEdBQUU7WUFBSUMsR0FBRTswQkFDcEMsb0JBQUNKO1lBQUtDLE9BQU07WUFBSUMsUUFBTztZQUFJQyxHQUFFO1lBQUtDLEdBQUU7MEJBQ3BDLG9CQUFDSjtZQUFLQyxPQUFNO1lBQUlDLFFBQU87WUFBS0MsR0FBRTtZQUFJQyxHQUFFOzBCQUNwQyxvQkFBQ0o7WUFBS0MsT0FBTTtZQUFJQyxRQUFPO1lBQUlDLEdBQUU7WUFBSUMsR0FBRTswQkFDbkMsb0JBQUNDO1lBQUtDLEdBQUU7O0lBSWQ7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDYixZQUFZLENBQUM7O2dCQUV0QixFQUFFYyw4QkFBc0IsQ0FBQzs7QUFFekMsQ0FBQyJ9