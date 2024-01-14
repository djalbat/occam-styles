"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HideReleasesToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var HideReleasesToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(HideReleasesToolbarSVG, ToolbarSVG);
    var _super = _create_super(HideReleasesToolbarSVG);
    function HideReleasesToolbarSVG() {
        _class_call_check(this, HideReleasesToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(HideReleasesToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(6, 4) rotate(45)"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "8",
                    height: "2",
                    x: "-3",
                    y: "0"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "8",
                    x: "0",
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
        }
    ]);
    return HideReleasesToolbarSVG;
}(_toolbar.default);
_define_property(HideReleasesToolbarSVG, "defaultProperties", {
    className: "hide-releases"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9oaWRlUmVsZWFzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaWRlUmVsZWFzZXNUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2LCA0KSByb3RhdGUoNDUpXCI+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMlwiIHg9XCItM1wiIHk9XCIwXCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI4XCIgeD1cIjBcIiB5PVwiLTNcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzLCA3KVwiPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiMTZcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMTRcIiB5PVwiMTNcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMTJcIiB5PVwiNlwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiM1wiIHg9XCIxOFwiIHk9XCI2XCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI3XCIgeD1cIjBcIiB5PVwiOVwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjJcIiB4PVwiMFwiIHk9XCI3XCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIzXCIgeD1cIjBcIiB5PVwiNFwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIm0gNyw0IDMsMyBIIDcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIm0gMTUuOTY2MDQ4LDEuMDAwMDAwNSBhIDMuMTExMTEwMywzLjQ5OTk5OTUgMCAwIDAgLTMuMDc3MTU5LDMuMDAwMzMzNyBoIDEuMzU3ODI2IGEgMS43Nzc3Nzc0LDEuOTk5OTk5NiAwIDAgMSAxLjcxOTMzMywtMS41MDAxNjY5IDEuNzc3Nzc3NCwxLjk5OTk5OTYgMCAwIDEgMS43MTg4NzIsMS41MDAxNjY5IGggMS4zNjAxMjQgQSAzLjExMTExMDMsMy40OTk5OTk1IDAgMCAwIDE1Ljk2NjA0OCwxLjAwMDAwMDUgWlwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI3Ljk5OTk5OTVcIiBoZWlnaHQ9XCIxLjk5OTk5OTVcIiB4PVwiMTIuMDAwMDAxXCIgeT1cIjMuOTk5OTk5OFwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI3Ljk5OTk5OTVcIiBoZWlnaHQ9XCIxLjk5OTk5OTVcIiB4PVwiMTIuMDAwMDAxXCIgeT1cIjkuMDAwMDAxXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaGlkZS1yZWxlYXNlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSGlkZVJlbGVhc2VzVG9vbGJhclNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwidHJhbnNmb3JtIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwYXRoIiwiZCIsIlRvb2xiYXJTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7OERBRkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQTtvQkFBRUMsV0FBVTtpQ0FDWCxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTttQ0FFckMsb0JBQUNOO29CQUFFQyxXQUFVO2lDQUNYLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNDO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ047b0JBQUtDLE9BQU07b0JBQVlDLFFBQU87b0JBQVlDLEdBQUU7b0JBQVlDLEdBQUU7a0NBQzNELG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBWUMsUUFBTztvQkFBWUMsR0FBRTtvQkFBWUMsR0FBRTs7WUFLbkU7OztXQXpCbUJSO0VBQStCVyxnQkFBVTtBQTJCNUQsaUJBM0JtQlgsd0JBMkJaWSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9