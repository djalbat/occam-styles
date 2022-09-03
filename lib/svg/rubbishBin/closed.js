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
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _common = require("../../scheme/common");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  fill: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ClosedRubbishBinSVG = function(properties) {
    var className = properties.className;
    return /*#__PURE__*/ React.createElement("svg", {
        width: "25mm",
        height: "25mm",
        viewBox: "0 0 25 25",
        className: "".concat(className, " closed-rubbish-bin")
    }, /*#__PURE__*/ React.createElement("g", {
        stroke: "none"
    }, /*#__PURE__*/ React.createElement("rect", {
        width: "13",
        height: "2",
        x: "4",
        y: "23"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "2",
        height: "13",
        x: "2",
        y: "10"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "2",
        height: "13",
        x: "17",
        y: "10"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 2,23 4,25 v -2 z"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "m 17,23 v 2 l 2,-2 z"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "21",
        height: "2",
        x: "0",
        y: "8"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "9",
        height: "2",
        x: "6",
        y: "4"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 4,4 5,8 c 0,0 2,0 2,0 L 6,4 Z"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M 17,4 16,8 H 14 L 15,4 Z"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "1",
        height: "11",
        x: "6",
        y: "11"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "1",
        height: "11",
        x: "13.999999",
        y: "11"
    }), /*#__PURE__*/ React.createElement("rect", {
        width: "1",
        height: "11",
        x: "10",
        y: "11"
    })));
};
var _default = (0, _easyWithStyle.default)(ClosedRubbishBinSVG)(_templateObject(), _common.commonColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvcnViYmlzaEJpbi9jbG9zZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGNvbW1vbkNvbG91ciB9IGZyb20gXCIuLi8uLi9zY2hlbWUvY29tbW9uXCI7XG5cbmNvbnN0IENsb3NlZFJ1YmJpc2hCaW5TVkcgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjI1bW1cIiBoZWlnaHQ9XCIyNW1tXCIgdmlld0JveD1cIjAgMCAyNSAyNVwiIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjbG9zZWQtcnViYmlzaC1iaW5gfT5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjJcIiB4PVwiNFwiIHk9XCIyM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEzXCIgeD1cIjJcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIHg9XCIxN1wiIHk9XCIxMFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDIsMjMgNCwyNSB2IC0yIHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDE3LDIzIHYgMiBsIDIsLTIgelwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMjFcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiOFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiOVwiIGhlaWdodD1cIjJcIiB4PVwiNlwiIHk9XCI0XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gNCw0IDUsOCBjIDAsMCAyLDAgMiwwIEwgNiw0IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSAxNyw0IDE2LDggSCAxNCBMIDE1LDQgWlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjExXCIgeD1cIjZcIiB5PVwiMTFcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxMVwiIHg9XCIxMy45OTk5OTlcIiB5PVwiMTFcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxMVwiIHg9XCIxMFwiIHk9XCIxMVwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDbG9zZWRSdWJiaXNoQmluU1ZHKWBcblxuICBmaWxsOiAke2NvbW1vbkNvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJDbG9zZWRSdWJiaXNoQmluU1ZHIiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImciLCJzdHJva2UiLCJyZWN0IiwieCIsInkiLCJwYXRoIiwiZCIsIndpdGhTdHlsZSIsImNvbW1vbkNvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQStCYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBakNvQixpQkFBaUI7c0JBRVYscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNQSxtQkFBbUIsR0FBRyxTQUFDQyxVQUFVLEVBQUs7SUFDMUMsSUFBTSxBQUFFQyxTQUFTLEdBQUtELFVBQVUsQ0FBeEJDLFNBQVMsQUFBZSxBQUFDO0lBRWpDLHFCQUVFLG9CQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBQyxNQUFNO1FBQUNDLE1BQU0sRUFBQyxNQUFNO1FBQUNDLE9BQU8sRUFBQyxXQUFXO1FBQUNKLFNBQVMsRUFBRSxBQUFDLEVBQUEsQ0FBWSxNQUFtQixDQUE3QkEsU0FBUyxFQUFDLHFCQUFtQixDQUFDO3FCQUM5RixvQkFBQ0ssR0FBQztRQUFDQyxNQUFNLEVBQUMsTUFBTTtxQkFDZCxvQkFBQ0MsTUFBSTtRQUFDTCxLQUFLLEVBQUMsSUFBSTtRQUFDQyxNQUFNLEVBQUMsR0FBRztRQUFDSyxDQUFDLEVBQUMsR0FBRztRQUFDQyxDQUFDLEVBQUMsSUFBSTtNQUFHLGdCQUMzQyxvQkFBQ0YsTUFBSTtRQUFDTCxLQUFLLEVBQUMsR0FBRztRQUFDQyxNQUFNLEVBQUMsSUFBSTtRQUFDSyxDQUFDLEVBQUMsR0FBRztRQUFDQyxDQUFDLEVBQUMsSUFBSTtNQUFHLGdCQUMzQyxvQkFBQ0YsTUFBSTtRQUFDTCxLQUFLLEVBQUMsR0FBRztRQUFDQyxNQUFNLEVBQUMsSUFBSTtRQUFDSyxDQUFDLEVBQUMsSUFBSTtRQUFDQyxDQUFDLEVBQUMsSUFBSTtNQUFHLGdCQUM1QyxvQkFBQ0MsTUFBSTtRQUFDQyxDQUFDLEVBQUMsb0JBQW9CO01BQUUsZ0JBQzlCLG9CQUFDRCxNQUFJO1FBQUNDLENBQUMsRUFBQyxzQkFBc0I7TUFBRyxnQkFDakMsb0JBQUNKLE1BQUk7UUFBQ0wsS0FBSyxFQUFDLElBQUk7UUFBQ0MsTUFBTSxFQUFDLEdBQUc7UUFBQ0ssQ0FBQyxFQUFDLEdBQUc7UUFBQ0MsQ0FBQyxFQUFDLEdBQUc7TUFBRyxnQkFDMUMsb0JBQUNGLE1BQUk7UUFBQ0wsS0FBSyxFQUFDLEdBQUc7UUFBQ0MsTUFBTSxFQUFDLEdBQUc7UUFBQ0ssQ0FBQyxFQUFDLEdBQUc7UUFBQ0MsQ0FBQyxFQUFDLEdBQUc7TUFBRyxnQkFDekMsb0JBQUNDLE1BQUk7UUFBQ0MsQ0FBQyxFQUFDLGlDQUFpQztNQUFHLGdCQUM1QyxvQkFBQ0QsTUFBSTtRQUFDQyxDQUFDLEVBQUMsMkJBQTJCO01BQUcsZ0JBQ3RDLG9CQUFDSixNQUFJO1FBQUNMLEtBQUssRUFBQyxHQUFHO1FBQUNDLE1BQU0sRUFBQyxJQUFJO1FBQUNLLENBQUMsRUFBQyxHQUFHO1FBQUNDLENBQUMsRUFBQyxJQUFJO01BQUcsZ0JBQzNDLG9CQUFDRixNQUFJO1FBQUNMLEtBQUssRUFBQyxHQUFHO1FBQUNDLE1BQU0sRUFBQyxJQUFJO1FBQUNLLENBQUMsRUFBQyxXQUFXO1FBQUNDLENBQUMsRUFBQyxJQUFJO01BQUcsZ0JBQ25ELG9CQUFDRixNQUFJO1FBQUNMLEtBQUssRUFBQyxHQUFHO1FBQUNDLE1BQU0sRUFBQyxJQUFJO1FBQUNLLENBQUMsRUFBQyxJQUFJO1FBQUNDLENBQUMsRUFBQyxJQUFJO01BQUcsQ0FDMUMsQ0FDQSxDQUVOO0FBQ0osQ0FBQyxBQUFDO0lBRUYsUUFJRSxHQUphRyxJQUFBQSxjQUFTLFFBQUEsRUFBQ2QsbUJBQW1CLENBQUMsb0JBRW5DZSxPQUFZLGFBQUEifQ==