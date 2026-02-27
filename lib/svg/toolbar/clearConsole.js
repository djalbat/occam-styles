"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClearConsoleToolbarSVG;
    }
});
const _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
const _common = require("../../scheme/common");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ClearConsoleToolbarSVG extends _toolbar.default {
    childElements() {
        return /*#__PURE__*/ React.createElement("g", {
            fill: `${_common.clearConsoleFill}`,
            transform: "translate(0, 0.25)"
        }, /*#__PURE__*/ React.createElement("path", {
            d: "m 19.217262,5.7822765 a 9.4998945,9.4998942 0 0 0 -13.4349871,4.636e-4 9.4998945,9.4998942 0 0 0 5e-7,13.4345199 9.4998945,9.4998942 0 0 0 13.4349866,4.64e-4 9.4998945,9.4998942 0 0 0 0,-13.4354475 z m -0.977529,2.7696608 a 6.9665893,6.9665892 0 0 1 -0.813681,8.8745777 6.9665893,6.9665892 0 0 1 -8.8727273,0.81183 z M 16.446674,6.7616556 6.7616542,16.446675 A 6.9665893,6.9665892 0 0 1 7.5734829,7.5739474 6.9665893,6.9665892 0 0 1 16.446674,6.7616556 Z"
        }));
    }
    static defaultProperties = {
        viewBox: "0 0 25 25",
        className: "clear-console"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9jbGVhckNvbnNvbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBjbGVhckNvbnNvbGVGaWxsIH0gZnJvbSBcIi4uLy4uL3NjaGVtZS9jb21tb25cIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhckNvbnNvbGVUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgZmlsbD17YCR7Y2xlYXJDb25zb2xlRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwgMC4yNSlcIj5cbiAgICAgICAgPHBhdGggZD1cIm0gMTkuMjE3MjYyLDUuNzgyMjc2NSBhIDkuNDk5ODk0NSw5LjQ5OTg5NDIgMCAwIDAgLTEzLjQzNDk4NzEsNC42MzZlLTQgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCA1ZS03LDEzLjQzNDUxOTkgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCAxMy40MzQ5ODY2LDQuNjRlLTQgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCAwLC0xMy40MzU0NDc1IHogbSAtMC45Nzc1MjksMi43Njk2NjA4IGEgNi45NjY1ODkzLDYuOTY2NTg5MiAwIDAgMSAtMC44MTM2ODEsOC44NzQ1Nzc3IDYuOTY2NTg5Myw2Ljk2NjU4OTIgMCAwIDEgLTguODcyNzI3MywwLjgxMTgzIHogTSAxNi40NDY2NzQsNi43NjE2NTU2IDYuNzYxNjU0MiwxNi40NDY2NzUgQSA2Ljk2NjU4OTMsNi45NjY1ODkyIDAgMCAxIDcuNTczNDgyOSw3LjU3Mzk0NzQgNi45NjY1ODkzLDYuOTY2NTg5MiAwIDAgMSAxNi40NDY2NzQsNi43NjE2NTU2IFpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNSAyNVwiLFxuICAgIGNsYXNzTmFtZTogXCJjbGVhci1jb25zb2xlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDbGVhckNvbnNvbGVUb29sYmFyU1ZHIiwiVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwiZmlsbCIsImNsZWFyQ29uc29sZUZpbGwiLCJ0cmFuc2Zvcm0iLCJwYXRoIiwiZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztnRUFKRTt3QkFFVTs7Ozs7O0FBRWxCLE1BQU1BLCtCQUErQkMsZ0JBQVU7SUFDNURDLGdCQUFnQjtRQUNkLHFCQUVFLG9CQUFDQztZQUFFQyxNQUFNLEdBQUdDLHdCQUFnQixFQUFFO1lBQUVDLFdBQVU7eUJBQ3hDLG9CQUFDQztZQUFLQyxHQUFFOztJQUlkO0lBRUEsT0FBT0Msb0JBQW9CO1FBQ3pCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==