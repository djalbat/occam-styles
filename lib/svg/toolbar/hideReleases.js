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
var _common = require("../../scheme/common");
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
                    fill: "".concat(_common.hideReleasesCrossFill),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9oaWRlUmVsZWFzZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBoaWRlUmVsZWFzZXNDcm9zc0ZpbGwgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaWRlUmVsZWFzZXNUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxnIGZpbGw9e2Ake2hpZGVSZWxlYXNlc0Nyb3NzRmlsbH1gfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNiwgNCkgcm90YXRlKDQ1KVwiPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiOFwiIGhlaWdodD1cIjJcIiB4PVwiLTNcIiB5PVwiMFwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiOFwiIHg9XCIwXCIgeT1cIi0zXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMywgNylcIj5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjE2XCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIzXCIgeD1cIjE0XCIgeT1cIjEzXCIgLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIzXCIgeD1cIjEyXCIgeT1cIjZcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMThcIiB5PVwiNlwiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiN1wiIHg9XCIwXCIgeT1cIjlcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiN1wiIC8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiM1wiIHg9XCIwXCIgeT1cIjRcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtIDcsNCAzLDMgSCA3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJtIDE1Ljk2NjA0OCwxLjAwMDAwMDUgYSAzLjExMTExMDMsMy40OTk5OTk1IDAgMCAwIC0zLjA3NzE1OSwzLjAwMDMzMzcgaCAxLjM1NzgyNiBhIDEuNzc3Nzc3NCwxLjk5OTk5OTYgMCAwIDEgMS43MTkzMzMsLTEuNTAwMTY2OSAxLjc3Nzc3NzQsMS45OTk5OTk2IDAgMCAxIDEuNzE4ODcyLDEuNTAwMTY2OSBoIDEuMzYwMTI0IEEgMy4xMTExMTAzLDMuNDk5OTk5NSAwIDAgMCAxNS45NjYwNDgsMS4wMDAwMDA1IFpcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCIzLjk5OTk5OThcIiAvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCI5LjAwMDAwMVwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhpZGUtcmVsZWFzZXNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkhpZGVSZWxlYXNlc1Rvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsImZpbGwiLCJoaWRlUmVsZWFzZXNDcm9zc0ZpbGwiLCJ0cmFuc2Zvcm0iLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs4REFKRTtzQkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQTtvQkFBRUMsTUFBTSxBQUFDLEdBQXdCLE9BQXRCQyw2QkFBcUI7b0JBQUlDLFdBQVU7aUNBQzdDLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO21DQUVyQyxvQkFBQ1I7b0JBQUVHLFdBQVU7aUNBQ1gsb0JBQUNDO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDTjtvQkFBS0MsT0FBTTtvQkFBWUMsUUFBTztvQkFBWUMsR0FBRTtvQkFBWUMsR0FBRTtrQ0FDM0Qsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFZQyxRQUFPO29CQUFZQyxHQUFFO29CQUFZQyxHQUFFOztZQUtuRTs7O1dBekJtQlY7RUFBK0JhLGdCQUFVO0FBMkI1RCxpQkEzQm1CYix3QkEyQlpjLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=